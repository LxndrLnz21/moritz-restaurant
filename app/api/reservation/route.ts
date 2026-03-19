import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

type ReservationData = {
  name?: string;
  email?: string;
  phone?: string;
  guests?: string;
  date?: string;
  time?: string;
  message?: string;
  privacy?: boolean | string;
  website?: string;
  formStartedAt?: string;
};

const ALLOWED_TIMES = ["17:30", "19:30"];
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 Minuten
const RATE_LIMIT_MAX_REQUESTS = 5; // max. 5 Requests pro IP im Zeitfenster
const MIN_FORM_FILL_MS = 3000; // Formular muss mindestens 3 Sekunden offen gewesen sein

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const globalForRateLimit = globalThis as typeof globalThis & {
  reservationRateLimit?: Map<string, RateLimitEntry>;
};

const rateLimitStore =
  globalForRateLimit.reservationRateLimit ?? new Map<string, RateLimitEntry>();

globalForRateLimit.reservationRateLimit = rateLimitStore;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  if (!phone) return true;
  return /^\+?[0-9]{6,15}$/.test(phone);
}

function isTodayOrFuture(dateString: string) {
  const today = new Date();
  const todayOnly = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate()
  );

  const inputDate = new Date(dateString);
  return !Number.isNaN(inputDate.getTime()) && inputDate >= todayOnly;
}

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  if (!forwardedFor) return "unknown";
  return forwardedFor.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const existing = rateLimitStore.get(ip);

  if (!existing || now > existing.resetAt) {
    rateLimitStore.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  if (existing.count >= RATE_LIMIT_MAX_REQUESTS) {
    return true;
  }

  existing.count += 1;
  rateLimitStore.set(ip, existing);
  return false;
}

export async function POST(request: NextRequest) {
  try {
    const body: ReservationData = await request.json();
    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Zu viele Anfragen. Bitte später erneut versuchen." },
        { status: 429 }
      );
    }

    const name = body.name?.toString().trim() || "";
    const email = body.email?.toString().trim() || "";
    const phone = body.phone?.toString().trim() || "";
    const guests = body.guests?.toString().trim() || "";
    const date = body.date?.toString().trim() || "";
    const time = body.time?.toString().trim() || "";
    const message = body.message?.toString().trim() || "";
    const privacy = body.privacy;
    const website = body.website?.toString().trim() || "";
    const formStartedAt = Number(body.formStartedAt || "0");

    // Honeypot
    if (website) {
      return NextResponse.json(
        { message: "Anfrage konnte nicht verarbeitet werden." },
        { status: 400 }
      );
    }

    // Zeitfalle
    if (!formStartedAt || Number.isNaN(formStartedAt)) {
      return NextResponse.json(
        { message: "Ungültige Anfrage." },
        { status: 400 }
      );
    }

    const fillDuration = Date.now() - formStartedAt;
    if (fillDuration < MIN_FORM_FILL_MS) {
      return NextResponse.json(
        { message: "Anfrage wurde zu schnell gesendet." },
        { status: 400 }
      );
    }

    if (!name || !email || !guests || !date || !time) {
      return NextResponse.json(
        { message: "Bitte alle Pflichtfelder ausfüllen." },
        { status: 400 }
      );
    }

    if (privacy !== true && privacy !== "true" && privacy !== "on") {
      return NextResponse.json(
        { message: "Bitte bestätigen Sie die Datenschutzhinweise." },
        { status: 400 }
      );
    }

    if (name.length > 100) {
      return NextResponse.json(
        { message: "Der Name ist zu lang." },
        { status: 400 }
      );
    }

    if (email.length > 200) {
      return NextResponse.json(
        { message: "Die E-Mail-Adresse ist zu lang." },
        { status: 400 }
      );
    }

    if (phone.length > 20) {
      return NextResponse.json(
        { message: "Die Telefonnummer ist zu lang." },
        { status: 400 }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        { message: "Die Nachricht ist zu lang." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { message: "Ungültige E-Mail-Adresse." },
        { status: 400 }
      );
    }

    if (!isValidPhone(phone)) {
      return NextResponse.json(
        { message: "Ungültige Telefonnummer." },
        { status: 400 }
      );
    }

    const guestsNumber = Number(guests);
    if (!Number.isInteger(guestsNumber) || guestsNumber < 1 || guestsNumber > 8) {
      return NextResponse.json(
        { message: "Ungültige Personenanzahl." },
        { status: 400 }
      );
    }

    if (!isTodayOrFuture(date)) {
      return NextResponse.json(
        { message: "Das Datum darf nicht in der Vergangenheit liegen." },
        { status: 400 }
      );
    }

    if (!ALLOWED_TIMES.includes(time)) {
      return NextResponse.json(
        {
          message:
            "Reservierungen sind aktuell nur um 17:30 oder 19:30 Uhr möglich.",
        },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const reservationToEmail = process.env.RESERVATION_TO_EMAIL;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY ist nicht gesetzt.");
      return NextResponse.json(
        { message: "Fehler beim Verarbeiten der Anfrage." },
        { status: 500 }
      );
    }

    if (!reservationToEmail) {
      console.error("RESERVATION_TO_EMAIL ist nicht gesetzt.");
      return NextResponse.json(
        { message: "Fehler beim Verarbeiten der Anfrage." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeDate = escapeHtml(date);
    const safeTime = escapeHtml(time);
    const safeMessage = escapeHtml(message);

    console.log("Reservation mail config:", {
      hasResendApiKey: Boolean(resendApiKey),
      reservationToEmail,
      from: "Moritz Reservierung <onboarding@resend.dev>",
      replyTo: email,
      guestsNumber,
      date,
      time,
      ip,
    });

    const { error } = await resend.emails.send({
      from: "Moritz Reservierung <onboarding@resend.dev>",
      to: reservationToEmail,
      replyTo: email,
      subject: `Neue Reservierungsanfrage von ${safeName}`,
      html: `
        <h2>Neue Reservierungsanfrage</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>E-Mail:</strong> ${safeEmail}</p>
        <p><strong>Telefon:</strong> ${safePhone || "-"}</p>
        <p><strong>Personenanzahl:</strong> ${guestsNumber}</p>
        <p><strong>Datum:</strong> ${safeDate}</p>
        <p><strong>Uhrzeit:</strong> ${safeTime}</p>
        <p><strong>Nachricht:</strong> ${safeMessage || "-"}</p>
        <p><strong>Datenschutzhinweis bestätigt:</strong> Ja</p>
      `,
      text: `Neue Reservierungsanfrage

Name: ${name}
E-Mail: ${email}
Telefon: ${phone || "-"}
Personenanzahl: ${guestsNumber}
Datum: ${date}
Uhrzeit: ${time}
Nachricht: ${message || "-"}
Datenschutzhinweis bestätigt: Ja`,
    });

    if (error) {
      console.error("Resend-Fehler:", JSON.stringify(error, null, 2));

      return NextResponse.json(
        { message: "E-Mail konnte nicht versendet werden." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Reservierungsanfrage erfolgreich versendet." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fehler in /api/reservation:", error);

    return NextResponse.json(
      { message: "Fehler beim Verarbeiten der Anfrage." },
      { status: 500 }
    );
  }
}
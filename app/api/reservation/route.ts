import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type ReservationData = {
  name?: string;
  email?: string;
  phone?: string;
  guests?: string;
  date?: string;
  time?: string;
  message?: string;
  privacy?: boolean | string;
};

const ALLOWED_TIMES = ["17:30", "19:30"];

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

export async function POST(request: Request) {
  try {
    const body: ReservationData = await request.json();

    const name = body.name?.toString().trim() || "";
    const email = body.email?.toString().trim() || "";
    const phone = body.phone?.toString().trim() || "";
    const guests = body.guests?.toString().trim() || "";
    const date = body.date?.toString().trim() || "";
    const time = body.time?.toString().trim() || "";
    const message = body.message?.toString().trim() || "";
    const privacy = body.privacy;

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

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { message: "RESEND_API_KEY ist nicht gesetzt." },
        { status: 500 }
      );
    }

    if (!process.env.RESERVATION_TO_EMAIL) {
      return NextResponse.json(
        { message: "RESERVATION_TO_EMAIL ist nicht gesetzt." },
        { status: 500 }
      );
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeDate = escapeHtml(date);
    const safeTime = escapeHtml(time);
    const safeMessage = escapeHtml(message);

    const { error } = await resend.emails.send({
      from: "Moritz Reservierung <onboarding@resend.dev>",
      to: process.env.RESERVATION_TO_EMAIL,
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
      console.error("Resend-Fehler:", error);

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
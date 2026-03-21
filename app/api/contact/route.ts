import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

type ContactData = {
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  privacy?: boolean | string;
  website?: string;
  formStartedAt?: string;
};

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const MIN_FORM_FILL_MS = 3000;

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 200;
const MAX_PHONE_LENGTH = 20;
const MAX_MESSAGE_LENGTH = 2000;
const MIN_NAME_LENGTH = 2;
const MIN_MESSAGE_LENGTH = 10;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const globalForRateLimit = globalThis as typeof globalThis & {
  contactRateLimit?: Map<string, RateLimitEntry>;
};

const rateLimitStore =
  globalForRateLimit.contactRateLimit ?? new Map<string, RateLimitEntry>();

globalForRateLimit.contactRateLimit = rateLimitStore;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function stripControlChars(value: string) {
  return value.replace(/[\u0000-\u001F\u007F]/g, "");
}

function normalizeInput(value: unknown) {
  if (typeof value !== "string") return "";
  return stripControlChars(value).trim();
}

function normalizeMultilineInput(value: unknown) {
  if (typeof value !== "string") return "";
  return value
    .replace(/\r\n/g, "\n")
    .replace(/\r/g, "\n")
    .split("\n")
    .map((line) => stripControlChars(line).trimEnd())
    .join("\n")
    .trim();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  if (!phone) return true;
  return /^\+?[0-9\s\-()/]{6,20}$/.test(phone);
}

function getClientIp(request: NextRequest) {
  const xForwardedFor = request.headers.get("x-forwarded-for");
  if (xForwardedFor) {
    const firstIp = xForwardedFor.split(",")[0]?.trim();
    if (firstIp) return firstIp;
  }

  const xRealIp = request.headers.get("x-real-ip");
  if (xRealIp) return xRealIp.trim();

  return "unknown";
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
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return NextResponse.json(
        { message: "Ungültiger Anfrageinhalt." },
        { status: 415 }
      );
    }

    const body: ContactData = await request.json();
    const ip = getClientIp(request);

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Zu viele Anfragen. Bitte später erneut versuchen." },
        { status: 429 }
      );
    }

    const name = normalizeInput(body.name);
    const email = normalizeInput(body.email).toLowerCase();
    const phone = normalizeInput(body.phone);
    const message = normalizeMultilineInput(body.message);
    const privacy = body.privacy;
    const website = normalizeInput(body.website);
    const formStartedAt = Number(body.formStartedAt || "0");

    if (website) {
      return NextResponse.json(
        { message: "Anfrage konnte nicht verarbeitet werden." },
        { status: 400 }
      );
    }

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

    if (!name || !email || !message) {
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

    if (name.length < MIN_NAME_LENGTH) {
      return NextResponse.json(
        { message: "Der Name ist zu kurz." },
        { status: 400 }
      );
    }

    if (message.length < MIN_MESSAGE_LENGTH) {
      return NextResponse.json(
        { message: "Die Nachricht ist zu kurz." },
        { status: 400 }
      );
    }

    if (name.length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        { message: "Der Name ist zu lang." },
        { status: 400 }
      );
    }

    if (email.length > MAX_EMAIL_LENGTH) {
      return NextResponse.json(
        { message: "Die E-Mail-Adresse ist zu lang." },
        { status: 400 }
      );
    }

    if (phone.length > MAX_PHONE_LENGTH) {
      return NextResponse.json(
        { message: "Die Telefonnummer ist zu lang." },
        { status: 400 }
      );
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
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

    const resendApiKey = process.env.RESEND_API_KEY;
    const contactToEmail =
      process.env.CONTACT_TO_EMAIL || process.env.RESERVATION_TO_EMAIL;

    if (!resendApiKey) {
      console.error("RESEND_API_KEY ist nicht gesetzt.");
      return NextResponse.json(
        { message: "Fehler beim Verarbeiten der Anfrage." },
        { status: 500 }
      );
    }

    if (!contactToEmail) {
      console.error(
        "Weder CONTACT_TO_EMAIL noch RESERVATION_TO_EMAIL ist gesetzt."
      );
      return NextResponse.json(
        { message: "Fehler beim Verarbeiten der Anfrage." },
        { status: 500 }
      );
    }

    const resend = new Resend(resendApiKey);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safeMessage = escapeHtml(message);
    const subjectName = name.replace(/[\r\n]+/g, " ").slice(0, 80);

    console.log("Contact mail config:", {
      hasResendApiKey: Boolean(resendApiKey),
      hasContactToEmail: Boolean(contactToEmail),
      from: "Moritz Kontaktformular <onboarding@resend.dev>",
      hasReplyTo: Boolean(email),
      ip,
    });

    const { error } = await resend.emails.send({
      from: "Moritz Kontaktformular <onboarding@resend.dev>",
      to: contactToEmail,
      replyTo: email,
      subject: `Neue Anfrage von ${subjectName}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>E-Mail:</strong> ${safeEmail}</p>
        <p><strong>Telefon:</strong> ${safePhone || "-"}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${safeMessage.replace(/\n/g, "<br />")}</p>
        <p><strong>Datenschutzhinweis bestätigt:</strong> Ja</p>
      `,
      text: `Neue Kontaktanfrage

Name: ${name}
E-Mail: ${email}
Telefon: ${phone || "-"}
Nachricht:
${message}

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
      { message: "Anfrage erfolgreich versendet." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Fehler in /api/contact:", error);

    return NextResponse.json(
      { message: "Fehler beim Verarbeiten der Anfrage." },
      { status: 500 }
    );
  }
}
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Info,
  UtensilsCrossed,
  Instagram,
  Wallet,
  CreditCard,
} from "lucide-react";

type FormStatus = "idle" | "loading" | "success" | "error";

const ADDRESS = "Margaretenstraße 18, 18609 Binz";

export default function ContactPageClient() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formStartedAt, setFormStartedAt] = useState("");
  const successRef = useRef<HTMLDivElement | null>(null);
  const errorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setFormStartedAt(String(Date.now()));
  }, []);

  useEffect(() => {
    if (status === "success") {
      successRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }

    if (status === "error") {
      errorRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [status]);

  const handleOpenMaps = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    const encoded = encodeURIComponent(ADDRESS);
    const targetUrl = /iPhone|iPad|iPod/i.test(navigator.userAgent)
      ? `https://maps.apple.com/?q=${encoded}`
      : `https://www.google.com/maps/search/?api=1&query=${encoded}`;

    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (status === "loading") {
      return;
    }

    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
      privacy: formData.get("privacy"),
      website: formData.get("website"),
      formStartedAt: formData.get("formStartedAt"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      let result: { message?: string } | null = null;

      try {
        result = await response.json();
      } catch {
        result = null;
      }

      if (!response.ok) {
        console.error("API-Fehler:", result);
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
      setFormStartedAt(String(Date.now()));
    } catch (error) {
      console.error("Frontend-Fehler:", error);
      setStatus("error");
    }
  }

  const encodedAddress = encodeURIComponent(ADDRESS);
  const mapsFallbackUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <main className="min-h-screen bg-[#F3EEE7] py-16 text-[#1A1A1A]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 font-[var(--font-montserrat)] text-xs uppercase tracking-[0.3em] text-[#7E8F7B]">
            Kontakt
          </p>

          <h1 className="mb-6 font-[var(--font-playfair)] text-4xl md:text-5xl">
            Wir freuen uns auf Ihre Nachricht.
          </h1>

          <p className="font-[var(--font-montserrat)] text-base leading-8 text-[#4D4D4D] md:text-lg">
            Hier finden Sie alle wichtigen Informationen rund um Ihren Besuch im
            Moritz. Für besondere Wünsche, Gruppenanfragen oder individuelle
            Anliegen nutzen Sie bitte das Anfrageformular.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-3xl border border-black/10 bg-white/60 p-8 shadow-sm">
            <div className="mb-8">
              <h2 className="mb-4 font-[var(--font-playfair)] text-2xl">
                Anfrage senden
              </h2>
              <p className="font-[var(--font-montserrat)] text-base leading-7 text-[#4D4D4D]">
                Dieses Formular ist für besondere Wünsche, individuelle Anfragen
                sowie Gruppenanfragen gedacht.
                <br />
                Für normale Tischreservierungen nutzen Sie bitte unsere{" "}
                <Link
                  href="/reservation"
                  className="underline underline-offset-4 transition hover:opacity-70"
                >
                  Reservierungsseite
                </Link>
                .
              </p>
            </div>

            {status === "success" ? (
              <div
                ref={successRef}
                aria-live="polite"
                className="animate-in fade-in slide-in-from-bottom-2 rounded-3xl border border-green-200 bg-green-50 p-8 text-center duration-300"
              >
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <svg
                    className="h-7 w-7 text-green-700"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>

                <h3 className="mb-4 font-[var(--font-playfair)] text-3xl text-[#1A1A1A]">
                  Nachricht erfolgreich gesendet
                </h3>

                <p className="mx-auto max-w-2xl font-[var(--font-montserrat)] text-base leading-8 text-[#4D4D4D]">
                  Vielen Dank für Ihre Nachricht.
                  <br />
                  <br />
                  Wir melden uns schnellstmöglich per E-Mail oder telefonisch
                  bei Ihnen zurück.
                </p>

                <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="rounded-full bg-[#8E9A87] px-6 py-3 text-center font-[var(--font-montserrat)] text-sm font-medium text-white transition hover:opacity-90"
                  >
                    Neue Anfrage senden
                  </button>

                  <Link
                    href="/reservation"
                    className="rounded-full border border-black/15 px-6 py-3 text-center font-[var(--font-montserrat)] text-sm font-medium transition hover:bg-black/5"
                  >
                    Zur Reservierungsseite
                  </Link>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="animate-in fade-in slide-in-from-bottom-2 space-y-8 duration-300"
              >
                <div className="hidden" aria-hidden="true">
                  <label htmlFor="website">Website</label>
                  <input
                    id="website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <input type="hidden" name="formStartedAt" value={formStartedAt} />

                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block font-[var(--font-montserrat)] text-sm font-medium text-[#1A1A1A]"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      autoComplete="name"
                      placeholder="Ihr Name"
                      className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 font-[var(--font-montserrat)] text-[#1A1A1A] outline-none transition focus:border-[#8E9A87] focus:ring-2 focus:ring-[#8E9A87]/20"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block font-[var(--font-montserrat)] text-sm font-medium text-[#1A1A1A]"
                    >
                      E-Mail <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={200}
                      autoComplete="email"
                      placeholder="ihre@email.de"
                      className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 font-[var(--font-montserrat)] text-[#1A1A1A] outline-none transition focus:border-[#8E9A87] focus:ring-2 focus:ring-[#8E9A87]/20"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block font-[var(--font-montserrat)] text-sm font-medium text-[#1A1A1A]"
                  >
                    Telefon <span className="text-[#7E8F7B]">(optional)</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    maxLength={20}
                    pattern="^\+?[0-9\s\-()/]{6,20}$"
                    title="Bitte eine gültige Telefonnummer eingeben, z. B. +49 151 29722874"
                    placeholder="+49 151 29722874"
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 font-[var(--font-montserrat)] text-[#1A1A1A] outline-none transition focus:border-[#8E9A87] focus:ring-2 focus:ring-[#8E9A87]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block font-[var(--font-montserrat)] text-sm font-medium text-[#1A1A1A]"
                  >
                    Nachricht <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    minLength={10}
                    maxLength={2000}
                    placeholder="Bitte beschreiben Sie Ihr Anliegen, besondere Wünsche oder eine Gruppenanfrage."
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 font-[var(--font-montserrat)] text-[#1A1A1A] outline-none transition focus:border-[#8E9A87] focus:ring-2 focus:ring-[#8E9A87]/20"
                  />
                </div>

                <div className="flex flex-col gap-4 border-t border-black/10 pt-6">
                  <div className="rounded-2xl border border-black/10 bg-[#F8F5EF] p-4">
                    <label className="flex items-start gap-3 font-[var(--font-montserrat)] text-sm leading-6 text-[#4D4D4D]">
                      <input
                        type="checkbox"
                        name="privacy"
                        required
                        className="mt-1 h-4 w-4 rounded border-black/20 accent-[#8E9A87]"
                      />
                      <span className="text-red-500">*</span>
                      <span>
                        Ich habe die{" "}
                        <Link
                          href="/datenschutz"
                          className="underline underline-offset-4"
                        >
                          Datenschutzerklärung
                        </Link>{" "}
                        gelesen und stimme der Verarbeitung meiner Daten zur
                        Bearbeitung meiner Anfrage zu.
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex w-full items-center justify-center gap-3 rounded-full bg-[#8E9A87] px-6 py-3 font-[var(--font-montserrat)] text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "loading" && (
                      <span
                        className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                        aria-hidden="true"
                      />
                    )}
                    {status === "loading"
                      ? "Nachricht wird gesendet..."
                      : "Anfrage senden"}
                  </button>

                  {status === "error" && (
                    <div
                      ref={errorRef}
                      aria-live="assertive"
                      className="animate-in fade-in slide-in-from-top-1 rounded-2xl border border-red-200 bg-red-50 p-4 duration-300"
                    >
                      <p className="font-[var(--font-montserrat)] text-sm leading-6 text-red-700">
                        Die Nachricht konnte nicht gesendet werden. Bitte
                        versuchen Sie es erneut oder kontaktieren Sie uns direkt
                        telefonisch.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            )}
          </section>

          <div className="space-y-8">
            <section className="rounded-3xl border border-black/10 bg-white/60 p-8">
              <h2 className="mb-8 font-[var(--font-playfair)] text-2xl">
                Informationen
              </h2>

              <div className="space-y-8 font-[var(--font-montserrat)] text-[#4D4D4D]">
                <div className="flex items-start gap-4">
                  <MapPin className="mt-1 h-5 w-5 text-[#7E8F7B]" aria-hidden="true" />
                  <div>
                    <p className="mb-1 text-sm uppercase tracking-[0.2em] text-[#7E8F7B]">
                      Adresse
                    </p>
                    <p className="text-base leading-7">
                      Margaretenstraße 18
                      <br />
                      18609 Binz
                    </p>
                    <a
                      href={mapsFallbackUrl}
                      onClick={handleOpenMaps}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Adresse in Karten öffnen"
                      className="mt-2 inline-block text-sm underline underline-offset-4 transition hover:opacity-70"
                    >
                      In Karten öffnen
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="mt-1 h-5 w-5 text-[#7E8F7B]" aria-hidden="true" />
                  <div>
                    <p className="mb-1 text-sm uppercase tracking-[0.2em] text-[#7E8F7B]">
                      Telefon
                    </p>
                    <a
                      href="tel:+4915129722874"
                      aria-label="Moritz. Restaurant telefonisch kontaktieren"
                      className="text-base transition hover:opacity-70"
                    >
                      +49 (0)151 29722874
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="mt-1 h-5 w-5 text-[#7E8F7B]" aria-hidden="true" />
                  <div>
                    <p className="mb-1 text-sm uppercase tracking-[0.2em] text-[#7E8F7B]">
                      E-Mail
                    </p>
                    <a
                      href="mailto:restaurant.moritz@icloud.com"
                      aria-label="E-Mail an Moritz. Restaurant senden"
                      className="text-base transition hover:opacity-70"
                    >
                      restaurant.moritz@icloud.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="mt-1 h-5 w-5 text-[#7E8F7B]" aria-hidden="true" />
                  <div>
                    <p className="mb-1 text-sm uppercase tracking-[0.2em] text-[#7E8F7B]">
                      Öffnungszeiten
                    </p>
                    <p className="text-base">Täglich ab 17:00 Uhr geöffnet</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                 <CreditCard className="mt-1 h-5 w-5 text-[#7E8F7B]" />
                 <div>
                    <p className="mb-1 text-sm uppercase tracking-[0.2em] text-[#7E8F7B]">
                    Zahlungsmittel
                    </p>
                    <p className="text-base leading-7">
                    Barzahlung, EC- und Kreditkarten akzeptiert.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className="rounded-3xl border border-black/10 bg-[#B7BDAF] p-8">
              <h2 className="mb-8 font-[var(--font-playfair)] text-2xl">
                Gut zu wissen
              </h2>

              <div className="space-y-8 font-[var(--font-montserrat)] text-[#3F463D]">
                <div className="flex items-start gap-4">
                  <UtensilsCrossed className="mt-1 h-5 w-5" aria-hidden="true" />
                  <div>
                    <p className="mb-1 text-sm uppercase tracking-[0.2em] text-[#5E665B]">
                      Reservierung
                    </p>
                    <p className="text-base leading-7">
                      Normale Tischreservierungen laufen über unsere
                      Reservierungsseite bzw. das externe Buchungssystem.
                    </p>
                  </div>
                </div>

              
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/reservation"
                  className="rounded-full bg-[#8E9A87] px-6 py-3 text-center font-[var(--font-montserrat)] text-sm font-medium text-white transition hover:opacity-90"
                >
                  Zur Reservierung
                </Link>

                <a
                  href="https://www.instagram.com/moritz.essenbeifreunden/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram-Profil von Moritz. in neuem Tab öffnen"
                  className="flex items-center justify-center gap-2 rounded-full border border-black/15 px-6 py-3 font-[var(--font-montserrat)] text-sm font-medium transition hover:bg-black/5"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                  <span>moritz.essenbeifreunden</span>
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
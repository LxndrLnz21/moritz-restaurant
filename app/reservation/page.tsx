"use client";

import { useState } from "react";
import Link from "next/link";

export default function ReservationPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const today = new Date().toISOString().split("T")[0];

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      guests: formData.get("guests"),
      date: formData.get("date"),
      time: formData.get("time"),
      message: formData.get("message"),
      privacy: formData.get("privacy"),
    };

    try {
      const response = await fetch("/api/reservation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        console.error("API-Fehler:", result);
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      console.error("Frontend-Fehler:", error);
      setStatus("error");
    }
  }

  return (
    <main className="min-h-screen px-6 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 font-[var(--font-montserrat)] text-xs uppercase tracking-[0.3em] text-[#7E8F7B]">
            Reservierung
          </p>

          <h1 className="mb-6 font-[var(--font-playfair)] text-4xl md:text-5xl">
            Tisch anfragen
          </h1>

          <p className="font-[var(--font-montserrat)] text-base leading-8 text-[#4D4D4D] md:text-lg">
            Sendet uns eure Reservierungsanfrage bequem online. Wir melden uns
            schnellstmöglich mit einer Rückmeldung zur Bestätigung.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr]">
          <section className="rounded-3xl border border-black/10 bg-white/60 p-6 shadow-sm md:p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block font-[var(--font-montserrat)] text-sm font-medium text-[#1A1A1A]">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Ihr Name"
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 font-[var(--font-montserrat)] text-[#1A1A1A] outline-none transition focus:border-[#8E9A87]"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-[var(--font-montserrat)] text-sm font-medium text-[#1A1A1A]">
                    E-Mail <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="ihre@email.de"
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 font-[var(--font-montserrat)] text-[#1A1A1A] outline-none transition focus:border-[#8E9A87]"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-[var(--font-montserrat)] text-sm font-medium text-[#1A1A1A]">
                    Telefon <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    defaultValue="+49"
                    inputMode="tel"
                    pattern="^\+?[0-9]{6,15}$"
                    title="Bitte gültige Telefonnummer eingeben, z. B. +491701234567"
                    required
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 font-[var(--font-montserrat)] text-[#1A1A1A] outline-none transition focus:border-[#8E9A87]"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-[var(--font-montserrat)] text-sm font-medium text-[#1A1A1A]">
                    Personenanzahl <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="guests"
                    type="number"
                    min="1"
                    max="8"
                    required
                    placeholder="max. 8"
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 font-[var(--font-montserrat)] text-[#1A1A1A] outline-none transition focus:border-[#8E9A87]"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-[var(--font-montserrat)] text-sm font-medium text-[#1A1A1A]">
                    Datum <span className="text-red-500">*</span>
                  </label>
                  <input
                    name="date"
                    type="date"
                    min={today}
                    required
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 font-[var(--font-montserrat)] text-[#1A1A1A] outline-none transition focus:border-[#8E9A87]"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-[var(--font-montserrat)] text-sm font-medium text-[#1A1A1A]">
                    Uhrzeit <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="time"
                    required
                    defaultValue=""
                    className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 font-[var(--font-montserrat)] text-[#1A1A1A] outline-none transition focus:border-[#8E9A87]"
                  >
                    <option value="" disabled>
                      Bitte Uhrzeit wählen
                    </option>
                    {["17:30", "19:30"].map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block font-[var(--font-montserrat)] text-sm font-medium text-[#1A1A1A]">
                  Nachricht / Wunsch
                </label>
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Zum Beispiel Kinderstuhl, Allergien oder besondere Wünsche"
                  className="w-full rounded-2xl border border-black/10 bg-white px-4 py-3 font-[var(--font-montserrat)] text-[#1A1A1A] outline-none transition focus:border-[#8E9A87]"
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
                        <span>
                            Ich habe die{" "}
                            <Link href="/datenschutz" className="underline underline-offset-4">
                                Datenschutzerklärung
                            </Link>{" "}
                            gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner
                            Reservierungsanfrage zu.
                        </span>
                    </label>
                </div>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full rounded-full bg-[#8E9A87] px-6 py-3 font-[var(--font-montserrat)] text-sm font-medium text-white transition hover:opacity-90 disabled:opacity-60"
                >
                  {status === "loading"
                    ? "Wird gesendet..."
                    : "Reservierungsanfrage senden"}
                </button>

                {status === "success" && (
                  <p className="font-[var(--font-montserrat)] text-sm text-green-700">
                    Anfrage erfolgreich gesendet. Wir melden uns schnellstmöglich
                    zurück.
                  </p>
                )}

                {status === "error" && (
                  <p className="font-[var(--font-montserrat)] text-sm text-red-600">
                    Beim Senden ist ein Fehler aufgetreten. Bitte versucht es
                    erneut oder kontaktiert uns direkt.
                  </p>
                )}
              </div>
            </form>
          </section>

          <aside className="rounded-3xl border border-black/10 bg-[#B7BDAF] p-8">
            <h2 className="mb-6 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Gut zu wissen
            </h2>

            <div className="space-y-6 font-[var(--font-montserrat)] text-[#3F463D]">
              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#5E665B]">
                  Öffnungszeiten
                </p>
                <p className="text-base leading-7">
                  Täglich ab 17:00 Uhr geöffnet
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#5E665B]">
                  Reservierung
                </p>
                <p className="text-base leading-7">
                  Eure Anfrage ist erst nach unserer Rückmeldung verbindlich
                  bestätigt.
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#5E665B]">
                  Personenzahl
                </p>
                <p className="text-base leading-7">
                  Online können derzeit Reservierungen für bis zu 8 Personen
                  angefragt werden.
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#5E665B]">
                  Direktkontakt
                </p>
                <div className="space-y-1 text-base leading-7">
                  <a href="tel:+4915129722874" className="block transition hover:opacity-70">
                    015129722874
                  </a>
                  <a
                    href="mailto:restaurant.moritz@icloud.com"
                    className="block transition hover:opacity-70"
                  >
                    restaurant.moritz@icloud.com
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-4">
              <Link
                href="/contact"
                className="rounded-full border border-black/15 px-6 py-3 text-center font-[var(--font-montserrat)] text-sm font-medium transition hover:bg-black/5"
              >
                Kontakt ansehen
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
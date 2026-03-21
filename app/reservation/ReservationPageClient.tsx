import Link from "next/link";

const LIGHTSPEED_RESERVATION_URL =
  "https://mylightspeed.app/reservation/e2ffe32b-9042-4d98-b333-e58e99a1ff25/reservation";

export default function ReservationPageClient() {
  return (
    <main className="min-h-screen py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 font-[var(--font-montserrat)] text-xs uppercase tracking-[0.3em] text-[#7E8F7B]">
            Reservierung
          </p>

          <h1 className="mb-6 font-[var(--font-playfair)] text-4xl md:text-5xl">
            Tisch reservieren
          </h1>

          <p className="font-[var(--font-montserrat)] text-base leading-8 text-[#4D4D4D] md:text-lg">
            Online-Reservierungen laufen über unser Buchungssystem.
            <br />
            Für besondere Wünsche oder individuelle Anfragen nutzen Sie bitte das
            Kontaktformular.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr]">
          <section className="rounded-3xl border border-black/10 bg-white/60 p-6 shadow-sm md:p-8">
            <div className="rounded-3xl border border-[#8E9A87]/20 bg-[#F8F5EF] p-8 md:p-10">
              <div className="mx-auto max-w-3xl text-center">
                <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#8E9A87]/15">
                  <svg
                    className="h-7 w-7 text-[#5E665B]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M3 10h18" />
                  </svg>
                </div>

                <h2 className="mb-4 font-[var(--font-playfair)] text-3xl text-[#1A1A1A] md:text-4xl">
                  Jetzt online reservieren
                </h2>

                <p className="mx-auto mb-8 max-w-2xl font-[var(--font-montserrat)] text-base leading-8 text-[#4D4D4D]">
                  Reservieren Sie Ihren Tisch bequem online über unser externes
                  Buchungssystem.
                  <br />
                  <br />
                  Für Gruppenanfragen, besondere Wünsche oder individuelle
                  Anliegen nutzen Sie bitte unser Kontaktformular.
                </p>

                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                  <a
                    href={LIGHTSPEED_RESERVATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Externe Online-Reservierung in neuem Tab öffnen"
                    className="inline-flex items-center justify-center rounded-full bg-[#8E9A87] px-6 py-3 text-center font-[var(--font-montserrat)] text-sm font-medium text-white transition hover:opacity-90"
                  >
                    Zur Online-Reservierung
                  </a>

                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full border border-black/15 px-6 py-3 text-center font-[var(--font-montserrat)] text-sm font-medium transition hover:bg-black/5"
                  >
                    Kontaktformular öffnen
                  </Link>
                </div>

                <p className="mt-6 font-[var(--font-montserrat)] text-sm leading-6 text-[#5E665B]">
                  Mit Klick auf „Zur Online-Reservierung“ verlassen Sie unsere
                  Website und werden zum externen Buchungssystem weitergeleitet.
                </p>
              </div>
            </div>
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
                <p className="text-base leading-7">Täglich ab 17:00 Uhr geöffnet</p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#5E665B]">
                  Online-Reservierung
                </p>
                <p className="text-base leading-7">
                  Tischreservierungen werden direkt über unser externes
                  Buchungssystem entgegengenommen.
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#5E665B]">
                  Besondere Anfragen
                </p>
                <p className="text-base leading-7">
                  Für Gruppen, individuelle Wünsche oder Sonderfälle nutzen Sie
                  bitte das Kontaktformular.
                </p>
              </div>

              <div>
                <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#5E665B]">
                  Direktkontakt
                </p>
                <div className="space-y-1 text-base leading-7">
                  <a
                    href="tel:+4915129722874"
                    aria-label="Moritz. Restaurant telefonisch kontaktieren"
                    className="block transition hover:opacity-70"
                  >
                    +49 (0) 151 29722874
                  </a>
                  <a
                    href="mailto:restaurant.moritz@icloud.com"
                    aria-label="E-Mail an Moritz. Restaurant senden"
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
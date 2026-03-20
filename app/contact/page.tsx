import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Info,
  UtensilsCrossed,
  Instagram,
} from "lucide-react";

export const metadata = {
  title: "Kontakt | Moritz. Restaurant",
  description:
    "Kontaktieren Sie das Moritz. Restaurant. Adresse, Telefonnummer und alle wichtigen Informationen auf einen Blick.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F3EEE7] py-16 text-[#1A1A1A]">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 font-[var(--font-montserrat)] text-xs uppercase tracking-[0.3em] text-[#7E8F7B]">
            Kontakt
          </p>

          <h1 className="mb-6 font-[var(--font-playfair)] text-4xl md:text-5xl">
            Wir freuen uns auf euren Besuch.
          </h1>

          <p className="font-[var(--font-montserrat)] text-base leading-8 text-[#4D4D4D] md:text-lg">
            Alle wichtigen Informationen für euren Besuch im Moritz. in Binz.
            Für Reservierungen nutzt bitte unsere Reservierungsseite oder
            kontaktiert uns direkt.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-10 md:grid-cols-2">
          {/* LEFT */}
          <section className="rounded-3xl border border-black/10 bg-white/60 p-8">
            <h2 className="mb-8 font-[var(--font-playfair)] text-2xl">
              Informationen
            </h2>

            <div className="space-y-8 font-[var(--font-montserrat)] text-[#4D4D4D]">
              {/* Adresse */}
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-5 w-5 text-[#7E8F7B]" />
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
                    href="https://www.google.com/maps/search/?api=1&query=Margaretenstra%C3%9Fe+18+18609+Binz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-sm underline underline-offset-4 transition hover:opacity-70"
                  >
                    In Karten öffnen
                  </a>
                </div>
              </div>

              {/* Telefon */}
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-5 w-5 text-[#7E8F7B]" />
                <div>
                  <p className="mb-1 text-sm uppercase tracking-[0.2em] text-[#7E8F7B]">
                    Telefon
                  </p>
                  <a
                    href="tel:+4915129722874"
                    className="text-base transition hover:opacity-70"
                  >
                    +49 (0)151 29722874
                  </a>
                </div>
              </div>

              {/* Mail */}
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-5 w-5 text-[#7E8F7B]" />
                <div>
                  <p className="mb-1 text-sm uppercase tracking-[0.2em] text-[#7E8F7B]">
                    E-Mail
                  </p>
                  <a
                    href="mailto:restaurant.moritz@icloud.com"
                    className="text-base transition hover:opacity-70"
                  >
                    restaurant.moritz@icloud.com
                  </a>
                </div>
              </div>

              {/* Öffnungszeiten */}
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-5 w-5 text-[#7E8F7B]" />
                <div>
                  <p className="mb-1 text-sm uppercase tracking-[0.2em] text-[#7E8F7B]">
                    Öffnungszeiten
                  </p>
                  <p className="text-base">
                    Täglich ab 17:00 Uhr geöffnet
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* RIGHT */}
          <section className="flex flex-col justify-between rounded-3xl border border-black/10 bg-[#B7BDAF] p-8">
            <div>
              <h2 className="mb-8 font-[var(--font-playfair)] text-2xl">
                Gut zu wissen
              </h2>

              <div className="space-y-8 font-[var(--font-montserrat)] text-[#3F463D]">
                <div className="flex items-start gap-4">
                  <UtensilsCrossed className="mt-1 h-5 w-5" />
                  <div>
                    <p className="mb-1 text-sm uppercase tracking-[0.2em] text-[#5E665B]">
                      Reservierung
                    </p>
                    <p className="text-base leading-7">
                      Reservierungen nehmen wir gern online oder telefonisch
                      während unserer Öffnungszeiten entgegen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Info className="mt-1 h-5 w-5" />
                  <div>
                    <p className="mb-1 text-sm uppercase tracking-[0.2em] text-[#5E665B]">
                      Hinweis
                    </p>
                    <p className="text-base leading-7">
                      Es stehen keine Parkmöglichkeiten direkt am Restaurant
                      zur Verfügung.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/reservation"
                className="rounded-full bg-[#8E9A87] px-6 py-3 text-center font-[var(--font-montserrat)] text-sm font-medium text-white transition hover:opacity-90"
              >
                Jetzt reservieren
              </Link>

              <a
                href="https://www.instagram.com/moritz.essenbeifreunden/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full border border-black/15 px-6 py-3 font-[var(--font-montserrat)] text-sm font-medium transition hover:bg-black/5"
              >
                <Instagram className="h-4 w-4" />
                <span>moritz.essenbeifreunden</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
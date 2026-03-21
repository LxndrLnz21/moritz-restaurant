import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-[#B7BDAF] text-[#1A1A1A]">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-4">
        <div className="flex items-center justify-center md:justify-start">
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/moritz-sign.jpg"
              alt="Schriftzug Moritz. Essen bei Freunden"
              width={220}
              height={120}
              sizes="(max-width: 768px) 220px, 220px"
              className="block h-auto w-full max-w-[220px] object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="mb-3 font-[var(--font-playfair)] text-xl">Kontakt</h2>
          <div className="space-y-3 font-[var(--font-montserrat)] text-sm leading-6 text-[#3F463D]">
            <p>
              Margaretenstraße 18
              <br />
              18609 Binz
            </p>

            <a
              href="tel:+4915129722874"
              aria-label="Moritz. Restaurant telefonisch kontaktieren"
              className="flex items-center gap-2 transition hover:opacity-70"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              <span>+49 (0)151 29722874</span>
            </a>

            <a
              href="mailto:restaurant.moritz@icloud.com"
              aria-label="E-Mail an Moritz. Restaurant senden"
              className="flex items-center gap-2 break-all transition hover:opacity-70"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              <span>restaurant.moritz@icloud.com</span>
            </a>

            <a
              href="https://www.instagram.com/moritz.essenbeifreunden/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram-Profil von Moritz. in neuem Tab öffnen"
              className="flex items-center gap-2 transition hover:opacity-70"
            >
              <Instagram className="h-4 w-4" aria-hidden="true" />
              <span>moritz.essenbeifreunden</span>
            </a>
          </div>
        </div>

        <div>
          <h2 className="mb-3 font-[var(--font-playfair)] text-xl">
            Öffnungszeiten
          </h2>
          <div className="space-y-2 font-[var(--font-montserrat)] text-sm leading-6 text-[#3F463D]">
            <p>Täglich ab 17:00 Uhr geöffnet</p>
            <p>
              Online-Reservierungen über unsere{" "}
              <Link
                href="/reservation"
                className="underline underline-offset-4 transition hover:opacity-70"
              >
                Reservierungsseite
              </Link>
            </p>
          </div>
        </div>

        <div>
          <h2 className="mb-3 font-[var(--font-playfair)] text-xl">
            Navigation & Rechtliches
          </h2>
          <nav
            aria-label="Footer Navigation"
            className="flex flex-col gap-2 font-[var(--font-montserrat)] text-sm leading-6 text-[#3F463D]"
          >
            <Link href="/menu" className="transition hover:opacity-70">
              Speisekarte
            </Link>
            <Link href="/about" className="transition hover:opacity-70">
              Über uns
            </Link>
            <Link href="/contact" className="transition hover:opacity-70">
              Kontakt
            </Link>
            <Link href="/impressum" className="transition hover:opacity-70">
              Impressum
            </Link>
            <Link href="/datenschutz" className="transition hover:opacity-70">
              Datenschutz
            </Link>
          </nav>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 font-[var(--font-montserrat)] text-xs text-[#3F463D] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Moritz. Alle Rechte vorbehalten.</p>
          <p>Restaurant in Binz</p>
        </div>
      </div>
    </footer>
  );
}
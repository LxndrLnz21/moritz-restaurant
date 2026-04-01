import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum",
  description:
    "Impressum des Moritz. Restaurants – rechtliche Angaben und Kontaktdaten.",
};

export default function ImpressumPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-[var(--font-montserrat)] text-xs uppercase tracking-[0.3em] text-[#7E8F7B]">
          Rechtliches
        </p>

        <h1 className="mb-10 font-[var(--font-playfair)] text-4xl md:text-5xl">
          Impressum
        </h1>

        <div className="max-w-3xl space-y-8 font-[var(--font-montserrat)] text-base leading-8 text-[#4D4D4D]">
          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Angaben gemäß § 5 DDG
            </h2>
            <p>
              Tobias Moritz
              <br />
              Margaretenstraße 18
              <br />
              18609 Binz
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Kontakt
            </h2>
            <p>
              Telefon:{" "}
              <a
                href="tel:+4915129722874"
                className="underline underline-offset-4 transition hover:opacity-70"
              >
                +49 (0)151 29722874
              </a>
              <br />
              E-Mail:{" "}
              <a
                href="mailto:restaurant.moritz@icloud.com"
                className="break-all underline underline-offset-4 transition hover:opacity-70"
              >
                restaurant.moritz@icloud.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
            </h2>
            <p>
              Tobias Moritz
              <br />
              Margaretenstraße 18
              <br />
              18609 Binz
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Haftung für Inhalte
            </h2>
            <p>
              Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
              Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
              wird jedoch keine Gewähr übernommen.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Haftung für Links
            </h2>
            <p>
              Diese Website enthält Links zu externen Websites Dritter, auf
              deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
              diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="mb-3 font-[var(--font-playfair)] text-2xl text-[#1A1A1A]">
              Urheberrecht
            </h2>
            <p>
              Die auf dieser Website erstellten Inhalte und Werke unterliegen
              dem deutschen Urheberrecht. Vervielfältigung, Bearbeitung,
              Verbreitung und jede Art der Verwertung außerhalb der Grenzen des
              Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen
              Urhebers.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
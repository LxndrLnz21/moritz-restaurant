import Link from "next/link";

export const metadata = {
  title: "Moritz. Restaurant in Binz – Moderne Küche & besondere Atmosphäre",
  description:
    "Erleben Sie moderne Küche im Moritz. Genießen Sie hochwertige Speisen in stilvollem Ambiente. Jetzt Tisch reservieren.",
};

export default function Home() {
  return (
    <main className="bg-[#F3EEE7] text-[#1A1A1A]">
      <section className="mx-auto flex min-h-[calc(100vh-80px)] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">
        <p className="mb-5 font-[var(--font-montserrat)] text-xs uppercase tracking-[0.35em] text-[#7E8F7B] md:text-sm">
          Restaurant in Binz
        </p>

        <h1 className="mb-6 max-w-4xl font-[var(--font-playfair)] text-5xl leading-none md:text-7xl lg:text-8xl">
          Moritz.
        </h1>

        <p className="mb-6 font-[var(--font-montserrat)] text-lg tracking-[0.12em] text-[#2C2C2C] md:text-2xl">
          Essen · bei · Freunden
        </p>

        <p className="mb-10 max-w-2xl font-[var(--font-montserrat)] text-base leading-7 text-[#4D4D4D] md:text-lg">
          Moderne deutsch-europäische Küche in entspannter Atmosphäre.
          Hochwertig, herzlich und ein Ort für gemeinsame Abende in Binz.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <Link
            href="/reservation"
            className="rounded-full bg-[#8E9A87] px-7 py-3 font-[var(--font-montserrat)] text-sm font-medium text-white transition hover:opacity-90"
          >
            Tisch reservieren
          </Link>

          <Link
            href="/menu"
            className="rounded-full border border-black/15 px-7 py-3 font-[var(--font-montserrat)] text-sm font-medium transition hover:bg-black/5"
          >
            Speisekarte ansehen
          </Link>
        </div>
      </section>

      <section className="border-t border-black/10 bg-[#B7BDAF]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-3 font-[var(--font-montserrat)] text-xs uppercase tracking-[0.3em] text-[#6E766A]">
              Küche & Atmosphäre
            </p>
            <h2 className="mb-6 font-[var(--font-playfair)] text-3xl md:text-5xl">
              Rustikal gedacht,
              <br />
              modern serviert.
            </h2>
          </div>

          <div>
            <p className="font-[var(--font-montserrat)] text-base leading-8 text-[#3F463D] md:text-lg">
              Moritz. steht für genussvolle Abende, ehrliche Gastlichkeit und
              eine Küche, die Vertrautes modern interpretiert. Für Freunde,
              Familien, Gäste und alle, die gutes Essen in ruhiger, stilvoller
              Umgebung schätzen.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex h-full flex-col justify-between rounded-3xl border border-black/10 bg-[#B7BDAF]/50 p-8">
            <div>
              <h3 className="mb-4 font-[var(--font-playfair)] text-2xl">
                Speisekarte
              </h3>
              <p className="mb-6 font-[var(--font-montserrat)] leading-7 text-[#4D4D4D]">
                Entdecke unsere aktuelle Auswahl von Vorspeisen,
                vegetarischen Gerichten, Fisch, Fleisch und Dessert.
              </p>
            </div>

            <Link
              href="/menu"
              className="font-[var(--font-montserrat)] text-sm font-medium underline underline-offset-4"
            >
              Zur Speisekarte
            </Link>
          </div>

          <div className="flex h-full flex-col justify-between rounded-3xl border border-black/10 bg-[#B7BDAF]/50 p-8">
            <div>
              <h3 className="mb-4 font-[var(--font-playfair)] text-2xl">
                Reservierung
              </h3>
              <p className="mb-6 font-[var(--font-montserrat)] leading-7 text-[#4D4D4D]">
                Reserviere deinen Tisch bequem online oder kontaktiere uns
                direkt für deine Anfrage.
              </p>
            </div>

            <Link
              href="/reservation"
              className="font-[var(--font-montserrat)] text-sm font-medium underline underline-offset-4"
            >
              Jetzt anfragen
            </Link>
          </div>

          <div className="flex h-full flex-col justify-between rounded-3xl border border-black/10 bg-[#B7BDAF]/50 p-8">
            <div>
              <h3 className="mb-4 font-[var(--font-playfair)] text-2xl">
                Kontakt
              </h3>
              <p className="mb-6 font-[var(--font-montserrat)] leading-7 text-[#4D4D4D]">
                Margaretenstraße 18, 18609 Binz
                <br />
                Täglich ab 17:00 Uhr geöffnet
              </p>
            </div>

            <Link
              href="/contact"
              className="font-[var(--font-montserrat)] text-sm font-medium underline underline-offset-4"
            >
              Mehr erfahren
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
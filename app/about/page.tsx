import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Erfahren Sie mehr über das Moritz. Restaurant in Binz – moderne Küche, hochwertige Zutaten und ein Ort für besondere Abende.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <p className="mb-3 font-[var(--font-montserrat)] text-xs uppercase tracking-[0.3em] text-[#7E8F7B]">
            Moritz.
          </p>

          <h1 className="mb-6 font-[var(--font-playfair)] text-4xl md:text-5xl">
            Über uns
          </h1>

          <p className="mb-6 font-[var(--font-montserrat)] text-base leading-8 text-[#4D4D4D] md:text-lg">
            Mit dem Moritz. entsteht in Binz ein Ort für genussvolle Abende,
            ehrliche Gastlichkeit und eine Küche, die Vertrautes modern
            interpretiert.
          </p>

          <p className="mb-6 font-[var(--font-montserrat)] text-base leading-8 text-[#4D4D4D] md:text-lg">
            Ab dem <span className="font-medium text-[#1A1A1A]">01. April 2026</span>{" "}
            heißen wir unsere Gäste willkommen – mit einer saisonalen
            Speisekarte, hochwertigen Zutaten und viel Liebe zum Detail.
          </p>

          <p className="font-[var(--font-montserrat)] text-base leading-8 text-[#4D4D4D] md:text-lg">
            Moritz. steht für eine entspannte Atmosphäre, aufmerksamen Service
            und den Anspruch, einen Ort zu schaffen, an dem man gerne bleibt –
            für Freunde, Familie und besondere Momente.
          </p>
        </div>
      </div>
    </main>
  );
}
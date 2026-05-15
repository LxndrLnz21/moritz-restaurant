import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speisekarte",
  description:
    "Entdecken Sie die Speisekarte des Moritz. Restaurants in Binz – saisonale Gerichte, hochwertige Zutaten und moderne deutsch-europäische Küche.",
};

export default function MenuPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 font-[var(--font-montserrat)] text-xs uppercase tracking-[0.3em] text-[#7E8F7B]">
              Moritz.
            </p>

            <h1 className="font-[var(--font-playfair)] text-4xl md:text-5xl">
              Speisekarte
            </h1>

            <p className="mt-4 max-w-2xl font-[var(--font-montserrat)] text-base leading-7 text-[#4D4D4D]">
              Moderne deutsch-europäische Küche in entspannter Atmosphäre.
              Unsere Speisekarte wird saisonal angepasst.
            </p>
          </div>

          <a
            href="/pdf/speisekarte.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Speisekarte als PDF in neuem Tab öffnen"
            className="inline-flex w-fit items-center rounded-full border border-black/15 px-6 py-3 font-[var(--font-montserrat)] text-sm font-medium transition hover:bg-black/5"
          >
            Speisekarte als PDF
          </a>
        </div>

        <div className="mb-10 rounded-2xl border border-black/10 bg-[#F8F5EF] p-4">
          <p className="font-[var(--font-montserrat)] text-sm leading-6 text-[#4D4D4D]">
            Alle Speisen werden frisch zubereitet. Saisonale Änderungen,
            kurzfristige Anpassungen sowie Irrtümer bei Zutaten und Preisen
            behalten wir uns vor.
          </p>
        </div>

        <div className="space-y-16">
          <MenuSection title="Vorspeisen">
            <MenuItem
              name="Mecklenburger Fischeintopf"
              description="Fischwürfel & Sanddorn"
              price="8,50 €"
            />
            <MenuItem
              name="Gebratene Riesengarnelen"
              description="Limetten-Aioli & Brot"
              price="9,50 €"
            />
            <MenuItem
              name="Gratinierter Ziegenkäse"
              description="Rote Bete & Walnüsse"
              price="10,50 €"
            />
            <MenuItem
              name="Burrata"
              description="Geröstete Walnüsse & Blattsalat"
              price="8 €"
            />
          </MenuSection>

          <MenuSection title="Vegetarisch/Vegan">
            <MenuItem
              name="Quiche Lorraine"
              description="Blattsalat & Walnüsse"
              price="15,50 €"
            />
            <MenuItem
              name="Burrata"
              description="Pappardelle, Kokosmilch, Spinat & Tomaten"
              price="17 €"
            />
            <MenuItem
              name="Rote Bete Risotto (vegan)"
              description="Vegane Sour Cream & grüner Spargel"
              price="16 €"
            />
          </MenuSection>

          <MenuSection title="Fisch">
            <MenuItem
              name="Gebratenes Zanderfilet"
              description="Zucchini, Tomate & Rosmarinkartoffeln"
              price="24,50 €"
            />
            <MenuItem
              name="Gebratene Riesengarnelen"
              description="Wurzelgemüse, Pappardelle, Weißwein & Grana Padano"
              price="22,50 €"
            />
            <MenuItem
              name="Pochiertes Lachsfilet"
              description="Kokosmilch, Staudensellerie, Tomaten & Bulgur"
              price="25,50 €"
            />
            <MenuItem
              name='Hering nach „Matjes Art“'
              description="Hausfrauensauce & Bratkartoffeln"
              price="18,50 €"
            />
            <MenuItem
              name="Fish & Chips"
              description="Remoulade & Potato Dippers"
              price="18 €"
            />
            <MenuItem
              name="Ganzer Wolfsbarsch gefüllt"
              description="Mit Limette & Thymian, Gurkensalat & Kartoffelpüree"
              price="22,50 €"
            />
          </MenuSection>

          <MenuSection title="Fleisch">
            <MenuItem
              name='Schnitzel „Wiener Art“'
              description="Schwein, Gurkensalat & Bratkartoffeln"
              price="21,50 €"
            />
            <MenuItem
              name="Kalbsleber"
              description="Apfel, Zwiebel & Kartoffelpüree"
              price="23,50 €"
            />
            <MenuItem
              name="Geschmorte Schweinebäckchen"
              description="Wurzelgemüse & Kartoffelpüree"
              price="25,50 €"
            />
            <MenuItem
              name="Saltimbocca von der Perlhuhnbrust"
              description="Wurzelgemüse, Rosmarinkartoffeln & Jus"
              price="22,50 €"
            />
            <MenuItem
              name="Blutwurst & Wildbratwurst"
              description="Karamellisiertes Sauerkraut & Kartoffelpüree"
              price="21,50 €"
            />
          </MenuSection>

          <MenuSection title="Kinder">
            <p className="mb-6 font-[var(--font-montserrat)] text-sm text-[#6B6B6B]">
              Ausschließlich für Kinder
            </p>

            <MenuItem
              name="Hähnchen-Nuggets"
              description="Gemüse & Potato Dippers"
              price="12 €"
            />
            <MenuItem
              name='Schnitzel „Wiener Art“'
              description="Schwein, Gurkensalat & Bratkartoffeln"
              price="12 €"
            />
            <MenuItem name="Bolognese" description="Nudeln" price="9,50 €" />
            <MenuItem
              name="Fischstäbchen"
              description="Buntes Gemüse & Kartoffelpüree"
              price="9,50 €"
            />
          </MenuSection>

          <MenuSection title="Dessert">
            <MenuItem
              name="Mousse au chocolat"
              description="Frittierte Birne, Haferflocken & Vanilleeis"
              price="9,50 €"
            />
            <MenuItem
              name="Crème Brûlée"
              description="& frische Beeren"
              price="8,50 €"
            />
            <MenuItem
              name="Einfacher Espresso"
              description="Mit kleinem Schokobrownie"
              price="4,50 €"
            />
          </MenuSection>

          <MenuSection title="Alkoholfrei">
            <MenuItem
              name="Mineralwasser"
              description="Still oder Sprudel, 0,75 l"
              price="4 €"
            />
            <MenuItem
              name="Mineralwasser"
              description="Still oder Sprudel, 0,25 l"
              price="2 €"
            />
            <MenuItem
              name="Fritz-Kola"
              description="Kola light oder Kola, 0,33 l"
              price="4 €"
            />
            <MenuItem
              name="Fritz-Limo"
              description="Orange, Ingwer-Limette, Apfel-Kirsch-Holunder, Zitrone oder Honigmelone, 0,33 l"
              price="4 €"
            />
            <MenuItem
              name="Vio Schorle"
              description="Apfel, Rhabarber oder Schwarze Johannisbeere, 0,25 l"
              price="3,50 €"
            />
            <MenuItem
              name="Glashäger Bitterlimonade"
              description="Tonic Water, Bitter Lemon oder Ginger Ale, 0,25 l"
              price="3,50 €"
            />
            <MenuItem
              name="Säfte"
              description="Apfel, Orange, Banane, Kirsche oder Mango, 0,25 l"
              price="3,50 €"
            />
          </MenuSection>

          <MenuSection title="Heißgetränke">
            <MenuItem name="Kaffee Crema" description=" " price="2,50 €" />
            <MenuItem name="Espresso" description=" " price="2 €" />
            <MenuItem name="Espresso doppelt" description=" " price="3,50 €" />
            <MenuItem name="Cappuccino" description=" " price="3,50 €" />
            <MenuItem name="Latte Macchiato" description=" " price="4,50 €" />
            <MenuItem name="Heiße Schokolade" description=" " price="3,50 €" />
            <MenuItem name="Tee" description="Nach Wahl" price="3,50 €" />
          </MenuSection>

          <MenuSection title="Aperitif">
            <MenuItem name="Prosecco" description="0,2 l" price="4 €" />
            <MenuItem
              name="Martini"
              description="Bianco, Extra Dry oder Rosso, 5 cl"
              price="3,50 €"
            />
            <MenuItem name="Aperol Spritz" description="0,2 l" price="7,50 €" />
            <MenuItem name="Wild Berry Lillet" description="0,2 l" price="7,50 €" />
            <MenuItem
              name="Sherry"
              description="Fino, Medium Dry oder Sweet, 5 cl"
              price="4,50 €"
            />
          </MenuSection>

          <MenuSection title="Longdrinks">
            <MenuItem name="Gin Tonic" description=" " price="7,50 €" />
            <MenuItem
              name="Vodka mit Fritz-Limo / Kola"
              description=" "
              price="7,50 €"
            />
            <MenuItem
              name="Glashäger Bitterlimonade"
              description=" "
              price="7 €"
            />
            <MenuItem name="Vio Schorle" description=" " price="7 €" />
            <MenuItem name="Rum Cola" description=" " price="7,50 €" />
          </MenuSection>

          <MenuSection title="Spirituosen">
            <MenuItem name="Jägermeister" description="2 cl" price="2,50 €" />
            <MenuItem name="Ramazzotti" description="2 cl" price="2,50 €" />
            <MenuItem name="Küstennebel" description="2 cl" price="2,50 €" />
            <MenuItem name="Linie Aquavit" description="2 cl" price="2,50 €" />
            <MenuItem
              name="Lehment Doppelkümmel"
              description="2 cl"
              price="2,50 €"
            />
            <MenuItem name="Berliner Luft" description="2 cl" price="2,50 €" />
          </MenuSection>

          <MenuSection title="Obstbrände">
            <MenuItem
              name="Schwechower Brände"
              description="Birne, Sanddorngeist, Himbeergeist, Mirabelle, Apfel, Zwetschge oder Sauerkirsche, 2 cl"
              price="3 €"
            />
          </MenuSection>
        </div>
      </div>
    </main>
  );
}

function MenuSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      aria-labelledby={`section-${title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")}`}
    >
      <h2
        id={`section-${title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
        className="mb-8 font-[var(--font-playfair)] text-2xl md:text-3xl"
      >
        {title}
      </h2>
      <div className="space-y-5">{children}</div>
    </section>
  );
}

function MenuItem({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: string;
}) {
  return (
    <div className="max-w-3xl border-b border-black/10 pb-3">
      <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-6">
        <h3 className="font-[var(--font-montserrat)] text-base font-medium text-[#1A1A1A] md:text-lg">
          {name}
        </h3>

        <span className="whitespace-nowrap font-[var(--font-montserrat)] text-sm text-[#1A1A1A] md:text-base">
          {price}
        </span>

        {description.trim() && (
          <p className="col-span-2 mt-1 font-[var(--font-montserrat)] text-sm leading-6 text-[#5A5A5A] md:text-base">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
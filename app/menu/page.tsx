export default function MenuPage() {
  return (
    <main className="min-h-screen px-6 py-16">
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
              Unsere Speisekarte kann saisonal angepasst werden.
            </p>
          </div>

          <a
            href="/pdf/speisekarte.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center rounded-full border border-black/15 px-6 py-3 font-[var(--font-montserrat)] text-sm font-medium transition hover:bg-black/5"
          >
            Speisekarte als PDF
          </a>
        </div>

        <div className="space-y-16">
          <MenuSection title="Vorspeisen">
            <MenuItem
              name="Mecklenburger Fischsüppchen"
              description="Gegrillte Fischwürfel und Sanddorn"
              price="6,50 €"
            />
            <MenuItem
              name="Gebratene Riesengarnelen"
              description="Limetten-Aioli und Brot"
              price="9,50 €"
            />
            <MenuItem
              name="Gratinierter Ziegenkäse"
              description="Rote Bete und Walnüsse"
              price="10,50 €"
            />
            <MenuItem
              name="Burrata"
              description="Geröstete Nüsse, Rucola"
              price="8,00 €"
            />
          </MenuSection>

          <MenuSection title="Vegetarisch & Vegan">
            <MenuItem
              name="Quiche Lorraine"
              description="Blattsalat und Walnüsse"
              price="15,50 €"
            />
            <MenuItem
              name="Burrata"
              description="Pappardelle, Spinat und Tomaten"
              price="17,00 €"
            />
            <MenuItem
              name="Gemüsebowl (vegan)"
              description="Tomate, Avocado, Paprika, Bulgur und veganer Frischkäse"
              price="16,00 €"
            />
          </MenuSection>

          <MenuSection title="Fisch">
            <MenuItem
              name="Gebratenes Zanderfilet"
              description="Zucchini, Tomate und Kartoffelsoufflé"
              price="24,50 €"
            />
            <MenuItem
              name="Gebratene Riesengarnelen"
              description="Wurzelgemüse, Pappardelle, Weißwein und Hartkäse"
              price="21,50 €"
            />
            <MenuItem
              name="Pochiertes Lachsfilet"
              description="Kokosmilch, Staudensellerie, Tomaten und Bulgur"
              price="25,50 €"
            />
            <MenuItem
              name='Hering nach „Matjes Art“'
              description="Hausfrauensauce und Bratkartoffeln"
              price="18,50 €"
            />
            <MenuItem
              name="Fish & Chips"
              description="Remoulade und Potato Dippers"
              price="15,50 €"
            />
            <MenuItem
              name="Wolfsbarsch gefüllt"
              description="Mit Limette und Thymian, Gurkensalat und Kartoffelpüree"
              price="21,50 €"
            />
          </MenuSection>

          <MenuSection title="Fleisch">
            <MenuItem
              name='Schnitzel „Wiener Art“'
              description="Schwein, Gurkensalat und Bratkartoffeln"
              price="21,50 €"
            />
            <MenuItem
              name="Kalbsleber"
              description="Apfel, Zwiebel und Kartoffelpüree"
              price="23,50 €"
            />
            <MenuItem
              name="Geschmorte Schweinebäckchen"
              description="Wurzelgemüse und Kartoffelpüree"
              price="24,50 €"
            />
            <MenuItem
              name="Saltim Bocca von der Perlhuhnbrust"
              description="Geschmolzene Tomaten, Pappardelle und Hartkäse"
              price="22,50 €"
            />
            <MenuItem
              name="Wildbratwurst"
              description="Karamellisiertes Sauerkraut und Kartoffelpüree"
              price="19,50 €"
            />
          </MenuSection>

          <MenuSection title="Kinder">
            <p className="mb-6 font-[var(--font-montserrat)] text-sm text-[#6B6B6B]">
              Ausschließlich für Kinder
            </p>

            <MenuItem
              name="Hähnchengeschnetzeltes"
              description="Nudeln"
              price="10,00 €"
            />
            <MenuItem
              name='Schnitzel „Wiener Art“'
              description="Schwein, Gurkensalat und Bratkartoffeln"
              price="12,00 €"
            />
            <MenuItem
              name="Bolognese"
              description="Nudeln"
              price="9,50 €"
            />
            <MenuItem
              name="Fischstäbchen"
              description="Buntes Gemüse und Kartoffelpüree"
              price="9,50 €"
            />
          </MenuSection>

          <MenuSection title="Dessert">
            <MenuItem
              name="Mousse au chocolat"
              description="Frittierte Birne, Haferflocken und Vanilleeis"
              price="9,50 €"
            />
            <MenuItem
              name="Crème Brûlée"
              description="Und frische Beeren"
              price="7,50 €"
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
    <section>
      <h2 className="mb-8 font-[var(--font-playfair)] text-2xl md:text-3xl">
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
    <div className="border-b border-black/10 pb-3 max-w-3xl">
      <div className="grid grid-cols-[1fr_auto] items-baseline gap-x-6">
        <h3 className="font-[var(--font-montserrat)] text-base font-medium text-[#1A1A1A] md:text-lg">
          {name}
        </h3>

        <span className="font-[var(--font-montserrat)] text-sm whitespace-nowrap text-[#1A1A1A] md:text-base">
          {price}
        </span>

        <p className="mt-1 font-[var(--font-montserrat)] text-sm leading-6 text-[#5A5A5A] md:text-base col-span-2">
          {description}
        </p>
      </div>
    </div>
  );
}
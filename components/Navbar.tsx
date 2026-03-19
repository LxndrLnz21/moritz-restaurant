import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-black/10 bg-[#B7BDAF]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-2xl md:text-3xl">
          Moritz.
        </Link>

        <nav className="hidden items-center gap-6 font-[var(--font-montserrat)] text-sm md:flex md:text-[15px]">
          <Link href="/menu" className="transition hover:opacity-70">
            Speisekarte
          </Link>
          <Link href="/about" className="transition hover:opacity-70">
            Über uns
          </Link>
          <Link href="/contact" className="transition hover:opacity-70">
            Kontakt
          </Link>
          <Link
            href="/reservation"
            className="rounded-full bg-[#7E8F7B] px-5 py-2 text-white transition hover:opacity-90"
          >
            Reservierung
          </Link>
        </nav>
      </div>
    </header>
  );
}
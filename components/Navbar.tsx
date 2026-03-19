"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b border-black/10 bg-[#B7BDAF]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link
            href="/"
            className="font-serif text-2xl md:text-3xl"
            onClick={closeMenu}
          >
            Moritz.
          </Link>

          {/* Mobile */}
          <button
            type="button"
            aria-label="Menü öffnen"
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center rounded-full p-2 md:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop */}
          <nav className="hidden items-center gap-8 font-[var(--font-montserrat)] text-sm md:flex md:text-[15px]">
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
              className="rounded-full bg-[#8E9A87] px-5 py-2 text-white transition hover:opacity-90"
            >
              Reservierung
            </Link>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#F3EEE7] pt-24 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-6 px-6 font-[var(--font-montserrat)] text-lg text-[#1A1A1A]">
            <Link
              href="/menu"
              onClick={closeMenu}
              className="border-b border-black/10 pb-4 transition hover:opacity-70"
            >
              Speisekarte
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="border-b border-black/10 pb-4 transition hover:opacity-70"
            >
              Über uns
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="border-b border-black/10 pb-4 transition hover:opacity-70"
            >
              Kontakt
            </Link>

            <Link
              href="/reservation"
              onClick={closeMenu}
              className="mt-4 rounded-full bg-[#8E9A87] px-6 py-3 text-center font-medium text-white transition hover:opacity-90"
            >
              Reservierung
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setIsOpen(false);
  }

  function toggleMenu() {
    setIsOpen((prev) => !prev);
  }

  function getLinkClass(href: string) {
    const isActive = pathname === href;

    return [
      "transition hover:opacity-70",
      isActive ? "opacity-100 font-semibold" : "opacity-90",
    ].join(" ");
  }

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeMenu();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 w-full border-b border-black/10 bg-[#B7BDAF]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
          <Link
            href="/"
            className="font-playfair text-2xl md:text-3xl"
            onClick={closeMenu}
            aria-label="Zur Startseite von Moritz."
          >
            Moritz.
          </Link>

          <button
            type="button"
            aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={toggleMenu}
            className="flex items-center justify-center rounded-full p-2 transition hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-[#8E9A87]/40 md:hidden"
          >
            <span className="sr-only">
              {isOpen ? "Menü schließen" : "Menü öffnen"}
            </span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          <nav
            aria-label="Hauptnavigation"
            className="hidden items-center gap-8 font-[var(--font-montserrat)] text-sm md:flex md:text-[15px]"
          >
            <Link href="/menu" className={getLinkClass("/menu")}>
              Speisekarte
            </Link>

            <Link href="/about" className={getLinkClass("/about")}>
              Über uns
            </Link>

            <Link href="/contact" className={getLinkClass("/contact")}>
              Kontakt
            </Link>

            <Link
              href="/reservation"
              className="rounded-full bg-[#8E9A87] px-5 py-2 text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#8E9A87]/40"
            >
              Online reservieren
            </Link>
          </nav>
        </div>
      </header>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-[#F3EEE7] pt-24 md:hidden">
          <nav
            id="mobile-navigation"
            aria-label="Mobile Hauptnavigation"
            className="mx-auto flex max-w-6xl flex-col gap-6 px-6 font-[var(--font-montserrat)] text-lg text-[#1A1A1A]"
          >
            <Link
              href="/menu"
              onClick={closeMenu}
              className={`border-b border-black/10 pb-4 ${getLinkClass("/menu")}`}
            >
              Speisekarte
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className={`border-b border-black/10 pb-4 ${getLinkClass("/about")}`}
            >
              Über uns
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className={`border-b border-black/10 pb-4 ${getLinkClass("/contact")}`}
            >
              Kontakt
            </Link>

            <Link
              href="/reservation"
              onClick={closeMenu}
              className="mt-4 rounded-full bg-[#8E9A87] px-6 py-3 text-center font-medium text-white transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#8E9A87]/40"
            >
              Online reservieren
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
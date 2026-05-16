import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie das Moritz. Restaurant für besondere Wünsche, Gruppenanfragen und individuelle Anliegen. Adresse, Telefonnummer und alle wichtigen Informationen auf einen Blick.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    url: "/contact",
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}

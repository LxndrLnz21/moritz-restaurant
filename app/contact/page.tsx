import type { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktieren Sie das Moritz. Restaurant für besondere Wünsche, Gruppenanfragen und individuelle Anliegen. Adresse, Telefonnummer und alle wichtigen Informationen auf einen Blick.",
};

export default function Page() {
  return <ContactPageClient />;
}
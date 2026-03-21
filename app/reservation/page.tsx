import type { Metadata } from "next";
import ReservationPageClient from "./ReservationPageClient";

export const metadata: Metadata = {
  title: "Reservierung",
  description:
    "Reservieren Sie Ihren Tisch im Moritz bequem online über unser Buchungssystem. Für besondere Wünsche oder individuelle Anfragen nutzen Sie bitte das Kontaktformular.",
};

export default function ReservationPage() {
  return <ReservationPageClient />;
}
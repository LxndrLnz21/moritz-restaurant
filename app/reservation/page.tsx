import type { Metadata } from "next";
import ReservationPageClient from "./ReservationPageClient";

export const metadata: Metadata = {
  title: "Reservierung",
  description:
    "Reservieren Sie Ihren Tisch im Moritz. bequem online. Wir freuen uns auf Ihren Besuch.",
};

export default function Page() {
  return <ReservationPageClient />;
}
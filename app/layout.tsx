import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Playfair_Display, Montserrat } from "next/font/google";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moritz-restaurant-binz.de"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${playfair.variable} ${montserrat.variable} bg-[#F3EEE7] text-[#1A1A1A] antialiased`}
      >
        <Navbar />
        <div className="pt-18">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
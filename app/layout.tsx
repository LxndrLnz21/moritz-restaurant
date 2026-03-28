import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Playfair_Display, Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://moritz-restaurant-binz.de"),

  title: {
    default: "Moritz. Restaurant in Binz",
    template: "%s | Moritz. Restaurant",
  },

  description:
    "Moritz. Restaurant in Binz – moderne deutsch-europäische Küche, stilvolle Atmosphäre und besondere Genussmomente.",

  alternates: {
    canonical: "/",
  },

  manifest: "/site.webmanifest",

  openGraph: {
    title: "Moritz. Restaurant in Binz",
    description:
      "Moderne deutsch-europäische Küche in stilvoller Atmosphäre. Jetzt Tisch reservieren.",
    url: "https://moritz-restaurant-binz.de",
    siteName: "Moritz. Restaurant",
    locale: "de_DE",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Moritz. Restaurant in Binz",
    description:
      "Moderne deutsch-europäische Küche in stilvoller Atmosphäre. Jetzt Tisch reservieren.",
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#F3EEE7",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${playfair.variable} ${montserrat.variable} bg-[#F3EEE7] text-[#1A1A1A] antialiased`}
      >
        <Navbar />
        <div className="pt-18">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
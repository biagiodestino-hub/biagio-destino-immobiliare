import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Biagio Destino Immobiliare | Agente immobiliare in Sicilia",
    template: "%s | Biagio Destino Immobiliare"
  },
  description:
    "Agente immobiliare in Sicilia specializzato in immobili vista mare, case in vendita, investimenti, seconde case e valutazione gratuita immobile.",
  keywords: [
    "agente immobiliare in Sicilia",
    "immobili vista mare Sicilia",
    "case in vendita Sicilia",
    "immobili da investimento Sicilia",
    "valutazione gratuita immobile"
  ],
  openGraph: {
    title: "Biagio Destino Immobiliare",
    description:
      "Immobili selezionati, consulenza reale e marketing immobiliare moderno in Sicilia.",
    locale: "it_IT",
    type: "website"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}

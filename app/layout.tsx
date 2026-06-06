import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { brandName, domain, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brandName} | Agente immobiliare tra Cefalù e Capo d'Orlando`,
    template: `%s | ${brandName}`
  },
  description:
    "Biagio Destino Immobiliare accompagna venditori e acquirenti tra Cefalù e Capo d'Orlando con valutazioni, compravendite e piani marketing personalizzati.",
  keywords: [
    "Biagio Destino Immobiliare",
    "agente immobiliare Cefalù",
    "agenzia immobiliare Cefalù",
    "case in vendita Cefalù",
    "valutazione immobiliare Cefalù",
    "immobili Capo d'Orlando",
    "compravendite immobiliari Sicilia"
  ],
  alternates: {
    canonical: siteUrl
  },
  openGraph: {
    title: brandName,
    description:
      "Compravendite, valutazioni e accompagnamento fino al rogito tra Cefalù e Capo d'Orlando.",
    url: siteUrl,
    siteName: brandName,
    locale: "it_IT",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: brandName,
    description: `Sito ufficiale ${domain}`
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

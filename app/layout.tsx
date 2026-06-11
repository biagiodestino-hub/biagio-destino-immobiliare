import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { getSiteSettings } from "@/lib/sanity.queries";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  return {
    metadataBase: new URL(settings.siteUrl),
    title: {
      default: settings.defaultSeoTitle,
      template: `%s | ${settings.brandName}`
    },
    description: settings.defaultSeoDescription,
    alternates: {
      canonical: settings.siteUrl
    },
    openGraph: {
      title: settings.defaultSeoTitle,
      description: settings.defaultSeoDescription,
      url: settings.siteUrl,
      siteName: settings.brandName,
      locale: "it_IT",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: settings.defaultSeoTitle,
      description: settings.defaultSeoDescription
    }
  };
}

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

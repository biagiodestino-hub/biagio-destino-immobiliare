import type { ReactNode } from "react";
import Link from "next/link";
import {
  createWhatsappUrl,
  getSiteSettings
} from "@/lib/sanity.queries";

type ValuationCTAProps = {
  title?: string;
  text?: string;
  whatsappUrl?: string;
  children?: ReactNode;
};

export async function ValuationCTA({
  title = "Vuoi vendere casa tra Cefalù e Capo d'Orlando?",
  text = "Richiedi una valutazione immobiliare e costruisci un piano marketing personalizzato per valorizzare il tuo immobile.",
  whatsappUrl,
  children
}: ValuationCTAProps) {
  const settings = whatsappUrl ? null : await getSiteSettings();
  const resolvedWhatsappUrl =
    whatsappUrl || createWhatsappUrl(settings?.whatsappNumber || "");

  return (
    <section className="bg-navy py-20 text-white">
      <div className="container-page flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sand">
            Valutazione immobiliare
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight">{title}</h2>
          <p className="mt-4 text-lg leading-8 text-white/80">{text}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            className="rounded-md bg-whatsapp px-6 py-4 text-center font-semibold text-white"
            href={resolvedWhatsappUrl}
          >
            Contattami su WhatsApp
          </a>
          {children ?? (
            <Link
              className="rounded-md bg-gold px-6 py-4 text-center font-semibold text-white"
              href="/contatti"
            >
              Richiedi una valutazione
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

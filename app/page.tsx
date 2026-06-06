import type { Metadata } from "next";
import Link from "next/link";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { ValuationCTA } from "@/components/ValuationCTA";
import { emotionalQuote, serviceAreas, services, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home - Agente immobiliare a Cefalù",
  description:
    "Biagio Destino Immobiliare segue compravendite, valutazioni e piani marketing personalizzati tra Cefalù e Capo d'Orlando."
};

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[760px] overflow-hidden bg-navy pt-28 text-white">
        <div className="absolute inset-0 mediterranean-photo opacity-90" />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="container-page relative z-10 grid min-h-[640px] items-center">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-sand">
              Biagio Destino Immobiliare
            </p>
            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Vendere e acquistare casa con una guida locale.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/90">
              Dal 2011 accompagno venditori e acquirenti tra Cefalù e Capo
              d'Orlando, con valutazioni attente, strategia e presenza fino al
              rogito.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link className="rounded-md bg-gold px-6 py-4 text-center font-semibold text-white shadow-premium" href="/immobili">
                Immobili disponibili
              </Link>
              <a className="rounded-md bg-whatsapp px-6 py-4 text-center font-semibold text-white shadow-premium" href={whatsappUrl}>
                Contattami su WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProperties />

      <section className="section-pad bg-sand-light">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Servizi
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-navy md:text-5xl">
              Un percorso chiaro per vendere, acquistare e decidere con serenità.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/80">
              Ogni incarico viene seguito con conoscenza del territorio,
              comunicazione trasparente e un piano marketing costruito sulle
              caratteristiche reali dell'immobile.
            </p>
            <blockquote className="mt-8 border-l-4 border-gold pl-5 text-xl font-semibold leading-8 text-navy">
              {emotionalQuote}
            </blockquote>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
            {services.map((service) => (
              <div key={service} className="rounded-lg bg-white p-6 shadow-soft">
                <span className="block text-lg font-bold text-navy">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Zone servite
            </p>
            <h2 className="mt-4 text-4xl font-bold text-navy">
              Dalla costa tirrenica a Cefalù
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-5">
            {serviceAreas.map((zone) => (
              <div key={zone} className="rounded-lg bg-mist p-6 text-center">
                <h3 className="text-xl font-bold text-navy">{zone}</h3>
                <p className="mt-2 text-sm text-ink/60">Compravendite e valutazioni</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ValuationCTA />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { ValuationCTA } from "@/components/ValuationCTA";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home - Immobili selezionati in Sicilia",
  description:
    "Trova case in vendita in Sicilia, immobili vista mare, seconde case e proprieta da investimento con Biagio Destino Immobiliare."
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
              Immobiliare premium in Sicilia
            </p>
            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              Trova la casa giusta in Sicilia
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/90">
              Immobili selezionati, vista mare, soluzioni da investimento e
              proprieta esclusive.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link className="rounded-md bg-gold px-6 py-4 text-center font-semibold text-white shadow-premium" href="/immobili">
                Guarda gli immobili
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
              Perche affidarsi a me
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-navy md:text-5xl">
              Una guida locale per comprare, vendere e investire meglio.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/80">
              Conoscenza del territorio siciliano, consulenza trasparente e
              valorizzazione digitale per immobili di valore.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {[
              ["15+", "anni di esperienza"],
              ["100+", "trattative seguite"],
              ["360", "virtual tour e digitale"]
            ].map(([value, label]) => (
              <div key={label} className="rounded-lg bg-white p-6 shadow-soft">
                <strong className="block text-3xl text-navy">{value}</strong>
                <span className="mt-2 block text-sm font-medium text-ink/60">{label}</span>
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
              Sicilia residenziale e turistica
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-6">
            {["Palermo", "Cefalu", "Taormina", "Siracusa", "Noto", "San Vito Lo Capo"].map((zone) => (
              <div key={zone} className="rounded-lg bg-mist p-6 text-center">
                <h3 className="text-xl font-bold text-navy">{zone}</h3>
                <p className="mt-2 text-sm text-ink/60">Case, mare, investimento</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ValuationCTA />
    </>
  );
}

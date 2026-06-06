import Link from "next/link";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";

export function FeaturedProperties() {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Immobili in evidenza
          </p>
          <h2 className="mt-4 text-4xl font-bold text-navy md:text-5xl">
            Opportunità selezionate tra costa e territorio
          </h2>
          <p className="mt-5 text-lg leading-8 text-ink/75">
            Soluzioni reali per abitare, investire o trovare una casa vacanze
            nelle zone seguite da Biagio Destino Immobiliare.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {properties.slice(0, 3).map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link className="inline-flex rounded-md bg-navy px-6 py-4 font-semibold text-white" href="/immobili">
            Guarda tutti gli immobili
          </Link>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { properties } from "@/data/properties";
import { PropertyCard } from "@/components/PropertyCard";

export function FeaturedProperties() {
  const hasProperties = properties.length > 0;

  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Immobili
          </p>
          <h2 className="mt-4 text-4xl font-bold text-navy md:text-5xl">
            Immobili disponibili
          </h2>
          {!hasProperties ? (
            <p className="mt-5 text-lg leading-8 text-ink/75">
              La selezione immobiliare sarà pubblicata appena saranno disponibili
              annunci reali. Per vendere o acquistare, puoi contattare Biagio
              direttamente.
            </p>
          ) : null}
        </div>
        {hasProperties ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {properties.slice(0, 3).map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        ) : null}
        <div className="mt-10 text-center">
          <Link className="inline-flex rounded-md bg-navy px-6 py-4 font-semibold text-white" href="/immobili">
            Vai alla sezione immobili
          </Link>
        </div>
      </div>
    </section>
  );
}

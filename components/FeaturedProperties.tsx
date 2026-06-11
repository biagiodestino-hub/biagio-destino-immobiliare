import Link from "next/link";
import type { Property } from "@/lib/sanity.queries";
import { PropertyCard } from "@/components/PropertyCard";

type FeaturedPropertiesProps = {
  properties: Property[];
  title: string;
  subtitle: string;
  whatsappUrl: string;
};

export function FeaturedProperties({
  properties,
  title,
  subtitle,
  whatsappUrl
}: FeaturedPropertiesProps) {
  return (
    <section className="section-pad bg-white">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Immobili in evidenza
          </p>
          <h2 className="mt-4 text-4xl font-bold text-navy md:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-8 text-ink/75">{subtitle}</p>
        </div>

        {properties.length > 0 ? (
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {properties.slice(0, 3).map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-2xl border-y border-sand py-10 text-center">
            <h3 className="text-2xl font-bold text-navy">
              Cerchi la casa giusta o vuoi vendere il tuo immobile?
            </h3>
            <p className="mt-4 leading-7 text-ink/70">
              Contattami per conoscere le nuove opportunità e ricevere una consulenza
              personalizzata.
            </p>
            <a
              className="mt-6 inline-flex rounded-md bg-whatsapp px-6 py-4 font-semibold text-white"
              href={whatsappUrl}
            >
              Scrivimi su WhatsApp
            </a>
          </div>
        )}

        <div className="mt-10 text-center">
          <Link
            className="inline-flex rounded-md bg-navy px-6 py-4 font-semibold text-white"
            href="/immobili"
          >
            Guarda tutti gli immobili
          </Link>
        </div>
      </div>
    </section>
  );
}

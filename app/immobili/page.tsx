import type { Metadata } from "next";
import { PropertyCard } from "@/components/PropertyCard";
import { ValuationCTA } from "@/components/ValuationCTA";
import { properties } from "@/data/properties";

export const metadata: Metadata = {
  title: "Immobili in vendita in Sicilia",
  description:
    "Scopri immobili vista mare, case in vendita, seconde case e immobili da investimento in Sicilia."
};

export default function PropertiesPage() {
  return (
    <>
      <section className="bg-sand-light pb-16 pt-32">
        <div className="container-page text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Immobili selezionati
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-bold leading-tight text-navy">
            Case in vendita e investimenti immobiliari in Sicilia
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/75">
            Una selezione di proprieta residenziali, turistiche, vista mare e
            da valorizzare.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="mb-10 grid gap-4 rounded-lg bg-white p-5 shadow-premium md:grid-cols-4">
            {["Zona", "Tipologia", "Prezzo", "Camere"].map((filter) => (
              <div key={filter} className="rounded-md bg-mist px-4 py-4 text-sm font-semibold text-navy">
                {filter}
              </div>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {properties.map((property) => (
              <PropertyCard key={property.slug} property={property} />
            ))}
          </div>
        </div>
      </section>

      <ValuationCTA />
    </>
  );
}

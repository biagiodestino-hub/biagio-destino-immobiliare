import type { Metadata } from "next";
import { PropertyCard } from "@/components/PropertyCard";
import { ValuationCTA } from "@/components/ValuationCTA";
import { getPublishedProperties } from "@/lib/sanity.queries";

export const metadata: Metadata = {
  title: "Immobili in vendita tra Cefalù e Capo d'Orlando",
  description:
    "Scopri immobili reali selezionati da Biagio Destino Immobiliare: appartamenti, villette e case indipendenti a Capo d'Orlando, Sant'Agata di Militello, Acquedolci e Pollina."
};

export default async function PropertiesPage() {
  const properties = await getPublishedProperties();

  return (
    <>
      <section className="bg-sand-light pb-16 pt-32">
        <div className="container-page text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Immobili in vendita
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-bold leading-tight text-navy">
            Case, appartamenti e villette tra Cefalù e Capo d'Orlando
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/75">
            Una selezione reale di immobili seguiti da Biagio Destino
            Immobiliare, con soluzioni per abitare, investire o vivere il mare
            della costa tirrenica siciliana.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <div className="mb-10 grid gap-4 rounded-lg bg-white p-5 shadow-premium md:grid-cols-4">
            {["Capo d'Orlando", "Sant'Agata", "Acquedolci", "Pollina"].map((filter) => (
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

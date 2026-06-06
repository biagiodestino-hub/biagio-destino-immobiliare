import type { Metadata } from "next";
import { PropertyCard } from "@/components/PropertyCard";
import { ValuationCTA } from "@/components/ValuationCTA";
import { properties } from "@/data/properties";
import { serviceAreas, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Immobili - Biagio Destino Immobiliare",
  description:
    "Immobili disponibili e consulenza per compravendite nelle zone di Cefalù, Lascari, Campofelice, Pollina, Tusa e Capo d'Orlando."
};

export default function PropertiesPage() {
  const hasProperties = properties.length > 0;

  return (
    <>
      <section className="bg-sand-light pb-16 pt-32">
        <div className="container-page text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Immobili
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-bold leading-tight text-navy">
            Immobili disponibili tra Cefalù e Capo d'Orlando
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/75">
            La sezione sarà aggiornata con immobili reali. Per informazioni su
            nuove disponibilità o per proporre il tuo immobile, contatta Biagio.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          {hasProperties ? (
            <>
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
            </>
          ) : (
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-start">
              <div className="rounded-lg bg-sand-light p-8 shadow-soft">
                <h2 className="text-3xl font-bold text-navy">Annunci in aggiornamento</h2>
                <p className="mt-5 text-lg leading-8 text-ink/75">
                  In questa pagina verranno pubblicate solo schede immobiliari
                  reali. Nel frattempo puoi richiedere una consulenza per
                  acquistare o vendere nelle zone servite.
                </p>
                <a className="mt-8 inline-flex rounded-md bg-whatsapp px-6 py-4 font-semibold text-white" href={whatsappUrl}>
                  Scrivi su WhatsApp
                </a>
              </div>
              <div className="grid gap-3">
                {serviceAreas.map((area) => (
                  <div key={area} className="rounded-md bg-mist px-5 py-4 font-semibold text-navy">
                    {area}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <ValuationCTA />
    </>
  );
}

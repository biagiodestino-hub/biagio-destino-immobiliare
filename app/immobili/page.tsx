import type { Metadata } from "next";
import { CityFilter } from "@/components/CityFilter";
import { ValuationCTA } from "@/components/ValuationCTA";
import {
  createWhatsappUrl,
  getPublishedProperties,
  getServiceAreas,
  getSiteSettings
} from "@/lib/sanity.queries";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();

  return {
    title: "Immobili in vendita",
    description: `Scopri gli immobili pubblicati da ${settings.brandName}.`
  };
}

export default async function PropertiesPage() {
  const [properties, serviceAreas, settings] = await Promise.all([
    getPublishedProperties(),
    getServiceAreas(),
    getSiteSettings()
  ]);
  const cities = Array.from(
    new Set([
      ...serviceAreas.filter((area) => area.active).map((area) => area.name),
      ...properties.map((property) => property.city)
    ])
  );

  return (
    <>
      <section className="bg-sand-light pb-16 pt-32">
        <div className="container-page text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Immobili in vendita
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-bold leading-tight text-navy">
            Case, appartamenti e villette sulla costa tirrenica siciliana
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/75">
            Consulta le proposte immobiliari attualmente disponibili e filtra per
            città.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <CityFilter cities={cities} properties={properties} />
        </div>
      </section>

      <ValuationCTA
        title="Non hai trovato l'immobile giusto?"
        text="Contattami per conoscere le nuove opportunità o per richiedere una ricerca personalizzata."
        whatsappUrl={createWhatsappUrl(settings.whatsappNumber)}
      />
    </>
  );
}

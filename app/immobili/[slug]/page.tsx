import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImageGallery } from "@/components/ImageGallery";
import { ValuationCTA } from "@/components/ValuationCTA";
import {
  createWhatsappUrl,
  getPropertyBySlug,
  getPublishedProperties,
  getSiteSettings
} from "@/lib/sanity.queries";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 60;
export const dynamicParams = true;

export async function generateStaticParams() {
  const properties = await getPublishedProperties();
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) {
    return {};
  }

  return {
    title: `${property.title} | ${property.location}`,
    description:
      property.description.slice(0, 160) ||
      `${property.title}, immobile in vendita a ${property.location}.`,
    openGraph: {
      title: property.title,
      description: property.description,
      type: "article",
      images: property.images.slice(0, 1)
    }
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const [property, settings] = await Promise.all([
    getPropertyBySlug(slug),
    getSiteSettings()
  ]);

  if (!property) {
    notFound();
  }

  const summary = [
    property.surface > 0 ? `${property.surface} mq` : null,
    property.rooms > 0 ? `${property.rooms} vani` : null,
    property.bathrooms > 0
      ? `${property.bathrooms} ${property.bathrooms === 1 ? "bagno" : "bagni"}`
      : null,
    property.propertyType,
    property.floor
  ].filter((item): item is string => Boolean(item));
  const whatsappUrl = createWhatsappUrl(settings.whatsappNumber);

  return (
    <>
      <section className="bg-white pb-14 pt-28">
        <div className="container-page">
          <ImageGallery images={property.images} title={property.title} />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_380px]">
            <article>
              <div className="flex flex-wrap gap-2">
                {property.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full bg-gold px-3 py-2 text-xs font-bold text-white"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                {property.cityName}
                {property.province ? ` (${property.province})` : ""} ·{" "}
                {property.location}
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight text-navy md:text-5xl">
                {property.title}
              </h1>
              <p className="mt-4 text-3xl font-bold text-gold">{property.price}</p>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-ink/80">
                {property.description}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {summary.map((feature) => (
                  <div
                    key={feature}
                    className="rounded-lg bg-mist p-5 font-semibold text-navy"
                  >
                    {feature}
                  </div>
                ))}
              </div>

              {property.features.length > 0 ? (
                <div className="mt-10">
                  <h2 className="text-2xl font-bold text-navy">
                    Caratteristiche principali
                  </h2>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {property.features.map((feature) => (
                      <div
                        key={feature}
                        className="rounded-md border border-stone bg-white p-4 text-ink/75"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}

              {property.sourceUrl ? (
                <div className="mt-10 rounded-lg bg-sand-light p-8">
                  <h2 className="text-2xl font-bold text-navy">Approfondimenti</h2>
                  <a
                    className="mt-6 inline-flex rounded-md border border-navy px-5 py-3 text-sm font-semibold text-navy"
                    href={property.sourceUrl}
                  >
                    Vedi fonte annuncio
                  </a>
                </div>
              ) : null}
            </article>

            <aside className="h-fit rounded-lg bg-white p-7 shadow-premium">
              <h2 className="text-2xl font-bold text-navy">Contatto rapido</h2>
              <p className="mt-3 text-ink/70">
                Vuoi maggiori informazioni o prenotare una visita?
              </p>
              <div className="mt-6 grid gap-3">
                <a
                  className="rounded-md bg-whatsapp px-5 py-4 text-center font-semibold text-white"
                  href={whatsappUrl}
                >
                  Scrivi su WhatsApp
                </a>
                <a
                  className="rounded-md bg-gold px-5 py-4 text-center font-semibold text-white"
                  href="/contatti"
                >
                  Vai ai contatti
                </a>
              </div>
              <p className="mt-6 text-sm leading-6 text-ink/60">
                {settings.phone}
                <br />
                {settings.email}
              </p>
            </aside>
          </div>
        </div>
      </section>

      <ValuationCTA
        title="Vuoi vendere un immobile simile?"
        text="Richiedi una valutazione e un piano marketing personalizzato."
        whatsappUrl={whatsappUrl}
      />
    </>
  );
}

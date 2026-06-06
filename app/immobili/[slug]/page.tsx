import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ImageGallery } from "@/components/ImageGallery";
import { ValuationCTA } from "@/components/ValuationCTA";
import { getPropertyBySlug, properties } from "@/data/properties";
import { email, phoneDisplay, whatsappUrl } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    return {};
  }

  return {
    title: `${property.title} | ${property.location}`,
    description: property.seoDescription,
    openGraph: {
      title: property.title,
      description: property.seoDescription,
      type: "article",
      images: property.images.slice(0, 1)
    }
  };
}

export default async function PropertyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const summary = [
    property.squareMetersLabel,
    property.roomsLabel,
    property.bathroomsLabel,
    property.type,
    property.floor
  ].filter(Boolean);

  return (
    <>
      <section className="bg-white pb-14 pt-28">
        <div className="container-page">
          <ImageGallery images={property.images} title={property.title} />
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_380px]">
            <article>
              <div className="flex flex-wrap gap-2">
                {property.badges.map((badge) => (
                  <span key={badge} className="rounded-full bg-gold px-3 py-2 text-xs font-bold text-white">
                    {badge}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
                {property.location}, {property.province}
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
                  <div key={feature} className="rounded-lg bg-mist p-5 font-semibold text-navy">
                    {feature}
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <h2 className="text-2xl font-bold text-navy">Caratteristiche principali</h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {property.features.map((feature) => (
                    <div key={feature} className="rounded-md border border-stone bg-white p-4 text-ink/75">
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 rounded-lg bg-sand-light p-8">
                <h2 className="text-2xl font-bold text-navy">Posizione e contesto</h2>
                <p className="mt-4 leading-7 text-ink/70">
                  L'immobile si trova a {property.location}, in un'area seguita
                  direttamente da Biagio Destino Immobiliare per compravendite,
                  valutazioni e accompagnamento fino al rogito.
                </p>
                {property.sourceUrl ? (
                  <a
                    className="mt-6 inline-flex rounded-md border border-navy px-5 py-3 text-sm font-semibold text-navy"
                    href={property.sourceUrl}
                  >
                    Vedi fonte annuncio
                  </a>
                ) : null}
              </div>
            </article>

            <aside className="h-fit rounded-lg bg-white p-7 shadow-premium">
              <h2 className="text-2xl font-bold text-navy">Contatto rapido</h2>
              <p className="mt-3 text-ink/70">
                Vuoi maggiori informazioni o prenotare una visita?
              </p>
              <div className="mt-6 grid gap-3">
                <a className="rounded-md bg-whatsapp px-5 py-4 text-center font-semibold text-white" href={whatsappUrl}>
                  Scrivi su WhatsApp
                </a>
                <a className="rounded-md bg-gold px-5 py-4 text-center font-semibold text-white" href="/contatti">
                  Vai ai contatti
                </a>
              </div>
              <p className="mt-6 text-sm leading-6 text-ink/60">
                {phoneDisplay}<br />
                {email}
              </p>
            </aside>
          </div>
        </div>
      </section>

      <ValuationCTA />
    </>
  );
}

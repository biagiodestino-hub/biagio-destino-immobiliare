import Link from "next/link";
import { FeaturedProperties } from "@/components/FeaturedProperties";
import { ValuationCTA } from "@/components/ValuationCTA";
import {
  createWhatsappUrl,
  getFeaturedProperties,
  getHomePage,
  getServiceAreas,
  getServices,
  getSiteSettings
} from "@/lib/sanity.queries";

export const revalidate = 60;

export default async function HomePage() {
  const [homePage, settings, services, serviceAreas, featuredProperties] =
    await Promise.all([
      getHomePage(),
      getSiteSettings(),
      getServices(),
      getServiceAreas(),
      getFeaturedProperties()
    ]);
  const whatsappUrl = createWhatsappUrl(settings.whatsappNumber);
  const heroStyle = homePage.heroImageUrl
    ? {
        backgroundImage: `url("${homePage.heroImageUrl}")`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      }
    : undefined;

  return (
    <>
      <section className="relative min-h-[760px] overflow-hidden bg-navy pt-28 text-white">
        <div
          className={`absolute inset-0 opacity-90 ${
            homePage.heroImageUrl ? "" : "mediterranean-photo"
          }`}
          style={heroStyle}
        />
        <div className="absolute inset-0 bg-navy/55" />
        <div className="container-page relative z-10 grid min-h-[640px] items-center">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.22em] text-sand">
              {homePage.heroEyebrow}
            </p>
            <h1 className="text-5xl font-bold leading-tight md:text-7xl">
              {homePage.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/90">
              {homePage.heroSubtitle}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                className="rounded-md bg-gold px-6 py-4 text-center font-semibold text-white shadow-premium"
                href="/immobili"
              >
                {homePage.primaryButtonText}
              </Link>
              <a
                className="rounded-md bg-whatsapp px-6 py-4 text-center font-semibold text-white shadow-premium"
                href={whatsappUrl}
              >
                {homePage.secondaryButtonText}
              </a>
            </div>
          </div>
        </div>
      </section>

      <FeaturedProperties
        properties={featuredProperties}
        title={homePage.featuredSectionTitle}
        subtitle={homePage.featuredSectionSubtitle}
        whatsappUrl={whatsappUrl}
      />

      <section className="section-pad bg-sand-light">
        <div className="container-page grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Servizi
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight text-navy md:text-5xl">
              {homePage.servicesTitle}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-ink/80">
              {homePage.servicesSubtitle}
            </p>
            <blockquote className="mt-8 border-l-4 border-gold pl-5 text-xl font-semibold leading-8 text-navy">
              {settings.emotionalQuote}
            </blockquote>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="rounded-lg bg-white p-6 shadow-soft">
                <h3 className="text-lg font-bold text-navy">{service.title}</h3>
                <p className="mt-3 leading-7 text-ink/65">{service.description}</p>
              </article>
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
              Presenza locale sulla costa tirrenica
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3 lg:grid-cols-4">
            {serviceAreas.map((area) => (
              <div key={area.slug} className="rounded-lg bg-mist p-6 text-center">
                <h3 className="text-xl font-bold text-navy">{area.name}</h3>
                {area.province ? (
                  <p className="mt-2 text-sm text-ink/60">{area.province}</p>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <ValuationCTA
        title={homePage.valuationCtaTitle}
        text={homePage.valuationCtaText}
        whatsappUrl={whatsappUrl}
      />
    </>
  );
}

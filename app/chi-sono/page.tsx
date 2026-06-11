import type { Metadata } from "next";
import Link from "next/link";
import { ValuationCTA } from "@/components/ValuationCTA";
import {
  createWhatsappUrl,
  getAboutPage,
  getSiteSettings
} from "@/lib/sanity.queries";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const [page, settings] = await Promise.all([getAboutPage(), getSiteSettings()]);

  return {
    title: `Chi sono - ${settings.brandName}`,
    description: page.biography.slice(0, 160)
  };
}

export default async function AboutPage() {
  const [page, settings] = await Promise.all([getAboutPage(), getSiteSettings()]);
  const whatsappUrl = createWhatsappUrl(settings.whatsappNumber);
  const profileStyle = page.profileImageUrl
    ? {
        backgroundImage: `url("${page.profileImageUrl}")`,
        backgroundPosition: "center",
        backgroundSize: "cover"
      }
    : undefined;

  return (
    <>
      <section className="bg-sand-light pt-28">
        <div className="container-page grid gap-12 py-20 lg:grid-cols-[500px_1fr] lg:items-center">
          <div
            aria-label={`Foto di ${settings.brandName}`}
            className="profile-photo-slot h-[520px] rounded-lg shadow-premium"
            style={profileStyle}
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              {page.subtitle}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-navy md:text-6xl">
              {page.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink/80">{page.biography}</p>
            <a
              className="mt-8 inline-flex rounded-md bg-whatsapp px-6 py-4 font-semibold text-white shadow-premium"
              href={whatsappUrl}
            >
              Contattami su WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {[page.experienceText, page.licenseText, page.territoryText].map(
            (text, index) => (
              <article key={text} className="rounded-lg bg-mist p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gold">
                  {["Esperienza", "Abilitazione", "Territorio"][index]}
                </p>
                <p className="mt-4 leading-7 text-ink/75">{text}</p>
              </article>
            )
          )}
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-4xl font-bold text-navy">
            Esperienza professionale
          </h2>
          <div className="mx-auto mt-12 max-w-4xl">
            {page.timeline.map((item, index) => (
              <div key={`${item.year}-${item.title}`} className="grid grid-cols-[56px_1fr] gap-6">
                <div className="relative flex justify-center">
                  <span className="mt-2 h-6 w-6 rounded-full bg-gold" />
                  {index < page.timeline.length - 1 ? (
                    <span className="absolute top-10 h-full w-px bg-sand" />
                  ) : null}
                </div>
                <div className="mb-6 rounded-lg bg-white p-6 shadow-soft">
                  <p className="font-semibold text-gold">{item.year}</p>
                  <h3 className="mt-2 text-2xl font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-ink/70">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-light py-14">
        <div className="container-page grid gap-4 md:grid-cols-4">
          {page.values.map((value) => (
            <div
              key={value}
              className="rounded-lg bg-white p-6 text-center font-bold text-navy shadow-soft"
            >
              {value}
            </div>
          ))}
        </div>
      </section>

      <ValuationCTA
        title="Vuoi vendere o acquistare casa?"
        text={settings.emotionalQuote}
        whatsappUrl={whatsappUrl}
      >
        <Link
          className="rounded-md bg-white px-6 py-4 font-semibold text-navy"
          href="/contatti"
        >
          Richiedi una valutazione
        </Link>
      </ValuationCTA>
    </>
  );
}

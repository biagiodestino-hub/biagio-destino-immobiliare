import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import {
  createWhatsappUrl,
  getContactPage,
  getSiteSettings
} from "@/lib/sanity.queries";

export const revalidate = 60;

export async function generateMetadata(): Promise<Metadata> {
  const [page, settings] = await Promise.all([getContactPage(), getSiteSettings()]);

  return {
    title: `Contatti - ${settings.brandName}`,
    description: page.subtitle
  };
}

export default async function ContactPage() {
  const [page, settings] = await Promise.all([getContactPage(), getSiteSettings()]);
  const whatsappUrl = createWhatsappUrl(settings.whatsappNumber);
  const telHref = `tel:${settings.phone.replace(/[^\d+]/g, "")}`;

  return (
    <>
      <section className="bg-sand-light pb-16 pt-32">
        <div className="container-page text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Contatti
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-bold leading-tight text-navy">
            {page.title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/75">
            {page.subtitle}
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <ContactForm title={page.formTitle} subtitle={page.formSubtitle} />
          <aside className="space-y-6">
            <div className="rounded-lg bg-white p-8 shadow-premium">
              <h2 className="text-3xl font-bold text-navy">Contatti diretti</h2>
              <p className="mt-4 leading-7 text-ink/70">{page.contactText}</p>
              <div className="mt-6 space-y-4 text-ink/75">
                <p>
                  <strong>Telefono:</strong> <a href={telHref}>{settings.phone}</a>
                </p>
                <p>
                  <strong>WhatsApp:</strong> <a href={whatsappUrl}>scrivi a Biagio</a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href={`mailto:${settings.email}`}>{settings.email}</a>
                </p>
                <p>
                  <strong>Ufficio:</strong> {settings.officeAddress}
                </p>
                {settings.facebookUrl ? (
                  <p>
                    <strong>Facebook:</strong>{" "}
                    <a href={settings.facebookUrl}>pagina ufficiale</a>
                  </p>
                ) : null}
                {settings.instagramUrl ? (
                  <p>
                    <strong>Instagram:</strong>{" "}
                    <a href={settings.instagramUrl}>profilo ufficiale</a>
                  </p>
                ) : null}
              </div>
            </div>
            <div className="rounded-lg bg-mist p-8">
              <h3 className="text-2xl font-bold text-navy">Ufficio</h3>
              <p className="mt-4 leading-7 text-ink/70">{settings.officeAddress}</p>
              <a
                className="mt-6 inline-flex rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white"
                href={page.mapUrl}
              >
                Apri la mappa
              </a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

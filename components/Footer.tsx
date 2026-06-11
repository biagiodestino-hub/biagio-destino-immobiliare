import Link from "next/link";
import {
  createWhatsappUrl,
  getServices,
  getSiteSettings
} from "@/lib/sanity.queries";

export async function Footer() {
  const [settings, services] = await Promise.all([
    getSiteSettings(),
    getServices()
  ]);
  const telHref = `tel:${settings.phone.replace(/[^\d+]/g, "")}`;
  const whatsappUrl = createWhatsappUrl(settings.whatsappNumber);

  return (
    <footer className="bg-navy py-14 text-white">
      <div className="container-page grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <h2 className="text-2xl font-bold">{settings.brandName}</h2>
          <p className="mt-4 max-w-sm leading-7 text-white/75">
            {settings.defaultSeoDescription}
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-sand">Navigazione</h3>
          <div className="mt-4 grid gap-2 text-white/75">
            <Link href="/">Home</Link>
            <Link href="/immobili">Immobili</Link>
            <Link href="/chi-sono">Chi sono</Link>
            <Link href="/contatti">Contatti</Link>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-sand">Contatti</h3>
          <div className="mt-4 grid gap-2 text-white/75">
            <a href={telHref}>{settings.phone}</a>
            <a href={whatsappUrl}>WhatsApp</a>
            <a href={`mailto:${settings.email}`}>{settings.email}</a>
            <span>{settings.officeAddress}</span>
            {settings.facebookUrl ? <a href={settings.facebookUrl}>Facebook</a> : null}
            {settings.instagramUrl ? <a href={settings.instagramUrl}>Instagram</a> : null}
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-sand">Servizi</h3>
          <div className="mt-4 grid gap-2 text-white/75">
            {services.map((service) => (
              <span key={service.title}>{service.title}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

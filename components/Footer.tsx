import Link from "next/link";
import {
  brandName,
  email,
  facebookUrl,
  officeAddress,
  phoneDisplay,
  services,
  whatsappUrl
} from "@/lib/site";

export function Footer() {
  const telHref = `tel:${phoneDisplay.replace(/\s/g, "")}`;

  return (
    <footer className="bg-navy py-14 text-white">
      <div className="container-page grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <h2 className="text-2xl font-bold">{brandName}</h2>
          <p className="mt-4 max-w-sm leading-7 text-white/75">
            Compravendite, valutazioni e consulenza immobiliare tra Cefalù e
            Capo d'Orlando.
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
            <a href={telHref}>{phoneDisplay}</a>
            <a href={whatsappUrl}>WhatsApp</a>
            <a href={`mailto:${email}`}>{email}</a>
            <span>{officeAddress}</span>
            <a href={facebookUrl}>Facebook</a>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-sand">Servizi</h3>
          <div className="mt-4 grid gap-2 text-white/75">
            {services.map((service) => (
              <span key={service}>{service}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

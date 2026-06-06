import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import {
  email,
  facebookUrl,
  officeAddress,
  phoneDisplay,
  serviceAreas,
  whatsappUrl
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Contatti - Biagio Destino Immobiliare",
  description:
    "Contatta Biagio Destino Immobiliare a Cefalù per compravendite, valutazioni immobiliari e consulenza tra Cefalù e Capo d'Orlando."
};

export default function ContactPage() {
  const telHref = `tel:${phoneDisplay.replace(/\s/g, "")}`;

  return (
    <>
      <section className="bg-sand-light pb-16 pt-32">
        <div className="container-page text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Contatti
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-bold leading-tight text-navy">
            Parliamo del tuo progetto immobiliare.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/75">
            Compila il modulo o scrivimi direttamente su WhatsApp per acquistare,
            vendere o richiedere una valutazione immobiliare.
          </p>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_0.85fr]">
          <ContactForm />
          <aside className="space-y-6">
            <div className="rounded-lg bg-white p-8 shadow-premium">
              <h2 className="text-3xl font-bold text-navy">Contatti diretti</h2>
              <div className="mt-6 space-y-4 text-ink/75">
                <p><strong>Telefono:</strong> <a href={telHref}>{phoneDisplay}</a></p>
                <p><strong>WhatsApp:</strong> <a href={whatsappUrl}>scrivi a Biagio</a></p>
                <p><strong>Email:</strong> <a href={`mailto:${email}`}>{email}</a></p>
                <p><strong>Ufficio:</strong> {officeAddress}</p>
                <p><strong>Facebook:</strong> <a href={facebookUrl}>pagina ufficiale</a></p>
              </div>
            </div>
            <div className="rounded-lg bg-mist p-8">
              <h3 className="text-2xl font-bold text-navy">Ufficio a Cefalù</h3>
              <p className="mt-4 leading-7 text-ink/70">{officeAddress}</p>
              <a
                className="mt-6 inline-flex rounded-md bg-navy px-5 py-3 text-sm font-semibold text-white"
                href="https://www.google.com/maps/search/?api=1&query=Via%20Roma%2037%2C%20Cefal%C3%B9"
              >
                Apri la mappa
              </a>
            </div>
            <div className="rounded-lg bg-navy p-8 text-white">
              <h3 className="text-2xl font-bold">Vuoi vendere casa?</h3>
              <p className="mt-3 text-white/80">
                Richiedi una valutazione e scopri un piano marketing
                personalizzato per il tuo immobile.
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-sand">
                {serviceAreas.slice(0, 3).join(" · ")}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

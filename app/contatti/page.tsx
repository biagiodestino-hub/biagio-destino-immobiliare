import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contatti - Valutazione gratuita immobile",
  description:
    "Contatta Biagio Destino Immobiliare per vendere casa in Sicilia, richiedere una valutazione gratuita o informazioni sugli immobili in vendita."
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-sand-light pb-16 pt-32">
        <div className="container-page text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Contatti
          </p>
          <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-bold leading-tight text-navy">
            Parliamo del tuo progetto immobiliare
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink/75">
            Compila il modulo o scrivimi direttamente su WhatsApp per acquistare,
            vendere o richiedere una valutazione gratuita.
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
                <p><strong>Telefono:</strong> +39 333 000 0000</p>
                <p><strong>WhatsApp:</strong> risposta rapida</p>
                <p><strong>Email:</strong> info@biagiodestino.it</p>
              </div>
            </div>
            <div className="rounded-lg bg-mist p-8">
              <h3 className="text-2xl font-bold text-navy">Mappa</h3>
              <div className="mt-6 h-72 rounded-lg bg-gradient-to-br from-stone to-sand-light" />
            </div>
            <div className="rounded-lg bg-navy p-8 text-white">
              <h3 className="text-2xl font-bold">Vuoi vendere casa?</h3>
              <p className="mt-3 text-white/80">
                Richiedi una valutazione gratuita e scopri il valore reale del tuo immobile.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ValuationCTA } from "@/components/ValuationCTA";
import { whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chi sono - Agente immobiliare in Sicilia",
  description:
    "Biagio Destino, agente immobiliare in Sicilia dal 2011. Consulenza, trattative, marketing immobiliare digitale e valorizzazione degli immobili."
};

const values = ["Fiducia", "Trasparenza", "Rapidita", "Conoscenza locale"];

const timeline = [
  ["2011", "Italcase Messina", "Consulente immobiliare"],
  ["2012", "RE/MAX Quattropareti", "Consulente immobiliare"],
  ["2012 - 2021", "Gagliardomoney", "Consulente e vice responsabile ufficio"],
  ["2022 - Oggi", "Gabetti Cefalu", "Agente immobiliare senior"]
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-sand-light pt-28">
        <div className="container-page grid gap-12 py-20 lg:grid-cols-[500px_1fr] lg:items-center">
          <div className="profile-placeholder h-[520px] rounded-lg shadow-premium" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Agente immobiliare in Sicilia
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-navy md:text-6xl">
              Esperienza immobiliare, conoscenza del territorio e consulenza reale.
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink/80">
              Dal 2011 accompagno clienti nella vendita, acquisto e valorizzazione
              di immobili in Sicilia, con un approccio professionale, trasparente
              e orientato ai risultati.
            </p>
            <a className="mt-8 inline-flex rounded-md bg-whatsapp px-6 py-4 font-semibold text-white shadow-premium" href={whatsappUrl}>
              Contattami su WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Chi sono
            </p>
            <h2 className="mt-4 text-4xl font-bold text-navy">Mi chiamo Biagio Destino</h2>
            <p className="mt-6 text-lg leading-8 text-ink/80">
              Ho 49 anni e opero nel settore immobiliare dal 2011 come agente
              immobiliare abilitato presso la Camera di Commercio di Messina.
              Ho maturato competenze concrete nella gestione trattative,
              acquisizione immobili, consulenza per venditori e acquirenti,
              marketing immobiliare e gestione pratiche fino al rogito.
            </p>
          </div>
          <div className="grid gap-3">
            {["Immobili vista mare", "Proprieta turistiche", "Investimenti", "Case da ristrutturare", "Seconde case"].map((item) => (
              <div key={item} className="rounded-full border border-sand bg-sand-light px-5 py-3 font-semibold text-navy">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-mist">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Metodo
            </p>
            <h2 className="mt-4 text-4xl font-bold text-navy">Il mio approccio</h2>
            <p className="mt-5 text-lg leading-8 text-ink/75">
              Ogni immobile ha una storia e un potenziale da valorizzare con
              attenzione, strategia e strumenti digitali moderni.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["Trasparenza e attenzione", "Marketing immobiliare digitale", "Virtual tour 360 e video"].map((item) => (
              <div key={item} className="rounded-lg bg-white p-8 shadow-soft">
                <h3 className="text-2xl font-bold text-navy">{item}</h3>
                <p className="mt-4 leading-7 text-ink/65">
                  Supporto costante e strumenti moderni per valorizzare ogni
                  immobile e velocizzare la vendita.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-page">
          <h2 className="text-center text-4xl font-bold text-navy">Esperienza professionale</h2>
          <div className="mx-auto mt-12 max-w-4xl">
            {timeline.map(([year, company, role], index) => (
              <div key={company} className="grid grid-cols-[56px_1fr] gap-6">
                <div className="relative flex justify-center">
                  <span className="mt-2 h-6 w-6 rounded-full bg-gold" />
                  {index < timeline.length - 1 ? <span className="absolute top-10 h-full w-px bg-sand" /> : null}
                </div>
                <div className="mb-6 rounded-lg bg-white p-6 shadow-soft">
                  <p className="font-semibold text-gold">{year}</p>
                  <h3 className="mt-2 text-2xl font-bold text-navy">{company}</h3>
                  <p className="mt-2 text-ink/70">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand-light py-14">
        <div className="container-page grid gap-4 md:grid-cols-4">
          {values.map((value) => (
            <div key={value} className="rounded-lg bg-white p-6 text-center font-bold text-navy shadow-soft">
              {value}
            </div>
          ))}
        </div>
      </section>

      <ValuationCTA
        title="Vuoi vendere o acquistare un immobile in Sicilia?"
        text="Affidati a un professionista con esperienza reale sul territorio e una strategia moderna di valorizzazione immobiliare."
      >
        <Link className="rounded-md bg-white px-6 py-4 font-semibold text-navy" href="/contatti">
          Richiedi una valutazione gratuita
        </Link>
      </ValuationCTA>
    </>
  );
}

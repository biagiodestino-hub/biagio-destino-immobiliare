import type { Metadata } from "next";
import Link from "next/link";
import { ValuationCTA } from "@/components/ValuationCTA";
import { aboutText, emotionalQuote, serviceAreas, services, whatsappUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Chi sono - Biagio Destino",
  description:
    "Biagio Destino lavora nel settore immobiliare dal 2011 tra Cefalù e Capo d'Orlando. Dal 2021 è abilitato come Agente d'Affari in Mediazione."
};

const values = ["Fiducia", "Trasparenza", "Dedizione", "Conoscenza locale"];

const timeline = [
  ["2011", "Ingresso nel settore immobiliare", "Inizio del percorso professionale con venditori e acquirenti."],
  ["2021", "Abilitazione professionale", "Abilitazione alla professione di Agente d'Affari in Mediazione."],
  ["Oggi", "Cefalù e Capo d'Orlando", "Consulenza immobiliare locale con accompagnamento fino al rogito."]
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-sand-light pt-28">
        <div className="container-page grid gap-12 py-20 lg:grid-cols-[500px_1fr] lg:items-center">
          <div
            aria-label="Foto di Biagio Destino"
            className="profile-photo-slot h-[520px] rounded-lg shadow-premium"
          />
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
              Agente immobiliare tra Cefalù e Capo d'Orlando
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-navy md:text-6xl">
              Conoscenza del territorio, ascolto e presenza in ogni fase.
            </h1>
            <p className="mt-6 text-lg leading-8 text-ink/80">
              {aboutText}
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
              Sono di Sant'Agata di Militello e lavoro ogni giorno con l'obiettivo
              di rendere compravendite e valutazioni più chiare, concrete e
              sostenute da un rapporto di fiducia. Per me ogni casa porta con sé
              una scelta importante: venderla o acquistarla significa aprire un
              nuovo capitolo.
            </p>
            <blockquote className="mt-8 border-l-4 border-gold pl-5 text-xl font-semibold leading-8 text-navy">
              {emotionalQuote}
            </blockquote>
          </div>
          <div className="grid gap-3">
            {serviceAreas.slice(0, 5).map((item) => (
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
              Ogni immobile ha una storia, un valore e un pubblico possibile. Il
              mio lavoro è mettere insieme analisi, comunicazione e gestione
              pratica per arrivare alla vendita con metodo.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.slice(0, 3).map((item) => (
              <div key={item} className="rounded-lg bg-white p-8 shadow-soft">
                <h3 className="text-2xl font-bold text-navy">{item}</h3>
                <p className="mt-4 leading-7 text-ink/65">
                  Supporto concreto, comunicazione chiara e attenzione ai
                  passaggi decisivi della compravendita.
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
        title="Vuoi vendere o acquistare tra Cefalù e Capo d'Orlando?"
        text="Affidati a un professionista con esperienza reale sul territorio e un piano marketing personalizzato."
      >
        <Link className="rounded-md bg-white px-6 py-4 font-semibold text-navy" href="/contatti">
          Richiedi una valutazione
        </Link>
      </ValuationCTA>
    </>
  );
}

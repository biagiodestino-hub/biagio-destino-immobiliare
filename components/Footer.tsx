import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy py-14 text-white">
      <div className="container-page grid gap-10 md:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr]">
        <div>
          <h2 className="text-2xl font-bold">Biagio Destino Immobiliare</h2>
          <p className="mt-4 max-w-sm leading-7 text-white/75">
            Immobili selezionati, case vista mare e consulenza immobiliare
            moderna in Sicilia.
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
            <span>+39 333 000 0000</span>
            <span>WhatsApp</span>
            <span>info@biagiodestino.it</span>
          </div>
        </div>
        <div>
          <h3 className="font-semibold text-sand">Specializzazioni</h3>
          <div className="mt-4 grid gap-2 text-white/75">
            <span>Vista mare</span>
            <span>Investimenti</span>
            <span>Seconde case</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

import type { ComponentType } from "react";
import config from "@/sanity.config";

export const dynamic = "force-dynamic";

type StudioModule = {
  NextStudio: ComponentType<{ config: typeof config }>;
};

async function loadStudioModule() {
  try {
    const importModule = new Function("specifier", "return import(specifier)") as (
      specifier: string
    ) => Promise<StudioModule>;

    return await importModule("next-sanity/studio");
  } catch {
    return null;
  }
}

export default async function StudioPage() {
  const studioModule = await loadStudioModule();

  if (!studioModule) {
    return (
      <main className="min-h-screen bg-sand-light px-6 py-24 text-navy">
        <div className="mx-auto max-w-2xl rounded-lg bg-white p-8 shadow-premium">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Sanity Studio
          </p>
          <h1 className="mt-4 text-4xl font-bold">Studio non ancora disponibile</h1>
          <p className="mt-5 leading-7 text-ink/75">
            Installa le dipendenze Sanity e configura le variabili ambiente per
            attivare il pannello CMS integrato in questa route.
          </p>
        </div>
      </main>
    );
  }

  const { NextStudio } = studioModule;
  return <NextStudio config={config} />;
}

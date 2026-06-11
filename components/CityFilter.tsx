"use client";

import { useMemo, useState } from "react";
import type { Property } from "@/lib/sanity.queries";
import { PropertyCard } from "@/components/PropertyCard";

type CityFilterProps = {
  cities: string[];
  properties: Property[];
};

export function CityFilter({ cities, properties }: CityFilterProps) {
  const [selectedCity, setSelectedCity] = useState("Tutti");
  const filteredProperties = useMemo(
    () =>
      selectedCity === "Tutti"
        ? properties
        : properties.filter((property) => property.city === selectedCity),
    [properties, selectedCity]
  );

  return (
    <>
      <div className="mb-10 flex flex-wrap gap-3 border-y border-stone py-5">
        {["Tutti", ...cities].map((city) => {
          const active = selectedCity === city;

          return (
            <button
              key={city}
              className={`rounded-md px-4 py-3 text-sm font-semibold transition ${
                active
                  ? "bg-navy text-white"
                  : "bg-mist text-navy hover:bg-sand-light"
              }`}
              onClick={() => setSelectedCity(city)}
              type="button"
            >
              {city}
            </button>
          );
        })}
      </div>

      {filteredProperties.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProperties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      ) : (
        <div className="border-y border-sand py-16 text-center">
          <h2 className="text-3xl font-bold text-navy">
            Nessun immobile disponibile al momento.
          </h2>
          <p className="mt-4 text-lg text-ink/70">
            Torna presto per nuove proposte immobiliari.
          </p>
        </div>
      )}
    </>
  );
}

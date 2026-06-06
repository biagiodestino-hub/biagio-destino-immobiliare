import Link from "next/link";
import type { Property } from "@/data/properties";

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  const coverImage = property.images[0];

  return (
    <article className="overflow-hidden rounded-lg border border-stone bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-premium">
      <div
        aria-label={`Foto immobile ${property.title}`}
        className="property-photo-placeholder h-56"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(9, 31, 56, 0.08), rgba(9, 31, 56, 0.42)), url(${coverImage})`
        }}
      />
      <div className="p-6">
        <div className="flex flex-wrap gap-2">
          {property.badges.map((badge) => (
            <span key={badge} className="inline-flex rounded-full bg-gold px-3 py-2 text-xs font-bold text-white">
              {badge}
            </span>
          ))}
        </div>
        <p className="mt-4 text-2xl font-bold text-navy">{property.price}</p>
        <h2 className="mt-3 text-xl font-bold text-ink">{property.title}</h2>
        <p className="mt-2 text-sm font-medium text-ink/60">{property.location}</p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-ink">
          <span>{property.squareMetersLabel}</span>
          <span>{property.roomsLabel}</span>
          <span>{property.bathroomsLabel}</span>
        </div>
        <Link
          href={`/immobili/${property.slug}`}
          className="mt-6 inline-flex rounded-md border border-navy px-5 py-3 text-sm font-semibold text-navy"
        >
          Scopri di più
        </Link>
      </div>
    </article>
  );
}

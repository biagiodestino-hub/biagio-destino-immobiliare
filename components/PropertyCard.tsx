import Link from "next/link";
import type { Property } from "@/data/properties";

type PropertyCardProps = {
  property: Property;
};

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="overflow-hidden rounded-lg border border-stone bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-premium">
      <div className="mediterranean-photo h-56" />
      <div className="p-6">
        <span className="inline-flex rounded-full bg-gold px-3 py-2 text-xs font-bold text-white">
          {property.badge}
        </span>
        <p className="mt-4 text-2xl font-bold text-navy">{property.price}</p>
        <h2 className="mt-3 text-xl font-bold text-ink">{property.title}</h2>
        <p className="mt-2 text-sm font-medium text-ink/60">
          {property.location}, {property.province}
        </p>
        <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-ink">
          <span>{property.squareMeters} mq</span>
          <span>{property.rooms} camere</span>
          <span>{property.bathrooms} bagni</span>
        </div>
        <Link
          href={`/immobili/${property.slug}`}
          className="mt-6 inline-flex rounded-md border border-navy px-5 py-3 text-sm font-semibold text-navy"
        >
          Scopri di piu
        </Link>
      </div>
    </article>
  );
}

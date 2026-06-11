"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavbarClientProps = {
  brandName: string;
  logoUrl: string;
  whatsappUrl: string;
};

const items = [
  { href: "/", label: "Home" },
  { href: "/immobili", label: "Immobili" },
  { href: "/contatti", label: "Valuta il tuo immobile" },
  { href: "/chi-sono", label: "Chi sono" },
  { href: "/contatti", label: "Contatti" }
];

export function NavbarClient({
  brandName,
  logoUrl,
  whatsappUrl
}: NavbarClientProps) {
  const pathname = usePathname();
  const words = brandName.trim().split(/\s+/);
  const secondaryName = words.length > 1 ? words.pop() : "";
  const primaryName = words.join(" ") || brandName;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone/70 bg-white/95 shadow-soft backdrop-blur">
      <nav className="container-page flex h-20 items-center justify-between gap-8">
        <Link href="/" className="shrink-0" aria-label={brandName}>
          {logoUrl ? (
            <img
              alt={brandName}
              className="h-12 w-auto max-w-[220px] object-contain"
              src={logoUrl}
            />
          ) : (
            <>
              <span className="block text-xl font-bold leading-none text-navy">
                {primaryName}
              </span>
              <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                {secondaryName}
              </span>
            </>
          )}
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {items.map((item) => {
            const active =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className={`text-sm font-medium transition ${
                  active ? "text-gold" : "text-ink hover:text-navy"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <a
          className="hidden rounded-md bg-whatsapp px-5 py-3 text-sm font-semibold text-white lg:inline-flex"
          href={whatsappUrl}
        >
          WhatsApp
        </a>
        <span className="text-sm font-semibold text-navy lg:hidden">Menu</span>
      </nav>
    </header>
  );
}

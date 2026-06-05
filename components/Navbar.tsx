"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { whatsappUrl } from "@/lib/site";

const items = [
  { href: "/", label: "Home" },
  { href: "/immobili", label: "Immobili" },
  { href: "/contatti", label: "Valuta il tuo immobile" },
  { href: "/chi-sono", label: "Chi sono" },
  { href: "/contatti", label: "Contatti" }
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stone/70 bg-white/95 shadow-soft backdrop-blur">
      <nav className="container-page flex h-20 items-center justify-between gap-8">
        <Link href="/" className="shrink-0">
          <span className="block text-xl font-bold leading-none text-navy">Biagio Destino</span>
          <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            Immobiliare
          </span>
        </Link>
        <div className="hidden items-center gap-7 lg:flex">
          {items.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={`${item.href}-${item.label}`}
                href={item.href}
                className={`text-sm font-medium transition ${active ? "text-gold" : "text-ink hover:text-navy"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <a className="hidden rounded-md bg-whatsapp px-5 py-3 text-sm font-semibold text-white lg:inline-flex" href={whatsappUrl}>
          WhatsApp
        </a>
        <span className="text-sm font-semibold text-navy lg:hidden">Menu</span>
      </nav>
    </header>
  );
}

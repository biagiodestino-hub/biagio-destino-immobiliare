import { createWhatsappUrl, getSiteSettings } from "@/lib/sanity.queries";
import { NavbarClient } from "./NavbarClient";

export async function Navbar() {
  const settings = await getSiteSettings();

  return (
    <NavbarClient
      brandName={settings.brandName}
      logoUrl={settings.logoUrl}
      whatsappUrl={createWhatsappUrl(settings.whatsappNumber)}
    />
  );
}

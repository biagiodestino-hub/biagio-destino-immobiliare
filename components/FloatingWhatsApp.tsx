import { createWhatsappUrl, getSiteSettings } from "@/lib/sanity.queries";

export async function FloatingWhatsApp() {
  const settings = await getSiteSettings();

  return (
    <a
      href={createWhatsappUrl(settings.whatsappNumber)}
      aria-label={`Contatta ${settings.brandName} su WhatsApp al ${settings.phone}`}
      className="fixed bottom-5 right-5 z-50 rounded-full bg-whatsapp px-5 py-4 text-sm font-bold text-white shadow-premium"
    >
      WhatsApp
    </a>
  );
}

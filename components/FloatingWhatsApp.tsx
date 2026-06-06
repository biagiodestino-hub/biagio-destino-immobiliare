import { phoneDisplay, whatsappUrl } from "@/lib/site";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl}
      aria-label={`Contatta Biagio Destino su WhatsApp al ${phoneDisplay}`}
      className="fixed bottom-5 right-5 z-50 rounded-full bg-whatsapp px-5 py-4 text-sm font-bold text-white shadow-premium"
    >
      WhatsApp
    </a>
  );
}

import {
  Phone,
  MessageCircle,
} from "lucide-react";

import { SITE } from "../../config";

export default function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">

      {/* Call Button */}

      <a
        href={`tel:${SITE.contact.phoneDigits}`}
        aria-label="Call Now"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0A2E63] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#164A92]"
      >
        <Phone size={24} />
      </a>

      {/* WhatsApp Button */}

      <a
        href={`https://wa.me/${SITE.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-green-700"
      >
        <MessageCircle size={24} />
      </a>
          </div>
  );
}

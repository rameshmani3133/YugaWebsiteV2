import { useEffect, useState } from "react";
import {
  Phone,
  MessageCircle,
  ChevronUp,
} from "lucide-react";

import { SITE } from "../../config";

export default function FloatingActions() {

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setShowTop(window.scrollY > 300);

    };

    window.addEventListener("scroll", handleScroll);

    return () => {

      window.removeEventListener("scroll", handleScroll);

    };

  }, []);

  const scrollToTop = () => {

    window.scrollTo({

      top: 0,

      behavior: "smooth",

    });

  };

  return (

    <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-4">

      {/* Call */}

      <a
        href={`tel:${SITE.contact.phoneDigits}`}
        aria-label="Call Now"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0A2E63] text-white shadow-xl transition hover:scale-110 hover:bg-[#164A92]"
      >

        <Phone size={24} />

      </a>

      {/* WhatsApp */}

      <a
        href={`https://wa.me/${SITE.contact.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-xl transition hover:scale-110 hover:bg-green-700"
      >

        <MessageCircle size={24} />

      </a>

      {/* Go To Top */}

      {showTop && (

        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to Top"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37] text-white shadow-xl transition hover:scale-110 hover:bg-yellow-600"
        >

          <ChevronUp size={24} />

        </button>

      )}

    </div>

  );

}
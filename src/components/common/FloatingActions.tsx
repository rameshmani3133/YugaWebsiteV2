import { useEffect, useState } from "react";
import {
  Phone,
  Mail,
  MessageCircle,
  ArrowUp,
} from "lucide-react";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

      <a
        href="tel:+919940944985"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0A2E63] text-white shadow-lg transition hover:scale-110"
        title="Call Us"
      >
        <Phone size={22} />
      </a>

      <a
        href="https://wa.me/919940944985"
        target="_blank"
        rel="noreferrer"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition hover:scale-110"
        title="WhatsApp"
      >
        <MessageCircle size={22} />
      </a>

      <a
        href="mailto:info@yugadocument.in"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-red-500 text-white shadow-lg transition hover:scale-110"
        title="Email"
      >
        <Mail size={22} />
      </a>

      {showTop && (
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="flex h-14 w-14 items-center justify-center rounded-full bg-yellow-500 text-white shadow-lg transition hover:scale-110"
          title="Back to Top"
        >
          <ArrowUp size={22} />
        </button>
      )}
    </div>
  );
}
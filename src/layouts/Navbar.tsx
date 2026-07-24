import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
} from "lucide-react";
import { NavLink } from "react-router-dom";

import {
  SITE,
  NAVIGATION,
  IMAGES,
} from "../config";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* =========================
          TOP BAR
      ========================== */}

      <div className="bg-[#0A2E63] text-white">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">

          <div className="flex flex-wrap gap-6">

            <a
              href={`tel:${SITE.contact.phoneDigits}`}
              className="transition hover:text-yellow-300"
            >
              📞 {SITE.contact.phone}
            </a>

            <a
              href={`mailto:${SITE.contact.email}`}
              className="transition hover:text-yellow-300"
            >
              ✉ {SITE.contact.email}
            </a>

          </div>

          <div className="hidden md:block">

            {SITE.timings.workingDays}

            {" | "}

            {SITE.timings.workingHours}

          </div>

        </div>

      </div>

      {/* =========================
          MAIN NAVBAR
      ========================== */}

      <header className="sticky top-0 z-50 bg-white shadow-lg">

        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* =========================
              LOGO
          ========================== */}

          <NavLink
            to="/"
            className="flex items-center gap-4"
          >

            <img
              src={IMAGES.logo}
              alt={SITE.shortName}
              className="h-14 w-14 object-contain"
            />

            <div>

              <h1 className="text-lg font-bold text-[#0A2E63]">

                {SITE.branding.line1}

              </h1>

              <p className="text-xs tracking-wide text-slate-500">

                {SITE.branding.line2}

              </p>

            </div>

          </NavLink>

          {/* =========================
              DESKTOP MENU
          ========================== */}

          <nav className="hidden gap-8 lg:flex">

                      {NAVIGATION.map((menu) => (

              <NavLink
                key={menu.path}
                to={menu.path}
                className={({ isActive }) =>
                  `font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-[#0A2E63]"
                      : "text-slate-700 hover:text-[#D4AF37]"
                  }`
                }
              >
                {menu.title}
              </NavLink>

            ))}

          </nav>

          {/* =========================
              DESKTOP ACTIONS
          ========================== */}

          <div className="hidden items-center gap-3 lg:flex">

            <a
              href={`tel:${SITE.contact.phoneDigits}`}
              className="rounded-lg bg-[#0A2E63] p-3 text-white transition duration-300 hover:bg-[#164A92]"
              aria-label="Call Now"
            >
              <Phone size={20} />
            </a>

            <a
              href={`https://wa.me/${SITE.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-green-600 p-3 text-white transition duration-300 hover:bg-green-700"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>

          </div>

          {/* =========================
              MOBILE MENU BUTTON
          ========================== */}

          <button
            type="button"
            className="rounded-md p-2 transition hover:bg-slate-100 lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? (
              <X size={30} />
            ) : (
              <Menu size={30} />
            )}
          </button>

        </div>

        {/* =========================
            MOBILE MENU
        ========================== */}

        {mobileOpen && (

          <div className="border-t bg-white shadow-lg lg:hidden">

            <nav className="flex flex-col">
              
                            {NAVIGATION.map((menu) => (

                <NavLink
                  key={menu.path}
                  to={menu.path}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `border-b px-6 py-4 font-medium transition-colors duration-300 ${
                      isActive
                        ? "bg-blue-50 text-[#0A2E63]"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#0A2E63]"
                    }`
                  }
                >
                  {menu.title}
                </NavLink>

              ))}

              {/* =========================
                  MOBILE ACTION BUTTONS
              ========================== */}

              <div className="flex gap-4 p-6">

                <a
                  href={`tel:${SITE.contact.phoneDigits}`}
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#0A2E63] px-4 py-3 text-white transition duration-300 hover:bg-[#164A92]"
                >
                  <Phone size={18} />

                  <span>Call</span>

                </a>

                <a
                  href={`https://wa.me/${SITE.contact.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-3 text-white transition duration-300 hover:bg-green-700"
                >
                  <MessageCircle size={18} />

                  <span>WhatsApp</span>

                </a>

              </div>

            </nav>

          </div>

        )}

      </header>
          </>
  );
}

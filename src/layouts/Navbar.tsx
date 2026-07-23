import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { NavLink } from "react-router-dom";

const menus = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Services", path: "/services" },
  { title: "Gallery", path: "/gallery" },
  { title: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0A2E63] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 text-sm">
          <div className="flex flex-wrap gap-6">
            <a href="tel:+919940944985" className="hover:text-yellow-300">
              📞 +91 99409 44985
            </a>

            <a
              href="mailto:info@yugadocument.in"
              className="hover:text-yellow-300"
            >
              ✉ info@yugadocument.in
            </a>
          </div>

          <div className="hidden md:block">
            Mon – Sat | 9:30 AM – 7:30 PM
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-4">
            <img
              src="/images/logo.png"
              alt="YUGA"
              className="h-14 w-14 object-contain"
            />

            <div>
              <h1 className="text-lg font-bold text-[#0A2E63]">
                YUGA DOCUMENT
              </h1>

              <p className="text-xs text-slate-500">
                CONSULTANCY CENTRE
              </p>
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <nav className="hidden gap-8 lg:flex">
            {menus.map((menu) => (
              <NavLink
                key={menu.path}
                to={menu.path}
                className={({ isActive }) =>
                  `font-medium transition ${
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

          {/* Desktop Actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+919940944985"
              className="rounded-lg bg-[#0A2E63] px-5 py-3 text-white transition hover:bg-[#164A92]"
            >
              <Phone size={18} />
            </a>

            <a
              href="https://wa.me/919940944985"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-green-600 px-5 py-3 text-white transition hover:bg-green-700"
            >
              <MessageCircle size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t bg-white lg:hidden">
            {menus.map((menu) => (
              <NavLink
                key={menu.path}
                to={menu.path}
                onClick={() => setMobileOpen(false)}
                className="block border-b px-6 py-4 hover:bg-slate-50"
              >
                {menu.title}
              </NavLink>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
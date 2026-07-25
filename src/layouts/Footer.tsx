import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa6";

import { Link } from "react-router-dom";

import {
  SITE,
  NAVIGATION,
  SERVICES,
} from "../config";

export default function Footer() {

  const year = new Date().getFullYear();

  return (

    <footer className="relative overflow-hidden bg-gradient-to-br from-[#081F45] via-[#0A2E63] to-[#164A92] text-white">

      {/* Decorative Background */}

      <div className="absolute inset-0 opacity-10">

        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-yellow-400 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-white blur-3xl" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-5">

          {/* ======================================
              COMPANY
          ====================================== */}

          <div className="lg:col-span-2">

            <h2 className="text-3xl font-extrabold leading-tight">

              {SITE.branding.line1}

              <br />

              <span className="text-yellow-400">

                {SITE.branding.line2}

              </span>

            </h2>

            <p className="mt-6 max-w-md leading-8 text-blue-100">

              Trusted consultancy for Property Registration,
              Patta Transfer,
              Encumbrance Certificate,
              Legal Documentation,
              and Government Documentation Services.

            </p>

            {/* CTA */}

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-6 py-3 font-semibold text-slate-900 transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
            >

              Contact Us

              <ArrowRight size={18} />

            </Link>

          </div>

          {/* ======================================
              QUICK LINKS
          ====================================== */}

          <div>

            <h3 className="mb-6 text-xl font-bold">

              Quick Links

            </h3>

            <ul className="space-y-4">

              {NAVIGATION.map((item) => (

                <li key={item.path}>

                  <Link
                    to={item.path}
                    className="text-blue-100 transition hover:text-yellow-300"
                  >

                    {item.title}

                  </Link>

                </li>

              ))}

            </ul>

          </div>

                    {/* ======================================
              SERVICES
          ====================================== */}

          <div>

            <h3 className="mb-6 text-xl font-bold">

              Services

            </h3>

            <ul className="space-y-4">

              {SERVICES
                .filter(service => service.featured)
                .map((service) => (

                  <li key={service.id}>

                    {/* Until individual service pages are built,
                        link to the Services page */}

                    <Link
                      to="/services"
                      className="text-blue-100 transition hover:text-yellow-300"
                    >

                      {service.title}

                    </Link>

                  </li>

                ))}

            </ul>

          </div>

          {/* ======================================
              CONTACT & LEGAL
          ====================================== */}

          <div>

            <h3 className="mb-6 text-xl font-bold">

              Contact

            </h3>

            <div className="space-y-5">

              {/* Phone */}

              <div className="flex items-start gap-3">

                <Phone
                  size={20}
                  className="mt-1 flex-shrink-0 text-yellow-400"
                />

                <a
                  href={`tel:${SITE.contact.phoneDigits}`}
                  className="text-blue-100 transition hover:text-yellow-300"
                >

                  {SITE.contact.phone}

                </a>

              </div>

              {/* Email */}

              <div className="flex items-start gap-3">

                <Mail
                  size={20}
                  className="mt-1 flex-shrink-0 text-yellow-400"
                />

                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="break-all text-blue-100 transition hover:text-yellow-300"
                >

                  {SITE.contact.email}

                </a>

              </div>

              {/* Address */}

              <div className="flex items-start gap-3">

                <MapPin
                  size={20}
                  className="mt-1 flex-shrink-0 text-yellow-400"
                />

                <span className="text-blue-100">

                  {SITE.office.addressLine1}

                  <br />

                  {SITE.office.city},

                  {" "}

                  {SITE.office.state}

                  <br />

                  {SITE.office.country}

                </span>

              </div>

              {/* Office Hours */}

              <div className="flex items-start gap-3">

                <Clock
                  size={20}
                  className="mt-1 flex-shrink-0 text-yellow-400"
                />

                <span className="text-blue-100">

                  {SITE.timings.workingDays}

                  <br />

                  {SITE.timings.workingHours}

                </span>

              </div>

            </div>

            {/* ============================
                LEGAL
            ============================= */}

            <div className="mt-10">

              <h3 className="mb-5 text-xl font-bold">

                Legal

              </h3>

              <ul className="space-y-3">

                <li>

                  <Link
                    to="/privacy-policy"
                    className="text-blue-100 transition hover:text-yellow-300"
                  >

                    Privacy Policy

                  </Link>

                </li>

                <li>

                  <Link
                    to="/terms-and-conditions"
                    className="text-blue-100 transition hover:text-yellow-300"
                  >

                    Terms & Conditions

                  </Link>

                </li>

                <li>

                  <Link
                    to="/disclaimer"
                    className="text-blue-100 transition hover:text-yellow-300"
                  >

                    Disclaimer

                  </Link>

                </li>

              </ul>

            </div>

          </div>

        </div>

      </div>

            {/* ======================================
          FOOTER BOTTOM
      ====================================== */}

      <div className="relative border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row">

          {/* Copyright */}

          <p className="text-center text-sm text-blue-200 md:text-left">

            © {year} {SITE.website.copyright}.

            {" "}

            All Rights Reserved.

          </p>

          {/* Social Media */}

          <div className="flex items-center gap-5">

            {SITE.social.facebook && (

              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:bg-yellow-400 hover:text-slate-900"
              >

                <FaFacebookF size={18} />

              </a>

            )}

            {SITE.social.instagram && (

              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full bg-white/10 p-3 transition-all duration-300 hover:bg-yellow-400 hover:text-slate-900"
              >

                <FaInstagram size={18} />

              </a>

            )}

           {/* <a
              href={`https://wa.me/${SITE.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="rounded-full bg-green-600 p-3 transition-all duration-300 hover:scale-110 hover:bg-green-500"
            >

              <MessageCircle size={18} />

            </a> */}

          </div>

        </div>

      </div>

    </footer>

  );

}
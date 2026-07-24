import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
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

    <footer className="bg-[#0A2E63] text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* =========================
              COMPANY
          ========================== */}

          <div>

            <h2 className="mb-5 text-2xl font-bold">

              {SITE.branding.line1}

              <br />

              {SITE.branding.line2}

            </h2>

            <p className="leading-8 text-blue-100">

              Trusted consultancy for Property Registration,
              Legal Documentation,
              Patta Transfer,
              Encumbrance Certificate and
              Government Documentation Services.

            </p>

          </div>

          {/* =========================
              QUICK LINKS
          ========================== */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">

              Quick Links

            </h3>

            <ul className="space-y-3">
            
                          {NAVIGATION.map((item) => (

                <li key={item.path}>

                  <Link
                    to={item.path}
                    className="transition hover:text-yellow-300"
                  >
                    {item.title}
                  </Link>

                </li>

              ))}

            </ul>

          </div>

          {/* =========================
              SERVICES
          ========================== */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">

              Services

            </h3>

            <ul className="space-y-3">

              {SERVICES
                .filter(service => service.featured)
                .map((service) => (

                  <li key={service.id}>

                    <Link
                      to={`/services/${service.slug}`}
                      className="transition hover:text-yellow-300"
                    >
                      {service.title}
                    </Link>

                  </li>

                ))}

            </ul>

          </div>

          {/* =========================
              CONTACT
          ========================== */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">

              Contact

            </h3>

            <div className="space-y-5">

                           {/* Phone */}

              <div className="flex items-start gap-3">

                <Phone
                  size={20}
                  className="mt-1 flex-shrink-0"
                />

                <a
                  href={`tel:${SITE.contact.phoneDigits}`}
                  className="transition hover:text-yellow-300"
                >
                  {SITE.contact.phone}
                </a>

              </div>

              {/* Email */}

              <div className="flex items-start gap-3">

                <Mail
                  size={20}
                  className="mt-1 flex-shrink-0"
                />

                <a
                  href={`mailto:${SITE.contact.email}`}
                  className="break-all transition hover:text-yellow-300"
                >
                  {SITE.contact.email}
                </a>

              </div>

              {/* Address */}

              <div className="flex items-start gap-3">

                <MapPin
                  size={20}
                  className="mt-1 flex-shrink-0"
                />

                <span>

                  {SITE.office.addressLine1 && (
                    <>
                      {SITE.office.addressLine1}
                      <br />
                    </>
                  )}

                  {SITE.office.city},

                  <br />

                  {SITE.office.state},

                  {" "}

                  {SITE.office.country}

                </span>

              </div>

              {/* Office Hours */}

              <div className="flex items-start gap-3">

                <Clock
                  size={20}
                  className="mt-1 flex-shrink-0"
                />

                <span>

                  {SITE.timings.workingDays}

                  <br />

                  {SITE.timings.workingHours}

                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =========================
          FOOTER BOTTOM
      ========================== */}

      <div className="border-t border-blue-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row">

                    <p className="text-center text-sm text-blue-200 md:text-left">

            © {year} {SITE.website.copyright}.

            {" "}

            All Rights Reserved.

          </p>

          <div className="flex items-center gap-5">

            {SITE.social.facebook && (

              <a
                href={SITE.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-yellow-300"
                aria-label="Facebook"
              >
                <FaFacebookF size={20} />
              </a>

            )}

            {SITE.social.instagram && (

              <a
                href={SITE.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-yellow-300"
                aria-label="Instagram"
              >
                <FaInstagram size={20} />
              </a>

            )}

            <a
              href={`https://wa.me/${SITE.contact.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-yellow-300"
              aria-label="WhatsApp"
            >
              <MessageCircle size={20} />
            </a>

          </div>

        </div>

      </div>

    </footer>

  );

}
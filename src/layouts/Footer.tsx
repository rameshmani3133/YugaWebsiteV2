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

const services = [
  "Property Registration",
  "Patta Transfer",
  "Encumbrance Certificate",
  "Legal Documentation",
  "Bank Loan Documentation",
  "Government Services",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2E63] text-white">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="mb-5 text-2xl font-bold">
              YUGA DOCUMENT
              <br />
              CONSULTANCY CENTRE
            </h2>

            <p className="leading-8 text-blue-100">
              Trusted consultancy for Property Registration,
              Legal Documentation, Patta Transfer,
              Encumbrance Certificate and Government
              Documentation Services.
            </p>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Services */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Services
            </h3>

            <ul className="space-y-3">

              {services.map(service => (

                <li key={service}>
                  {service}
                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-5 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-3">

                <Phone size={20} />

                <a href="tel:+919940944985">
                  +91 99409 44985
                </a>

              </div>

              <div className="flex gap-3">

                <Mail size={20} />

                <a href="mailto:info@yugadocument.in">
                  info@yugadocument.in
                </a>

              </div>

              <div className="flex gap-3">

                <MapPin size={20} />

                <span>
                  Musiri,
                  Tamil Nadu,
                  India
                </span>

              </div>

              <div className="flex gap-3">

                <Clock size={20} />

                <span>
                  Mon - Sat
                  <br />
                  9:30 AM - 7:30 PM
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-blue-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 md:flex-row">

          <p className="text-sm text-blue-200">

            © {year} YUGA DOCUMENT CONSULTANCY CENTRE.
            All Rights Reserved.

          </p>

          <div className="flex gap-5">

            <a
            href="https://facebook.com/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <FaFacebookF size={20} />
          </a>

            <a
              href="https://instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-300 transition"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://wa.me/919940944985"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-300"
            >
              <MessageCircle />
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}
import { motion } from "framer-motion";
import { Phone, MessageCircle, CheckCircle } from "lucide-react";

const services = [
  "Property Registration",
  "Patta Transfer",
  "EC Certificate",
  "Legal Documentation",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0A2E63] via-[#164A92] to-[#0A2E63]">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Decorative Circles */}
      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-yellow-500/10 blur-3xl"></div>

      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

      <div className="relative mx-auto flex min-h-[700px] max-w-7xl items-center px-6 py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-slate-900">
              Trusted Documentation Experts
            </span>

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-6xl">
              YUGA DOCUMENT
              <br />
              CONSULTANCY
              <span className="block text-yellow-400">
                CENTRE
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-200">
              Professional consultancy for Property Registration,
              Patta Transfer, Encumbrance Certificate,
              Legal Documentation and Government Services.
            </p>

            {/* Service Highlights */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {services.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/10 p-4 backdrop-blur-md"
                >
                  <CheckCircle
                    className="text-yellow-400"
                    size={22}
                  />

                  <span className="text-white">

                    {item}

                  </span>

                </div>

              ))}

            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="tel:+919940944985"
                className="flex items-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 transition hover:scale-105"
              >
                <Phone size={20} />

                Call Now

              </a>

              <a
                href="https://wa.me/919940944985"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:scale-105"
              >
                <MessageCircle size={20} />

                WhatsApp

              </a>

            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src="/images/hero-banner.jpg"
              alt="YUGA"
              className="rounded-3xl shadow-2xl"
            />

            {/* Experience Card */}

            <div className="absolute -bottom-8 -left-8 rounded-2xl bg-white p-6 shadow-2xl">

              <div className="text-4xl font-bold text-[#0A2E63]">

                10+

              </div>

              <div className="mt-2 text-slate-600">

                Years Experience

              </div>

            </div>

            {/* Floating Card */}

            <div className="absolute -right-6 top-10 rounded-2xl bg-white p-5 shadow-xl">

              <div className="font-bold text-[#0A2E63]">

                500+

              </div>

              <div className="text-sm text-slate-600">

                Happy Clients

              </div>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
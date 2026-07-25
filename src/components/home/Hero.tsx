import { motion } from "framer-motion";

import {
  Phone,
  MessageCircle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import {
  SITE,
  SERVICES,
} from "../../config";

const highlights = [
  "Trusted Documentation Experts",
  "Government Procedure Guidance",
  "Fast & Transparent Service",
];

const stats = [
  {
    value: SITE.statistics.experience,
    label: SITE.statistics.experienceLabel,
  },
  {
    value: SITE.statistics.clients,
    label: SITE.statistics.clientsLabel,
  },
  {
    value: SITE.statistics.documents,
    label: SITE.statistics.documentsLabel,
  },
  {
    value: SITE.statistics.satisfaction,
    label: SITE.statistics.satisfactionLabel,
  },
];

export default function Hero() {

  return (

    <section className="relative overflow-hidden bg-gradient-to-br from-[#081F45] via-[#0A2E63] to-[#164A92]">

      {/* Background */}

      <div className="absolute inset-0 bg-black/25" />

      <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-yellow-400/10 blur-3xl" />

      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

      <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-28">

        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">

                    {/* ======================================
              LEFT CONTENT
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 px-5 py-2 backdrop-blur">

              <CheckCircle
                size={18}
                className="text-yellow-400"
              />

              <span className="text-sm font-semibold tracking-wide text-yellow-300">

                Trusted Documentation Experts

              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white lg:text-5xl">
              {SITE.branding.line1}
              <br />
              {SITE.branding.line2}
            </h1>

            <h2 className="mt-3 text-3xl font-bold text-yellow-400 lg:text-4xl">

              {SITE.slogan}

            </h2>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-lg leading-9 text-slate-200">

              Professional consultancy for Property Registration,
              Patta Transfer, Encumbrance Certificate,
              Legal Documentation and Government Documentation
              Services with transparent guidance and reliable support.

            </p>

            {/* Trust Highlights */}

            <div className="mt-10 space-y-3">

              {highlights.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <CheckCircle
                    size={20}
                    className="text-green-400"
                  />

                  <span className="text-slate-100">

                    {item}

                  </span>

                </div>

              ))}

            </div>

            {/* Services */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {SERVICES.slice(0, 4).map((service) => (

                <div
                  key={service.id}
                  className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur transition-all duration-300 hover:border-yellow-400/40 hover:bg-white/15"
                >

                  <div className="flex items-center gap-3">

                    <CheckCircle
                      size={20}
                      className="text-yellow-400"
                    />

                    <span className="font-medium text-white">

                      {service.title}

                    </span>

                  </div>

                </div>

              ))}

            </div>

            {/* CTA */}

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href={`tel:${SITE.contact.phoneDigits}`}
                className="inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
              >

                <Phone size={20} />

                Call Now

              </a>

              <a
                href={`https://wa.me/${SITE.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-green-700"
              >

                <MessageCircle size={20} />

                WhatsApp

              </a>

              <a
                href="/services"
                className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
              >

                Explore Services

                <ArrowRight size={20} />

              </a>

            </div>

          </motion.div>

                    {/* ======================================
              RIGHT CONTENT
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative self-start pt-4 lg:pt-0"
            >

            {/* Main Hero Image */}

            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/10 shadow-2xl backdrop-blur">

              <img
                src="/images/hero-banner.jpg"
                alt={`${SITE.branding.line1} ${SITE.branding.line2}`}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              {/* Image Overlay */}

              <div className="absolute inset-0 bg-gradient-to-t from-[#081F45]/60 via-transparent to-transparent" />

            </div>
            
            </motion.div>

        </div>

              {/* ======================================
          PREMIUM STATISTICS
      ====================================== */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-20"
      >

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {stats.map((item) => (

            <div
              key={item.label}
              className="group rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/40 hover:bg-white/15 hover:shadow-2xl"
            >

              <div className="mx-auto mb-5 h-1 w-16 rounded-full bg-yellow-400 transition-all duration-300 group-hover:w-24" />

              <div className="text-5xl font-extrabold text-white">

                {item.value}

              </div>

              <div className="mt-4 text-base font-medium tracking-wide text-slate-200">

                {item.label}

              </div>

            </div>

          ))}

        </div>

      </motion.div>

      {/* ======================================
          SCROLL INDICATOR
      ====================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.5, 1, 0.5],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="mt-16 flex flex-col items-center justify-center"
      >

        <span className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-slate-300">

          Scroll To Explore

        </span>

        <div className="flex h-14 w-8 justify-center rounded-full border-2 border-white/30">

          <div className="mt-2 h-3 w-3 rounded-full bg-yellow-400" />

        </div>

      </motion.div>

            </div>

    </section>

  );

}


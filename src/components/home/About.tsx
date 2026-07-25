import { motion } from "framer-motion";

import {
  CheckCircle2,
  ArrowRight,
  Target,
  Eye,
} from "lucide-react";

import { SITE } from "../../config";

export default function About() {

  return (

    <section className="relative overflow-hidden bg-slate-50 py-24">

      {/* Background */}

      <div className="absolute inset-0">

        <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-blue-100 blur-3xl opacity-60" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-100 blur-3xl opacity-50" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-20 lg:grid-cols-2">

                    {/* ======================================
              LEFT IMAGE
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            {/* Main Image */}

            <div className="overflow-hidden rounded-[32px] border border-white bg-white shadow-2xl">

              <img
                src="/images/about-office.jpg"
                alt={SITE.name}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            {/* Experience Badge */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.3,
                duration: 0.6,
              }}
              className="absolute -left-8 bottom-8 rounded-2xl border border-white/20 bg-white px-6 py-5 shadow-2xl"
            >

              <div className="text-3xl font-extrabold text-[#0A2E63]">

                {SITE.statistics.experience}

              </div>

              <div className="mt-2 text-sm font-medium text-slate-600">

                {SITE.statistics.experienceLabel}

              </div>

            </motion.div>

            {/* Client Card */}

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.5,
                duration: 0.6,
              }}
              className="absolute -right-8 top-10 rounded-2xl border border-white/20 bg-white px-6 py-5 shadow-2xl"
            >

              <div className="text-3xl font-extrabold text-[#0A2E63]">

                {SITE.statistics.clients}

              </div>

              <div className="mt-2 text-sm font-medium text-slate-600">

                {SITE.statistics.clientsLabel}

              </div>

            </motion.div>

            {/* Trust Card */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.7,
                duration: 0.6,
              }}
              className="absolute bottom-12 right-8 rounded-2xl bg-[#0A2E63] px-6 py-5 text-white shadow-2xl"
            >

              <div className="text-lg font-semibold">

                Trusted Service

              </div>

              <div className="mt-1 text-sm text-slate-200">

                Professional Documentation Consultancy

              </div>

            </motion.div>

          </motion.div>

                    {/* ======================================
              RIGHT CONTENT
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {/* Section Badge */}

            <div className="inline-flex items-center rounded-full bg-yellow-100 px-5 py-2">

              <span className="text-sm font-semibold tracking-wide text-yellow-700">

                ABOUT {SITE.shortName}

              </span>

            </div>

            {/* Heading */}

            <h2 className="mt-8 text-4xl font-extrabold leading-tight text-[#0A2E63] lg:text-5xl">

              {SITE.about.title}

            </h2>

            {/* Subtitle */}

            <h3 className="mt-4 text-2xl font-semibold text-[#164A92]">

              {SITE.about.subtitle}

            </h3>

            {/* Description */}

            <p className="mt-8 text-lg leading-9 text-slate-600">

              {SITE.about.description}

            </p>

            {/* Features */}

            <div className="mt-10 grid gap-4">

              {SITE.about.features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#0A2E63] hover:shadow-lg"
                >

                  <CheckCircle2
                    size={22}
                    className="text-green-600"
                  />

                  <span className="font-medium text-slate-700">

                    {feature}

                  </span>

                </div>

              ))}

            </div>

            {/* Mission & Vision */}

            <div className="mt-10 grid gap-6 md:grid-cols-2">

              {/* Mission */}

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100">

                  <Target
                    size={24}
                    className="text-[#0A2E63]"
                  />

                </div>

                <h4 className="text-xl font-bold text-[#0A2E63]">

                  Our Mission

                </h4>

                <p className="mt-4 leading-8 text-slate-600">

                  {SITE.about.mission}

                </p>

              </div>

              {/* Vision */}

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg">

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-100">

                  <Eye
                    size={24}
                    className="text-yellow-700"
                  />

                </div>

                <h4 className="text-xl font-bold text-[#0A2E63]">

                  Our Vision

                </h4>

                <p className="mt-4 leading-8 text-slate-600">

                  {SITE.about.vision}

                </p>

              </div>

            </div>

                        {/* ======================================
                WHY CHOOSE US
            ====================================== */}

            <div className="mt-12">

              <h3 className="text-2xl font-bold text-[#0A2E63]">

                Why Choose {SITE.shortName}?

              </h3>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  <div className="text-3xl font-bold text-[#0A2E63]">

                    {SITE.statistics.documents}

                  </div>

                  <div className="mt-2 text-slate-600">

                    {SITE.statistics.documentsLabel}

                  </div>

                </div>

                <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

                  <div className="text-3xl font-bold text-[#0A2E63]">

                    {SITE.statistics.satisfaction}

                  </div>

                  <div className="mt-2 text-slate-600">

                    {SITE.statistics.satisfactionLabel}

                  </div>

                </div>

              </div>

            </div>

            {/* ======================================
                CTA
            ====================================== */}

            <div className="mt-12 flex flex-wrap gap-4">

              <a
                href="/about"
                className="inline-flex items-center gap-3 rounded-xl bg-[#0A2E63] px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-[#164A92]"
              >

                Learn More

                <ArrowRight size={20} />

              </a>

              <a
                href="/contact"
                className="inline-flex items-center rounded-xl border-2 border-[#0A2E63] px-7 py-4 font-semibold text-[#0A2E63] transition-all duration-300 hover:bg-[#0A2E63] hover:text-white"
              >

                Contact Us

              </a>

            </div>

          </motion.div>

        </div>

                {/* ======================================
            DECORATIVE BOTTOM ACCENT
        ====================================== */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20"
        >

          <div className="mx-auto h-1 w-32 rounded-full bg-gradient-to-r from-[#0A2E63] via-yellow-400 to-[#0A2E63]" />

        </motion.div>

      </div>

    </section>

  );

}
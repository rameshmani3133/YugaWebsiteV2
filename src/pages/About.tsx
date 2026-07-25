import { motion } from "framer-motion";

import {
  CheckCircle2,
  Target,
  Eye,
  Phone,
  ArrowRight,
} from "lucide-react";

import SEO from "../components/seo/SEO";

import {

  SITE,

} from "../config";

export default function About() {

  return (

    <>

      <SEO

        title="About Us"

        description={SITE.about.description}

      />

      {/* ======================================
          HERO
      ====================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#081F45] via-[#0A2E63] to-[#164A92] py-24">

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative mx-auto max-w-7xl px-6">

          <motion.div

            initial={{ opacity: 0, y: 40 }}

            animate={{ opacity: 1, y: 0 }}

            transition={{ duration: 0.8 }}

            className="text-center"

          >

            <div className="inline-flex rounded-full bg-yellow-400/20 px-6 py-2 text-sm font-semibold text-yellow-300">

              ABOUT {SITE.shortName}

            </div>

            <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-6xl">

              {SITE.about.title}

            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-200">

              {SITE.about.description}

            </p>

          </motion.div>

        </div>

      </section>

      {/* ======================================
          COMPANY STORY
      ====================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">
                      {/* ======================================
              COMPANY IMAGE
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="overflow-hidden rounded-[32px] bg-white shadow-2xl">

              <img
                src="/images/about-office.jpg"
                alt={SITE.name}
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

            </div>

            {/* Experience */}

            <div className="absolute -left-8 bottom-10 rounded-3xl bg-[#0A2E63] px-8 py-6 text-white shadow-2xl">

              <div className="text-4xl font-extrabold">

                {SITE.statistics.experience}

              </div>

              <div className="mt-2 text-sm text-slate-200">

                {SITE.statistics.experienceLabel}

              </div>

            </div>

            {/* Happy Clients */}

            <div className="absolute -right-8 top-10 rounded-3xl bg-white px-8 py-6 shadow-2xl">

              <div className="text-4xl font-extrabold text-[#0A2E63]">

                {SITE.statistics.clients}

              </div>

              <div className="mt-2 text-sm text-slate-600">

                {SITE.statistics.clientsLabel}

              </div>

            </div>

          </motion.div>

          {/* ======================================
              COMPANY CONTENT
          ====================================== */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">

              COMPANY PROFILE

            </span>

            <h2 className="mt-8 text-4xl font-extrabold leading-tight text-[#0A2E63]">

              {SITE.about.subtitle}

            </h2>

            <p className="mt-8 text-lg leading-9 text-slate-600">

              {SITE.about.description}

            </p>

            <div className="mt-10 space-y-5">

              {SITE.about.features.map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-4"
                >

                  <CheckCircle2
                    size={24}
                    className="text-green-600"
                  />

                  <span className="text-lg text-slate-700">

                    {feature}

                  </span>

                </div>

              ))}

            </div>

            <div className="mt-12 rounded-3xl border border-blue-100 bg-blue-50 p-8">

              <h3 className="text-2xl font-bold text-[#0A2E63]">

                Why Clients Trust {SITE.shortName}

              </h3>

              <p className="mt-5 leading-8 text-slate-600">

                We focus on professional guidance,
                transparent communication,
                timely execution,
                and complete assistance throughout every
                documentation process.

              </p>

            </div>

          </motion.div>

        </div>

      </section>

            {/* ======================================
          MISSION & VISION
      ====================================== */}

      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 lg:grid-cols-2">

            {/* Mission */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl bg-white p-10 shadow-xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">

                <Target
                  size={30}
                  className="text-[#0A2E63]"
                />

              </div>

              <h2 className="mt-8 text-3xl font-bold text-[#0A2E63]">

                Our Mission

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                {SITE.about.mission}

              </p>

            </motion.div>

            {/* Vision */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.2,
                duration: 0.7,
              }}
              className="rounded-3xl bg-white p-10 shadow-xl"
            >

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-yellow-100">

                <Eye
                  size={30}
                  className="text-yellow-700"
                />

              </div>

              <h2 className="mt-8 text-3xl font-bold text-[#0A2E63]">

                Our Vision

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                {SITE.about.vision}

              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ======================================
          OUR PROCESS
      ====================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[#0A2E63]">

              OUR PROCESS

            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#0A2E63]">

              Professional Documentation Process

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">

              We follow a structured and transparent process to ensure
              every documentation requirement is handled accurately
              and efficiently.

            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Understand your documentation requirements and provide expert guidance.",
              },
              {
                step: "02",
                title: "Document Verification",
                description:
                  "Review and verify all required documents before submission.",
              },
              {
                step: "03",
                title: "Government Process",
                description:
                  "Complete registration and documentation procedures with the concerned authorities.",
              },
              {
                step: "04",
                title: "Successful Completion",
                description:
                  "Deliver completed documentation with continuous customer support.",
              },
            ].map((item) => (

              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                }}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#0A2E63] hover:shadow-xl"
              >

                <div className="text-5xl font-extrabold text-[#0A2E63]/20">

                  {item.step}

                </div>

                <h3 className="mt-6 text-2xl font-bold text-[#0A2E63]">

                  {item.title}

                </h3>

                <p className="mt-5 leading-8 text-slate-600">

                  {item.description}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

            {/* ======================================
          STATISTICS
      ====================================== */}

      <section className="bg-gradient-to-br from-[#081F45] via-[#0A2E63] to-[#164A92] py-24 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">

            <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-yellow-300">

              OUR ACHIEVEMENTS

            </span>

            <h2 className="mt-6 text-4xl font-bold">

              Trusted by Hundreds of Clients

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-200">

              Our commitment to professionalism, transparency and
              customer satisfaction has earned the trust of clients
              across Tamil Nadu.

            </p>

          </div>

          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">

            {[
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
            ].map((item) => (

              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl border border-white/10 bg-white/10 p-8 text-center backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:bg-white/15"
              >

                <div className="text-5xl font-extrabold text-yellow-400">

                  {item.value}

                </div>

                <div className="mt-4 text-lg text-slate-200">

                  {item.label}

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ======================================
          WHY CHOOSE US
      ====================================== */}

      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">

            <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">

              WHY CHOOSE US

            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#0A2E63]">

              Why Choose {SITE.shortName}?

            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                title: "Professional Guidance",
                description:
                  "Experienced consultancy for documentation and registration.",
              },
              {
                title: "Transparent Process",
                description:
                  "Clear communication and step-by-step assistance throughout.",
              },
              {
                title: "Reliable Support",
                description:
                  "Dedicated assistance until every documentation process is completed.",
              },
              {
                title: "Customer Satisfaction",
                description:
                  "Focused on delivering quality service with long-term trust.",
              },
            ].map((item) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <CheckCircle2
                  size={34}
                  className="text-green-600"
                />

                <h3 className="mt-6 text-2xl font-bold text-[#0A2E63]">

                  {item.title}

                </h3>

                <p className="mt-5 leading-8 text-slate-600">

                  {item.description}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

            {/* ======================================
          CALL TO ACTION
      ====================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#0A2E63] via-[#164A92] to-[#0A2E63] py-24 text-white">

        {/* Background Decoration */}

        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >

            <span className="rounded-full bg-yellow-400/20 px-6 py-2 text-sm font-semibold text-yellow-300">

              LET'S WORK TOGETHER

            </span>

            <h2 className="mt-8 text-4xl font-extrabold leading-tight lg:text-5xl">

              Need Professional Documentation Assistance?

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-200">

              Whether you need Property Registration,
              Patta Transfer,
              Encumbrance Certificate,
              Legal Documentation,
              or Government Documentation Services,
              our experienced team is ready to assist you
              with transparent guidance and timely support.

            </p>

            {/* Highlights */}

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {[
                "Property Registration",
                "Patta Transfer",
                "Legal Documentation",
                "Government Services",
              ].map((item) => (

                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur"
                >

                  <div className="flex items-center justify-center gap-3">

                    <CheckCircle2
                      size={20}
                      className="text-yellow-400"
                    />

                    <span className="font-medium">

                      {item}

                    </span>

                  </div>

                </div>

              ))}

            </div>

            {/* CTA Buttons */}

            <div className="mt-14 flex flex-wrap justify-center gap-5">

              <a
                href={`tel:${SITE.contact.phoneDigits}`}
                className="inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
              >

                <Phone size={20} />

                Call Now

              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
              >

                Contact Us

                <ArrowRight size={20} />

              </a>

            </div>

          </motion.div>

        </div>

      </section>

            {/* ======================================
          PAGE END ACCENT
      ====================================== */}

      <section className="bg-white py-10">

        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, scaleX: 0.8 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            <div className="mx-auto h-1 w-40 rounded-full bg-gradient-to-r from-[#0A2E63] via-yellow-400 to-[#0A2E63]" />

          </motion.div>

        </div>

      </section>

    </>

  );

}
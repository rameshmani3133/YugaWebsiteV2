import { motion } from "framer-motion";

import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

import SEO from "../components/seo/SEO";

import {
  SITE,
  SERVICES,
} from "../config";

export default function Services() {

  return (

    <>

      <SEO
        title="Our Services"
        description="Professional Property Registration, Patta Transfer, Legal Documentation and Government Documentation Services."
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

              OUR SERVICES

            </div>

            <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-6xl">

              Professional Documentation Services

            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-200">

              {SITE.about.description}

            </p>

          </motion.div>

        </div>

      </section>

      {/* ======================================
          SERVICES GRID
      ====================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[#0A2E63]">

              WHAT WE OFFER

            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#0A2E63]">

              Complete Documentation Solutions

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">

              Professional assistance for all property registration,
              legal documentation and government documentation
              requirements.

            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                        {SERVICES.map((service, index) => {

              const Icon = service.icon;

              return (

                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  whileHover={{
                    y: -10,
                  }}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg transition-all duration-300 hover:border-[#0A2E63]/20 hover:shadow-2xl"
                >

                  {/* Top Accent */}

                  <div className="h-2 bg-gradient-to-r from-[#0A2E63] via-[#164A92] to-yellow-400" />

                  <div className="p-8">

                    {/* Icon */}

                    <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0A2E63]/10 transition-all duration-300 group-hover:bg-[#0A2E63]">

                      <Icon
                        size={34}
                        className="text-[#0A2E63] transition-colors duration-300 group-hover:text-white"
                      />

                    </div>

                    {/* Title */}

                    <h3 className="text-2xl font-bold text-[#0A2E63]">

                      {service.title}

                    </h3>

                    {/* Description */}

                    <p className="mt-5 leading-8 text-slate-600">

                      {service.description}

                    </p>

                    {/* Highlights */}

                    <div className="mt-8 space-y-3">

                      <div className="flex items-center gap-3">

                        <CheckCircle2
                          size={18}
                          className="text-green-600"
                        />

                        <span className="text-slate-700">

                          Professional Guidance

                        </span>

                      </div>

                      <div className="flex items-center gap-3">

                        <CheckCircle2
                          size={18}
                          className="text-green-600"
                        />

                        <span className="text-slate-700">

                          Transparent Process

                        </span>

                      </div>

                      <div className="flex items-center gap-3">

                        <CheckCircle2
                          size={18}
                          className="text-green-600"
                        />

                        <span className="text-slate-700">

                          Timely Completion

                        </span>

                      </div>

                    </div>

                    {/* Button */}

                    <div className="mt-10">

                      <button
                        className="inline-flex items-center gap-3 rounded-xl bg-[#0A2E63] px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-[#164A92]"
                      >

                        Learn More

                        <ArrowRight size={18} />

                      </button>

                    </div>

                  </div>

                </motion.div>

              );

            })}

          </div>

        </div>

      </section>

            {/* ======================================
          WHY CHOOSE OUR SERVICES
      ====================================== */}

      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">

            <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">

              WHY CHOOSE US

            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#0A2E63]">

              Professional Documentation with Complete Guidance

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">

              We provide end-to-end assistance for documentation,
              registration and government procedures with complete
              transparency and professional support.

            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                title: "Experienced Team",
                description:
                  "Professional guidance backed by years of practical documentation experience.",
              },
              {
                title: "Transparent Process",
                description:
                  "Clear communication throughout every stage with no hidden procedures.",
              },
              {
                title: "Fast Processing",
                description:
                  "Timely handling of applications while maintaining documentation accuracy.",
              },
              {
                title: "Reliable Support",
                description:
                  "Continuous assistance until your documentation work is successfully completed.",
              },
            ].map((item, index) => (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-2xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0A2E63]/10">

                  <CheckCircle2
                    size={30}
                    className="text-[#0A2E63]"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-[#0A2E63]">

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
          REQUIRED DOCUMENTS
      ====================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[#0A2E63]">

              REQUIRED DOCUMENTS

            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#0A2E63]">

              Common Documents We Help With

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">

              Depending on the service, some or all of the following
              documents may be required. Our team will guide you
              through the exact requirements.

            </p>

          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Aadhaar Card",
              "PAN Card",
              "Sale Deed",
              "Patta Copy",
              "Encumbrance Certificate",
              "Passport Size Photograph",
              "Address Proof",
              "Property Tax Receipt",
              "Identity Proof",
            ].map((document, index) => (

              <motion.div
                key={document}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:border-[#0A2E63] hover:bg-white hover:shadow-lg"
              >

                <CheckCircle2
                  size={24}
                  className="text-green-600"
                />

                <span className="font-medium text-slate-700">

                  {document}

                </span>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

            {/* ======================================
          SERVICE PROCESS
      ====================================== */}

      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">

            <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">

              OUR PROCESS

            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#0A2E63]">

              Simple & Transparent Process

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">

              Every documentation service follows a structured process
              to ensure accuracy, transparency and timely completion.

            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">

            {[
              {
                step: "01",
                title: "Consultation",
                description:
                  "Understand your requirements and provide the right guidance.",
              },
              {
                step: "02",
                title: "Document Collection",
                description:
                  "Collect and verify all required documents before processing.",
              },
              {
                step: "03",
                title: "Verification",
                description:
                  "Thorough verification to avoid delays or rejection.",
              },
              {
                step: "04",
                title: "Government Processing",
                description:
                  "Submission and follow-up with the concerned department.",
              },
              {
                step: "05",
                title: "Completion",
                description:
                  "Successful completion and delivery of the final documents.",
              },
            ].map((item, index) => (

              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative rounded-3xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-[#0A2E63] text-lg font-bold text-white shadow-lg">

                  {item.step}

                </div>

                <div className="pt-6">

                  <h3 className="text-2xl font-bold text-[#0A2E63]">

                    {item.title}

                  </h3>

                  <p className="mt-5 leading-8 text-slate-600">

                    {item.description}

                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ======================================
          SERVICE GUARANTEE
      ====================================== */}

      <section className="bg-gradient-to-r from-[#081F45] via-[#0A2E63] to-[#164A92] py-24 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-yellow-300">

                OUR COMMITMENT

              </span>

              <h2 className="mt-8 text-4xl font-bold leading-tight">

                Reliable Documentation Services with Complete Transparency

              </h2>

              <p className="mt-8 text-lg leading-9 text-slate-200">

                We are committed to delivering accurate documentation,
                professional guidance, transparent communication,
                and timely completion of every service we undertake.

              </p>

            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <div className="space-y-6">

                {[
                  "Professional Documentation Assistance",
                  "Transparent Work Process",
                  "Timely Service Delivery",
                  "Dedicated Customer Support",
                  "Reliable Government Documentation Guidance",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-2xl bg-white/10 p-5 backdrop-blur"
                  >

                    <CheckCircle2
                      size={24}
                      className="text-yellow-400"
                    />

                    <span className="text-lg">

                      {item}

                    </span>

                  </div>

                ))}

              </div>

            </motion.div>

          </div>

        </div>

      </section>

            {/* ======================================
          SERVICE FAQ
      ====================================== */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">

            <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[#0A2E63]">

              SERVICE FAQ

            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#0A2E63]">

              Frequently Asked Questions

            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-600">

              Here are answers to some of the most common questions about
              our documentation and registration services.

            </p>

          </div>

          <div className="mx-auto max-w-5xl space-y-6">

            {[
              {
                question: "How long does Property Registration take?",
                answer:
                  "The duration depends on the type of property and the documentation available. We guide you through every stage until completion.",
              },
              {
                question: "Can you assist with Patta Transfer?",
                answer:
                  "Yes. We provide complete assistance for Patta Transfer, including document verification and application guidance.",
              },
              {
                question: "Do you help with Encumbrance Certificates?",
                answer:
                  "Yes. We assist in obtaining Encumbrance Certificates and related property documentation.",
              },
              {
                question: "What documents should I bring?",
                answer:
                  "The required documents vary depending on the service. Our team will provide a complete checklist after the initial consultation.",
              },
            ].map((faq, index) => (

              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm"
              >

                <h3 className="text-xl font-bold text-[#0A2E63]">

                  {faq.question}

                </h3>

                <p className="mt-4 leading-8 text-slate-600">

                  {faq.answer}

                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* ======================================
          SERVICE STATISTICS
      ====================================== */}

      <section className="bg-slate-50 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16 text-center">

            <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">

              OUR ACHIEVEMENTS

            </span>

            <h2 className="mt-6 text-4xl font-bold text-[#0A2E63]">

              Trusted Documentation Consultancy

            </h2>

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
                transition={{ duration: 0.5 }}
                className="rounded-3xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="text-5xl font-extrabold text-[#0A2E63]">

                  {item.value}

                </div>

                <div className="mt-4 text-lg text-slate-600">

                  {item.label}

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

            {/* ======================================
          FINAL CALL TO ACTION
      ====================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#081F45] via-[#0A2E63] to-[#164A92] py-24 text-white">

        {/* Decorative Background */}

        <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />

        <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto max-w-4xl text-center"
          >

            <span className="rounded-full bg-yellow-400/20 px-6 py-2 text-sm font-semibold text-yellow-300">

              READY TO GET STARTED?

            </span>

            <h2 className="mt-8 text-4xl font-extrabold leading-tight lg:text-5xl">

              Let Our Experts Handle Your Documentation

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-200">

              Whether you need Property Registration,
              Patta Transfer,
              Encumbrance Certificate,
              Legal Documentation,
              or Government Documentation,
              our experienced team is ready to assist you with
              complete transparency and professional guidance.

            </p>

            {/* Service Highlights */}

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

            {/* Action Buttons */}

            <div className="mt-14 flex flex-wrap justify-center gap-5">

              <a
                href={`tel:${SITE.contact.phoneDigits}`}
                className="inline-flex items-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
              >

                Call Now

              </a>

              <a
                href={`https://wa.me/${SITE.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-green-700"
              >

                WhatsApp

              </a>

              <a
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
              >

                Contact Us

                <ArrowRight size={18} />

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
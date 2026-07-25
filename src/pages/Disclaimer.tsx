import { motion } from "framer-motion";

import SEO from "../components/seo/SEO";

import { SITE } from "../config";

export default function Disclaimer() {

  const lastUpdated = "July 2026";

  return (

    <>

      <SEO
        title="Disclaimer"
        description={`Read the Disclaimer for ${SITE.name} and understand the limitations regarding the information and consultancy services provided through this website.`}
      />

      {/* ======================================
          HERO
      ====================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#081F45] via-[#0A2E63] to-[#164A92] py-24">

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="rounded-full bg-yellow-400/20 px-6 py-2 text-sm font-semibold text-yellow-300">

              LEGAL

            </span>

            <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-6xl">

              Disclaimer

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-200">

              The information provided on this website is intended
              for general informational purposes regarding the
              consultancy services offered by {SITE.name}. Please
              read this Disclaimer carefully before relying on any
              information available through this website.

            </p>

            <div className="mt-8 text-sm text-slate-300">

              Last Updated: {lastUpdated}

            </div>

          </motion.div>

        </div>

      </section>

      {/* ======================================
          CONTENT
      ====================================== */}

      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-5xl px-6">

          <div className="space-y-12 rounded-3xl bg-white p-10 shadow-xl">
            
                        {/* ======================================
                GENERAL INFORMATION
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                1. General Information

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                The content published on this website is provided
                solely for general informational purposes regarding
                the documentation consultancy services offered by
                {` ${SITE.name}`}. While we strive to keep the
                information accurate and up to date, it should not
                be interpreted as a guarantee of service outcomes.

              </p>

            </motion.section>

            {/* ======================================
                NO LEGAL ADVICE
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                2. No Legal Advice

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                Our consultancy provides guidance relating to
                documentation procedures. Information available on
                this website should not be considered legal advice,
                financial advice, or a substitute for professional
                advice from qualified advocates, chartered
                accountants, or other licensed professionals.

              </p>

            </motion.section>

            {/* ======================================
                ACCURACY OF INFORMATION
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                3. Accuracy of Information

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                We make reasonable efforts to ensure that the
                information presented on this website is accurate.
                However, government rules, procedures, forms, fees,
                and documentation requirements may change without
                prior notice. Users should confirm current
                requirements with the appropriate government
                authorities where necessary.

              </p>

            </motion.section>

            {/* ======================================
                GOVERNMENT SERVICES DISCLAIMER
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                4. Government Services

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                {SITE.name} is an independent documentation
                consultancy. We are not a government department,
                government authority, or government agency. Any
                assistance provided relates to documentation
                consultancy and guidance. Decisions regarding
                approvals, registrations, certificates, or other
                official matters remain solely with the competent
                government authorities.

              </p>

            </motion.section>

                        {/* ======================================
                EXTERNAL LINKS
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                5. External Links

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                This website may contain links to third-party
                websites, including government portals and other
                external resources. These links are provided solely
                for your convenience. We do not control, endorse,
                or guarantee the availability, accuracy, or content
                of external websites and are not responsible for
                their policies or services.

              </p>

            </motion.section>

            {/* ======================================
                LIMITATION OF LIABILITY
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                6. Limitation of Liability

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                {SITE.name} shall not be responsible for any direct,
                indirect, incidental, consequential, or special loss
                arising from the use of this website or reliance on
                any information published herein. Delays or changes
                resulting from government procedures, legal
                requirements, or third-party actions are beyond our
                reasonable control.

              </p>

            </motion.section>

            {/* ======================================
                CLIENT RESPONSIBILITIES
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                7. Client Responsibilities

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                Clients are responsible for providing accurate,
                complete, and genuine information and supporting
                documents. Any delay, rejection, or issue resulting
                from incomplete, inaccurate, or false information
                remains the responsibility of the client.

              </p>

            </motion.section>

            {/* ======================================
                SERVICE AVAILABILITY
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                8. Service Availability

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                Our consultancy services are subject to applicable
                laws, government procedures, office working hours,
                document verification, and operational requirements.
                We reserve the right to modify, suspend, or withdraw
                any service without prior notice where required by
                law or operational necessity.

              </p>

            </motion.section>

                        {/* ======================================
                INTELLECTUAL PROPERTY
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                9. Intellectual Property

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                All content published on this website, including
                text, graphics, logos, images, icons, layouts,
                designs, and other materials, is the property of
                {` ${SITE.name}`} unless otherwise stated. No part
                of this website may be reproduced, distributed,
                modified, or used for commercial purposes without
                our prior written permission.

              </p>

            </motion.section>

            {/* ======================================
                CHANGES TO THIS DISCLAIMER
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                10. Changes to This Disclaimer

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                We may update this Disclaimer from time to time to
                reflect changes in our services, legal obligations,
                government procedures, or website content. The most
                recent version will always be available on this page
                together with the latest revision date.

              </p>

            </motion.section>

            {/* ======================================
                CONTACT INFORMATION
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                11. Contact Information

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                If you have any questions regarding this Disclaimer
                or our documentation consultancy services, please
                contact us using the details below.

              </p>

              <div className="mt-8 rounded-3xl border border-blue-100 bg-blue-50 p-8">

                <div className="space-y-4">

                  <div>

                    <span className="font-semibold text-[#0A2E63]">

                      Company

                    </span>

                    <p className="mt-1 text-slate-700">

                      {SITE.name}

                    </p>

                  </div>

                  <div>

                    <span className="font-semibold text-[#0A2E63]">

                      Phone

                    </span>

                    <p className="mt-1 text-slate-700">

                      {SITE.contact.phone}

                    </p>

                  </div>

                  <div>

                    <span className="font-semibold text-[#0A2E63]">

                      Email

                    </span>

                    <p className="mt-1 text-slate-700">

                      {SITE.contact.email}

                    </p>

                  </div>

                  <div>

                    <span className="font-semibold text-[#0A2E63]">

                      Address

                    </span>

                    <p className="mt-1 text-slate-700">

                      {SITE.contact.address}

                    </p>

                  </div>

                </div>

              </div>

            </motion.section>

            {/* ======================================
                DISCLAIMER SUMMARY
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <div className="rounded-3xl bg-gradient-to-r from-[#081F45] via-[#0A2E63] to-[#164A92] p-10 text-white">

                <h2 className="text-3xl font-bold">

                  Our Commitment

                </h2>

                <p className="mt-6 leading-9 text-slate-200">

                  We are committed to providing reliable,
                  transparent, and professional documentation
                  consultancy services. This Disclaimer explains the
                  scope of the information available on this website
                  and helps ensure that visitors understand the
                  limitations associated with online content and
                  consultancy services.

                </p>

              </div>

            </motion.section>

                        {/* ======================================
                ACKNOWLEDGEMENT
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">

                <h2 className="text-2xl font-bold text-[#0A2E63]">

                  Acknowledgement

                </h2>

                <p className="mt-5 leading-9 text-slate-600">

                  By accessing or using this website, you acknowledge
                  that you have read, understood, and accepted this
                  Disclaimer. If you disagree with any part of this
                  Disclaimer, you should discontinue the use of this
                  website.

                </p>

              </div>

            </motion.section>

          </div>

        </div>

      </section>

      {/* ======================================
          PAGE END ACCENT
      ====================================== */}

      <section className="bg-white py-10">

        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{
              opacity: 0,
              scaleX: 0.8,
            }}
            whileInView={{
              opacity: 1,
              scaleX: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            <div className="mx-auto h-1 w-40 rounded-full bg-gradient-to-r from-[#0A2E63] via-yellow-400 to-[#0A2E63]" />

          </motion.div>

        </div>

      </section>

    </>

  );

}

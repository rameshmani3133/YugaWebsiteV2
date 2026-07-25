import { motion } from "framer-motion";

import SEO from "../components/seo/SEO";

import { SITE } from "../config";

export default function TermsAndConditions() {

  const lastUpdated = "July 2026";

  return (

    <>

      <SEO
        title="Terms & Conditions"
        description={`Read the Terms & Conditions governing the use of ${SITE.name} website and consultancy services.`}
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

              Terms & Conditions

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-200">

              These Terms & Conditions govern your use of the
              {` ${SITE.name} `}
              website and the consultancy services we provide.
              By accessing this website, you agree to comply with
              these terms.

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
                ACCEPTANCE OF TERMS
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                1. Acceptance of Terms

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                By accessing and using this website, you agree to be
                bound by these Terms & Conditions. If you do not agree
                with any part of these terms, you should discontinue
                the use of this website.

              </p>

            </motion.section>

            {/* ======================================
                WEBSITE USAGE
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                2. Website Usage

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                This website is intended to provide general
                information about our consultancy services. You agree
                to use this website only for lawful purposes and in a
                manner that does not interfere with its operation or
                the experience of other users.

              </p>

              <ul className="mt-6 list-disc space-y-3 pl-6 leading-8 text-slate-600">

                <li>Do not misuse or attempt to disrupt the website.</li>

                <li>Do not upload harmful software or malicious code.</li>

                <li>Do not use the website for unlawful activities.</li>

                <li>Respect applicable laws and regulations.</li>

              </ul>

            </motion.section>

            {/* ======================================
                CONSULTANCY SERVICES
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                3. Consultancy Services

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                {SITE.name} provides consultancy and documentation
                assistance. Completion of services may depend on the
                accuracy of information provided by clients,
                submission of required documents, applicable laws,
                and the procedures of the relevant government
                authorities.

              </p>

              <ul className="mt-6 list-disc space-y-3 pl-6 leading-8 text-slate-600">

                <li>Document verification requirements.</li>

                <li>Government processing timelines.</li>

                <li>Availability of supporting records.</li>

                <li>Compliance with applicable legal requirements.</li>

              </ul>

            </motion.section>

            {/* ======================================
                USER RESPONSIBILITIES
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                4. User Responsibilities

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                Users are responsible for ensuring that all
                information and documents provided are accurate,
                complete, and legally valid. Any delays or issues
                arising from inaccurate or incomplete information may
                affect the services requested.

              </p>

              <ul className="mt-6 list-disc space-y-3 pl-6 leading-8 text-slate-600">

                <li>Provide accurate information.</li>

                <li>Submit genuine supporting documents.</li>

                <li>Respond promptly to additional requests.</li>

                <li>Comply with all applicable laws.</li>

              </ul>

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

                5. Intellectual Property

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                Unless otherwise stated, all content available on this
                website, including text, graphics, logos, photographs,
                icons, layouts, designs, and other materials, is the
                property of {SITE.name} or is used with appropriate
                permission.

              </p>

              <p className="mt-6 leading-9 text-slate-600">

                You may not reproduce, modify, distribute, publish,
                transmit, display, or commercially exploit any part of
                this website without our prior written permission.

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

                While we strive to provide accurate and reliable
                consultancy services, {SITE.name} shall not be liable
                for delays, losses, or damages resulting from factors
                beyond our reasonable control, including government
                procedures, legal requirements, incomplete client
                information, or third-party actions.

              </p>

              <p className="mt-6 leading-9 text-slate-600">

                Information provided on this website is for general
                informational purposes and should not be considered a
                substitute for professional legal, financial, or
                governmental advice.

              </p>

            </motion.section>

            {/* ======================================
                THIRD-PARTY LINKS
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                7. Third-Party Links

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                This website may include links to third-party websites
                or government portals for your convenience. We do not
                control or endorse the content, privacy practices, or
                availability of those websites and are not responsible
                for their content or services.

              </p>

            </motion.section>

            {/* ======================================
                PRIVACY & DATA PROTECTION
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                8. Privacy & Data Protection

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                Your use of this website is also governed by our
                Privacy Policy. We encourage you to review our Privacy
                Policy to understand how we collect, use, store, and
                protect your personal information.

              </p>

            </motion.section>

                        {/* ======================================
                INDEMNIFICATION
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                9. Indemnification

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                You agree to indemnify and hold harmless {SITE.name},
                its management, employees, representatives, and
                affiliates from any claims, liabilities, damages,
                losses, or expenses arising from your misuse of this
                website, violation of these Terms & Conditions, or
                submission of false, misleading, or unlawful
                information.

              </p>

            </motion.section>

            {/* ======================================
                GOVERNING LAW
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                10. Governing Law

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                These Terms & Conditions shall be governed by and
                interpreted in accordance with the laws of India.
                Any disputes relating to the use of this website or
                our consultancy services shall be subject to the
                jurisdiction of the competent courts having
                jurisdiction over our principal place of business,
                unless otherwise required by applicable law.

              </p>

            </motion.section>

            {/* ======================================
                CHANGES TO TERMS
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                11. Changes to These Terms

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                We may revise these Terms & Conditions from time to
                time to reflect changes in our services, legal
                requirements, or business operations. Any updates
                will be published on this page with the revised
                "Last Updated" date.

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

                12. Contact Information

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                If you have any questions regarding these Terms &
                Conditions or our consultancy services, please
                contact us using the information below.

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

  {SITE.office.addressLine1 && (
    <>
      {SITE.office.addressLine1}
      <br />
    </>
  )}

  {SITE.office.city},

  <br />

  {SITE.office.state}

  {SITE.office.pincode && (
    <>
      {" "}
      {SITE.office.pincode}
    </>
  )}

  <br />

  {SITE.office.country}

</p>

                  </div>

                </div>

              </div>

            </motion.section>

            {/* ======================================
                TERMS SUMMARY
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

                  We are committed to providing professional,
                  transparent, and reliable documentation
                  consultancy services. These Terms &
                  Conditions are intended to ensure a fair,
                  secure, and respectful relationship between
                  our consultancy and every client.

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
                  that you have read, understood, and agreed to these
                  Terms & Conditions. If you do not agree with any part
                  of these Terms, you should discontinue the use of this
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
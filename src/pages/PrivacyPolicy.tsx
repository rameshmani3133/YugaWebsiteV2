import { motion } from "framer-motion";

import SEO from "../components/seo/SEO";

import { SITE } from "../config";

export default function PrivacyPolicy() {

  const lastUpdated = "July 2026";

  return (

    <>

      <SEO
        title="Privacy Policy"
        description={`Read the Privacy Policy of ${SITE.name}. Learn how we collect, use and protect your personal information.`}
      />

      {/* ======================================
          HERO
      ====================================== */}

      <section className="relative overflow-hidden bg-gradient-to-br from-[#081F45] via-[#0A2E63] to-[#164A92] py-24">

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative mx-auto max-w-5xl px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <span className="rounded-full bg-yellow-400/20 px-6 py-2 text-sm font-semibold text-yellow-300">

              LEGAL

            </span>

            <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-6xl">

              Privacy Policy

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-200">

              Your privacy is important to us. This Privacy Policy
              explains how {SITE.name} collects, uses, stores and
              protects your information when you use our website
              or contact our consultancy.

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

          <div className="rounded-3xl bg-white p-10 shadow-xl space-y-12">

                        {/* ======================================
                INFORMATION WE COLLECT
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                1. Information We Collect

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                When you contact {SITE.name} through our website,
                telephone, email, WhatsApp, or visit our office,
                we may collect information necessary to provide our
                documentation consultancy services.

              </p>

              <ul className="mt-6 list-disc space-y-3 pl-6 leading-8 text-slate-600">

                <li>Full Name</li>

                <li>Mobile Number</li>

                <li>Email Address</li>

                <li>Property-related information provided by you</li>

                <li>Documents voluntarily submitted for verification</li>

                <li>Messages and enquiries sent through our website</li>

              </ul>

            </motion.section>

            {/* ======================================
                HOW WE USE INFORMATION
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                2. How We Use Your Information

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                We use the information collected only for legitimate
                business purposes related to documentation consultancy
                and customer support.

              </p>

              <ul className="mt-6 list-disc space-y-3 pl-6 leading-8 text-slate-600">

                <li>Responding to enquiries</li>

                <li>Providing consultancy services</li>

                <li>Preparing required documentation</li>

                <li>Communicating updates regarding your request</li>

                <li>Improving our website and customer experience</li>

                <li>Meeting applicable legal or regulatory obligations</li>

              </ul>

            </motion.section>

            {/* ======================================
                INFORMATION SHARING
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                3. Information Sharing

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                We do not sell, rent or trade your personal
                information. Information may only be shared where
                necessary to provide requested services, comply with
                legal obligations, or when required by competent
                government authorities.

              </p>

            </motion.section>

            {/* ======================================
                COOKIES
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                4. Cookies & Analytics

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                Our website may use cookies and analytics tools to
                improve functionality, measure website performance,
                and understand how visitors interact with our website.
                These technologies help us improve user experience and
                website performance.

              </p>

            </motion.section>

                        {/* ======================================
                DATA SECURITY
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                5. Data Security

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                We take reasonable administrative, technical, and
                organizational measures to protect your personal
                information against unauthorized access, alteration,
                disclosure, or destruction. While we strive to use
                commercially acceptable methods to safeguard your
                information, no method of electronic transmission or
                storage can be guaranteed to be completely secure.

              </p>

            </motion.section>

            {/* ======================================
                DATA RETENTION
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                6. Data Retention

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                We retain your information only for as long as
                necessary to provide our consultancy services,
                comply with legal obligations, resolve disputes,
                maintain business records, and enforce our
                agreements where applicable.

              </p>

            </motion.section>

            {/* ======================================
                YOUR RIGHTS
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                7. Your Rights

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                Subject to applicable laws, you may have the right
                to request access to, correction of, or deletion of
                your personal information. You may also contact us
                to update your information or raise any privacy-related
                concerns.

              </p>

              <ul className="mt-6 list-disc space-y-3 pl-6 leading-8 text-slate-600">

                <li>Request correction of inaccurate information</li>

                <li>Request deletion where legally permissible</li>

                <li>Withdraw consent where applicable</li>

                <li>Contact us regarding privacy concerns</li>

              </ul>

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

                8. Third-Party Links

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                Our website may contain links to third-party websites
                or services for your convenience. We are not responsible
                for the privacy practices, security, or content of
                external websites. We encourage you to review the
                privacy policies of any third-party websites you visit.

              </p>

            </motion.section>

            {/* ======================================
                CHILDREN'S PRIVACY
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                9. Children's Privacy

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                Our website and consultancy services are not intended
                for children under the age of 18. We do not knowingly
                collect personal information from children through
                this website.

              </p>

            </motion.section>

                        {/* ======================================
                CHANGES TO THIS POLICY
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <h2 className="text-3xl font-bold text-[#0A2E63]">

                10. Changes to This Privacy Policy

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                We may update this Privacy Policy from time to time
                to reflect changes in our services, legal
                requirements, or business practices. The latest
                version will always be published on this page with
                the updated revision date.

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

                11. Contact Us

              </h2>

              <p className="mt-6 leading-9 text-slate-600">

                If you have any questions regarding this Privacy
                Policy or how your personal information is handled,
                please contact us using the details below.

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
                PRIVACY SUMMARY
            ====================================== */}

            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >

              <div className="rounded-3xl bg-gradient-to-r from-[#081F45] via-[#0A2E63] to-[#164A92] p-10 text-white">

                <h2 className="text-3xl font-bold">

                  Privacy Commitment

                </h2>

                <p className="mt-6 leading-9 text-slate-200">

                  At {SITE.shortName}, protecting your privacy is an
                  important part of the trust our clients place in us.
                  We collect only the information necessary to provide
                  our consultancy services and handle it responsibly,
                  securely, and in accordance with applicable laws.

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

                  By using this website, you acknowledge that you
                  have read and understood this Privacy Policy.
                  Continued use of the website constitutes your
                  acceptance of this policy.

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

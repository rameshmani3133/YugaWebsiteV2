import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import { Home, PhoneCall } from "lucide-react";

import SEO from "../components/seo/SEO";

import { SITE } from "../config";

export default function NotFound() {

  return (

    <>

      <SEO
        title="Page Not Found"
        description={`The page you are looking for could not be found on ${SITE.name}.`}
      />

      <section className="relative overflow-hidden bg-gradient-to-br from-[#081F45] via-[#0A2E63] to-[#164A92] py-24">

        <div className="absolute inset-0 bg-black/20" />

        <div className="relative mx-auto max-w-6xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* ======================================
                LEFT
            ====================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              <span className="rounded-full bg-yellow-400/20 px-6 py-2 text-sm font-semibold text-yellow-300">

                ERROR 404

              </span>

              <h1 className="mt-8 text-6xl font-black text-white lg:text-7xl">

                Page

                <br />

                Not Found

              </h1>

              <p className="mt-8 max-w-xl text-xl leading-9 text-slate-200">

                Sorry, the page you are looking for doesn't
                exist, has been moved, or the URL may be
                incorrect.

              </p>

              <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">

                Continue browsing our website using the
                buttons below.

              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-300"
                >

                  <Home size={22} />

                  Back to Home

                </Link>

                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-xl border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/20"
                >

                  <PhoneCall size={22} />

                  Contact Us

                </Link>

              </div>

            </motion.div>

            {/* ======================================
                RIGHT
            ====================================== */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
              className="relative flex items-center justify-center"
            >

              {/* Decorative circles */}

              <div className="absolute h-80 w-80 rounded-full bg-yellow-400/10 blur-3xl" />

              <div className="absolute h-60 w-60 rounded-full border border-white/10" />

              <div className="absolute h-96 w-96 rounded-full border border-white/5" />

              {/* 404 */}

              <div className="relative text-center">

                <motion.h2
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-[9rem] font-black leading-none text-white/10 lg:text-[12rem]"
                >

                  404

                </motion.h2>

                <div className="-mt-6 rounded-2xl border border-white/10 bg-white/10 px-8 py-6 backdrop-blur">

                  <h3 className="text-2xl font-bold text-white">

                    Oops!

                  </h3>

                  <p className="mt-3 leading-8 text-slate-200">

                    We couldn't find the page you were looking for.

                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

            {/* ======================================
          QUICK NAVIGATION
      ====================================== */}

      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold text-[#0A2E63]">

              Continue Browsing

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">

              The page you're looking for may have been moved.
              You can continue exploring our website using one
              of the links below.

            </p>

          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

            <Link
              to="/"
              className="rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <h3 className="text-xl font-bold text-[#0A2E63]">

                Home

              </h3>

              <p className="mt-4 text-slate-600">

                Return to our homepage.

              </p>

            </Link>

            <Link
              to="/about"
              className="rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <h3 className="text-xl font-bold text-[#0A2E63]">

                About

              </h3>

              <p className="mt-4 text-slate-600">

                Learn about our consultancy.

              </p>

            </Link>

            <Link
              to="/services"
              className="rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <h3 className="text-xl font-bold text-[#0A2E63]">

                Services

              </h3>

              <p className="mt-4 text-slate-600">

                Explore our professional services.

              </p>

            </Link>

            <Link
              to="/gallery"
              className="rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <h3 className="text-xl font-bold text-[#0A2E63]">

                Gallery

              </h3>

              <p className="mt-4 text-slate-600">

                View our office and activities.

              </p>

            </Link>

            <Link
              to="/contact"
              className="rounded-2xl bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <h3 className="text-xl font-bold text-[#0A2E63]">

                Contact

              </h3>

              <p className="mt-4 text-slate-600">

                Reach our team for assistance.

              </p>

            </Link>

          </div>

          {/* ======================================
              NEED HELP
          ====================================== */}

          <div className="mt-20 rounded-3xl bg-gradient-to-r from-[#081F45] via-[#0A2E63] to-[#164A92] px-8 py-14 text-center text-white shadow-2xl">

            <h2 className="text-4xl font-bold">

              Need Assistance?

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">

              If you reached this page while looking for a
              documentation service, our team will be happy to
              guide you. Contact us and we'll help you find the
              information or service you need.

            </p>

            <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">

              <a
                href={`tel:${SITE.contact.phoneDigits}`}
                className="rounded-xl bg-white px-8 py-4 font-semibold text-[#0A2E63] transition-all duration-300 hover:scale-105"
              >

                Call Us

              </a>

              <a
                href={`https://wa.me/${SITE.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-green-700"
              >

                WhatsApp Us

              </a>

            </div>

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
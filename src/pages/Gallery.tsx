import { useMemo, useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import {
  X,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Phone,
  ArrowRight,
} from "lucide-react";

import SEO from "../components/seo/SEO";

import {
  SITE,
  GALLERY,
} from "../config";

const CATEGORIES = [
  "all",
  "office",
  "registration",
  "documentation",
  "events",
] as const;

type Category = (typeof CATEGORIES)[number];

export default function Gallery() {

  const [category, setCategory] =
    useState<Category>("all");

  const [selectedIndex, setSelectedIndex] =
    useState<number | null>(null);

  const filteredImages = useMemo(() => {

    if (category === "all") {

      return GALLERY;

    }

    return GALLERY.filter(
      image => image.category === category
    );

  }, [category]);

  const closeLightbox = () => {

    setSelectedIndex(null);

  };

  const previousImage = () => {

    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0
        ? filteredImages.length - 1
        : selectedIndex - 1
    );

  };

  const nextImage = () => {

    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === filteredImages.length - 1
        ? 0
        : selectedIndex + 1
    );

  };

  return (

    <>

      <SEO
        title="Gallery"
        description="Gallery of documentation services, office, customer assistance and registrations."
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
            className="mx-auto max-w-5xl text-center"
          >

            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 px-6 py-2 text-sm font-semibold text-yellow-300">

              <ImageIcon size={18} />

              GALLERY

            </div>

            <h1 className="mt-8 text-5xl font-extrabold text-white lg:text-6xl">

              Moments That Reflect Our Professional Service

            </h1>

            <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-200">

              Explore our office, documentation services,
              registration activities and customer support
              provided by {SITE.shortName}.

            </p>

          </motion.div>

        </div>

      </section>

      {/* ======================================
          FILTERS
      ====================================== */}

      <section className="bg-white py-16">

        <div className="mx-auto max-w-7xl px-6">

          <div className="flex flex-wrap justify-center gap-4">

            {CATEGORIES.map((item) => (

              <button
                key={item}
                type="button"
                onClick={() => setCategory(item)}
                className={`rounded-full px-6 py-3 font-semibold transition-all duration-300 ${
                  category === item
                    ? "bg-[#0A2E63] text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-[#0A2E63] hover:text-white"
                }`}
              >

                {item.charAt(0).toUpperCase() + item.slice(1)}

              </button>

            ))}

          </div>

        </div>

      </section>

      {/* ======================================
          GALLERY GRID
      ====================================== */}

      <section className="bg-slate-50 pb-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        {filteredImages.map((image, index) => (

              <motion.button
                key={image.id}
                type="button"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                onClick={() => setSelectedIndex(index)}
                className="group overflow-hidden rounded-3xl bg-white text-left shadow-xl transition-all duration-300 hover:shadow-2xl"
              >

                {/* Image */}

                <div className="relative overflow-hidden">

                  <img
                    src={image.image}
                    alt={image.title}
                    loading="lazy"
                    className="h-80 w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                  <div className="absolute bottom-5 left-5 translate-y-6 text-white opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">

                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold backdrop-blur">

                      {image.category.toUpperCase()}

                    </span>

                  </div>

                </div>

                {/* Content */}

                <div className="p-6">

                  <h3 className="text-xl font-bold text-[#0A2E63]">

                    {image.title}

                  </h3>

                  <p className="mt-3 text-slate-600">

                    {SITE.shortName} Documentation Consultancy

                  </p>

                </div>

              </motion.button>

            ))}

          </div>

          {filteredImages.length === 0 && (

            <div className="py-20 text-center">

              <ImageIcon
                size={60}
                className="mx-auto text-slate-300"
              />

              <h3 className="mt-6 text-2xl font-bold text-[#0A2E63]">

                No Images Available

              </h3>

              <p className="mt-3 text-slate-600">

                Images for this category will be uploaded soon.

              </p>

            </div>

          )}

        </div>

      </section>

      {/* ======================================
          LIGHTBOX
      ====================================== */}

      <AnimatePresence>

        {selectedIndex !== null && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-6"
          >

            <button
              type="button"
              onClick={closeLightbox}
              className="absolute right-6 top-6 z-20 rounded-full bg-white p-3 text-slate-800 shadow-xl transition hover:scale-110"
            >
              <X size={24} />
            </button>

            <button
              type="button"
              onClick={previousImage}
              className="absolute left-6 z-20 rounded-full bg-white p-3 text-slate-800 shadow-xl transition hover:scale-110"
            >
              <ChevronLeft size={30} />
            </button>

            <motion.img
              key={filteredImages[selectedIndex].id}
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
              }}
              transition={{
                duration: 0.3,
              }}
              src={filteredImages[selectedIndex].image}
              alt={filteredImages[selectedIndex].title}
              className="max-h-[85vh] max-w-[90vw] rounded-3xl shadow-2xl"
            />

            <button
              type="button"
              onClick={nextImage}
              className="absolute right-6 z-20 rounded-full bg-white p-3 text-slate-800 shadow-xl transition hover:scale-110"
            >
              <ChevronRight size={30} />
            </button>

            {/* Image Information */}

            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="absolute bottom-8 left-1/2 w-[90%] max-w-xl -translate-x-1/2 rounded-2xl bg-black/60 px-8 py-5 text-center text-white backdrop-blur"
            >

              <div className="text-2xl font-bold">

                {filteredImages[selectedIndex].title}

              </div>

              <div className="mt-2 text-slate-300">

                {filteredImages[selectedIndex].category
                  .charAt(0)
                  .toUpperCase() +
                  filteredImages[selectedIndex].category.slice(1)}

              </div>

              <div className="mt-3 text-sm text-slate-400">

                Image {selectedIndex + 1} of {filteredImages.length}

              </div>

            </motion.div>

          </motion.div>

        )}

      </AnimatePresence>

      {/* ======================================
          CONTACT CTA
      ====================================== */}

      <section className="bg-gradient-to-br from-[#081F45] via-[#0A2E63] to-[#164A92] py-24 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
            }}
            className="mx-auto max-w-4xl text-center"
          >

            <span className="rounded-full bg-yellow-400/20 px-6 py-2 text-sm font-semibold text-yellow-300">

              NEED ASSISTANCE?

            </span>

            <h2 className="mt-8 text-4xl font-extrabold lg:text-5xl">

              Let's Help You With Your Documentation

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-200">

              Contact our experienced team for professional guidance
              on Property Registration, Patta Transfer,
              Legal Documentation and Government Documentation Services.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

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


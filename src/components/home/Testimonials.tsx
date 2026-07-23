import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ramesh Kumar",
    place: "Namakkal",
    review:
      "Excellent service. They handled my property registration professionally and completed the process smoothly.",
  },
  {
    id: 2,
    name: "S. Lakshmi",
    place: "Paramathi",
    review:
      "Very transparent and trustworthy consultancy. I highly recommend YUGA for legal documentation.",
  },
  {
    id: 3,
    name: "K. Prakash",
    place: "Mohanur",
    review:
      "Fast documentation process with excellent customer support. Everything was explained clearly.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">

            CLIENT TESTIMONIALS

          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0A2E63]">

            What Our Clients Say

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">

            Customer satisfaction is our greatest achievement.

          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {testimonials.map((item, index) => (

            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:shadow-2xl"
            >

              <div className="mb-5 flex">

                {[...Array(5)].map((_, i) => (

                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

              <p className="leading-8 text-slate-600">

                "{item.review}"

              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0A2E63] text-xl font-bold text-white">

                  {item.name.charAt(0)}

                </div>

                <div>

                  <h3 className="font-semibold text-[#0A2E63]">

                    {item.name}

                  </h3>

                  <p className="text-sm text-slate-500">

                    {item.place}

                  </p>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}
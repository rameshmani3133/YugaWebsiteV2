import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "../../constants/services";

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[#0A2E63]">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0A2E63]">
            Professional Documentation Services
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            We provide reliable, transparent and professional consultancy
            services for all property documentation and government-related
            processes.
          </p>
        </motion.div>

        {/* Service Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service, index) => {

            const Icon = service.icon;

            return (

              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -10,
                }}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-md transition hover:shadow-2xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0A2E63]/10">

                  <Icon
                    size={34}
                    className="text-[#0A2E63]"
                  />

                </div>

                <h3 className="mb-4 text-2xl font-semibold text-[#0A2E63]">

                  {service.title}

                </h3>

                <p className="mb-8 leading-7 text-slate-600">

                  {service.description}

                </p>

                <button
                  className="inline-flex items-center gap-2 font-semibold text-[#0A2E63] transition group-hover:text-[#D4AF37]"
                >

                  Learn More

                  <ArrowRight size={18} />

                </button>

              </motion.div>

            );

          })}

        </div>

      </div>
    </section>
  );
}
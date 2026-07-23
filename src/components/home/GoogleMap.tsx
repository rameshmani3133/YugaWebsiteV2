import { motion } from "framer-motion";

export default function GoogleMap() {
  return (
    <section className="bg-slate-100 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[#0A2E63]">
            OUR LOCATION
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0A2E63]">
            Visit Our Office
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            We welcome you to visit YUGA Document Consultancy Centre for
            professional consultation and documentation services.
          </p>

        </motion.div>

        <div className="overflow-hidden rounded-3xl shadow-2xl">

          <iframe
            title="YUGA Document Consultancy Centre"
            src="https://maps.google.com/maps?q=11.218037,78.164956&z=17&output=embed"
            width="100%"
            height="550"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />

        </div>

      </div>

    </section>
  );
}
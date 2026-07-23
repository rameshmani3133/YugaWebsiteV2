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
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d198.12448631895452!2d78.1648132605034!3d11.218036362145535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1784774118130!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />

        </div>

      </div>

    </section>
  );
}
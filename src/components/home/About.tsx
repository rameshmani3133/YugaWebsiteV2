import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  "Property Registration Assistance",
  "Patta Transfer Guidance",
  "Legal Documentation Support",
  "Government Service Assistance",
];

export default function About() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Image */}

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/images/about-office.jpg"
            alt="YUGA Office"
            className="rounded-3xl shadow-2xl"
          />
        </motion.div>

        {/* Content */}

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="rounded-full bg-yellow-100 px-4 py-2 text-sm font-semibold text-yellow-700">
            ABOUT YUGA
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0A2E63]">
            Trusted Documentation &
            Registration Consultancy
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            YUGA Document Consultancy Centre provides professional guidance
            for property documentation, registration, patta transfer,
            encumbrance certificates, legal documentation, and various
            government-related services with a focus on transparency,
            reliability, and customer satisfaction.
          </p>

          <div className="mt-8 space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <CheckCircle2 className="text-green-600" size={22} />
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="/about"
              className="inline-flex items-center gap-2 rounded-xl bg-[#0A2E63] px-6 py-3 font-semibold text-white transition hover:bg-[#164A92]"
            >
              Learn More
              <ArrowRight size={18} />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center rounded-xl border border-[#0A2E63] px-6 py-3 font-semibold text-[#0A2E63] transition hover:bg-[#0A2E63] hover:text-white"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
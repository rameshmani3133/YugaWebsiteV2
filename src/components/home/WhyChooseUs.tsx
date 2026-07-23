import { motion } from "framer-motion";
import {
  ShieldCheck,
  Users,
  Clock3,
  FileCheck2,
  Landmark,
  BadgeCheck,
} from "lucide-react";

const reasons = [
  {
    title: "Trusted Consultancy",
    description:
      "Professional guidance with complete transparency throughout every documentation process.",
    icon: ShieldCheck,
  },
  {
    title: "Experienced Team",
    description:
      "Experienced professionals assisting property registration and legal documentation.",
    icon: Users,
  },
  {
    title: "Timely Processing",
    description:
      "We focus on completing documentation quickly without compromising accuracy.",
    icon: Clock3,
  },
  {
    title: "Document Verification",
    description:
      "Every document is carefully reviewed before submission.",
    icon: FileCheck2,
  },
  {
    title: "Government Guidance",
    description:
      "Expert assistance with registration offices and government procedures.",
    icon: Landmark,
  },
  {
    title: "Customer Satisfaction",
    description:
      "Dedicated support from enquiry until successful completion.",
    icon: BadgeCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >

          <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            WHY CHOOSE US
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0A2E63]">
            Why Clients Trust YUGA
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            We combine professional knowledge, transparent service and customer
            commitment to deliver reliable documentation solutions.
          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {reasons.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl bg-white p-8 shadow-lg transition hover:shadow-2xl"
              >

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#0A2E63]/10">

                  <Icon
                    size={34}
                    className="text-[#0A2E63]"
                  />

                </div>

                <h3 className="mb-4 text-2xl font-semibold text-[#0A2E63]">
                  {item.title}
                </h3>

                <p className="leading-7 text-slate-600">
                  {item.description}
                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
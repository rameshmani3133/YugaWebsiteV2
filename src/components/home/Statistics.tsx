import { motion } from "framer-motion";
import CountUpImport from "react-countup";
import {
  Users,
  FileText,
  Award,
  BadgeCheck,
} from "lucide-react";

const CountUp = (CountUpImport as any).default || CountUpImport;

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    title: "Happy Clients",
  },
  {
    icon: FileText,
    value: 1500,
    suffix: "+",
    title: "Documents Processed",
  },
  {
    icon: Award,
    value: 10,
    suffix: "+",
    title: "Years Experience",
  },
  {
    icon: BadgeCheck,
    value: 99,
    suffix: "%",
    title: "Customer Satisfaction",
  },
];

export default function Statistics() {
  return (
    <section className="bg-[#0A2E63] py-24">

      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >

          <span className="rounded-full bg-yellow-400 px-5 py-2 text-sm font-semibold text-slate-900">

            OUR ACHIEVEMENTS

          </span>

          <h2 className="mt-6 text-4xl font-bold text-white">

            Trusted by Hundreds of Clients

          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-300">

            We provide reliable documentation services with
            transparency, professionalism and customer satisfaction.

          </p>

        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {stats.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-lg"
              >

                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-400">

                  <Icon
                    size={36}
                    className="text-[#0A2E63]"
                  />

                </div>

                <h3 className="text-5xl font-bold text-white">
                  <CountUp end={item.value} duration={2} suffix={item.suffix} />
                </h3>

                <p className="mt-4 text-lg text-slate-200">

                  {item.title}

                </p>

              </motion.div>

            );

          })}

        </div>

      </div>

    </section>
  );
}
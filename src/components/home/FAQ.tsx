import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does YUGA provide?",
    answer:
      "We provide property registration, legal documentation, Patta transfer, Encumbrance Certificate (EC), bank loan documentation and various government documentation services.",
  },
  {
    question: "Do you assist with property registration?",
    answer:
      "Yes. We provide complete assistance from document verification until the registration process is completed.",
  },
  {
    question: "Can you help with Patta Transfer?",
    answer:
      "Yes. We guide clients through the Patta transfer process and help prepare all required documents.",
  },
  {
    question: "Do I need an appointment?",
    answer:
      "Walk-in customers are welcome. However, scheduling an appointment helps us serve you more efficiently.",
  },
  {
    question: "How can I contact YUGA?",
    answer:
      "You can call us, email us, or contact us instantly through WhatsApp using the buttons available on the website.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0A2E63]">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Find quick answers to the questions we receive most often.
          </p>
        </motion.div>

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow"
            >

              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >

                <h3 className="text-lg font-semibold text-[#0A2E63]">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              <AnimatePresence>

                {openIndex === index && (

                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >

                    <div className="border-t px-6 py-5 text-slate-600 leading-7">
                      {faq.answer}
                    </div>

                  </motion.div>

                )}

              </AnimatePresence>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
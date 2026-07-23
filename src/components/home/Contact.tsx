import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
} from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-[#0A2E63]">
            CONTACT US
          </span>

          <h2 className="mt-6 text-4xl font-bold text-[#0A2E63]">
            Let's Discuss Your Documentation Needs
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-slate-600">
            Contact us by phone, WhatsApp, email or visit our office.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Contact Information */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >

            <ContactCard
              icon={<Phone size={28} />}
              title="Call Us"
              value="+91 99409 44985"
              href="tel:+919940944985"
            />

            <ContactCard
              icon={<MessageCircle size={28} />}
              title="WhatsApp"
              value="Chat with us instantly"
              href="https://wa.me/919940944985"
            />

            <ContactCard
              icon={<Mail size={28} />}
              title="Email"
              value="info@yugadocument.in"
              href="mailto:info@yugadocument.in"
            />

            <ContactCard
              icon={<MapPin size={28} />}
              title="Office"
              value="YUGA Document Consultancy Centre"
            />

            <ContactCard
              icon={<Clock size={28} />}
              title="Working Hours"
              value="Mon - Sat | 9:30 AM - 7:30 PM"
            />

          </motion.div>

          {/* Contact Form */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-slate-50 p-8 shadow-xl"
          >

            <input
              type="text"
              placeholder="Full Name"
              className="mb-5 w-full rounded-xl border p-4 outline-none focus:border-[#0A2E63]"
            />

            <input
              type="tel"
              placeholder="Mobile Number"
              className="mb-5 w-full rounded-xl border p-4 outline-none focus:border-[#0A2E63]"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="mb-5 w-full rounded-xl border p-4 outline-none focus:border-[#0A2E63]"
            />

            <textarea
              rows={5}
              placeholder="Message"
              className="mb-6 w-full rounded-xl border p-4 outline-none focus:border-[#0A2E63]"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-[#0A2E63] py-4 font-semibold text-white transition hover:bg-[#164A92]"
            >
              Send Enquiry
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

type ContactCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
};

function ContactCard({
  icon,
  title,
  value,
  href,
}: ContactCardProps) {
  const content = (
    <div className="flex items-center gap-5 rounded-2xl border p-6 transition hover:border-[#0A2E63] hover:shadow-lg">
      <div className="rounded-xl bg-[#0A2E63]/10 p-4 text-[#0A2E63]">
        {icon}
      </div>

      <div>
        <h3 className="font-semibold text-[#0A2E63]">
          {title}
        </h3>

        <p className="text-slate-600">
          {value}
        </p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
      >
        {content}
      </a>
    );
  }

  return content;
}
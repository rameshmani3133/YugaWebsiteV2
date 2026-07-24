import { useState } from "react";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
} from "lucide-react";

import SEO from "../components/seo/SEO";
import GoogleMap from "../components/home/GoogleMap";

import {
  SITE,
  SERVICES,
} from "../config";

type ContactForm = {

  name: string;

  mobile: string;

  email: string;

  service: string;

  message: string;

};

const initialForm: ContactForm = {

  name: "",

  mobile: "",

  email: "",

  service: "",

  message: "",

};

export default function Contact() {

  const [form, setForm] = useState(initialForm);

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState("");

  const [error, setError] = useState("");

  const handleChange = (

    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLSelectElement |
      HTMLTextAreaElement
    >

  ) => {

    setForm((previous) => ({

      ...previous,

      [e.target.name]: e.target.value,

    }));

  };

  const handleSubmit = async (

    e: React.FormEvent

  ) => {

    e.preventDefault();

    setLoading(true);

    setSuccess("");

    setError("");

    try {

      /**
       * API Call
       * Next Step:
       * submitContact(form)
       */

      await new Promise(resolve =>
        setTimeout(resolve, 1000)
      );

      setSuccess(
        "Thank you. Your enquiry has been submitted successfully."
      );

      setForm(initialForm);

    } catch {

      setError(
        "Unable to submit your enquiry."
      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <>

      <SEO

        title="Contact Us"

        description="Contact YUGA DOCUMENT CONSULTANCY CENTRE for Property Registration, Patta Transfer, Legal Documentation and Government Documentation Services."

      />

      <section className="bg-slate-50 py-20">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-14 text-center">

            <h1 className="text-5xl font-bold text-[#0A2E63]">

              Contact Us

            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">

              We'd love to hear from you.
              Contact us for professional
              documentation consultancy and
              government-related services.

            </p>

          </div>

          <div className="grid gap-12 lg:grid-cols-2">
                    {/* ======================================
                CONTACT INFORMATION
            ======================================= */}

            <div>

              <div className="rounded-2xl bg-white p-8 shadow-lg">

                <h2 className="mb-8 text-3xl font-bold text-[#0A2E63]">

                  Get In Touch

                </h2>

                <p className="mb-10 leading-8 text-slate-600">

                  Our team is ready to assist you with
                  Property Registration, Patta Transfer,
                  Legal Documentation and other
                  Government Documentation Services.

                </p>

                <div className="space-y-8">

                  {/* Phone */}

                  <div className="flex items-start gap-5">

                    <div className="rounded-xl bg-[#0A2E63] p-3 text-white">

                      <Phone size={22} />

                    </div>

                    <div>

                      <h3 className="font-semibold text-slate-900">

                        Call Us

                      </h3>

                      <a
                        href={`tel:${SITE.contact.phoneDigits}`}
                        className="mt-1 block text-slate-600 transition hover:text-[#0A2E63]"
                      >
                        {SITE.contact.phone}
                      </a>

                    </div>

                  </div>

                  {/* Email */}

                  <div className="flex items-start gap-5">

                    <div className="rounded-xl bg-[#0A2E63] p-3 text-white">

                      <MessageCircle size={22} />

                    </div>

                    <div>

                      <h3 className="font-semibold text-slate-900">

                        Email

                      </h3>

                      <a
                        href={`mailto:${SITE.contact.email}`}
                        className="mt-1 block break-all text-slate-600 transition hover:text-[#0A2E63]"
                      >
                        {SITE.contact.email}
                      </a>

                    </div>

                  </div>

                  {/* Address */}

                  <div className="flex items-start gap-5">

                    <div className="rounded-xl bg-[#0A2E63] p-3 text-white">

                      <MapPin size={22} />

                    </div>

                    <div>

                      <h3 className="font-semibold text-slate-900">

                        Office

                      </h3>

                      <p className="mt-1 leading-7 text-slate-600">

                        {SITE.office.addressLine1 && (
                          <>
                            {SITE.office.addressLine1}
                            <br />
                          </>
                        )}

                        {SITE.office.city},

                        <br />

                        {SITE.office.state},

                        {" "}

                        {SITE.office.country}

                      </p>

                    </div>

                  </div>

                  {/* Working Hours */}

                  <div className="flex items-start gap-5">

                    <div className="rounded-xl bg-[#0A2E63] p-3 text-white">

                      <Clock size={22} />

                    </div>

                    <div>

                      <h3 className="font-semibold text-slate-900">

                        Working Hours

                      </h3>

                      <p className="mt-1 leading-7 text-slate-600">

                        {SITE.timings.workingDays}

                        <br />

                        {SITE.timings.workingHours}

                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </div>

            {/* ======================================
                CONTACT FORM
            ======================================= */}

            <div>

              <div className="rounded-2xl bg-white p-8 shadow-lg">

                                <h2 className="mb-8 text-3xl font-bold text-[#0A2E63]">

                  Send an Enquiry

                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >

                  {/* Full Name */}

                  <div>

                    <label
                      htmlFor="name"
                      className="mb-2 block font-medium text-slate-700"
                    >
                      Full Name *
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0A2E63] focus:ring-2 focus:ring-[#0A2E63]/20"
                    />

                  </div>

                  {/* Mobile */}

                  <div>

                    <label
                      htmlFor="mobile"
                      className="mb-2 block font-medium text-slate-700"
                    >
                      Mobile Number *
                    </label>

                    <input
                      id="mobile"
                      name="mobile"
                      type="tel"
                      required
                      maxLength={10}
                      value={form.mobile}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0A2E63] focus:ring-2 focus:ring-[#0A2E63]/20"
                    />

                  </div>

                  {/* Email */}

                  <div>

                    <label
                      htmlFor="email"
                      className="mb-2 block font-medium text-slate-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0A2E63] focus:ring-2 focus:ring-[#0A2E63]/20"
                    />

                  </div>

                  {/* Service */}

                  <div>

                    <label
                      htmlFor="service"
                      className="mb-2 block font-medium text-slate-700"
                    >
                      Required Service *
                    </label>

                    <select
                      id="service"
                      name="service"
                      required
                      value={form.service}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-[#0A2E63] focus:ring-2 focus:ring-[#0A2E63]/20"
                    >

                      <option value="">

                        Select a Service

                      </option>

                      {SERVICES.map((service) => (

                        <option
                          key={service.id}
                          value={service.title}
                        >
                          {service.title}
                        </option>

                      ))}

                      <option value="Other">

                        Other

                      </option>

                    </select>

                  </div>

                  {/* Message */}

                  <div>

                    <label
                      htmlFor="message"
                      className="mb-2 block font-medium text-slate-700"
                    >
                      Message *
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your requirement..."
                      className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-[#0A2E63] focus:ring-2 focus:ring-[#0A2E63]/20"
                    />

                  </div>
                                    {/* =========================
                      SUCCESS MESSAGE
                  ========================== */}

                  {success && (

                    <div className="rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-green-700">

                      {success}

                    </div>

                  )}

                  {/* =========================
                      ERROR MESSAGE
                  ========================== */}

                  {error && (

                    <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">

                      {error}

                    </div>

                  )}

                  {/* =========================
                      SUBMIT BUTTON
                  ========================== */}

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#0A2E63] px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#164A92] disabled:cursor-not-allowed disabled:opacity-60"
                  >

                    <Send size={20} />

                    {loading
                      ? "Submitting..."
                      : "Submit Enquiry"}

                  </button>

                </form>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* ======================================
          GOOGLE MAP
      ======================================= */}

      <GoogleMap />

      {/* ======================================
          QUICK CONTACT CTA
      ======================================= */}

      <section className="bg-[#0A2E63] py-20 text-white">

        <div className="mx-auto max-w-7xl px-6">

          <div className="text-center">

            <h2 className="text-4xl font-bold">

              Need Immediate Assistance?

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">

              Contact us today for professional assistance with
              Property Registration, Patta Transfer,
              Encumbrance Certificate, Legal Documentation
              and Government Documentation Services.

            </p>

            <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">

              {/* Call Button */}

              <a
                href={`tel:${SITE.contact.phoneDigits}`}
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-[#0A2E63] shadow-lg transition-all duration-300 hover:scale-105 hover:bg-slate-100"
              >

                <Phone size={22} />

                Call Now

              </a>

              {/* WhatsApp Button */}

              <a
                href={`https://wa.me/${SITE.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-green-700"
              >

                <Mail size={22} />

                WhatsApp Us

              </a>

            </div>

          </div>

        </div>

      </section>
    </>

  );

}
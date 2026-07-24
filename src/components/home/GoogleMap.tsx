import { SITE } from "../../config";

export default function GoogleMap() {
  return (
    <section className="py-20 bg-slate-50">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-10 text-center">

          <h2 className="text-4xl font-bold text-[#0A2E63]">

            Visit Our Office

          </h2>

          <p className="mt-4 text-lg text-slate-600">

            We welcome you to visit our office for
            professional documentation consultancy
            and government-related services.

          </p>

        </div>

        <div className="overflow-hidden rounded-2xl shadow-xl">

          <iframe
            title={SITE.name}
            src={SITE.map.embed}
            width="100%"
            height="500"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            style={{
              border: 0,
            }}
          />
                  </div>

      </div>

    </section>
  );
}
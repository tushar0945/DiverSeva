import { motion } from "framer-motion";

const values = [
  {
    title: "Trust & Safety",
    desc: "Every driver is thoroughly verified through background checks and document validation.",
  },
  {
    title: "Professional Drivers",
    desc: "Trained professionals for personal, corporate, and long-distance journeys.",
  },
  {
    title: "Transparent Pricing",
    desc: "Clear, upfront pricing with no hidden charges or surprises.",
  },
  {
    title: "Customer-First Support",
    desc: "Dedicated human support available whenever you need assistance.",
  },
];

const OurValues = () => {
  return (
    <section className="bg-gray-50 py-28">
      <div className="max-w-7xl mx-auto px-6">
        {/* SECTION HEADER */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="inline-block mb-4 text-sm font-medium text-green-700 bg-green-100 px-4 py-1 rounded-full">
            What Drives Us
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Our Core Values
          </h2>

          <p className="text-gray-600 leading-relaxed">
            These values guide how we select our drivers, deliver our services,
            and build long-term trust with our customers.
          </p>
        </div>

        {/* VALUES GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white rounded-2xl border border-gray-100 p-8 hover:shadow-xl transition"
            >
              {/* Accent bar */}
              <div className="h-1 w-12 bg-green-600 rounded-full mb-6" />

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValues;

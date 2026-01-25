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
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* SECTION HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl mx-auto text-center mb-12 sm:mb-16"
        >
          <span className="inline-block mb-4 text-sm font-medium text-green-700 bg-green-100 px-4 py-1 rounded-full">
            What Drives Us
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Our Core Values
          </h2>

          <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
            These values guide how we select our drivers, deliver our services,
            and build long-term trust with our customers.
          </p>
        </motion.div>

        {/* VALUES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              whileHover={{ y: -6 }}
              className="
                group bg-white rounded-2xl
                border border-gray-100
                p-6 sm:p-8
                hover:shadow-xl
                transition-shadow duration-300
              "
            >
              {/* Accent bar */}
              <div className="h-1 w-10 bg-green-600 rounded-full mb-5" />

              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
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

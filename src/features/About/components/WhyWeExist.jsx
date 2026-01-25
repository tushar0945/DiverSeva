import { motion } from "framer-motion";

const WhyWeExist = () => {
  return (
    <section className="relative bg-gray-50 py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-14 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative"
        >
          {/* Section label */}
          <span className="inline-block mb-4 text-sm font-medium text-green-700 bg-green-100 px-4 py-1 rounded-full">
            Our Purpose
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
            Why We Exist
          </h2>

          <div className="border-l-4 border-green-600 pl-5 sm:pl-6">
            <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
              Finding a reliable driver at the right time should not be a source
              of stress. Unfortunately, safety concerns, inconsistent service,
              and lack of accountability make the process frustrating.
            </p>

            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
              DriverSeva exists to remove this uncertainty by combining verified
              professionals with technology-driven accountability — ensuring
              peace of mind with every booking.
            </p>
          </div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-white rounded-2xl border border-gray-100 shadow-lg p-6 sm:p-8 lg:p-10"
        >
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-6">
            What You Can Expect
          </h3>

          <ul className="space-y-4 sm:space-y-5 text-gray-700 text-sm sm:text-base font-medium">
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-0.5">✔</span>
              Background-verified and trained drivers
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-0.5">✔</span>
              Reliable, on-time service you can depend on
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-0.5">✔</span>
              Secure, transparent payments
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 mt-0.5">✔</span>
              Dedicated customer support throughout your journey
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWeExist;

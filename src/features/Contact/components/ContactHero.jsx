import { motion } from "framer-motion";
import contactIllustration from "../../../assets/conctactUs/contactUs.png";

const ContactHero = () => {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className="inline-block mb-4 text-sm font-medium text-green-700 bg-green-50 px-4 py-1 rounded-full">
              Get in Touch
            </span>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
              Contact <span className="text-green-600">DriverSeva</span>
            </h1>

            <p className="text-gray-600 text-sm sm:text-base max-w-xl leading-relaxed mb-6">
              Have questions, need a driver, or looking for a business solution?
              Reach out to us — our team is ready to assist you.
            </p>

            {/* CTA BUTTON */}
            <motion.a
              href="https://wa.me/918999197992"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="
                inline-flex items-center justify-center
                bg-green-600 text-white
                px-8 py-3.5 rounded-full
                font-semibold
                hover:bg-green-700
                transition
                shadow-md
              "
            >
              Chat on WhatsApp
            </motion.a>

            {/* Quick trust line */}
            <p className="mt-4 text-xs text-gray-500">
              ✓ Quick response &nbsp;•&nbsp; ✓ Verified drivers &nbsp;•&nbsp; ✓
              Support team
            </p>
          </motion.div>

          {/* RIGHT ILLUSTRATION */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="relative flex justify-center md:justify-end"
          >
            <img
              src={contactIllustration}
              alt="Contact DriverSeva"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
              draggable={false}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;

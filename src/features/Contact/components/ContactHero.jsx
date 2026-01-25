import { motion } from "framer-motion";
import contactIllustration from "../../../assets/conctactUs/contactUs.png";

const ContactHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block mb-6 text-sm font-medium text-green-700 bg-green-50 px-4 py-1 rounded-full">
            Get in Touch
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Contact <span className="text-green-600">DriverSeva</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-10">
            Have questions, need a driver, or looking for a business solution?
            Reach out to us — our team is ready to assist you.
          </p>
        </motion.div>

        {/* RIGHT ILLUSTRATION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center md:justify-end"
        >
          <img
            src={contactIllustration}
            alt="Contact DriverSeva"
            className="w-full max-w-md lg:max-w-lg"
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHero;

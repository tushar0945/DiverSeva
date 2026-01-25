import { Phone, Mail, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ContactOptions = () => {
  const WHATSAPP_NUMBER = "918999197992";
  const WHATSAPP_MESSAGE =
    "Hello! I want to book a driver. Please share details.";

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="
              group bg-white border border-gray-100 rounded-2xl
              p-6 sm:p-8 text-center
              shadow-sm hover:shadow-lg
              transition-all
            "
          >
            <MessageCircle className="mx-auto mb-4 text-green-600" size={32} />

            <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">
              WhatsApp
            </h3>

            <p className="text-gray-600 mb-6 text-sm">
              Fastest way to book a driver
            </p>

            <button
              onClick={() => window.open(whatsappLink, "_blank")}
              className="
                w-full sm:w-auto
                bg-green-600 text-white
                px-6 py-3 rounded-full
                font-semibold
                hover:bg-green-700
                transition
              "
            >
              Chat on WhatsApp
            </button>
          </motion.div>

          {/* Call */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="
              group bg-white border border-gray-100 rounded-2xl
              p-6 sm:p-8 text-center
              shadow-sm hover:shadow-lg
              transition-all
            "
          >
            <Phone className="mx-auto mb-4 text-green-600" size={32} />

            <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">
              Call Us
            </h3>

            <p className="text-gray-600 mb-6 text-sm">
              Speak directly with our team
            </p>

            <a
              href="tel:+918999197992"
              className="
                inline-block
                text-green-600 font-semibold
                hover:underline
              "
            >
              +91 89991 97992
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            className="
              group bg-white border border-gray-100 rounded-2xl
              p-6 sm:p-8 text-center
              shadow-sm hover:shadow-lg
              transition-all
            "
          >
            <Mail className="mx-auto mb-4 text-green-600" size={32} />

            <h3 className="text-base sm:text-lg font-semibold mb-2 text-gray-900">
              Email
            </h3>

            <p className="text-gray-600 mb-6 text-sm">
              For business & formal queries
            </p>

            <a
              href="mailto:support@driverseva.in"
              className="
                inline-block
                text-green-600 font-semibold
                hover:underline
              "
            >
              support@driverseva.in
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactOptions;

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
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="border rounded-2xl p-8 text-center hover:shadow-lg transition"
          >
            <MessageCircle className="mx-auto mb-4 text-green-600" size={36} />
            <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Fastest way to book a driver
            </p>
            <button
              onClick={() => window.open(whatsappLink, "_blank")}
              className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition"
            >
              Chat on WhatsApp
            </button>
          </motion.div>

          {/* Call */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="border rounded-2xl p-8 text-center hover:shadow-lg transition"
          >
            <Phone className="mx-auto mb-4 text-green-600" size={36} />
            <h3 className="text-lg font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600 mb-6 text-sm">
              Speak directly with our team
            </p>
            <a
              href="tel:+918999197992"
              className="text-green-600 font-semibold"
            >
              +91 89991 97992
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="border rounded-2xl p-8 text-center hover:shadow-lg transition"
          >
            <Mail className="mx-auto mb-4 text-green-600" size={36} />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-600 mb-6 text-sm">
              For business & formal queries
            </p>
            <a
              href="mailto:support@driverseva.in"
              className="text-green-600 font-semibold"
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

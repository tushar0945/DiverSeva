import { motion } from "framer-motion";

const AboutCTA = () => {
  const WHATSAPP_NUMBER = "918999197992";
  const WHATSAPP_MESSAGE =
    "Hello! I want to book a driver. Please share details.";

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  const handleBookDriver = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="relative bg-green-600 overflow-hidden">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-700 opacity-95" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ amount: 0.4 }} // 👈 replay on visibility
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 text-center text-white"
      >
        <span className="inline-block mb-4 text-sm font-medium text-green-100">
          Ready when you are
        </span>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 leading-tight">
          Your Journey, Our Responsibility
        </h2>

        <p className="max-w-2xl mx-auto mb-8 sm:mb-10 text-green-100 leading-relaxed text-sm sm:text-base">
          Book a verified professional driver and enjoy safe, reliable travel —
          whether it’s for daily commutes, long trips, or important occasions.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 items-center">
          {/* WhatsApp CTA Button */}
          <motion.button
            onClick={handleBookDriver}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="
              inline-flex items-center justify-center
              bg-white text-green-700
              px-8 sm:px-10 py-3.5 sm:py-4
              rounded-full font-semibold
              hover:bg-green-50
              transition shadow-lg
              focus:outline-none focus:ring-2 focus:ring-white/60
            "
          >
            Book a Driver Now
          </motion.button>

          <span className="inline-flex items-center text-xs sm:text-sm text-green-100 text-center">
            ✓ Background-verified drivers &nbsp;•&nbsp; ✓ Secure payments
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutCTA;

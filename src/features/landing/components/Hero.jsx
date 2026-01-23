import { motion } from "framer-motion";
import CardColumn from "../components/hero/CardColumn";

const Hero = () => {
  // ✅ WhatsApp link (replace with your number)
  const WHATSAPP_NUMBER = "918999197992"; // format: countrycode + number (no +)
  const WHATSAPP_MESSAGE =
    "Hello! I want to book a driver. Please share details.";

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  const leftCards = [
    "Driver arrived on time",
    "Office drop completed safely",
    "Family trip started stress-free",
    "PUC & documents handled",
    "Airport pickup on schedule",
    "Verified driver with background check",
    "Real-time trip tracking",
    "Emergency support available",
  ];

  const rightCards = [
    "Verified Marathi-speaking driver",
    "Car cleaned before pickup",
    "Trip completed without tension",
    "Rewards earned for your ride",
    "Seamless payment options",
    "24/7 customer support",
    "Insured rides for peace of mind",
    "Flexible booking options",
  ];

  // ✅ Click handler opens WhatsApp instead of booking/login modal
  const handleBookDriver = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <>
      <section className="w-full bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 pt-2 pb-12 lg:pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.p
                className="text-sm text-gray-400 mb-4 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                कार आहे? बाकी आम्ही पाहतो.
              </motion.p>

              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Need a driver?
                <br />
                <span className="bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                  We take care
                </span>{" "}
                of your car
                <br />
                like it's our own.
              </motion.h1>

              <motion.p
                className="mt-6 text-lg font-medium text-emerald-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                कार आमची जबाबदारी, प्रवास तुमचा.
              </motion.p>

              <motion.p
                className="mt-6 text-gray-600 text-lg max-w-xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                From daily office travel to long family trips —{" "}
                <span className="font-semibold text-slate-900">
                  we send drivers you can actually trust.
                </span>
              </motion.p>

              <motion.p
                className="mt-4 text-sm text-gray-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                विश्वासार्ह ड्रायव्हर • मराठी सपोर्ट • No hidden charges
              </motion.p>

              <motion.div
                className="mt-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                <motion.button
                  onClick={handleBookDriver}
                  className="px-12 py-4 min-w-[220px] bg-gradient-to-r from-slate-900 to-indigo-900 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Book Driver Now</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-400"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>

                {/* Optional small WhatsApp hint */}
                <p className="mt-3 text-xs text-gray-500">
                  Click to chat on WhatsApp instantly
                </p>
              </motion.div>

              <motion.p
                className="mt-8 text-sm text-gray-500 italic border-l-4 border-emerald-200 pl-4 py-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                "आज ड्रायव्हर मिळेल का?" — हा प्रश्न आता संपला.
              </motion.p>
            </motion.div>

            {/* RIGHT CONTENT - ANIMATED CARDS */}
            <motion.div
              className="relative flex justify-center gap-8 lg:gap-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            >
              {/* Animated background orb */}
              <motion.div
                className="absolute w-[400px] h-[400px] lg:w-[480px] lg:h-[480px] rounded-full -z-10"
                animate={{
                  background: [
                    "radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.15) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 70%)",
                    "radial-gradient(circle at 70% 70%, rgba(16, 185, 129, 0.15) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 70%)",
                    "radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.15) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 70%)",
                    "radial-gradient(circle at 30% 30%, rgba(16, 185, 129, 0.15) 0%, rgba(99, 102, 241, 0.05) 50%, transparent 70%)",
                  ],
                  scale: [1, 1.05, 1],
                  rotate: [0, 90, 180, 270, 360],
                }}
                transition={{
                  background: { duration: 8, repeat: Infinity, ease: "linear" },
                  scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                }}
              />

              {/* Subtle glow effect */}
              <motion.div
                className="absolute w-[420px] h-[420px] lg:w-[500px] lg:h-[500px] rounded-full bg-gradient-to-r from-emerald-100/30 to-indigo-100/30 -z-20 blur-2xl"
                animate={{ opacity: [0.2, 0.4, 0.2] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />

              {/* Card columns */}
              <CardColumn items={leftCards} duration={22} delay={0.5} />
              <CardColumn
                items={rightCards}
                duration={28}
                reverse
                delay={0.7}
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

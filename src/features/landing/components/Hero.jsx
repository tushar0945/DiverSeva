import { motion } from "framer-motion";
import CardColumn from "../components/hero/CardColumn";

const Hero = () => {
  const WHATSAPP_NUMBER = "918999703730";
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

  const handleBookDriver = () => {
    window.open(whatsappLink, "_blank");
  };

  return (
    <section className="w-full bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-24 pb-16 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ delay: 0.2 }}
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
              className="mt-6 text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ delay: 0.35 }}
            >
              From daily office travel to long family trips —{" "}
              <span className="font-semibold text-slate-900">
                we send drivers you can actually trust.
              </span>
            </motion.p>

            <motion.p
              className="mt-4 text-sm text-gray-500"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ delay: 0.45 }}
            >
              Verified drivers • Live support • No hidden charges
            </motion.p>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ amount: 0.4 }}
              transition={{ delay: 0.55 }}
            >
              <motion.button
                onClick={handleBookDriver}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="
                  relative overflow-hidden
                  px-10 py-4 min-w-[200px]
                  bg-gradient-to-r from-slate-900 to-indigo-900
                  text-white font-semibold rounded-full
                  hover:shadow-xl transition-all duration-300
                  group
                "
              >
                <span className="relative z-10">Book Driver Now</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-400"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.35 }}
                />
              </motion.button>

              <p className="mt-3 text-xs text-gray-500">
                Click to chat on WhatsApp instantly
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            className="relative flex justify-center isolate"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ amount: 0.4 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {/* Background glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
              <motion.div
                className="
                  w-[260px] h-[260px]
                  sm:w-[320px] sm:h-[320px]
                  lg:w-[420px] lg:h-[420px]
                  rounded-full
                "
                animate={{ rotate: [0, 180, 360] }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  background:
                    "radial-gradient(circle at center, rgba(16,185,129,0.14), transparent 70%)",
                }}
              />
            </div>

            {/* Mobile → single column */}
            <div className="block lg:hidden">
              <CardColumn items={leftCards} duration={24} delay={0.3} />
            </div>

            {/* Desktop → two columns (CLOSER GAP) */}
            <div className="hidden lg:flex gap-6">
              <CardColumn items={leftCards} duration={22} delay={0.3} />
              <CardColumn
                items={rightCards}
                duration={28}
                reverse
                delay={0.5}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

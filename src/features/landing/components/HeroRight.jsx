import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const floating = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const HeroRight = () => {
  return (
    <div className="relative flex justify-center">
      {/* FASTag */}
      <motion.div
        custom={0}
        variants={cardVariant}
        initial="hidden"
        animate="visible"
        className="absolute top-0 left-0 bg-white shadow-lg rounded-xl px-5 py-3 flex items-center gap-3"
      >
        <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm">
          ✓
        </span>
        <p className="text-sm font-medium">Your FASTag is recharged</p>
      </motion.div>

      {/* Coins */}
      <motion.div
        custom={1}
        variants={cardVariant}
        initial="hidden"
        animate="visible"
        className="absolute top-24 right-0 bg-white shadow-lg rounded-xl px-5 py-3 flex items-center gap-3"
      >
        <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm">
          ✓
        </span>
        <p className="text-sm font-medium">1000 coins rewarded</p>
      </motion.div>

      {/* Insurance */}
      <motion.div
        custom={2}
        variants={cardVariant}
        initial="hidden"
        animate="visible"
        className="absolute bottom-24 left-6 bg-white shadow-lg rounded-xl px-5 py-3 flex items-center gap-3"
      >
        <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm">
          ✓
        </span>
        <p className="text-sm font-medium">Motor insurance renewed</p>
      </motion.div>

      {/* Car Wash */}
      <motion.div
        custom={3}
        variants={cardVariant}
        initial="hidden"
        animate="visible"
        className="absolute bottom-0 right-6 bg-white shadow-lg rounded-xl px-5 py-3 flex items-center gap-3"
      >
        <span className="w-8 h-8 bg-emerald-500 text-white rounded-full flex items-center justify-center text-sm">
          ✓
        </span>
        <p className="text-sm font-medium">Car wash booked</p>
      </motion.div>

      {/* Illustration */}
      <motion.div
        variants={floating}
        animate="animate"
        initial={{ opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="w-[420px] h-[420px] bg-slate-100 rounded-full flex items-center justify-center"
      >
        <span className="text-gray-400">Illustration Here</span>
      </motion.div>
    </div>
  );
};

export default HeroRight;

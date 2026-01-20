import { motion } from "framer-motion";

const Card = ({ text }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-xl px-5 py-3 flex items-center gap-3 mb-6 cursor-pointer border border-slate-100 w-full" // Changed to w-full
      whileHover={{
        scale: 1.03,
        y: -2,
        boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        backgroundColor: "rgba(16, 185, 129, 0.05)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      {/* SIMPLIFIED: No motion wrapper, just a static div */}
      <div className="w-7 h-7 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md flex-shrink-0">
        ✓
      </div>
      <p className="text-sm font-medium text-slate-800 flex-1">{text}</p>
    </motion.div>
  );
};

export default Card;

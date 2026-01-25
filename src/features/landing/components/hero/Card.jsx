import { motion } from "framer-motion";

const Card = ({ text }) => {
  return (
    <motion.div
      className="
        w-full mb-6 px-5 py-3
        bg-white border border-slate-100
        rounded-xl shadow-md
        flex items-center gap-3
        cursor-pointer
        will-change-transform
        origin-center
      "
      whileHover={{
        scale: 1.02,
        boxShadow: "0 14px 30px rgba(0,0,0,0.08)",
        backgroundColor: "rgba(16,185,129,0.05)",
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 24,
      }}
    >
      <div className="w-7 h-7 flex-shrink-0 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center text-xs font-bold shadow-sm">
        ✓
      </div>

      <p className="text-sm font-medium text-slate-800 leading-snug">{text}</p>
    </motion.div>
  );
};

export default Card;

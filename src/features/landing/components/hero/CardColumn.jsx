"use client";

import { motion } from "framer-motion";
import Card from "./Card";

const CardColumn = ({ items, duration = 20, reverse = false, delay = 0 }) => {
  return (
    <motion.div
      className="h-[420px] overflow-hidden relative w-[320px]" // Fixed width for the column
      initial={{ opacity: 0, x: reverse ? 30 : -30 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          delay: delay,
          ease: "easeOut",
        },
      }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
      }}
    >
      {/* Gradient overlays */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white via-white/90 to-transparent z-10" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/90 to-transparent z-10" />

      <motion.div
        className="flex flex-col px-2" // Added padding to prevent cropping
        animate={{
          y: ["0%", "-50%"],
          rotateX: reverse ? 3 : -3,
        }}
        transition={{
          y: {
            duration,
            repeat: Infinity,
            ease: "linear",
          },
          rotateX: {
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
          },
        }}
      >
        {[...items, ...items].map((item, index) => (
          <motion.div
            key={index}
            className="w-full px-1" // Full width with padding
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: 1,
              y: 0,
              rotateY: index % 2 === 0 ? 1 : -1,
            }}
            transition={{
              delay: delay + index * 0.15,
              type: "spring",
              stiffness: 80,
              damping: 12,
            }}
            whileHover={{
              rotateY: index % 2 === 0 ? 8 : -8,
              z: 50,
            }}
          >
            <Card text={item} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default CardColumn;

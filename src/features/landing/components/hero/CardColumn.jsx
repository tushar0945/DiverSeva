"use client";

import { motion } from "framer-motion";
import Card from "./Card";

const CardColumn = ({ items, duration = 20, reverse = false, delay = 0 }) => {
  return (
    <motion.div
      className="relative w-[320px]"
      initial={{ opacity: 0, x: reverse ? 30 : -30 }}
      animate={{
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.8,
          delay,
          ease: "easeOut",
        },
      }}
      style={{
        perspective: 1200,
      }}
    >
      {/* Vertical mask wrapper */}
      <div className="relative h-[420px] overflow-y-hidden overflow-x-visible">
        {/* Gradient fade */}
        <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white to-transparent z-20" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent z-20" />

        <motion.div
          className="flex flex-col px-2 pt-8 pb-8"
          animate={{
            y: ["0%", "-50%"],
            rotateX: reverse ? 2 : -2,
          }}
          transition={{
            y: {
              duration,
              repeat: Infinity,
              ease: "linear",
            },
            rotateX: {
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {[...items, ...items].map((item, index) => (
            <motion.div
              key={index}
              className="w-full px-1"
              initial={{ opacity: 0, y: 24 }}
              animate={{
                opacity: 1,
                y: 0,
                rotateY: index % 2 === 0 ? 1 : -1,
              }}
              transition={{
                delay: delay + index * 0.12,
                type: "spring",
                stiffness: 90,
                damping: 14,
              }}
              whileHover={{
                rotateY: index % 2 === 0 ? 6 : -6,
                z: 40,
              }}
              style={{
                transformStyle: "preserve-3d",
              }}
            >
              <Card text={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CardColumn;

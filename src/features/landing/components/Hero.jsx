import { motion } from "framer-motion";

const floating = (delay = 0) => ({
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
});

const Hero = () => {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* ================= LEFT ================= */}
          <div>
            <p className="text-emerald-500 font-semibold tracking-wide mb-4">
              SIMPLIFY CAR OWNERSHIP
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
              Hire professional drivers,
              <br />
              and all car services at
              <br />
              your fingertips.
            </h1>

            <p className="mt-6 text-gray-400 text-lg">
              Get rewarded for owning a car!
            </p>

            <div className="mt-10 flex gap-6">
              <button className="px-8 py-4 bg-gradient-to-r from-slate-900 to-indigo-900 text-white font-semibold rounded-md">
                Book Driver
              </button>

              <button className="px-8 py-4 border-2 border-slate-900 rounded-md font-semibold">
                Download App
              </button>
            </div>
          </div>

          {/* ================= RIGHT (FIXED) ================= */}
          <div className="relative flex justify-center items-center h-[520px]">
            {/* Background Circle */}
            <div className="absolute w-[420px] h-[420px] rounded-full bg-slate-100" />

            {/* Center Illustration */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 w-[300px] h-[300px] bg-white rounded-full shadow-lg flex items-center justify-center"
            >
              <span className="text-gray-400 text-sm">Driver Illustration</span>
            </motion.div>

            {/* Cards */}
            <motion.div
              variants={floating(0)}
              animate="animate"
              className="absolute top-6 left-12 bg-white shadow-md rounded-lg px-4 py-3 flex items-center gap-2"
            >
              <span className="w-7 h-7 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs">
                ✓
              </span>
              <p className="text-sm">FASTag recharged</p>
            </motion.div>

            <motion.div
              variants={floating(0.5)}
              animate="animate"
              className="absolute top-24 right-10 bg-white shadow-md rounded-lg px-4 py-3 flex items-center gap-2"
            >
              <span className="w-7 h-7 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs">
                ✓
              </span>
              <p className="text-sm">1000 coins rewarded</p>
            </motion.div>

            <motion.div
              variants={floating(1)}
              animate="animate"
              className="absolute bottom-24 left-16 bg-white shadow-md rounded-lg px-4 py-3 flex items-center gap-2"
            >
              <span className="w-7 h-7 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs">
                ✓
              </span>
              <p className="text-sm">Insurance renewed</p>
            </motion.div>

            <motion.div
              variants={floating(1.5)}
              animate="animate"
              className="absolute bottom-8 right-14 bg-white shadow-md rounded-lg px-4 py-3 flex items-center gap-2"
            >
              <span className="w-7 h-7 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs">
                ✓
              </span>
              <p className="text-sm">Car wash booked</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

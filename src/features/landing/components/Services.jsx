import { Car, ShieldCheck, Sparkles, CircleDot } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Professional Drivers",
    description:
      "Book experienced and verified drivers for office travel, family outings, late-night drops, or full-day assistance — available when you need them.",
    icon: <CircleDot className="w-12 h-12 sm:w-14 sm:h-14" strokeWidth={1.5} />,
  },
  {
    title: "Car Wash & Care",
    description:
      "Keep your car clean and ready with doorstep car wash and basic care services handled by trained professionals using safe cleaning methods.",
    icon: <Car className="w-12 h-12 sm:w-14 sm:h-14" strokeWidth={1.5} />,
  },
  {
    title: "FASTag & Car Essentials",
    description:
      "Manage FASTag recharges and important car essentials in one place, so your trips stay smooth and interruption-free.",
    icon: (
      <ShieldCheck className="w-12 h-12 sm:w-14 sm:h-14" strokeWidth={1.5} />
    ),
  },
];

/* Motion Variants */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Services = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }} // 👈 replay when visible
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-3xl sm:text-4xl font-bold text-slate-900 mb-10 sm:mb-14"
        >
          Our Services
        </motion.h2>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }} // 👈 replay on re-enter
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="
                group bg-white rounded-3xl
                p-8 sm:p-10 text-center
                shadow-[0_20px_45px_rgba(0,0,0,0.08)]
                hover:shadow-[0_30px_70px_rgba(0,0,0,0.14)]
                transition-shadow duration-300
              "
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 200, damping: 12 }}
                className="relative flex justify-center mb-6 sm:mb-7 text-slate-900"
              >
                {service.icon}

                <Sparkles
                  className="absolute -top-2 -right-2 text-emerald-500"
                  size={16}
                  strokeWidth={1.5}
                />
              </motion.div>

              <h3 className="text-lg sm:text-xl font-bold mb-3 text-slate-900">
                {service.title}
              </h3>

              <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

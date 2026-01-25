import { motion } from "framer-motion";

const stats = [
  { label: "Verified Drivers", value: "5,000+" },
  { label: "Cities Served", value: "25+" },
  { label: "Happy Customers", value: "1L+" },
  { label: "Trips Completed", value: "3L+" },
];

const Stats = () => {
  return (
    <section className="bg-green-600 py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-3xl font-bold">{stat.value}</p>
            <p className="text-sm opacity-90">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;

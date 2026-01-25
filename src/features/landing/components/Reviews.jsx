import { Star } from "lucide-react";
import { motion } from "framer-motion";

const reviews = [
  {
    name: "Rahul Sharma",
    location: "Pune",
    rating: 5,
    review:
      "I booked a driver for my office commute and the experience was smooth. The driver was on time, polite, and drove safely. Felt very reliable.",
  },
  {
    name: "Anjali Verma",
    location: "Mumbai",
    rating: 5,
    review:
      "DriverSeva really solved my problem of finding trusted drivers. Booking was simple and I liked getting service reminders without any follow-ups.",
  },
  {
    name: "Amit Kulkarni",
    location: "Nashik",
    rating: 4,
    review:
      "Used the service during a family trip. The driver was calm and familiar with routes. Overall a stress-free experience.",
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

const Reviews = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }} // 👈 replay when visible
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3">
            What Customers Say
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base">
            Real experiences from people who trust DriverSeva for their daily
            travel and car needs.
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.3 }} // 👈 replay on re-enter
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="
                bg-white rounded-3xl
                p-7 sm:p-9
                shadow-[0_20px_45px_rgba(0,0,0,0.08)]
                hover:shadow-[0_30px_70px_rgba(0,0,0,0.14)]
                transition-shadow duration-300
              "
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-emerald-500"
                    fill="currentColor"
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                “{review.review}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-emerald-500 text-white flex items-center justify-center font-semibold">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-slate-900 text-sm sm:text-base">
                    {review.name}
                  </p>
                  <p className="text-sm text-gray-400">{review.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Marathi touch line */}
        {/* <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ amount: 0.6 }} // 👈 replay
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-10 text-center text-sm text-gray-400 italic"
        >
          “एकदा वापरून बघा — मग फरक कळेल.”
        </motion.p> */}
      </div>
    </section>
  );
};

export default Reviews;

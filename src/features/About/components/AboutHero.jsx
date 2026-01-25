import { motion } from "framer-motion";
import aboutIllustration from "../../../assets/aboutUs/aboutUs.png";

const AboutHero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-start md:items-center overflow-hidden pt-20 md:pt-0">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-block mb-6 text-sm font-medium text-green-700 bg-green-50 px-4 py-1 rounded-full">
            Trusted Driver Partner
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            About <span className="text-green-600">DriverSeva</span>
          </h1>

          <p className="text-lg text-gray-600 max-w-xl leading-relaxed mb-10">
            DriverSeva exists to bring reliability, safety, and professionalism
            to everyday driving needs — from daily commutes to long-distance
            family and corporate travel.
          </p>

          {/* Stats */}
          {/* <div className="flex flex-wrap gap-8 text-sm">
            <div>
              <p className="text-2xl font-bold text-gray-900">5,000+</p>
              <p className="text-gray-500">Verified Drivers</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">25+</p>
              <p className="text-gray-500">Cities Served</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-900">1L+</p>
              <p className="text-gray-500">Happy Customers</p>
            </div>
          </div> */}
        </motion.div>

        {/* RIGHT ILLUSTRATION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative flex justify-center md:justify-end"
        >
          <img
            src={aboutIllustration}
            alt="Professional driver with car"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
            draggable={false}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;

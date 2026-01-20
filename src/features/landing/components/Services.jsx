import { Car, ShieldCheck, Sparkles, CircleDot } from "lucide-react";

const services = [
  {
    title: "Professional Drivers",
    description:
      "Book experienced and verified drivers for office travel, family outings, late-night drops, or full-day assistance — available when you need them.",
    icon: <CircleDot size={56} strokeWidth={1.5} />,
  },
  {
    title: "Car Wash & Care",
    description:
      "Keep your car clean and ready with doorstep car wash and basic care services handled by trained professionals using safe cleaning methods.",
    icon: <Car size={56} strokeWidth={1.5} />,
  },
  {
    title: "FASTag & Car Essentials",
    description:
      "Manage FASTag recharges and important car essentials in one place, so your trips stay smooth and interruption-free.",
    icon: <ShieldCheck size={56} strokeWidth={1.5} />,
  },
];

const Services = () => {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-slate-900 mb-12">
          Our Services
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="
                group bg-white rounded-3xl p-10 text-center
                shadow-[0_20px_45px_rgba(0,0,0,0.08)]
                hover:shadow-[0_30px_70px_rgba(0,0,0,0.14)]
                hover:-translate-y-1
                transition-all duration-500 ease-out
              "
            >
              {/* Icon */}
              <div
                className="
                  relative flex justify-center mb-7 text-slate-900
                  transition-transform duration-500 ease-out
                  group-hover:scale-110
                "
              >
                {service.icon}

                <Sparkles
                  className="absolute -top-3 -right-3 text-emerald-500"
                  size={18}
                  strokeWidth={1.5}
                />
              </div>

              <h3 className="text-xl font-bold mb-3">{service.title}</h3>

              <p className="text-gray-500 leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

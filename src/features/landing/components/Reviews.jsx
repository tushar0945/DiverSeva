import { Star } from "lucide-react";

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

const Reviews = () => {
  return (
    <section className="w-full bg-white py-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            What Customers Say
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Real experiences from people who trust DriverSeva for their daily
            travel and car needs.
          </p>
        </div>

        {/* Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="
                bg-white rounded-3xl p-9
                shadow-[0_20px_45px_rgba(0,0,0,0.08)]
                hover:shadow-[0_30px_70px_rgba(0,0,0,0.14)]
                hover:-translate-y-1
                transition-all duration-500 ease-out
              "
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-emerald-500"
                    fill="currentColor"
                  />
                ))}
              </div>

              {/* Review text */}
              <p className="text-gray-600 leading-relaxed mb-7 text-sm">
                “{review.review}”
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-emerald-500 text-white flex items-center justify-center font-semibold">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <p className="font-semibold text-slate-900">{review.name}</p>
                  <p className="text-sm text-gray-400">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Marathi touch line */}
        <p className="mt-10 text-center text-sm text-gray-400 italic">
          “एकदा वापरून बघा — मग फरक कळेल.”
        </p>
      </div>
    </section>
  );
};

export default Reviews;

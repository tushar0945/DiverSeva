import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/auth.context";
import LoginModal from "../../auth/components/LoginModal";

/* ================= CARD COMPONENT ================= */
const Card = ({ text }) => {
  return (
    <div className="bg-white shadow-md rounded-xl px-5 py-3 flex items-center gap-3 mb-6 min-w-[260px]">
      <span className="w-7 h-7 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-bold">
        ✓
      </span>
      <p className="text-sm font-medium text-slate-800 whitespace-nowrap">
        {text}
      </p>
    </div>
  );
};

/* ================= CARD COLUMN ================= */
const CardColumn = ({ items, duration = 20 }) => {
  return (
    <div className="h-[420px] overflow-hidden">
      <motion.div
        className="flex flex-col"
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {[...items, ...items].map((item, index) => (
          <Card key={index} text={item} />
        ))}
      </motion.div>
    </div>
  );
};

/* ================= HERO ================= */
const Hero = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [showLogin, setShowLogin] = useState(false);

  const leftCards = [
    "Driver arrived on time",
    "Office drop completed safely",
    "Family trip started stress-free",
    "PUC & documents handled",
  ];

  const rightCards = [
    "Verified Marathi-speaking driver",
    "Car cleaned before pickup",
    "Trip completed without tension",
    "Rewards earned for your ride",
  ];

  /* ===== CTA HANDLER ===== */
  const handleBookDriver = () => {
    if (isAuthenticated) {
      navigate("/book");
    } else {
      setShowLogin(true);
    }
  };

  const handleLoginContinue = () => {
    // ❌ DO NOT LOGIN HERE
    // next step → OTP or /login page
    setShowLogin(false);
    navigate("/login");
  };

  return (
    <>
      <section className="w-full bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* ================= LEFT CONTENT ================= */}
            <div>
              <p className="text-emerald-500 font-semibold tracking-wide mb-3">
                SIMPLIFY CAR OWNERSHIP
              </p>

              <p className="text-sm text-gray-400 mb-4">
                कार आहे? बाकी आम्ही पाहतो.
              </p>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
                Need a driver?
                <br />
                We take care of your car
                <br />
                like it’s our own.
              </h1>

              <p className="mt-4 text-lg font-medium text-emerald-600">
                कार आमची जबाबदारी, प्रवास तुमचा.
              </p>

              <p className="mt-6 text-gray-500 text-lg max-w-xl">
                From daily office travel to long family trips —
                <span className="font-medium text-slate-900">
                  {" "}
                  we send drivers you can actually trust.
                </span>
              </p>

              <p className="mt-2 text-sm text-gray-400">
                विश्वासार्ह ड्रायव्हर • मराठी सपोर्ट • No hidden charges
              </p>

              <div className="mt-10">
                <button
                  onClick={handleBookDriver}
                  className="px-12 py-4 min-w-[220px] bg-gradient-to-r from-slate-900 to-indigo-900 text-white font-semibold rounded-full hover:opacity-90 transition"
                >
                  Book Driver
                </button>
              </div>

              <p className="mt-6 text-sm text-gray-400 italic">
                “आज ड्रायव्हर मिळेल का?” — हा प्रश्न आता संपला.
              </p>
            </div>

            {/* ================= RIGHT CONTENT ================= */}
            <div className="relative flex justify-center gap-12">
              <div className="absolute w-[420px] h-[420px] rounded-full bg-slate-100 -z-10" />

              <CardColumn items={leftCards} duration={22} />
              <CardColumn items={rightCards} duration={28} />
            </div>
          </div>
        </div>
      </section>

      {/* ================= LOGIN MODAL ================= */}
      <LoginModal
        open={showLogin}
        onClose={() => setShowLogin(false)}
        onContinue={handleLoginContinue}
      />
    </>
  );
};

export default Hero;

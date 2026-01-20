import { X } from "lucide-react";

const LoginModal = ({ open, onClose, onContinue }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative bg-white w-[90%] max-w-md rounded-2xl p-8 z-10">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black"
        >
          <X size={22} />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-14 h-14 rounded-full bg-gray-100 flex items-center justify-center text-xl">
            📱
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-center mb-2">
          Please enter your phone number
        </h2>

        <p className="text-sm text-gray-400 text-center mb-6">
          We’ll send you a verification code
        </p>

        {/* Phone Input */}
        <input
          type="tel"
          placeholder="Enter your phone number"
          className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        {/* Continue Button */}
        <button
          onClick={onContinue}
          className="w-full mt-6 bg-black text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LoginModal;

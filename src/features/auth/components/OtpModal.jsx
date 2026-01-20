import { useEffect, useState } from "react";
import { X } from "lucide-react";

const OtpModal = ({ open, onClose, onVerify, onChangeNumber }) => {
  const [otp, setOtp] = useState("");
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    if (!open) return;

    setTimer(60);
    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white w-[90%] max-w-md rounded-2xl p-8 z-10">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black"
        >
          <X size={22} />
        </button>

        {/* Icon */}
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl">
            🔐
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-center mb-2">
          Please verify your phone number
        </h2>

        {/* OTP Input */}
        <input
          type="tel"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter your OTP number"
          className="w-full mt-6 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />

        {/* Verify Button */}
        <button
          onClick={() => onVerify(otp)}
          className="w-full mt-6 bg-black text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
        >
          Verify OTP
        </button>

        {/* Resend */}
        <div className="text-center mt-4 text-sm text-gray-400">
          {timer > 0 ? (
            <p>Resend OTP in {timer} sec</p>
          ) : (
            <button
              className="underline hover:text-black"
              onClick={() => setTimer(60)}
            >
              Resend OTP
            </button>
          )}
        </div>

        {/* Change Number */}
        <button
          onClick={onChangeNumber}
          className="mt-4 block mx-auto text-sm text-gray-400 underline hover:text-black"
        >
          Change your mobile number
        </button>
      </div>
    </div>
  );
};

export default OtpModal;

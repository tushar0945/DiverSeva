import { useEffect, useState, useRef } from "react";
import { X, Shield, RotateCw, AlertCircle, CheckCircle2 } from "lucide-react";

const OtpModal = ({ open, onClose, onVerify, onChangeNumber, phoneNumber }) => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [isLoading, setIsLoading] = useState(false);
  const [verificationError, setVerificationError] = useState("");
  const inputRefs = useRef([]);

  useEffect(() => {
    if (!open) return;

    // Reset state when modal opens
    setOtp(["", "", "", "", "", ""]);
    setTimer(60);
    setVerificationError("");
    setIsLoading(false);

    // Focus first input
    setTimeout(() => {
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }, 100);

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

  const handleOtpChange = (index, value) => {
    // Allow only single digit numbers
    if (!/^\d?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    setVerificationError("");

    // Auto-focus next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all fields are filled
    if (newOtp.every((digit) => digit !== "") && index === 5) {
      setTimeout(() => {
        handleVerify();
      }, 100);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace") {
      if (!otp[index] && index > 0) {
        // Move to previous input on backspace
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
        inputRefs.current[index - 1]?.focus();
      } else if (otp[index]) {
        // Clear current input
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      }
    } else if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === "ArrowRight" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").trim();

    if (/^\d{6}$/.test(pastedData)) {
      const pastedOtp = pastedData.split("");
      setOtp(pastedOtp);

      // Focus last input after paste
      setTimeout(() => {
        if (inputRefs.current[5]) {
          inputRefs.current[5].focus();
        }
      }, 50);
    }
  };

  const handleVerify = async () => {
    const otpString = otp.join("");

    if (otpString.length !== 6) {
      setVerificationError("Please enter all 6 digits");
      // Focus first empty input
      const emptyIndex = otp.findIndex((digit) => digit === "");
      if (emptyIndex !== -1 && inputRefs.current[emptyIndex]) {
        inputRefs.current[emptyIndex].focus();
      }
      return;
    }

    if (!/^\d{6}$/.test(otpString)) {
      setVerificationError("OTP must contain only numbers");
      return;
    }

    setIsLoading(true);
    setVerificationError("");

    try {
      await onVerify(otpString);
    } catch (error) {
      setVerificationError("Invalid OTP. Please try again.");
      // Clear OTP and focus first input on error
      setOtp(["", "", "", "", "", ""]);
      setTimeout(() => {
        if (inputRefs.current[0]) {
          inputRefs.current[0].focus();
        }
      }, 100);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOtp = () => {
    setTimer(60);
    setOtp(["", "", "", "", "", ""]);
    setVerificationError("");

    // Focus first input after resend
    setTimeout(() => {
      if (inputRefs.current[0]) {
        inputRefs.current[0].focus();
      }
    }, 100);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay with backdrop blur */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal with smooth animation */}
      <div className="relative bg-white w-full max-w-md rounded-2xl shadow-2xl z-10 animate-in fade-in slide-in-from-bottom-4 duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
          aria-label="Close"
        >
          <X size={20} className="text-gray-500" />
        </button>

        {/* Content */}
        <div className="p-8">
          {/* Icon with gradient background */}
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
              <Shield size={28} className="text-blue-600" />
            </div>
          </div>

          {/* Title & Description */}
          <div className="text-center mb-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Enter Verification Code
            </h2>
            <p className="text-gray-500 text-sm mb-1">
              We've sent a 6-digit code to
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="font-semibold text-gray-900">
                +91 {phoneNumber?.replace(/(\d{5})(\d{5})/, "$1 $2")}
              </span>
              <button
                onClick={onChangeNumber}
                className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors"
              >
                Edit
              </button>
            </div>
          </div>

          {/* OTP Input Container */}
          <div className="mt-8 mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Enter OTP Code
            </label>

            <div
              className="flex justify-center gap-3 mb-4"
              onPaste={handlePaste}
            >
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="tel"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  className={`w-12 h-14 text-center text-2xl font-bold border rounded-lg
                    focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200
                    ${
                      verificationError
                        ? "border-red-300 focus:ring-red-500 bg-red-50"
                        : digit
                          ? "border-blue-500 bg-blue-50 focus:ring-blue-500"
                          : "border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                    }`}
                  disabled={isLoading}
                />
              ))}
            </div>

            {/* Error Message */}
            {verificationError && (
              <div className="flex items-center justify-center gap-2 text-red-600 text-sm mb-4 animate-in fade-in duration-200">
                <AlertCircle size={16} />
                <span>{verificationError}</span>
              </div>
            )}
          </div>

          {/* Timer & Resend */}
          <div className="text-center mb-8">
            {timer > 0 ? (
              <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
                <span>Resend code in</span>
                <span className="font-semibold text-gray-900">
                  00:{timer.toString().padStart(2, "0")}
                </span>
              </div>
            ) : (
              <button
                onClick={handleResendOtp}
                disabled={isLoading}
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 
                  font-medium text-sm transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <RotateCw size={16} />
                Resend OTP
              </button>
            )}
          </div>

          {/* Verify Button */}
          <button
            onClick={handleVerify}
            disabled={otp.join("").length !== 6 || isLoading}
            className="w-full bg-gray-900 text-white py-3.5 rounded-lg font-semibold
              hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-900
              transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]
              flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Verifying...
              </>
            ) : (
              <>
                <CheckCircle2 size={20} />
                Verify & Continue
              </>
            )}
          </button>

          {/* Change Number Link */}
          <button
            onClick={onChangeNumber}
            className="w-full text-center text-gray-500 hover:text-gray-700 
              font-medium text-sm mt-6 py-2 transition-colors"
            disabled={isLoading}
          >
            Use a different phone number
          </button>

          {/* Help Text */}
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-start gap-2">
              <AlertCircle size={16} className="text-gray-400 mt-0.5" />
              <div className="text-xs text-gray-500">
                <p className="font-medium text-gray-600 mb-1">
                  Didn't receive the code?
                </p>
                <p>
                  Check your SMS messages. The code may take a moment to arrive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpModal;

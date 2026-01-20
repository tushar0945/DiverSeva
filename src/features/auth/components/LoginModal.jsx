import { X, Smartphone, AlertCircle } from "lucide-react";
import { useState } from "react";

const LoginModal = ({ open, onClose, onContinue }) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  if (!open) return null;

  const validatePhoneNumber = (number) => {
    const digitsOnly = number.replace(/\D/g, "");

    if (!digitsOnly) {
      return "Phone number is required";
    }

    if (digitsOnly.length !== 10) {
      return "Phone number must be 10 digits";
    }

    if (!/^[6-9]/.test(digitsOnly)) {
      return "Phone number must start with 6, 7, 8, or 9";
    }

    return "";
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;

    // Allow only numbers and limit to 10 digits
    const digitsOnly = value.replace(/\D/g, "").slice(0, 10);

    // Format with space after 5 digits
    let formatted = digitsOnly;
    if (digitsOnly.length > 5) {
      formatted = `${digitsOnly.slice(0, 5)} ${digitsOnly.slice(5)}`;
    }

    setPhoneNumber(formatted);

    if (isTouched) {
      setError(validatePhoneNumber(digitsOnly));
    }
  };

  const handleBlur = () => {
    setIsTouched(true);
    setError(validatePhoneNumber(phoneNumber.replace(/\s/g, "")));
  };

  const handleContinue = () => {
    const digitsOnly = phoneNumber.replace(/\s/g, "");
    const validationError = validatePhoneNumber(digitsOnly);

    if (validationError) {
      setError(validationError);
      setIsTouched(true);
      return;
    }

    onContinue(digitsOnly);
    // Reset form
    setPhoneNumber("");
    setError("");
    setIsTouched(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleContinue();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Overlay with backdrop blur */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Box with smooth animation */}
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
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-50 to-emerald-100 flex items-center justify-center">
              <Smartphone size={28} className="text-emerald-600" />
            </div>
          </div>

          {/* Title & Description */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Verify your phone number
            </h2>
            <p className="text-gray-500 text-sm">
              We'll send a 6-digit verification code to this number
            </p>
          </div>

          {/* Phone Input with Country Code */}
          <div className="space-y-2 mb-1">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>

            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-gray-700 font-medium">+91</span>
                <div className="w-px h-4 bg-gray-300 mx-3" />
              </div>

              <input
                id="phone"
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange}
                onBlur={handleBlur}
                onKeyPress={handleKeyPress}
                placeholder="12345 67890"
                className={`w-full pl-16 border rounded-lg px-4 py-3.5 text-lg font-medium
                  focus:outline-none focus:ring-2 focus:ring-offset-1 transition-all duration-200
                  ${
                    error && isTouched
                      ? "border-red-300 focus:ring-red-500 bg-red-50"
                      : "border-gray-300 focus:ring-emerald-500 focus:border-emerald-500"
                  }`}
                maxLength={11} // 10 digits + space
              />
            </div>
          </div>

          {/* Error Message */}
          {error && isTouched && (
            <div className="flex items-center gap-2 text-red-600 text-sm mb-4 animate-in fade-in duration-200">
              <AlertCircle size={16} />
              <span>{error}</span>
            </div>
          )}

          {/* Format Hint */}
          <div className="text-xs text-gray-400 mb-8">
            Enter your 10-digit mobile number starting with 6, 7, 8, or 9
          </div>

          {/* Continue Button */}
          <button
            onClick={handleContinue}
            disabled={!phoneNumber.replace(/\s/g, "") || (error && isTouched)}
            className="w-full bg-gray-900 text-white py-3.5 rounded-lg font-semibold
              hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-gray-900
              transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Continue
          </button>

          {/* Privacy Notice */}
          <p className="text-center text-xs text-gray-400 mt-6">
            By continuing, you agree to our{" "}
            <button className="text-gray-600 hover:text-gray-900 underline">
              Terms of Service
            </button>{" "}
            and{" "}
            <button className="text-gray-600 hover:text-gray-900 underline">
              Privacy Policy
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;

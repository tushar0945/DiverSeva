import { useState, useRef, useEffect } from "react";
import {
  MapPin,
  Calendar,
  Clock,
  Shield,
  ChevronDown,
  X,
  Car,
  Settings,
  Ticket,
  Navigation,
  CheckCircle,
  Clock as ClockIcon,
} from "lucide-react";

const tripTabs = ["One Way", "Round Trip", "Outstation"];

const BookDriver = () => {
  const [tripType, setTripType] = useState("One Way");
  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [scheduleType, setScheduleType] = useState("now");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [transmission, setTransmission] = useState("manual");
  const [carType, setCarType] = useState("hatchback");
  const [showCoupon, setShowCoupon] = useState(false);
  const [protectionPlan, setProtectionPlan] = useState(true);
  const [fareEstimate, setFareEstimate] = useState(597);

  // Mock location suggestions
  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [dropSuggestions, setDropSuggestions] = useState([]);

  const pickupRef = useRef(null);
  const dropRef = useRef(null);

  // Generate dates for next 7 days
  const generateDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      dates.push(date);
    }

    return dates;
  };

  const dates = generateDates();

  // Mock time slots
  const timeSlots = [
    "12:00 AM",
    "1:00 AM",
    "2:00 AM",
    "3:00 AM",
    "4:00 AM",
    "5:00 AM",
    "6:00 AM",
    "7:00 AM",
    "8:00 AM",
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
    "8:00 PM",
    "9:00 PM",
    "10:00 PM",
    "11:00 PM",
  ];

  // Mock transmission options
  const transmissionOptions = [
    { id: "manual", label: "Manual", icon: "🚗" },
    { id: "automatic", label: "Automatic", icon: "⚙️" },
  ];

  // Mock car type options
  const carTypeOptions = [
    { id: "hatchback", label: "Hatchback", icon: "🚙", price: "+₹0" },
    { id: "sedan", label: "Sedan", icon: "🚗", price: "+₹100" },
    { id: "suv", label: "SUV", icon: "🚙", price: "+₹200" },
  ];

  // Handle location input with debounced suggestions
  const handlePickupChange = (value) => {
    setPickup(value);
    if (value.length >= 3) {
      // Mock suggestions
      setPickupSuggestions([
        "PMC Metro Station Gaothan, Shivajinagar, Pune, Maharashtra",
        "Pune, Maharashtra",
        "PMC Building Congress House Road, Gaothan, Shivajinagar, Pune, Maharashtra",
        "PMC Colony, Pandav Nagar, Wadarvadi, Pune, Maharashtra",
        "PMC Ward Office Ward No. 8, Aundh Gaon, Aundh, Pune, Maharashtra",
      ]);
    } else {
      setPickupSuggestions([]);
    }
  };

  const handleDropChange = (value) => {
    setDrop(value);
    if (value.length >= 3) {
      // Mock suggestions
      setDropSuggestions([
        "Koth Ganesh Mandir, Ganpatpura Road, Ganapatipura, Dholka, Gujarat",
        "Koth, Gujarat",
        "Koth Kalan, Haryana",
        "Koth Ganpatpura, Gujarat",
        "Koth Khurd, Haryana",
      ]);
    } else {
      setDropSuggestions([]);
    }
  };

  const handleSwapLocations = () => {
    const temp = pickup;
    setPickup(drop);
    setDrop(temp);
  };

  // Format date
  const formatDate = (date) => {
    return date.toLocaleDateString("en-IN", {
      weekday: "short",
      day: "numeric",
      month: "short",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* ================= LEFT PANEL ================= */}
        <div className="space-y-6">
          {/* Trip Type Tabs */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="flex">
              {tripTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setTripType(tab)}
                  className={`flex-1 px-6 py-4 text-sm font-semibold transition-all duration-200 relative
                    ${
                      tripType === tab
                        ? "text-emerald-600 bg-emerald-50"
                        : "text-gray-500 hover:text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  {tab}
                  {tripType === tab && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-0.5 bg-emerald-600 rounded-full" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Booking Form Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-8">
            {/* Location Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-gray-900">
                  Choose Location
                </h3>
                <div className="text-xs text-gray-500">
                  Enter 4 letters to search
                </div>
              </div>

              {/* Pickup Input */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                </div>
                <input
                  ref={pickupRef}
                  type="text"
                  value={pickup}
                  onChange={(e) => handlePickupChange(e.target.value)}
                  placeholder="Enter pickup location"
                  className="w-full pl-10 pr-12 py-4 border-2 border-gray-200 rounded-xl 
                    focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:ring-opacity-50
                    text-gray-900 placeholder-gray-400 transition-all duration-200"
                />
                {pickup && (
                  <button
                    onClick={() => setPickup("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 
                      p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={16} className="text-gray-400" />
                  </button>
                )}

                {/* Suggestions */}
                {pickupSuggestions.length > 0 && (
                  <div
                    className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 
                    rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto"
                  >
                    {pickupSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setPickup(suggestion);
                          setPickupSuggestions([]);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 
                          last:border-b-0 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <MapPin size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-700">
                            {suggestion}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Swap Button */}
              <div className="flex justify-center -my-2">
                <button
                  onClick={handleSwapLocations}
                  className="z-10 p-2 bg-white border-2 border-gray-200 rounded-full 
                    hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-200
                    shadow-sm hover:shadow"
                >
                  <Navigation size={20} className="text-gray-600" />
                </button>
              </div>

              {/* Drop Input */}
              <div className="relative">
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                </div>
                <input
                  ref={dropRef}
                  type="text"
                  value={drop}
                  onChange={(e) => handleDropChange(e.target.value)}
                  placeholder="Enter drop location"
                  className="w-full pl-10 pr-12 py-4 border-2 border-gray-200 rounded-xl 
                    focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:ring-opacity-50
                    text-gray-900 placeholder-gray-400 transition-all duration-200"
                />
                {drop && (
                  <button
                    onClick={() => setDrop("")}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 
                      p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <X size={16} className="text-gray-400" />
                  </button>
                )}

                {/* Suggestions */}
                {dropSuggestions.length > 0 && (
                  <div
                    className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 
                    rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto"
                  >
                    {dropSuggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setDrop(suggestion);
                          setDropSuggestions([]);
                        }}
                        className="w-full text-left px-4 py-3 hover:bg-gray-50 border-b border-gray-100 
                          last:border-b-0 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <MapPin size={16} className="text-gray-400" />
                          <span className="text-sm text-gray-700">
                            {suggestion}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Schedule Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900">
                When is driver needed?
              </h3>

              <div className="grid grid-cols-2 gap-3">
                <button
                  onClick={() => setScheduleType("now")}
                  className={`px-4 py-3 rounded-xl border-2 transition-all duration-200
                    flex items-center justify-center gap-2 font-medium
                    ${
                      scheduleType === "now"
                        ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                        : "border-gray-200 hover:border-gray-300 text-gray-600"
                    }`}
                >
                  <ClockIcon size={18} />
                  Now
                </button>

                <button
                  onClick={() => setScheduleType("later")}
                  className={`px-4 py-3 rounded-xl border-2 transition-all duration-200
                    flex items-center justify-center gap-2 font-medium
                    ${
                      scheduleType === "later"
                        ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                        : "border-gray-200 hover:border-gray-300 text-gray-600"
                    }`}
                >
                  <Calendar size={18} />
                  Schedule for later
                </button>
              </div>

              {scheduleType === "later" && (
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {/* Date Picker */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Date
                    </label>
                    <div className="flex overflow-x-auto gap-2 pb-2">
                      {dates.map((date, index) => (
                        <button
                          key={index}
                          onClick={() => setSelectedDate(date.toISOString())}
                          className={`flex-shrink-0 px-4 py-2 rounded-lg border transition-all duration-200
                            ${
                              selectedDate === date.toISOString()
                                ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                                : "border-gray-200 hover:border-gray-300 text-gray-600"
                            }`}
                        >
                          <div className="text-xs font-medium">
                            {formatDate(date)}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Picker */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Time
                    </label>
                    <select
                      value={selectedTime}
                      onChange={(e) => setSelectedTime(e.target.value)}
                      className="w-full px-4 py-2.5 border-2 border-gray-200 rounded-xl 
                        focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 
                        focus:ring-opacity-50 transition-all duration-200"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}
            </div>

            {/* Car Type Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-gray-900">Car Type</h3>

              <div className="grid grid-cols-2 gap-4">
                {/* Transmission */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Transmission
                  </label>
                  <div className="flex gap-2">
                    {transmissionOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setTransmission(option.id)}
                        className={`flex-1 px-4 py-3 rounded-xl border-2 transition-all duration-200
                          flex items-center justify-center gap-2
                          ${
                            transmission === option.id
                              ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                              : "border-gray-200 hover:border-gray-300 text-gray-600"
                          }`}
                      >
                        <span>{option.icon}</span>
                        <span className="font-medium">{option.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Car Type */}
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Vehicle Type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {carTypeOptions.map((option) => (
                      <button
                        key={option.id}
                        onClick={() => setCarType(option.id)}
                        className={`px-3 py-3 rounded-xl border-2 transition-all duration-200
                          flex flex-col items-center justify-center gap-1
                          ${
                            carType === option.id
                              ? "border-emerald-500 bg-emerald-50 text-emerald-700"
                              : "border-gray-200 hover:border-gray-300 text-gray-600"
                          }`}
                      >
                        <span className="text-lg">{option.icon}</span>
                        <span className="text-xs font-medium">
                          {option.label}
                        </span>
                        <span className="text-xs text-gray-500">
                          {option.price}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Coupon Section */}
            <div className="space-y-4">
              <button
                onClick={() => setShowCoupon(!showCoupon)}
                className="w-full flex items-center justify-between p-4 rounded-xl border-2 border-gray-200 
                  hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <Ticket className="text-emerald-600" size={20} />
                  <div className="text-left">
                    <div className="font-medium text-gray-900">
                      Apply Coupon
                    </div>
                    <div className="text-sm text-gray-500">
                      Click above to see offers
                    </div>
                  </div>
                </div>
                <ChevronDown
                  className={`text-gray-400 transition-transform duration-200 ${showCoupon ? "rotate-180" : ""}`}
                />
              </button>

              {showCoupon && (
                <div className="p-4 border border-gray-200 rounded-xl bg-gray-50">
                  <input
                    type="text"
                    placeholder="Enter coupon code"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg mb-3"
                  />
                  <button className="w-full bg-emerald-600 text-white py-2.5 rounded-lg font-medium hover:bg-emerald-700 transition-colors">
                    Apply Coupon
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ================= RIGHT PANEL ================= */}
        <div className="lg:col-span-2 space-y-6">
          {/* Map Placeholder */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-[400px] relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg mb-4">
                <MapPin className="text-emerald-600" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Route Map
              </h3>
              <p className="text-gray-500 text-center max-w-md">
                Interactive map showing your route from pickup to drop location
              </p>
            </div>
          </div>

          {/* Booking Summary Card */}
          <div className="bg-white rounded-2xl shadow-lg p-6 space-y-6">
            {/* Protection Plan */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3">
                  <Shield className="text-amber-600 mt-1" size={20} />
                  <div>
                    <h4 className="font-bold text-gray-900">
                      SECURE YOUR BOOKING
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Get vehicle damage protection plan for your car for{" "}
                      <span className="font-bold">₹18 + GST</span>
                    </p>
                    <p className="text-xs text-gray-500 mt-1">*T&C apply</p>
                  </div>
                </div>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={protectionPlan}
                    onChange={(e) => setProtectionPlan(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div
                    className="relative w-12 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer 
                    peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] 
                    after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 
                    after:border after:rounded-full after:h-5 after:w-5 after:transition-all 
                    peer-checked:bg-emerald-500"
                  ></div>
                </label>
              </div>
            </div>

            {/* Fare Estimate */}
            <div className="border-t border-b border-gray-200 py-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-gray-900 text-lg">
                  FARE ESTIMATE
                </h4>
                <div className="text-2xl font-bold text-gray-900">
                  ₹{fareEstimate}
                </div>
              </div>
              <p className="text-sm text-gray-500">
                This is just an estimate, actual fare will be calculated after
                the drive.
              </p>
            </div>

            {/* Final CTA */}
            <button
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white 
              py-4 rounded-xl font-bold text-lg hover:from-emerald-700 hover:to-emerald-800 
              transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]
              shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
            >
              <Car size={24} />
              Request Driver
              <span className="text-lg">→</span>
            </button>

            {/* Additional Info */}
            <div className="text-center">
              <p className="text-xs text-gray-500">
                By proceeding, you agree to our{" "}
                <a href="#" className="text-emerald-600 hover:underline">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-emerald-600 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDriver;

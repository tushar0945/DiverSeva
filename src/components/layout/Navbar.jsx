import { NavLink } from "react-router-dom";
import logo from "../../assets/logos/logo2.png";

const Navbar = () => {
  const WHATSAPP_NUMBER = "918999197992"; // country code + number (no +)
  const WHATSAPP_MESSAGE =
    "Hello! I want to book a driver. Please share details.";

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  const handleBookNow = () => {
    window.open(whatsappLink, "_blank");
  };

  const linkClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-emerald-600 font-semibold"
        : "text-gray-800 hover:text-emerald-600"
    }`;

  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="DriverSeva Logo"
              className="h-14 md:h-16 w-auto object-contain"
            />
          </NavLink>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-10 font-medium">
            <li>
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
            </li>

            <li>
              <NavLink to="/aboutUs" className={linkClass}>
                About Us
              </NavLink>
            </li>

            <li>
              <NavLink to="/contactUs" className={linkClass}>
                Contact Us
              </NavLink>
            </li>
          </ul>

          {/* Book Now Button (WhatsApp) */}
          <button
            onClick={handleBookNow}
            className="px-7 py-3 rounded-full text-white font-semibold
              bg-gradient-to-r from-emerald-600 to-emerald-500
              hover:opacity-90 transition shadow-md
              focus:outline-none focus:ring-2 focus:ring-emerald-400"
          >
            Book Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

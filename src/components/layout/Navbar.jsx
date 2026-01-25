import { NavLink } from "react-router-dom";
import { useState } from "react";
import logo from "../../assets/logos/Dlogo2.png";

const NAVBAR_HEIGHT = "80px"; // h-20 = 80px

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const WHATSAPP_NUMBER = "918999197992";
  const WHATSAPP_MESSAGE =
    "Hello! I want to book a driver. Please share details.";

  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE,
  )}`;

  const handleBookNow = () => {
    window.open(whatsappLink, "_blank");
    setMenuOpen(false);
  };

  const linkClass = ({ isActive }) =>
    `block transition ${
      isActive
        ? "text-emerald-600 font-semibold"
        : "text-gray-800 hover:text-emerald-600"
    }`;

  return (
    <>
      {/* Spacer to offset fixed navbar */}
      <div style={{ height: NAVBAR_HEIGHT }} />

      <nav
        className="fixed top-0 left-0 w-full bg-white shadow-sm z-50"
        style={{ height: NAVBAR_HEIGHT }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <NavLink to="/" className="flex items-center">
              <img
                src={logo}
                alt="DriverSeva Logo"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
            </NavLink>

            {/* Desktop Menu */}
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

            {/* Desktop Button */}
            <div className="hidden md:block">
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

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-800"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white shadow-md
            transition-all duration-300 ${
              menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
          <ul className="flex flex-col gap-6 px-6 py-6 font-medium">
            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="/" className={linkClass}>
                Home
              </NavLink>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="/aboutUs" className={linkClass}>
                About Us
              </NavLink>
            </li>
            <li onClick={() => setMenuOpen(false)}>
              <NavLink to="/contactUs" className={linkClass}>
                Contact Us
              </NavLink>
            </li>

            <button
              onClick={handleBookNow}
              className="mt-4 px-6 py-3 rounded-full text-white font-semibold
                bg-gradient-to-r from-emerald-600 to-emerald-500
                hover:opacity-90 transition shadow-md"
            >
              Book Now
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

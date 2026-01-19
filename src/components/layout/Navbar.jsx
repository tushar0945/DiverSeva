import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-1 text-2xl font-extrabold">
            <span className="text-black">Driver</span>
            <span className="text-emerald-500">Seva</span>
          </div>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-10 text-gray-800 font-medium">
            <li className="hover:text-emerald-600 cursor-pointer">Home</li>

            <li className="flex items-center gap-1 hover:text-emerald-600 cursor-pointer">
              Services <ChevronDown size={16} />
            </li>

            <li className="flex items-center gap-1 hover:text-emerald-600 cursor-pointer">
              For Business <ChevronDown size={16} />
            </li>

            <li className="flex items-center gap-1 hover:text-emerald-600 cursor-pointer">
              About Us <ChevronDown size={16} />
            </li>
          </ul>

          {/* CTA Button */}
          <button className="px-6 py-3 rounded-md text-white font-semibold bg-gradient-to-r from-slate-900 to-indigo-900 hover:opacity-90 transition">
            Download App
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

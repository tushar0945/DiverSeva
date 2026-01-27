import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Phone,
  Mail,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Driver<span className="text-emerald-500">Seva</span>
            </h3>

            <p className="text-sm leading-relaxed text-gray-400">
              Trusted driver booking and car services platform built for Indian
              roads, real people, and everyday travel needs.
            </p>

            <p className="mt-4 text-sm text-emerald-400 italic">
              कार आहे? बाकी आम्ही पाहतो.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">
                Driver Booking
              </li>
              <li className="hover:text-white cursor-pointer">
                Outstation Drivers
              </li>
              {/* <li className="hover:text-white cursor-pointer">
                Car Wash & Care
              </li> */}
              <li className="hover:text-white cursor-pointer">
                FASTag & Car Essentials
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li className="hover:text-white cursor-pointer">About Us</li>
              {/* <li className="hover:text-white cursor-pointer">How It Works</li> */}
              {/* <li className="hover:text-white cursor-pointer">Careers</li> */}
              <li className="hover:text-white cursor-pointer">Contact Us</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>

            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-3">
                <Phone size={16} className="text-emerald-500" />
                +91 8999703730
              </p>

              <p className="flex items-center gap-3">
                <Mail size={16} className="text-emerald-500" />
                ns590419@gmail.com
              </p>
            </div>

            {/* Social Icons */}
            {/* <div className="flex gap-4 mt-6">
              <Facebook className="hover:text-white cursor-pointer" size={18} />
              <Instagram
                className="hover:text-white cursor-pointer"
                size={18}
              />
              <Twitter className="hover:text-white cursor-pointer" size={18} />
              <Linkedin className="hover:text-white cursor-pointer" size={18} />
            </div> */}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} DriverSeva. All rights reserved.
          </p>

          <p className="text-sm text-gray-400 italic">
            Safe rides. Trusted drivers. Peace of mind.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

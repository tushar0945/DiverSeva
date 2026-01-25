import { motion } from "framer-motion";

const WhatsAppButton = () => {
  const WHATSAPP_NUMBER = "918999197992";
  const MESSAGE = "Hello! I want to know more details.";
  const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    MESSAGE,
  )}`;

  return (
    <motion.a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-[9999]
        w-14 h-14 rounded-full
        bg-green-500 text-white
        flex items-center justify-center
        shadow-lg
      "
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label="Chat on WhatsApp"
    >
      {/* WhatsApp Icon (SVG – no dependency) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        fill="currentColor"
        className="w-7 h-7"
      >
        <path d="M16.003 3C9.383 3 4 8.383 4 15.003c0 2.645.868 5.093 2.333 7.076L4 29l7.1-2.285a11.94 11.94 0 0 0 4.903 1.028h.001c6.62 0 12.003-5.383 12.003-12.003C28.007 8.383 22.624 3 16.003 3zm0 21.743a9.72 9.72 0 0 1-4.964-1.352l-.356-.21-4.214 1.355 1.377-4.106-.231-.377a9.71 9.71 0 1 1 8.388 4.69zm5.356-7.264c-.293-.147-1.736-.857-2.005-.955-.268-.099-.463-.147-.658.147-.195.293-.756.955-.926 1.15-.171.195-.342.22-.634.073-.293-.147-1.237-.456-2.357-1.455-.871-.777-1.459-1.737-1.63-2.03-.171-.293-.018-.451.129-.598.133-.132.293-.342.439-.513.147-.171.195-.293.293-.488.098-.195.049-.366-.024-.513-.073-.147-.658-1.587-.902-2.174-.237-.57-.479-.492-.658-.502l-.561-.01c-.195 0-.513.073-.781.366-.268.293-1.025 1.001-1.025 2.44s1.05 2.831 1.196 3.026c.147.195 2.065 3.156 5.005 4.424.699.302 1.244.482 1.668.617.701.223 1.338.191 1.843.116.562-.084 1.736-.709 1.981-1.394.244-.684.244-1.27.171-1.394-.073-.122-.268-.195-.561-.342z" />
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;

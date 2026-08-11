import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "918434890116";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=Hi%20Huzaif!%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, x: 10, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="hidden sm:inline-block px-4 py-2 rounded-xl text-xs font-mono font-bold uppercase tracking-wider bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-2xl border border-white/10"
          >
            Chat on WhatsApp 💬
          </motion.span>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.5)] cursor-pointer group"
        aria-label="Connect on WhatsApp"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping pointer-events-none -z-10" />

        {/* WhatsApp Icon */}
        <FaWhatsapp className="text-3xl transition-transform duration-300 group-hover:rotate-12" />
      </motion.a>
    </div>
  );
};

export default WhatsAppButton;

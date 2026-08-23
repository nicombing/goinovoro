"use client";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      className="fixed top-6 md:top-8 left-1/2 -translate-x-1/2 z-[100] w-[90%] max-w-[700px]"
      initial={{ y: -50, opacity: 0, x: "-50%" }}
      animate={{ y: 0, opacity: 1, x: "-50%" }}
      transition={{ duration: 0.8, delay: 1, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="bg-white rounded-xl md:rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.05)] px-6 py-3 md:py-4 flex items-center justify-between pointer-events-auto">
        
        {/* Left Links */}
        <div className="flex items-center gap-6 md:gap-8">
          <a href="#about" className="font-mono text-[10px] md:text-[11px] text-text-dark uppercase tracking-widest hover:opacity-60 transition-opacity">
            About
          </a>
          <a href="#work" className="font-mono text-[10px] md:text-[11px] text-text-dark uppercase tracking-widest hover:opacity-60 transition-opacity">
            Work
          </a>
        </div>

        {/* Center Logo */}
        <div className="flex-shrink-0 absolute left-1/2 -translate-x-1/2 cursor-pointer">
          <span className="font-neue font-medium text-[16px] md:text-[20px] tracking-tight text-black">
            Goinovoro™
          </span>
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-6 md:gap-8">
          <a href="#services" className="font-mono text-[10px] md:text-[11px] text-text-dark uppercase tracking-widest hover:opacity-60 transition-opacity">
            Services
          </a>
          <a href="#contact" className="font-mono text-[10px] md:text-[11px] text-text-dark uppercase tracking-widest hover:opacity-60 transition-opacity">
            Contact
          </a>
        </div>

      </div>
    </motion.header>
  );
}

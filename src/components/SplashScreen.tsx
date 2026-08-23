"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading sequence
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[99999] overflow-hidden pointer-events-none"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          {/* Top half gate */}
          <motion.div
            className="absolute inset-x-0 top-0 h-[calc(50%+1px)] bg-splash-pastel"
            initial={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
          {/* Bottom half gate */}
          <motion.div
            className="absolute inset-x-0 bottom-0 h-[calc(50%+1px)] bg-splash-pastel"
            initial={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          />

          {/* Logo container */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            <div className="relative w-[180px] sm:w-[220px] md:w-[260px] lg:w-[300px]">
              <img
                src="/loader.png"
                alt="Loading"
                className="w-full h-auto block"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

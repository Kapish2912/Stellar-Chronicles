// components/ui/RocketLaunch.tsx
"use client";
import { motion } from "framer-motion";
import { FaRocket } from "react-icons/fa";

export default function RocketLaunch() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: -400, opacity: 1 }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: 0.5,
      }}
      className="absolute left-1/2 bottom-4 transform -translate-x-1/2 text-pink-500 text-4xl z-10"
    >
      <FaRocket className="drop-shadow-lg animate-bounce" />
    </motion.div>
  );
}

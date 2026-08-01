"use client";

import { motion } from "framer-motion";

export default function ContinueButton() {
  return (
    <motion.button
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.6,
        duration: 0.8,
      }}
      className="
        mt-16
        rounded-full
        border
        border-white/40
        px-10
        py-4
        text-lg
        text-white
        transition-all
        duration-300
        hover:border-[#2E6F57]
        hover:bg-[#2E6F57]
      "
    >
      Continue
    </motion.button>
  );
}
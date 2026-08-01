"use client";

import { motion } from "framer-motion";

type CityCardProps = {
  city: string;
  description: string;
};

export default function CityCard({
  city,
  description,
}: CityCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.2 }}
      className="
        cursor-pointer
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        transition
        hover:border-[#2E6F57]
        hover:bg-white/[0.05]
      "
    >
      <div className="h-40 bg-gradient-to-br from-[#2E6F57] to-[#163B2E]" />

      <div className="p-6">
        <h2 className="text-3xl font-light">
          {city}
        </h2>

        <p className="mt-3 text-white/60">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
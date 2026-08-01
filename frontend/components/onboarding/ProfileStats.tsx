"use client";

import { motion } from "framer-motion";
import {
  Plane,
  Heart,
  Globe2,
} from "lucide-react";

type ProfileStatsProps = {
  trips: number;
  favourites: number;
  countries: number;
};

export default function ProfileStats({
  trips,
  favourites,
  countries,
}: ProfileStatsProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.2,
      }}
      className="
        mt-10
        grid
        grid-cols-3
        overflow-hidden
        rounded-2xl
        border
        border-[#D4AF37]/20
        bg-black/20
      "
    >
      <Stat
        icon={<Plane size={18} />}
        value={trips}
        label="Trips"
      />

      <Stat
        icon={<Heart size={18} />}
        value={favourites}
        label="Likes"
      />

      <Stat
        icon={<Globe2 size={18} />}
        value={countries}
        label="Countries"
      />
    </motion.div>
  );
}

type StatProps = {
  icon: React.ReactNode;
  value: number;
  label: string;
};

function Stat({
  icon,
  value,
  label,
}: StatProps) {
  return (
    <div
      className="
        border-r
        border-[#D4AF37]/15
        p-5
        text-center
        last:border-r-0
      "
    >
      <div className="flex justify-center text-[#D4AF37]">
        {icon}
      </div>

      <p className="mt-3 text-3xl font-light text-[#F3E2A4]">
        {value}
      </p>

      <p
        className="
          mt-2
          text-xs
          uppercase
          tracking-[0.3em]
          text-[#C8B06C]
        "
      >
        {label}
      </p>
    </div>
  );
}
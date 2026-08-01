"use client";

import { motion } from "framer-motion";
import { Compass, Clover } from "lucide-react";

import ProfileStats from "./ProfileStats";

type ProfileCardProps = {
  name: string;
  theme: "navy" | "burgundy";
  onClick: () => void;
};

export default function ProfileCard({
  name,
  theme,
  onClick,
}: ProfileCardProps) {
  const navy = theme === "navy";

  const stats = navy
    ? {
        trips: 12,
        favourites: 84,
        countries: 9,
      }
    : {
        trips: 9,
        favourites: 67,
        countries: 7,
      };

  return (
    <motion.button
      onClick={onClick}
      whileHover={{
        rotateX: -5,
        rotateY: navy ? 8 : -8,
        y: -12,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 18,
      }}
      style={{
        transformStyle: "preserve-3d",
      }}
      className="group w-full text-left [perspective:1200px]"
    >
      <div
        className={`
          relative
          overflow-hidden
          rounded-[36px]
          border
          p-10
          shadow-2xl
          transition-all
          duration-500

          ${
            navy
              ? `
                border-[#D4AF37]/30
                bg-gradient-to-br
                from-[#071D38]
                via-[#102D55]
                to-[#041324]
              `
              : `
                border-[#D4AF37]/30
                bg-gradient-to-br
                from-[#6F1024]
                via-[#811A36]
                to-[#4A0917]
              `
          }

          hover:shadow-[0_30px_80px_rgba(0,0,0,0.45)]
        `}
      >
        {/* Leather texture */}

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 1px, transparent 1px), radial-gradient(circle at 80% 80%, white 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />

        {/* Gold glow */}

        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#D4AF37]/10 blur-3xl" />

        {/* Emblem */}

        <div className="relative flex justify-center">

          <div
            className="
              flex
              h-24
              w-24
              items-center
              justify-center
              rounded-full
              border
              border-[#D4AF37]/40
              bg-[#D4AF37]/10
              text-[#E7C96B]
            "
          >
            {navy ? (
              <Compass size={46} />
            ) : (
              <Clover size={44} />
            )}
          </div>

        </div>

        {/* Title */}

        <p
          className="
            mt-10
            text-center
            text-sm
            uppercase
            tracking-[0.45em]
            text-[#D4AF37]
          "
        >
          Travel Together
        </p>

        <h2
          className="
            mt-4
            text-center
            font-benguiat
            text-5xl
            uppercase
            tracking-[0.08em]
            text-[#F3DE9B]
          "
        >
          {name}
        </h2>

        <div
          className="
            mx-auto
            mt-6
            h-px
            w-48
            bg-gradient-to-r
            from-transparent
            via-[#D4AF37]
            to-transparent
          "
        />

        {/* Stats */}

        <ProfileStats
          trips={stats.trips}
          favourites={stats.favourites}
          countries={stats.countries}
        />

        {/* Footer */}

        <div
          className="
            mt-10
            flex
            items-center
            justify-between
            border-t
            border-[#D4AF37]/20
            pt-8
          "
        >
          <span
            className="
              text-sm
              uppercase
              tracking-[0.35em]
              text-[#D4AF37]
            "
          >
            Open Planner
          </span>

          <motion.span
            whileHover={{
              x: 6,
            }}
            className="text-3xl text-[#F3DE9B]"
          >
            →
          </motion.span>

        </div>

      </div>

    </motion.button>
  );
}
"use client";

import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import ContinueButton from "./ContinueButton";

export default function TitleScreen() {
  return (
    <div className="relative flex h-screen items-center justify-center overflow-hidden bg-[#08110C] text-white">

      {/* Aurora Layer 1 */}
      <motion.div
        animate={{
          x: [-120, 120, -120],
          y: [-40, 30, -40],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -left-40
          -top-40
          h-[850px]
          w-[850px]
          rounded-full
          bg-[#2E6F57]/25
          blur-[180px]
        "
      />

      {/* Aurora Layer 2 */}
      <motion.div
        animate={{
          x: [120, -120, 120],
          y: [40, -40, 40],
          rotate: [0, -12, 0],
        }}
        transition={{
          duration: 36,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -right-40
          -bottom-40
          h-[900px]
          w-[900px]
          rounded-full
          bg-[#4F9D69]/20
          blur-[220px]
        "
      />

      {/* Centre Glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.35, 0.55, 0.35],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          left-1/2
          top-1/2
          h-[700px]
          w-[700px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-[#7BC47F]/10
          blur-[170px]
        "
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="
            font-benguiat
            text-center
            uppercase
            leading-[0.88]
            tracking-[0.08em]
            text-[#F8F5EE]
            text-5xl
            md:text-7xl
            lg:text-8xl
          "
          style={{
            textShadow: "0 10px 35px rgba(0,0,0,0.55)",
          }}
        >
          CIARA & LAWRENCE'S
          <br />
          HOLIDAY PLANNER
        </motion.h1>

        {/* Underline */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 340 }}
          transition={{
            delay: 0.8,
            duration: 1,
          }}
          className="
            relative
            mt-8
            h-px
            w-[340px]
            bg-gradient-to-r
            from-transparent
            via-emerald-300
            to-transparent
          "
        >
          {/* Flying Plane */}
          <motion.div
            initial={{ x: -25 }}
            animate={{ x: 365 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "linear",
            }}
            className="
              absolute
              -top-3
              left-0
            "
          >
            <Plane
              size={18}
              className="rotate-45 text-emerald-200 drop-shadow-md"
            />
          </motion.div>

        </motion.div>

        <div className="mt-16">
          <ContinueButton />
        </div>

      </div>

    </div>
  );
}
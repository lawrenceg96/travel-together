"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InstaxWide() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#090909] px-6">

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        className="relative"
      >

        {/* Drop shadow */}
        <div className="absolute inset-0 translate-y-6 rounded-[26px] bg-black/40 blur-3xl" />

        {/* Instax Paper */}
        <div
          className="
            relative
            rounded-[22px]
            bg-[#F5F2EB]
            p-5
            pb-10
            border
            border-[#E6E0D6]
            shadow-[0_18px_60px_rgba(0,0,0,0.55)]
          "
        >

          {/* Photo Window */}
          <div
            className="
              relative
              overflow-hidden
              rounded-[12px]
              w-[920px]
              max-w-[88vw]
              aspect-[1.62/1]
              bg-black
              shadow-[inset_0_0_20px_rgba(0,0,0,0.28)]
            "
          >

            {/* Slow Ken Burns */}
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: 1.03 }}
              transition={{
                duration: 8,
                ease: "easeOut",
              }}
              className="relative h-full w-full"
            >
              <Image
                src="/images/cover.jpg"
                alt="Ciara and Lawrence"
                fill
                priority
                className="object-cover"
              />
            </motion.div>

            {/* Soft vignette */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" />
          </div>

          {/* Bottom Instax space */}
          <div className="h-8" />

          {/* Paper highlight */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-[22px]
              bg-gradient-to-br
              from-white/20
              via-transparent
              to-transparent
            "
          />
        </div>
      </motion.div>

    </div>
  );
}
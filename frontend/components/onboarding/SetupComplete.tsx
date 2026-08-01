"use client";

import { motion } from "framer-motion";

type SetupCompleteProps = {
  name: string;
  onContinue: () => void;
};

export default function SetupComplete({
  name,
  onContinue,
}: SetupCompleteProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#08110C] px-6">

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          h-[700px]
          w-[700px]
          rounded-full
          bg-emerald-500/20
          blur-[180px]
        "
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        className="
          relative
          z-10
          w-full
          max-w-2xl
          rounded-[36px]
          border
          border-white/10
          bg-white/[0.03]
          p-12
          text-center
          backdrop-blur-xl
        "
      >

        <motion.div
          initial={{
            scale: 0.8,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            delay: 0.3,
            duration: 0.6,
          }}
          className="
            mx-auto
            flex
            h-28
            w-28
            items-center
            justify-center
            rounded-full
            bg-emerald-600/20
            text-6xl
          "
        >
          ❤️
        </motion.div>

        <p className="mt-10 text-sm uppercase tracking-[0.35em] text-emerald-300">
          Welcome
        </p>

        <h1 className="mt-5 font-benguiat text-6xl uppercase text-white">
          Hello, {name}
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-xl leading-relaxed text-white/70">
          Your shared travel planner has been created.
          <br />
          From now on you'll be planning adventures together.
        </p>

        <div className="mt-12 flex items-center justify-center gap-10 text-5xl">

          <div className="flex flex-col items-center">

            <span>❤️</span>

            <span className="mt-4 text-xl">
              Lawrence
            </span>

          </div>

          <span className="text-white/30">
            +
          </span>

          <div className="flex flex-col items-center">

            <span>🌻</span>

            <span className="mt-4 text-xl">
              Ciara
            </span>

          </div>

        </div>

        <button
          onClick={onContinue}
          className="
            mt-14
            rounded-2xl
            bg-emerald-600
            px-10
            py-4
            text-lg
            font-medium
            transition-all
            hover:bg-emerald-500
            hover:scale-105
          "
        >
          Continue
        </button>

      </motion.div>

    </div>
  );
}
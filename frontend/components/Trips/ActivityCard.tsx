"use client";

import { motion } from "framer-motion";

type ActivityCardProps = {
  icon: string;
  title: string;
  time: string;
};

export default function ActivityCard({
  icon,
  title,
  time,
}: ActivityCardProps) {
  return (
    <motion.div
      whileHover={{
        x: 6,
      }}
      transition={{
        duration: 0.2,
      }}
      className="relative flex"
    >
      {/* Timeline */}

      <div className="mr-8 flex flex-col items-center">

        <div
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-full
            border
            border-emerald-500/40
            bg-emerald-500/15
            text-2xl
          "
        >
          {icon}
        </div>

        <div className="mt-2 h-full w-px bg-white/10" />

      </div>

      {/* Activity Card */}

      <div
        className="
          flex-1
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          p-6
          transition-all
          hover:border-emerald-400/40
          hover:bg-white/[0.05]
        "
      >
        <div className="flex items-center justify-between">

          <div>

            <p className="text-sm uppercase tracking-wider text-emerald-300">
              {time}
            </p>

            <h3 className="mt-2 text-2xl font-light">
              {title}
            </h3>

          </div>

          <button
            className="
              rounded-xl
              border
              border-white/10
              px-4
              py-2
              text-sm
              transition
              hover:border-emerald-500
              hover:bg-emerald-500/10
            "
          >
            Details
          </button>

        </div>

      </div>

    </motion.div>
  );
}
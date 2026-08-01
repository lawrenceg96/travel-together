"use client";

import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-[#090909] text-white"
    >
      <div className="mx-auto max-w-7xl px-12 py-12">

        <h1
          className="text-5xl font-light"
          style={{
            fontFamily: "serif",
          }}
        >
          Ciara & Lawrence's
          <br />
          Holiday Planner
        </h1>

        <p className="mt-4 text-white/60 text-lg">
          Welcome back.
        </p>

        <div className="mt-16 grid grid-cols-2 gap-8 lg:grid-cols-3">

          <DeskCard
            emoji="📸"
            title="Memories"
            description="Your favourite trips"
          />

          <DeskCard
            emoji="🛂"
            title="Passport"
            description="Countries you've chosen"
          />

          <DeskCard
            emoji="🌍"
            title="World"
            description="Explore the map"
          />

          <DeskCard
            emoji="📖"
            title="Journal"
            description="Travel notes"
          />

          <DeskCard
            emoji="❤️"
            title="Wishlist"
            description="Shared dreams"
          />

          <DeskCard
            emoji="⚙️"
            title="Settings"
            description="Personalise your app"
          />

        </div>

      </div>
    </motion.div>
  );
}

function DeskCard({
  emoji,
  title,
  description,
}: {
  emoji: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        cursor-pointer
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        backdrop-blur-sm
      "
    >
      <div className="text-5xl">{emoji}</div>

      <h2 className="mt-6 text-2xl">
        {title}
      </h2>

      <p className="mt-2 text-white/60">
        {description}
      </p>
    </motion.div>
  );
}
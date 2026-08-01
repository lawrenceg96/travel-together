"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

type DashboardCardProps = {
  emoji: string;
  title: string;
  description: string;
  href?: string;
};

export default function DashboardCard({
  emoji,
  title,
  description,
  href,
}: DashboardCardProps) {
  const router = useRouter();

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      transition={{ duration: 0.2 }}
      onClick={() => href && router.push(href)}
      className="
        cursor-pointer
        rounded-3xl
        border
        border-white/10
        bg-white/[0.03]
        p-8
        transition
        hover:border-[#2E6F57]/60
      "
    >
      <div className="text-5xl">{emoji}</div>

      <h3 className="mt-6 text-2xl font-light">
        {title}
      </h3>

      <p className="mt-3 leading-relaxed text-white/60">
        {description}
      </p>
    </motion.div>
  );
}
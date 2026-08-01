"use client";

import { useRouter } from "next/navigation";

export default function ContinueButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/dashboard")}
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
    </button>
  );
}
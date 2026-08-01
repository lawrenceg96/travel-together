"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

import { Country } from "@/types/country";

type Props = {
  country: Country;
  onToggle: (
    id: string,
    person: "lawrence" | "ciara"
  ) => void;
};

export default function PassportCountryCard({
  country,
  onToggle,
}: Props) {
  const router = useRouter();

  const matched =
    country.lawrence && country.ciara;

  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.02,
      }}
      className={`
        overflow-hidden
        rounded-3xl
        border
        transition-all
        ${
          matched
            ? "border-green-500 bg-green-500/10"
            : "border-white/10 bg-white/[0.03]"
        }
      `}
    >
      <button
        onClick={() =>
          router.push(`/countries/${country.id}`)
        }
        className="block w-full text-left"
      >
        <div className="relative h-56">

          <Image
            src={country.image}
            alt={country.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            className="object-cover"
/>

          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute bottom-4 left-5 text-5xl">
            {country.flag}
          </div>

        </div>
      </button>

      <div className="p-6">

        <h2 className="text-3xl font-light">
          {country.name}
        </h2>

        <div className="mt-6 flex gap-3">

          <button
            onClick={() =>
              onToggle(country.id, "lawrence")
            }
            className={`flex-1 rounded-xl py-3 transition ${
              country.lawrence
                ? "bg-blue-600 text-white"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            👤 Lawrence
          </button>

          <button
            onClick={() =>
              onToggle(country.id, "ciara")
            }
            className={`flex-1 rounded-xl py-3 transition ${
              country.ciara
                ? "bg-pink-600 text-white"
                : "bg-white/10 hover:bg-white/20"
            }`}
          >
            👤 Ciara
          </button>

        </div>

        <div className="mt-6">

          {matched ? (
            <div className="rounded-xl bg-green-600 py-3 text-center font-medium">
              💚 Shared Match
            </div>
          ) : (
            <div className="rounded-xl bg-white/10 py-3 text-center text-white/60">
              Waiting for both selections
            </div>
          )}

        </div>

      </div>
    </motion.div>
  );
}
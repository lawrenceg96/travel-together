"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import FavoriteButton from "@/components/ui/FavoriteButton";

type City = {
  id: string;
  countryId: string;
  name: string;
  image: string;
  budget: string;
  season: string;
  description: string;
};

type CityCardProps = {
  city: City;
};

export default function CityCard({
  city,
}: CityCardProps) {
  return (
    <Link href={`/countries/${city.countryId}/${city.id}`}>
      <motion.div
        whileHover={{
          y: -6,
          scale: 1.02,
        }}
        transition={{
          duration: 0.2,
        }}
        className="
          group
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-white/[0.03]
          transition
          hover:border-[#2E6F57]
          hover:bg-white/[0.05]
        "
      >
        <div className="relative h-52">

          <FavoriteButton
            id={city.id}
            type="city"
          />

          <Image
            src={city.image}
            alt={city.name}
            fill
            sizes="(max-width:768px)100vw,(max-width:1280px)50vw,33vw"
            className="
              object-cover
              transition
              duration-500
              group-hover:scale-110
            "
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        </div>

        <div className="p-6">

          <h2 className="text-3xl font-light">
            {city.name}
          </h2>

          <p className="mt-3 line-clamp-2 text-white/60">
            {city.description}
          </p>

          <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white/50">

            <span>
              🌤 {city.season}
            </span>

            <span>
              💷 {city.budget}
            </span>

          </div>

        </div>
      </motion.div>
    </Link>
  );
}
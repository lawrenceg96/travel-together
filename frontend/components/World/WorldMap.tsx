"use client";

import Link from "next/link";

const countries = [
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    top: "18%",
    left: "16%",
  },
  {
    id: "norway",
    name: "Norway",
    flag: "🇳🇴",
    top: "17%",
    left: "50%",
  },
  {
    id: "italy",
    name: "Italy",
    flag: "🇮🇹",
    top: "34%",
    left: "52%",
  },
  {
    id: "greece",
    name: "Greece",
    flag: "🇬🇷",
    top: "37%",
    left: "57%",
  },
  {
    id: "japan",
    name: "Japan",
    flag: "🇯🇵",
    top: "30%",
    left: "83%",
  },
  {
    id: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    top: "74%",
    left: "88%",
  },
];

export default function WorldMap() {
  return (
    <div
      className="
        relative
        h-[700px]
        w-full
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-gradient-to-br
        from-[#07141F]
        via-[#0D2435]
        to-[#163B2E]
      "
    >
      <div className="absolute inset-0 opacity-20">
        <div
          className="
            h-full
            w-full
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)]
            bg-[length:40px_40px]
          "
        />
      </div>

      {countries.map((country) => (
        <Link
          key={country.id}
          href={`/countries/${country.id}`}
          style={{
            top: country.top,
            left: country.left,
          }}
          className="
            absolute
            -translate-x-1/2
            -translate-y-1/2
            rounded-full
            border
            border-white/20
            bg-black/40
            px-4
            py-2
            backdrop-blur-md
            transition-all
            duration-300
            hover:scale-110
            hover:border-[#2E6F57]
            hover:bg-[#2E6F57]/40
          "
        >
          <span className="text-3xl">
            {country.flag}
          </span>
        </Link>
      ))}

      <div className="absolute bottom-10 left-10">

        <h2 className="text-5xl font-light">
          Explore the World
        </h2>

        <p className="mt-4 max-w-xl text-lg text-white/70">
          Click a destination to begin planning your next adventure together.
        </p>

      </div>
    </div>
  );
}
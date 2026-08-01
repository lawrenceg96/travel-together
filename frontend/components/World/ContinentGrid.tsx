"use client";

import Link from "next/link";

const continents = [
  {
    name: "Europe",
    emoji: "🇪🇺",
    href: "/continents/europe",
  },
  {
    name: "Asia",
    emoji: "🌏",
    href: "/continents/asia",
  },
  {
    name: "Africa",
    emoji: "🌍",
    href: "/continents/africa",
  },
  {
    name: "North America",
    emoji: "🌎",
    href: "/continents/north-america",
  },
  {
    name: "South America",
    emoji: "🦙",
    href: "/continents/south-america",
  },
  {
    name: "Oceania",
    emoji: "🌊",
    href: "/continents/oceania",
  },
];

export default function ContinentGrid() {
  return (
    <section className="mt-10">
      <h2 className="mb-5 text-2xl font-light">
        Browse by Continent
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {continents.map((continent) => (
          <Link
            key={continent.name}
            href={continent.href}
            className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              transition-all
              duration-300
              hover:border-[#2E6F57]
              hover:bg-[#2E6F57]/15
              hover:-translate-y-1
            "
          >
            <div className="text-4xl">
              {continent.emoji}
            </div>

            <h3 className="mt-4 text-xl font-light">
              {continent.name}
            </h3>

            <p className="mt-2 text-sm text-white/60">
              Explore destinations
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
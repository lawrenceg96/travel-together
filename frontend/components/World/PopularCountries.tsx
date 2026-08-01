"use client";

import Link from "next/link";

const popularCountries = [
  {
    id: "japan",
    name: "Japan",
    flag: "🇯🇵",
    description: "Culture, food and unforgettable experiences.",
  },
  {
    id: "italy",
    name: "Italy",
    flag: "🇮🇹",
    description: "History, cuisine and beautiful cities.",
  },
  {
    id: "greece",
    name: "Greece",
    flag: "🇬🇷",
    description: "Islands, beaches and ancient wonders.",
  },
  {
    id: "canada",
    name: "Canada",
    flag: "🇨🇦",
    description: "Nature, adventure and incredible landscapes.",
  },
];

export default function PopularCountries() {
  return (
    <section className="mt-12">
      <div className="mb-5 flex items-end justify-between">
        <h2 className="text-2xl font-light">
          Popular Destinations
        </h2>

        <Link
          href="/countries"
          className="
            text-sm
            text-white/50
            transition
            hover:text-white
          "
        >
          View all
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {popularCountries.map((country) => (
          <Link
            key={country.id}
            href={`/countries/${country.id}`}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#2E6F57]
              hover:bg-[#2E6F57]/15
            "
          >
            <div className="flex items-center gap-4">
              <span className="text-4xl">
                {country.flag}
              </span>

              <div>
                <h3 className="text-xl font-light">
                  {country.name}
                </h3>

                <p className="mt-2 text-sm text-white/60">
                  {country.description}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
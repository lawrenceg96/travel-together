"use client";

import Link from "next/link";
import type { SearchResult } from "@/lib/search";

interface Props {
  results: SearchResult[];
}

const typeIcons = {
  country: "🌍",
  city: "🏙️",
  attraction: "📍",
};

export default function SearchResults({
  results,
}: Props) {

  if (!results.length) {
    return (
      <div
        className="
          mt-4
          rounded-2xl
          border
          border-white/10
          bg-[#07141F]/90
          p-5
          text-white/50
        "
      >
        No destinations found.
      </div>
    );
  }


  return (
    <div
      className="
        mt-4
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[#07141F]/95
        backdrop-blur-xl
      "
    >

      {results.map((result) => (

        <Link
          key={`${result.type}-${result.id}`}
          href={result.href}
          className="
            flex
            items-center
            gap-4
            border-b
            border-white/5
            p-4
            transition
            hover:bg-white/10
          "
        >

          <div
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-white/5
              text-2xl
            "
          >
            {result.flag ?? typeIcons[result.type]}
          </div>


          <div>

            <h3
              className="
                text-lg
                font-light
              "
            >
              {result.name}
            </h3>


            <p
              className="
                text-sm
                text-white/50
              "
            >
              {result.subtitle}
            </p>

          </div>

        </Link>

      ))}

    </div>
  );
}
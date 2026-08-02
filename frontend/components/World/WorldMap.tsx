"use client";

import { useState } from "react";

import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import ContinentGrid from "./ContinentGrid";
import PopularCountries from "./PopularCountries";

import { searchTravel } from "@/lib/search";

export default function WorldMap() {
  const [search, setSearch] = useState("");

  const results = searchTravel(search);

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_340px]">

      <section
        className="
          relative
          min-h-[700px]
          overflow-hidden
          rounded-[32px]
          border
          border-white/10
          bg-gradient-to-br
          from-[#07141F]
          via-[#0D2435]
          to-[#163B2E]
          p-8
        "
      >

        <div
          className="
            absolute
            inset-0
            opacity-20
            bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)]
            bg-[length:40px_40px]
          "
        />

        <div className="relative z-10">

          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-white/40
            "
          >
            World Explorer
          </p>


          <h1
            className="
              mt-4
              text-5xl
              font-light
            "
          >
            Find your next adventure
          </h1>


          <p
            className="
              mt-4
              max-w-xl
              text-lg
              text-white/60
            "
          >
            Discover countries, cities and experiences to plan together.
          </p>


          <div className="relative mt-8 max-w-2xl">

            <SearchBar
              value={search}
              onChange={setSearch}
            />


            {search.length > 0 && (
              <SearchResults
                results={results}
              />
            )}

          </div>


          <ContinentGrid />


          <PopularCountries />


        </div>

      </section>


      <aside
        className="
          flex
          h-[700px]
          flex-col
          rounded-[32px]
          border
          border-white/10
          bg-white/5
          p-6
          backdrop-blur-xl
        "
      >

        <div>

          <p
            className="
              text-sm
              uppercase
              tracking-[0.3em]
              text-white/40
            "
          >
            Travel Together
          </p>


          <h2
            className="
              mt-2
              text-3xl
              font-light
            "
          >
            Your Journey
          </h2>

        </div>


        <div
          className="
            mt-8
            flex-1
            space-y-4
          "
        >

          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
            "
          >

            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-white/40
              "
            >
              Wishlist
            </p>


            <p
              className="
                mt-3
                text-white/60
              "
            >
              Save destinations you want to explore together.
            </p>

          </div>



          <div
            className="
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
            "
          >

            <p
              className="
                text-xs
                uppercase
                tracking-[0.25em]
                text-white/40
              "
            >
              Upcoming Trips
            </p>


            <p
              className="
                mt-3
                text-white/60
              "
            >
              Your planned adventures will appear here.
            </p>

          </div>


        </div>

      </aside>


    </div>
  );
}
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
    <div className="grid gap-6 xl:grid-cols-[1fr_340px]">
      <section
        className="
          relative
          h-[700px]
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
            <span className="text-3xl">{country.flag}</span>
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
          <p className="text-sm uppercase tracking-[0.3em] text-white/40">
            World Explorer
          </p>

          <h3 className="mt-2 text-3xl font-light">
            Discover Together
          </h3>
        </div>

        <div className="mt-8">
          <input
            type="text"
            placeholder="Search countries..."
            className="
              w-full
              rounded-2xl
              border
              border-white/10
              bg-white/5
              px-4
              py-3
              outline-none
              transition
              placeholder:text-white/40
              focus:border-[#2E6F57]
            "
          />
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3">
          <div className="rounded-2xl bg-[#2E6F57]/20 p-4">
            <p className="text-xs uppercase tracking-wider text-white/50">
              Countries
            </p>
            <p className="mt-2 text-3xl font-light">
              258
            </p>
          </div>

          <div className="rounded-2xl bg-[#2E6F57]/20 p-4">
            <p className="text-xs uppercase tracking-wider text-white/50">
              Selected
            </p>
            <p className="mt-2 text-3xl font-light">
              0
            </p>
          </div>
        </div>

        <div className="mt-6 flex-1 rounded-2xl border border-dashed border-white/10 p-5">
          <p className="text-sm uppercase tracking-[0.25em] text-white/40">
            Country Preview
          </p>

          <div className="mt-6">
            <h4 className="text-xl font-light">
              Select a Country
            </h4>

            <p className="mt-3 text-sm leading-7 text-white/60">
              Hovering and clicking countries will populate this panel in the
              next feature.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
import Image from "next/image";
import { notFound } from "next/navigation";

import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import { countries } from "@/lib/countries";
import { cities } from "@/lib/cities";

type Props = {
  params: Promise<{
    countryId: string;
  }>;
};

export default async function CountryPage({ params }: Props) {
  const { countryId } = await params;

  const country = countries.find((c) => c.id === countryId);

  if (!country) {
    notFound();
  }

  const countryCities = cities.filter(
    (city) => city.countryId === country.id
  );

  return (
    <DashboardLayout>
      <div className="relative mb-12 h-[420px] overflow-hidden rounded-3xl">
        <Image
          src={country.image}
          alt={country.name}
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 75vw, 900px"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute bottom-10 left-10">
          <div className="text-7xl">{country.flag}</div>

          <h1 className="mt-4 text-6xl font-light">
            {country.name}
          </h1>

          <p className="mt-4 max-w-xl text-lg text-white/80">
            Explore cities, attractions, food and unforgettable experiences.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {countryCities.map((city) => (
          <button
            key={city.id}
            className="
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              text-left
              transition-all
              hover:-translate-y-1
              hover:border-[#2E6F57]
              hover:bg-white/[0.05]
            "
          >
            <div className="relative h-52">
              <Image
                src={city.image}
                alt={city.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute bottom-4 left-5">
                <h2 className="text-3xl font-light">
                  {city.name}
                </h2>
              </div>
            </div>

            <div className="space-y-3 p-6">
              <p className="text-white/70">
                {city.description}
              </p>

              <div className="flex items-center justify-between text-sm text-white/60">
                <span>🌤 {city.season}</span>
                <span>{city.budget}</span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </DashboardLayout>
  );
}
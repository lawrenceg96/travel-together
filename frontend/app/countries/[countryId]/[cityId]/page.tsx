import Image from "next/image";
import { notFound } from "next/navigation";

import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import { countries } from "@/lib/countries";
import { cities } from "@/lib/cities";

type Props = {
  params: Promise<{
    countryId: string;
    cityId: string;
  }>;
};

export default async function CityPage({ params }: Props) {
  const { countryId, cityId } = await params;

  const country = countries.find(
    (c) => c.id === countryId
  );

  const city = cities.find(
    (c) =>
      c.countryId === countryId &&
      c.id === cityId
  );

  if (!country || !city) {
    notFound();
  }

  return (
    <DashboardLayout>
      <div className="relative mb-12 h-[420px] overflow-hidden rounded-3xl">

        <Image
          src={city.image}
          alt={city.name}
          fill
          priority
          sizes="(max-width:768px)100vw,(max-width:1280px)75vw,900px"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute bottom-10 left-10">

          <div className="text-6xl">
            {country.flag}
          </div>

          <h1 className="mt-4 text-6xl font-light">
            {city.name}
          </h1>

          <p className="mt-3 max-w-xl text-lg text-white/80">
            {city.description}
          </p>

        </div>

      </div>

      <div className="grid gap-8 lg:grid-cols-3">

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-3xl font-light">
            Best Time
          </h2>

          <p className="mt-4 text-white/70">
            🌤 {city.season}
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-3xl font-light">
            Budget
          </h2>

          <p className="mt-4 text-white/70">
            💷 {city.budget}
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
          <h2 className="text-3xl font-light">
            Notes
          </h2>

          <p className="mt-4 text-white/70">
            Coming soon...
          </p>
        </div>

      </div>
    </DashboardLayout>
  );
}
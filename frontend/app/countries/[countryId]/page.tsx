import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import CityCard from "@/components/Countries/CityCard";
import { countries } from "@/lib/countries";
import { cities } from "@/lib/cities";

type Props = {
  params: Promise<{
    countryId: string;
  }>;
};

export default async function CountryPage({
  params,
}: Props) {
  const { countryId } = await params;

  const country = countries.find(
    (country) => country.id === countryId
  );

  if (!country) {
    notFound();
  }

  const countryCities = cities.filter(
    (city) => city.countryId === country.id
  );

  return (
    <DashboardLayout>
      <Link
        href="/passport"
        className="mb-8 inline-flex items-center gap-2 text-white/60 transition hover:text-white"
      >
        ← Back to Passport
      </Link>

      <div className="relative mb-16 h-[420px] overflow-hidden rounded-[32px]">
        <Image
          src={country.image}
          alt={country.name}
          fill
          priority
          sizes="(max-width:768px)100vw,(max-width:1280px)75vw,900px"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute bottom-10 left-10">
          <div className="text-7xl">
            {country.flag}
          </div>

          <h1 className="mt-4 text-6xl font-light">
            {country.name}
          </h1>

          <p className="mt-4 max-w-xl text-lg text-white/80">
            Choose a city to start exploring attractions, food, accommodation and experiences.
          </p>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {countryCities.map((city) => (
          <CityCard
            key={city.id}
            city={city}
          />
        ))}
      </div>
    </DashboardLayout>
  );
}
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import DashboardLayout from "@/components/Dashboard/DashboardLayout";
import FavoriteButton from "@/components/ui/FavoriteButton";
import ImageCard from "@/components/ui/ImageCard";
import Section from "@/components/ui/Section";

import { attractions } from "@/lib/attractions";
import { countries } from "@/lib/countries";
import { cities } from "@/lib/cities";

type Props = {
  params: Promise<{
    countryId: string;
    cityId: string;
  }>;
};

export default async function CityPage({
  params,
}: Props) {
  const { countryId, cityId } = await params;

  const country = countries.find(
    (country) => country.id === countryId
  );

  const city = cities.find(
    (city) =>
      city.countryId === countryId &&
      city.id === cityId
  );

  if (!country || !city) {
    notFound();
  }

  const cityAttractions = attractions.filter(
    (attraction) => attraction.cityId === city.id
  );

  return (
    <DashboardLayout>

      <Link
        href={`/countries/${country.id}`}
        className="mb-8 inline-flex items-center gap-2 text-white/60 transition hover:text-white"
      >
        ← Back to {country.name}
      </Link>

      <div className="relative mb-16 h-[520px] overflow-hidden rounded-[32px]">

        <FavoriteButton
          id={city.id}
          type="city"
        />

        <Image
          src={city.image}
          alt={city.name}
          fill
          priority
          sizes="(max-width:768px)100vw,(max-width:1280px)75vw,900px"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <div className="absolute bottom-10 left-10">

          <p className="text-xl text-white/70">
            {country.flag} {country.name}
          </p>

          <h1 className="mt-3 text-7xl font-light">
            {city.name}
          </h1>

          <p className="mt-5 max-w-2xl text-xl text-white/80">
            {city.description}
          </p>

        </div>

      </div>

      <Section
        title="Overview"
        subtitle="Everything you need to know."
      >

        <div className="grid gap-8 lg:grid-cols-3">

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

            <div className="text-4xl">
              🌤️
            </div>

            <h3 className="mt-5 text-3xl font-light">
              Best Time
            </h3>

            <p className="mt-4 text-white/70">
              {city.season}
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

            <div className="text-4xl">
              💷
            </div>

            <h3 className="mt-5 text-3xl font-light">
              Budget
            </h3>

            <p className="mt-4 text-white/70">
              {city.budget}
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">

            <div className="text-4xl">
              ❤️
            </div>

            <h3 className="mt-5 text-3xl font-light">
              Match
            </h3>

            <p className="mt-4 text-white/70">
              Coming Soon
            </p>

          </div>

        </div>

      </Section>

      <Section
        title="Top Attractions"
        subtitle="The places you shouldn't miss."
        rightText={`${cityAttractions.length} places`}
      >

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {cityAttractions.map((attraction) => (

            <ImageCard
              key={attraction.id}
              id={attraction.id}
              type="attraction"
              href={`/countries/${country.id}/${city.id}/${attraction.id}`}
              image={attraction.image}
              title={attraction.name}
              subtitle={attraction.category}
              description={attraction.description}
            />

          ))}

        </div>

      </Section>

    </DashboardLayout>
  );
}
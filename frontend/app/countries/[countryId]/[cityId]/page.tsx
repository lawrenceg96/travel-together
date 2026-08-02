import Link from "next/link";

import { countries } from "@/lib/countries";
import { cities } from "@/lib/cities";
import { attractions } from "@/lib/attractions";

import HeroImage from "@/components/Shared/HeroImage";
import WishlistButton from "@/components/WishlistButton";


interface Props {
  params: Promise<{
    countryId: string;
    cityId: string;
  }>;
}


export default async function CityPage({
  params,
}: Props) {

  const {
    countryId,
    cityId,
  } = await params;


  const country = countries.find(
    (item) => item.id === countryId
  );


  const city = cities.find(
    (item) => item.id === cityId
  );


  const cityAttractions = attractions.filter(
    (item) => item.cityId === cityId
  );


  if (!country || !city) {
    return (
      <main className="min-h-screen bg-[#07141F] p-10 text-white">
        <h1 className="text-4xl">
          City not found
        </h1>
      </main>
    );
  }


  return (
    <main
      className="
        min-h-screen
        bg-[#07141F]
        p-10
        text-white
      "
    >

      <div className="mx-auto max-w-6xl">


        <HeroImage
          image={city.image}
          title={city.name}
          subtitle={`${country.flag} ${country.name}`}
        />


        <div className="mt-6">
          <WishlistButton
            id={city.id}
            name={city.name}
            type="city"
            image={city.image}
          />
        </div>



        <section
          className="
            mt-10
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
          "
        >

          <h2 className="text-3xl font-light">
            About {city.name}
          </h2>


          <p className="mt-4 max-w-3xl text-white/60">
            {city.description}
          </p>

        </section>



        <section
          className="
            mt-8
            grid
            gap-5
            sm:grid-cols-2
          "
        >

          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
            "
          >

            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Budget
            </p>

            <p className="mt-3 text-3xl font-light">
              {city.budget}
            </p>

          </div>



          <div
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
            "
          >

            <p className="text-xs uppercase tracking-[0.3em] text-white/40">
              Best Season
            </p>

            <p className="mt-3 text-3xl font-light">
              {city.season}
            </p>

          </div>

        </section>



        <section className="mt-12">

          <h2 className="text-4xl font-light">
            Experiences
          </h2>


          <div
            className="
              mt-6
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {cityAttractions.map((attraction) => (

              <Link
                key={attraction.id}
                href={`/countries/${country.id}/${city.id}/${attraction.id}`}
                className="
                  group
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  transition
                  hover:-translate-y-1
                  hover:bg-white/10
                "
              >

                <img
                  src={attraction.image}
                  alt={attraction.name}
                  className="
                    h-48
                    w-full
                    object-cover
                    transition
                    duration-300
                    group-hover:scale-105
                  "
                />


                <div className="p-6">

                  <h3 className="text-xl font-light">
                    {attraction.name}
                  </h3>


                  <p className="mt-2 text-sm text-white/50">
                    {attraction.category}
                  </p>


                  <p className="mt-4 text-sm text-white/60">
                    {attraction.description}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </section>


      </div>

    </main>
  );
}
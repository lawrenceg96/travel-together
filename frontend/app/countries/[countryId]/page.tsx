import Link from "next/link";

import { countries } from "@/lib/countries";
import { cities } from "@/lib/cities";

import HeroImage from "@/components/Shared/HeroImage";
import WishlistButton from "@/components/WishlistButton";


interface Props {
  params: Promise<{
    countryId: string;
  }>;
}


export default async function CountryPage({
  params,
}: Props) {

  const {
    countryId,
  } = await params;


  const country = countries.find(
    (item) => item.id === countryId
  );


  const countryCities = cities.filter(
    (city) => city.countryId === countryId
  );


  if (!country) {
    return (
      <main
        className="
          min-h-screen
          bg-[#07141F]
          p-10
          text-white
        "
      >
        <h1 className="text-4xl">
          Country not found
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

      <div
        className="
          mx-auto
          max-w-6xl
        "
      >

        <HeroImage
          image={country.image}
          title={`${country.flag} ${country.name}`}
          subtitle={`Discover cities, experiences and adventures in ${country.name}`}
        />


        <div className="mt-6">
          <WishlistButton
            id={country.id}
            name={country.name}
            type="country"
            image={country.image}
          />
        </div>



        <section
          className="
            mt-12
            grid
            gap-6
            md:grid-cols-2
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

            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-white/40
              "
            >
              Destination
            </p>


            <h2
              className="
                mt-3
                text-3xl
                font-light
              "
            >
              Explore {country.name}
            </h2>


            <p
              className="
                mt-4
                text-white/60
              "
            >
              Discover cities, landmarks and experiences
              worth visiting together.
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

            <p
              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-white/40
              "
            >
              Planning
            </p>


            <h2
              className="
                mt-3
                text-3xl
                font-light
              "
            >
              Build your trip
            </h2>


            <p
              className="
                mt-4
                text-white/60
              "
            >
              Save places now and create your itinerary later.
            </p>

          </div>

        </section>



        <section className="mt-12">

          <div
            className="
              flex
              items-center
              justify-between
            "
          >

            <h2
              className="
                text-4xl
                font-light
              "
            >
              Cities
            </h2>


            <p className="text-white/40">
              {countryCities.length} destinations
            </p>

          </div>



          <div
            className="
              mt-6
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {countryCities.map((city) => (

              <Link
                key={city.id}
                href={`/countries/${country.id}/${city.id}`}
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
                  src={city.image}
                  alt={city.name}
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

                  <h3
                    className="
                      text-2xl
                      font-light
                    "
                  >
                    {city.name}
                  </h3>


                  <p
                    className="
                      mt-3
                      text-sm
                      text-white/60
                    "
                  >
                    {city.description}
                  </p>


                  <div
                    className="
                      mt-4
                      text-sm
                      text-white/40
                    "
                  >
                    {city.budget} • {city.season}
                  </div>


                </div>

              </Link>

            ))}

          </div>


        </section>


      </div>

    </main>
  );
}
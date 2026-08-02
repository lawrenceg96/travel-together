import { countries } from "@/lib/countries";
import { cities } from "@/lib/cities";
import { attractions } from "@/lib/attractions";

import HeroImage from "@/components/Shared/HeroImage";
import WishlistButton from "@/components/WishlistButton";


interface Props {
  params: Promise<{
    countryId: string;
    cityId: string;
    attractionId: string;
  }>;
}


export default async function AttractionPage({
  params,
}: Props) {

  const {
    countryId,
    cityId,
    attractionId,
  } = await params;


  const country = countries.find(
    (item) => item.id === countryId
  );


  const city = cities.find(
    (item) => item.id === cityId
  );


  const attraction = attractions.find(
    (item) => item.id === attractionId
  );


  if (!country || !city || !attraction) {
    return (
      <main className="min-h-screen bg-[#07141F] p-10 text-white">
        <h1 className="text-4xl">
          Attraction not found
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
          image={attraction.image}
          title={attraction.name}
          subtitle={`${country.flag} ${country.name} · ${city.name}`}
        />


        <div className="mt-6">

          <WishlistButton
            id={attraction.id}
            name={attraction.name}
            type="attraction"
            image={attraction.image}
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

          <p
            className="
              text-xs
              uppercase
              tracking-[0.3em]
              text-white/40
            "
          >
            {attraction.category}
          </p>


          <h2
            className="
              mt-4
              text-3xl
              font-light
            "
          >
            About {attraction.name}
          </h2>


          <p
            className="
              mt-4
              max-w-3xl
              text-white/60
            "
          >
            {attraction.description}
          </p>


        </section>



        <section
          className="
            mt-8
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
              Location
            </p>


            <p className="mt-3 text-xl">
              {city.name}, {country.name}
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
              Category
            </p>


            <p className="mt-3 text-xl">
              {attraction.category}
            </p>

          </div>


        </section>


      </div>

    </main>
  );
}
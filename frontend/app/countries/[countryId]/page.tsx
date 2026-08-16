import Link from "next/link";

import { countries } from "@/lib/countries";
import { cities } from "@/lib/cities";
import { attractions } from "@/lib/attractions";

import {
  getDestinationsByCountry,
} from "@/lib/destinations/destinationDatabase";

import HeroImage from "@/components/Shared/HeroImage";
import WishlistButton from "@/components/WishlistButton";
import SharedDestinationBadge from "@/components/Shared/SharedDestinationBadge";



interface Props {

  params: Promise<{

    countryId:string;

  }>;

}





export default async function CountryPage({

  params,

}: Props){



  const {

    countryId,

  } = await params;





  const country =

    countries.find(

      (item)=>

        item.id === countryId

    );





  if(!country){

    return (

      <main

        className="
          min-h-screen
          bg-[#07141F]
          p-10
          text-white
        "

      >

        Country not found

      </main>

    );

  }







  const destinationCities =

    getDestinationsByCountry(

      countryId

    );






  const existingCities =

    cities.filter(

      (city)=>

        city.countryId === countryId

    );






  const countryCities =

    destinationCities.length > 0

    ?

    destinationCities

    :

    existingCities;







  const cityIds =

    countryCities.map(

      (city)=>

        city.id

    );






  const countryAttractions =

    attractions.filter(

      (attraction)=>

        cityIds.includes(

          attraction.cityId

        )

    );








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

          flagImage={`/images/flags/${country.id}.jpg`}

          title={`${country.flag} ${country.name}`}

          subtitle={`Discover cities, experiences and adventures in ${country.name}`}

        />






        <WishlistButton

          id={country.id}

          name={country.name}

          type="country"

          image={country.image}

        />






        <SharedDestinationBadge

          countryId={country.id}

          countryName={country.name}

        />







        <section

          className="
            mt-12
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-8
          "

        >


          <h2

            className="
              text-4xl
              font-light
            "

          >

            Discover {country.name}

          </h2>



          <p

            className="
              mt-4
              text-white/60
            "

          >

            Explore the top destinations,
            experiences and attractions.

          </p>



        </section>








        <section

          className="
            mt-12
          "

        >



          <div

            className="
              flex
              justify-between
              items-center
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



            <p

              className="
                text-white/40
              "

            >

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



            {

              countryCities.map(

                (city)=>(


                  <Link

                    key={city.id}

                    href={`/countries/${country.id}/${city.id}`}

                    className="
                      overflow-hidden
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/5
                      transition
                      hover:bg-white/10
                    "

                  >




                    {

                      city.image &&

                      <img

                        src={city.image}

                        alt={city.name}

                        className="
                          h-48
                          w-full
                          object-cover
                        "

                      />

                    }






                    <div

                      className="
                        p-6
                      "

                    >



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
                          text-white/60
                        "

                      >

                        {city.description}

                      </p>





                    </div>




                  </Link>


                )

              )

            }



          </div>




        </section>








        {

          countryAttractions.length > 0 &&


          <section

            className="
              mt-16
            "

          >



            <h2

              className="
                text-4xl
                font-light
              "

            >

              ⭐ Experiences & Attractions

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



              {

                countryAttractions.map(

                  (attraction)=>(


                    <Link

                      key={attraction.id}

                      href={`/countries/${country.id}/${attraction.cityId}/${attraction.id}`}

                      className="
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/5
                        overflow-hidden
                      "

                    >


                      <img

                        src={attraction.image}

                        alt={attraction.name}

                        className="
                          h-48
                          w-full
                          object-cover
                        "

                      />



                      <div

                        className="
                          p-6
                        "

                      >

                        <h3

                          className="
                            text-xl
                            font-light
                          "

                        >

                          {attraction.name}

                        </h3>


                        <p

                          className="
                            mt-3
                            text-white/60
                          "

                        >

                          {attraction.description}

                        </p>


                      </div>



                    </Link>


                  )

                )

              }



            </div>



          </section>


        }



      </div>



    </main>

  );

}
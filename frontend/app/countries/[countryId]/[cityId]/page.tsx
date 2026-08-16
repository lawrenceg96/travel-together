import Link from "next/link";

import { countries } from "@/lib/countries";
import { cities } from "@/lib/cities";
import { attractions } from "@/lib/attractions";

import {
  getDestinationById,
} from "@/lib/destinations/destinationDatabase";

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





  const country =

    countries.find(

      (item)=>

        item.id === countryId

    );





  const existingCity =

    cities.find(

      (item)=>

        item.id === cityId

    );





  const destination =

    getDestinationById(

      cityId

    );





  const city =

    existingCity || destination;





  const cityAttractions =

    attractions.filter(

      (item)=>

        item.cityId === cityId

    );





  if(

    !country ||

    !city

  ){

    return (

      <main

        className="
          min-h-screen
          bg-[#07141F]
          p-10
          text-white
        "

      >

        <h1

          className="
            text-4xl
          "

        >

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


      <div

        className="
          mx-auto
          max-w-6xl
        "

      >





        <HeroImage

          image={city.image || "/images/default-city.jpg"}

          title={city.name}

          subtitle={`${country.flag} ${country.name}`}

        />







        <div

          className="
            mt-6
          "

        >

          <WishlistButton

            id={city.id}

            name={city.name}

            type="city"

            image={city.image || ""}

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



          <h2

            className="
              text-3xl
              font-light
            "

          >

            About {city.name}

          </h2>





          <p

            className="
              mt-4
              max-w-3xl
              text-white/60
            "

          >

            {city.description}

          </p>



        </section>









        {

          (

            city.budget ||

            city.season

          )

          &&


          <section

            className="
              mt-8
              grid
              gap-5
              sm:grid-cols-2
            "

          >



            {

              city.budget &&

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

                  Budget

                </p>



                <p

                  className="
                    mt-3
                    text-3xl
                    font-light
                  "

                >

                  {city.budget}

                </p>


              </div>

            }







            {

              city.season &&

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

                  Best Season

                </p>



                <p

                  className="
                    mt-3
                    text-3xl
                    font-light
                  "

                >

                  {city.season}

                </p>


              </div>

            }





          </section>

        }









        {

          destination &&

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

              Travel DNA Match

            </h2>





            <p

              className="
                mt-3
                text-white/50
              "

            >

              This city is connected to these travel experiences.

            </p>







            <div

              className="
                mt-6
                flex
                flex-wrap
                gap-3
              "

            >

              {

                destination.experiences.map(

                  (experience)=>(


                    <span

                      key={experience}

                      className="
                        rounded-full
                        bg-white/10
                        px-4
                        py-2
                        text-sm
                      "

                    >

                      {experience}

                    </span>


                  )

                )

              }

            </div>





            <h3

              className="
                mt-8
                text-2xl
                font-light
              "

            >

              Highlights

            </h3>





            <ul

              className="
                mt-4
                space-y-2
                text-white/60
              "

            >

              {

                destination.highlights.map(

                  (highlight)=>(


                    <li

                      key={highlight}

                    >

                      ⭐ {highlight}

                    </li>


                  )

                )

              }

            </ul>



          </section>

        }









        {

          cityAttractions.length > 0 &&


          <section

            className="
              mt-12
            "

          >



            <h2

              className="
                text-4xl
                font-light
              "

            >

              Experiences & Attractions

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

                cityAttractions.map(

                  (attraction)=>(


                    <Link

                      key={attraction.id}

                      href={`/countries/${country.id}/${city.id}/${attraction.id}`}

                      className="
                        overflow-hidden
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/5
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
                            text-sm
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
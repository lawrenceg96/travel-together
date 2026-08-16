"use client";


import {
  useEffect,
  useMemo,
  useState,
} from "react";


import {
  getSharedCountries,
  getMaybeCountries,
} from "@/lib/destinationComparison";


import {
  countries,
} from "@/lib/countries";


import {
  cities,
} from "@/lib/cities";


import {
  countryContinents,
} from "@/lib/countryContinents";


import {
  getTopCityMatches,
  getCityMatchPercentage,
} from "@/lib/travelDNAMatching";


import {
  travelExperiences,
} from "@/lib/travelExperiences";


import SharedStats from "@/components/SharedWorld/SharedStats";

import SharedTravelStyle from "@/components/SharedWorld/SharedTravelStyle";

import MaybeDestinations from "@/components/SharedWorld/MaybeDestinations";

import InteractiveSharedMap from "@/components/SharedWorld/InteractiveSharedMap";

import ContinentTile from "@/components/SharedWorld/ContinentTile";







export default function SharedWorldPage(){



  const [
    mounted,
    setMounted
  ] = useState(false);




  useEffect(()=>{

    setMounted(true);

  },[]);







  const shared =
    getSharedCountries();



  const maybe =
    getMaybeCountries();





  const cityMatches =
    getTopCityMatches();





  const maximumCityScore =

    cityMatches.length > 0

      ?

      Math.max(

        ...cityMatches.map(

          (city)=>

            city.score

        )

      )

      :

      0;









  const continentGroups =

    useMemo(()=>{


      const grouped:

      Record<string, typeof countries> = {};



      shared.forEach(id=>{


        const country =

          countries.find(

            item =>

              item.id === id

          );



        if(!country){

          return;

        }





        const continent =

          countryContinents[

            country.id

          ];



        if(!continent){

          return;

        }





        if(!grouped[continent]){

          grouped[continent] = [];

        }



        grouped[continent].push(

          country

        );


      });



      return grouped;



    },[shared]);








  if(!mounted){

    return null;

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
          max-w-7xl
        "

      >





        <h1

          className="
            text-6xl
            font-light
          "

        >

          🌍 Your World Together

        </h1>





        <p

          className="
            mt-5
            text-xl
            text-white/50
          "

        >

          The destinations and experiences you discovered together.

        </p>








        <div className="mt-10">


          <SharedStats

            sharedCount={

              shared.length

            }

            maybeCount={

              maybe.length

            }

          />


        </div>








        <SharedTravelStyle />



        <MaybeDestinations />


        


        {

          cityMatches.length > 0 &&


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


            <p

              className="
                text-xs
                uppercase
                tracking-[0.3em]
                text-white/40
              "

            >

              Travel DNA Matches

            </p>





            <h2

              className="
                mt-3
                text-4xl
                font-light
              "

            >

              Places you might love together

            </h2>







            <div

              className="
                mt-8
                grid
                gap-6
                md:grid-cols-2
                lg:grid-cols-3
              "

            >



              {

                cityMatches.map(

                  (match)=>(


                    (()=>{


                      const city =

                        cities.find(

                          item =>

                            item.id === match.cityId

                        );



                      const country =

                        countries.find(

                          item =>

                            item.id === match.countryId

                        );



                      if(!city){

                        return null;

                      }



                      const matchPercentage =

                        getCityMatchPercentage(

                          match.score,

                          maximumCityScore

                        );







                      return (


                        <div

                          key={match.cityId}

                          className="
                            overflow-hidden
                            rounded-3xl
                            border
                            border-white/10
                            bg-white/5
                          "

                        >



                          <img

                            src={city.image}

                            alt={city.name}

                            className="
                              h-48
                              w-full
                              object-cover
                            "

                          />





                          <div className="p-6">



                            <p

                              className="
                                text-xs
                                uppercase
                                tracking-[0.3em]
                                text-white/40
                              "

                            >

                              {country?.name}

                            </p>





                            <h3

                              className="
                                mt-3
                                text-3xl
                                font-light
                              "

                            >

                              {city.name}

                            </h3>






                            <p

                              className="
                                mt-3
                                text-2xl
                                text-emerald-400
                              "

                            >

                              {matchPercentage}% Travel Match

                            </p>





                            <p

                              className="
                                mt-3
                                text-white/60
                              "

                            >

                              {city.description}

                            </p>







                            <div

                              className="
                                mt-6
                              "

                            >


                              <p

                                className="
                                  text-sm
                                  text-white/50
                                "

                              >

                                Because you both love:

                              </p>





                              <div

                                className="
                                  mt-3
                                  flex
                                  flex-wrap
                                  gap-2
                                "

                              >



                                {

                                  match.matchedExperiences.map(

                                    (experienceId)=>(


                                      (()=>{


                                        const experience =

                                          travelExperiences.find(

                                            item =>

                                              item.id === experienceId

                                          );



                                        if(!experience){

                                          return null;

                                        }





                                        return (


                                          <span

                                            key={experienceId}

                                            className="
                                              rounded-full
                                              border
                                              border-white/10
                                              bg-white/5
                                              px-3
                                              py-1
                                              text-xs
                                              text-white/70
                                            "

                                          >

                                            {experience.name}

                                          </span>


                                        );


                                      })()


                                    )

                                  )

                                }


                              </div>


                            </div>






                            <div

                              className="
                                mt-6
                                space-y-1
                                text-sm
                                text-white/50
                              "

                            >

                              <p>

                                📅 Best time: {city.season}

                              </p>


                              <p>

                                💷 Budget: {city.budget}

                              </p>


                            </div>







                          </div>


                        </div>


                      );


                    })()


                  )

                )

              }



            </div>




          </section>


        }









        <div className="mt-10">


          <InteractiveSharedMap />


        </div>









        <section

          className="
            mt-12
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "

        >



          {

            Object.entries(

              continentGroups

            )

            .map(

              ([

                continent,

                continentCountries

              ])=>(


                <ContinentTile

                  key={continent}

                  continent={continent}

                  countries={continentCountries}

                />


              )


            )


          }



        </section>





      </div>



    </main>


  );


}

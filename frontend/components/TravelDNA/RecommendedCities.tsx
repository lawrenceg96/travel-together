"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getTopTravelDNACityMatches,
  TravelDNACityMatch,
} from "@/lib/travelDNACountryMatching";



export default function RecommendedCities(){


  const [

    matches,

    setMatches

  ] = useState<TravelDNACityMatch[]>([]);





  useEffect(()=>{


    setMatches(

      getTopTravelDNACityMatches(6)

    );


  },[]);







  return (

    <section

      className="
        mt-16
        rounded-[45px]
        border
        border-white/10
        bg-white/5
        p-10
      "

    >



      <h2

        className="
          text-4xl
          font-light
        "

      >

        🌍 Recommended Cities

      </h2>





      <p

        className="
          mt-3
          text-white/50
        "

      >

        Cities chosen from countries you both want
        to explore, matched to your shared Travel DNA.

      </p>







      {

        matches.length === 0

        &&

        <p

          className="
            mt-10
            text-white/40
          "

        >

          Complete your country selections and
          Travel DNA questionnaires to see matches.

        </p>

      }







      <div

        className="
          mt-10
          grid
          gap-6
          md:grid-cols-2
        "

      >



        {

          matches.map(

            (city)=>(


              <div

                key={city.cityId}

                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  transition
                  hover:bg-white/10
                "

              >



                <h3

                  className="
                    text-3xl
                    font-light
                  "

                >

                  {formatName(city.cityId)}

                </h3>





                <div

                  className="
                    mt-4
                    text-emerald-400
                    text-xl
                  "

                >

                  {"⭐".repeat(

                    Math.min(
                      city.score,
                      5
                    )

                  )}

                </div>





                <p

                  className="
                    mt-6
                    text-white/50
                  "

                >

                  Matches because you both enjoy:

                </p>





                <div

                  className="
                    mt-4
                    flex
                    flex-wrap
                    gap-2
                  "

                >

                  {

                    city.matchedExperiences.map(

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

                          {formatName(experience)}

                        </span>


                      )

                    )

                  }


                </div>





              </div>


            )

          )

        }



      </div>





    </section>


  );


}







function formatName(

  value:string

){

  return value

    .split("-")

    .map(

      word =>

        word.charAt(0).toUpperCase()

        +

        word.slice(1)

    )

    .join(" ");


}
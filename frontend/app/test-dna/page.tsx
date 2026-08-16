"use client";

import {
  getSharedExperiences,
  getRecommendedCities,
} from "@/lib/travelDNAMatching";



export default function TestDNAPage(){


  const lawrence = [

    {
      experienceId:"temples",
      answer:"yes" as const,
    },

    {
      experienceId:"road-trips",
      answer:"yes" as const,
    },

    {
      experienceId:"aquariums",
      answer:"yes" as const,
    },

    {
      experienceId:"food-markets",
      answer:"yes" as const,
    },

  ];




  const ciara = [

    {
      experienceId:"temples",
      answer:"yes" as const,
    },

    {
      experienceId:"aquariums",
      answer:"yes" as const,
    },

    {
      experienceId:"spa-days",
      answer:"yes" as const,
    },

    {
      experienceId:"food-markets",
      answer:"yes" as const,
    },

  ];






  const shared =

    getSharedExperiences(

      lawrence,

      ciara

    );






const recommendations =
  getRecommendedCities(

    shared,

    [
      "japan",
      "united-states-of-america",
      "italy"

    ]

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
          max-w-5xl
        "

      >



        <h1

          className="
            text-5xl
            font-light
          "

        >

          🌍 Travel DNA Test

        </h1>





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

            Lawrence

          </h2>



          <div className="mt-4 space-y-2">


            {
              lawrence.map(

                item => (

                  <p key={item.experienceId}>

                    ❤️ {item.experienceId}

                  </p>

                )

              )

            }


          </div>


        </section>







        <section

          className="
            mt-6
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

            Ciara

          </h2>



          <div className="mt-4 space-y-2">


            {
              ciara.map(

                item => (

                  <p key={item.experienceId}>

                    ❤️ {item.experienceId}

                  </p>

                )

              )

            }


          </div>


        </section>








        <section

          className="
            mt-6
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

            ❤️ Shared Experiences

          </h2>




          <div className="mt-4 space-y-2">


            {
              shared.map(

                item => (

                  <p key={item}>

                    🌍 {item}

                  </p>

                )

              )

            }


          </div>


        </section>









        <section

          className="
            mt-6
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

            ✈️ Recommended Cities

          </h2>





          <div

            className="
              mt-5
              space-y-4
            "

          >



            {
              recommendations.map(

                city => (


                  <div

                    key={
                      city.city
                    }

                    className="
                      rounded-2xl
                      bg-black/20
                      p-5
                    "

                  >


                    <h3

                      className="
                        text-2xl
                      "

                    >

                      {city.city}

                      ,

                      {" "}

                      {city.countryName}


                    </h3>



                    <p

                      className="
                        mt-2
                        text-emerald-400
                      "

                    >

                      {city.score}% match

                    </p>




                    <p

                      className="
                        mt-3
                        text-white/60
                      "

                    >

                      Matches:

                      {" "}

                      {
                        city.matchedExperiences.join(
                          ", "
                        )
                      }


                    </p>



                  </div>


                )

              )

            }



          </div>



        </section>





      </div>



    </main>

  );

}
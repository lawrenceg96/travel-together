"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  getSharedTravelDNA,
} from "@/lib/travelDNAStorage";

import {
  travelExperiences,
} from "@/lib/travelExperiences";

import RecommendedCities from "@/components/TravelDNA/RecommendedCities";



export default function SharedTravelDNAPage(){


  const [

    shared,

    setShared

  ] = useState<any[]>([]);





  useEffect(()=>{


    setShared(

      getSharedTravelDNA()

    );


  },[]);







  const experiences =

    shared

      .map(

        (item)=>

          travelExperiences.find(

            (experience)=>

              experience.id ===
              item.experienceId

          )

      )

      .filter(Boolean);








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





        <h1

          className="
            text-6xl
            font-light
          "

        >

          🧬 Your Shared Travel DNA

        </h1>





        <p

          className="
            mt-5
            text-xl
            text-white/50
          "

        >

          The experiences you both love exploring together.

        </p>








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

            ❤️ Experiences You Both Love

          </h2>







          {

            experiences.length === 0

            ?

            <p

              className="
                mt-8
                text-white/40
              "

            >

              Complete both questionnaires
              to discover your shared travel style.

            </p>


            :


            <div

              className="
                mt-8
                grid
                gap-6
                md:grid-cols-3
              "

            >


              {

                experiences.map(

                  (experience)=>(


                    <div

                      key={experience!.id}

                      className="
                        rounded-3xl
                        border
                        border-white/10
                        bg-white/5
                        p-8
                      "

                    >


                      <div

                        className="
                          text-4xl
                        "

                      >

                        ❤️

                      </div>





                      <h3

                        className="
                          mt-5
                          text-2xl
                          font-light
                        "

                      >

                        {experience!.name}

                      </h3>





                      <p

                        className="
                          mt-2
                          text-white/50
                        "

                      >

                        {experience!.category}

                      </p>



                    </div>


                  )

                )

              }



            </div>


          }



        </section>








        <RecommendedCities />







      </div>



    </main>

  );


}
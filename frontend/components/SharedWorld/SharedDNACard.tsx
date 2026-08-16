"use client";

import {
  getSharedTravelDNA,
} from "@/lib/travelDNAStorage";

import {
  travelExperiences,
} from "@/lib/travelExperiences";


export default function SharedDNACard(){


  const sharedDNA =
    getSharedTravelDNA();



  const experiences =
    sharedDNA.map(
      (item)=>

        travelExperiences.find(
          (experience)=>
            experience.id === item.experienceId
        )

    )
    .filter(Boolean);




  return (

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

        Shared Travel DNA

      </p>




      <h2

        className="
          mt-3
          text-4xl
          font-light
        "

      >

        ❤️ What you both love

      </h2>




      <p

        className="
          mt-4
          text-white/50
        "

      >

        Experiences that match both of your travel personalities.

      </p>





      <div

        className="
          mt-8
          grid
          gap-4
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
                  bg-black/20
                  p-5
                "

              >

                <h3

                  className="
                    text-xl
                    font-light
                  "

                >

                  {experience!.name}

                </h3>


                <p

                  className="
                    mt-2
                    text-sm
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


    </section>

  );

}
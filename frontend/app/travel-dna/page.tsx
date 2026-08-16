"use client";

import {
  useRouter,
} from "next/navigation";



export default function TravelDNAPage(){


  const router =
    useRouter();



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
          max-w-4xl
        "

      >


        <div

          className="
            rounded-[50px]
            border
            border-white/10
            bg-white/5
            p-12
            text-center
            backdrop-blur-xl
          "

        >


          <div

            className="
              text-7xl
            "

          >

            🧬

          </div>





          <h1

            className="
              mt-8
              text-6xl
              font-light
            "

          >

            Discover Your Travel DNA

          </h1>





          <p

            className="
              mt-6
              text-xl
              text-white/60
            "

          >

            Discover your travel styles,
            find shared passions,
            and uncover the destinations
            you'll love exploring together.

          </p>








          <div

            className="
              mt-12
              grid
              gap-6
              md:grid-cols-3
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

              <div className="text-4xl">

                🌍

              </div>


              <h2

                className="
                  mt-4
                  text-2xl
                  font-light
                "

              >

                Discover

              </h2>


              <p

                className="
                  mt-3
                  text-white/50
                "

              >

                Explore the experiences,
                activities and adventures
                that shape your travel style.

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

              <div className="text-4xl">

                ❤️

              </div>


              <h2

                className="
                  mt-4
                  text-2xl
                  font-light
                "

              >

                Connect

              </h2>


              <p

                className="
                  mt-3
                  text-white/50
                "

              >

                Compare your travel styles
                and discover the experiences
                you share together.

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

              <div className="text-4xl">

                ✈️

              </div>


              <h2

                className="
                  mt-4
                  text-2xl
                  font-light
                "

              >

                Explore

              </h2>


              <p

                className="
                  mt-3
                  text-white/50
                "

              >

                Discover cities and countries
                that fit your shared travel style.

              </p>


            </div>



          </div>









          <button

            onClick={()=>
              router.push(
                "/travel-dna/questionnaire"
              )
            }

            className="
              mt-12
              rounded-full
              bg-emerald-600
              px-12
              py-5
              text-xl
              transition
              hover:bg-emerald-500
            "

          >

            Begin Questionnaire →

          </button>








        </div>



      </div>



    </main>

  );

}
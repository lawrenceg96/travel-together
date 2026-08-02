"use client";


import {
  useEffect,
  useState,
} from "react";


import Link from "next/link";


import {
  getSharedCountries,
} from "@/lib/destinationComparison";


import {
  countries,
} from "@/lib/countries";





export default function InteractiveSharedMap(){


  const [
    mounted,
    setMounted
  ] = useState(false);



  useEffect(()=>{

    setMounted(true);

  },[]);





  if(!mounted){

    return null;

  }




  const sharedIds =
    getSharedCountries();




  const sharedCountries =
    countries.filter(
      (country)=>
        sharedIds.includes(
          country.id
        )
    );





  return (

    <section
      className="
        mt-16
        rounded-[50px]
        border
        border-white/10
        bg-gradient-to-br
        from-white/10
        to-white/5
        p-10
        text-white
        overflow-hidden
      "
    >


      <div>

        <h2
          className="
            text-5xl
            font-light
          "
        >
          🗺️ Our Shared World Map
        </h2>



        <p
          className="
            mt-4
            text-white/50
          "
        >
          Countries that you both chose as places to explore together.
        </p>

      </div>






      <div
        className="
          mt-10
          min-h-[500px]
          rounded-[40px]
          border
          border-white/10
          bg-[#081923]
          p-8
          relative
        "
      >



        <div
          className="
            absolute
            inset-0
            opacity-20
            bg-[radial-gradient(circle_at_center,_#2E6F57,_transparent_60%)]
          "
        />





        {
          sharedCountries.length === 0

          ?

          <div
            className="
              relative
              flex
              h-full
              min-h-[400px]
              items-center
              justify-center
              text-white/40
            "
          >

            Complete your destination choices to reveal your shared map.

          </div>



          :



          <div
            className="
              relative
              grid
              gap-6
              md:grid-cols-3
            "
          >


            {
              sharedCountries.map(
                (country)=>(


                  <Link

                    key={country.id}

                    href={`/countries/${country.id}`}

                    className="
                      rounded-3xl
                      border
                      border-[#2E6F57]
                      bg-[#2E6F57]/20
                      p-6
                      transition
                      hover:scale-105
                      hover:bg-[#2E6F57]/30
                    "

                  >


                    <div
                      className="
                        text-6xl
                      "
                    >

                      {country.flag}

                    </div>




                    <h3
                      className="
                        mt-5
                        text-2xl
                        font-light
                      "
                    >

                      {country.name}

                    </h3>




                    <p
                      className="
                        mt-3
                        text-[#8dd8ae]
                      "
                    >

                      ❤️ Shared Destination

                    </p>




                    <p
                      className="
                        mt-4
                        text-sm
                        text-white/40
                      "
                    >

                      Explore cities & attractions →

                    </p>



                  </Link>


                )

              )

            }


          </div>


        }



      </div>



    </section>

  );

}
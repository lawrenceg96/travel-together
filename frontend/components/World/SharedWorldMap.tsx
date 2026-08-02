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





export default function SharedWorldMap(){


  const [mounted,setMounted] =
    useState(false);



  useEffect(()=>{

    setMounted(true);

  },[]);





  if(!mounted){

    return (

      <section
        className="
          mt-12
          rounded-[40px]
          border
          border-[#2E6F57]
          bg-[#2E6F57]/10
          p-8
          text-white
        "
      >

        <h2
          className="
            text-4xl
            font-light
          "
        >
          🌍 Our Shared World Map
        </h2>

      </section>

    );

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
        mt-12
        rounded-[40px]
        border
        border-[#2E6F57]
        bg-[#2E6F57]/10
        p-8
        text-white
      "
    >


      <h2
        className="
          text-4xl
          font-light
        "
      >
        🌍 Our Shared World Map
      </h2>



      <p
        className="
          mt-3
          text-white/50
        "
      >
        Countries you both want to explore together.
      </p>






      {
        sharedCountries.length === 0

        ?

        <p
          className="
            mt-8
            text-white/40
          "
        >
          Complete your destination choices to reveal your shared world.
        </p>


        :


        <div
          className="
            mt-8
            grid
            gap-6
            md:grid-cols-4
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
                    border-white/10
                    bg-white/5
                    p-6
                    text-left
                    transition
                    hover:scale-105
                    hover:bg-white/10
                  "

                >


                  <div
                    className="
                      text-5xl
                    "
                  >
                    {country.flag}
                  </div>



                  <h3
                    className="
                      mt-4
                      text-xl
                      font-light
                    "
                  >
                    {country.name}
                  </h3>



                  <p
                    className="
                      mt-2
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
                    Explore cities and attractions →
                  </p>


                </Link>


              )

            )

          }


        </div>

      }



    </section>

  );

}
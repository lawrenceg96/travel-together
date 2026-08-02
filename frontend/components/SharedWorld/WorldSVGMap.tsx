"use client";


import {
  useEffect,
  useState,
} from "react";


import {
  getSharedCountries,
} from "@/lib/destinationComparison";


import {
  countries,
} from "@/lib/countries";


import Link from "next/link";





export default function WorldSVGMap(){


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
        rounded-[40px]
        border
        border-white/10
        bg-[#06131d]
        p-8
      "
    >


      <h2
        className="
          mb-8
          text-3xl
          font-light
          text-white
        "
      >
        🌍 Shared Destination Map
      </h2>




      <div
        className="
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
                  text-white
                  transition
                  hover:scale-105
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
                    text-2xl
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

                  ❤️ Shared

                </p>


              </Link>

            )

          )

        }


      </div>


    </section>

  );

}
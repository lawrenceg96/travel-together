"use client";

import {
  useEffect,
  useState,
} from "react";


import {
  getSharedCountries,
  getMaybeCountries,
  getRejectedCountries,
} from "@/lib/destinationComparison";


import {
  countries,
} from "@/lib/countries";


import SharedStats from "@/components/SharedWorld/SharedStats";


import InteractiveSharedMap from "@/components/SharedWorld/InteractiveSharedMap";





function getCountry(id:string){

  return countries.find(
    (country)=>
      country.id === id
  );

}





function CountryCard({

  id,

  type,

}:{

  id:string;

  type:
    | "shared"
    | "maybe"
    | "rejected";

}){


  const country =
    getCountry(id);



  if(!country){

    return null;

  }



  return (

    <div
      className={`
        rounded-3xl
        border
        p-6
        transition
        hover:scale-105

        ${
          type === "shared"

          ?

          `
          border-[#2E6F57]
          bg-[#2E6F57]/20
          `

          :

          `
          border-white/10
          bg-white/5
          `

        }

      `}
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
          font-light
        "
      >

        {country.name}

      </h3>




      {
        type === "shared" && (

          <p
            className="
              mt-3
              text-[#8dd8ae]
            "
          >

            ❤️ Both chose this

          </p>

        )
      }





      {
        type === "maybe" && (

          <p
            className="
              mt-3
              text-white/50
            "
          >

            💭 Maybe Later

          </p>

        )
      }





      {
        type === "rejected" && (

          <p
            className="
              mt-3
              text-white/30
            "
          >

            🚫 Not For Now

          </p>

        )
      }


    </div>

  );

}







function Section({

  title,

  description,

  items,

  type,

}:{

  title:string;

  description:string;

  items:string[];

  type:
    | "shared"
    | "maybe"
    | "rejected";

}){


  return (

    <section
      className="
        mt-16
      "
    >


      <h2
        className="
          text-4xl
          font-light
        "
      >

        {title}

      </h2>



      <p
        className="
          mt-3
          text-white/50
        "
      >

        {description}

      </p>




      <div
        className="
          mt-8
          grid
          gap-6
          md:grid-cols-4
        "
      >


        {
          items.length === 0

          ?

          <p
            className="
              text-white/40
            "
          >
            None yet
          </p>


          :


          items.map(
            (id)=>(

              <CountryCard

                key={id}

                id={id}

                type={type}

              />

            )

          )

        }


      </div>


    </section>

  );

}








export default function SharedWorldPage(){


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





  const shared =
    getSharedCountries();



  const maybe =
    getMaybeCountries();



  const rejected =
    getRejectedCountries();






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

          🌍 Our Shared World

        </h1>



        <p
          className="
            mt-5
            text-xl
            text-white/50
          "
        >

          Your journey together starts here.

        </p>






        <SharedStats

          sharedCount={
            shared.length
          }

          maybeCount={
            maybe.length
          }

        />






        <InteractiveSharedMap />







        <Section

          title="❤️ Shared Destinations"

          description="Places you both want to experience."

          items={shared}

          type="shared"

        />







        <Section

          title="💭 Maybe Later"

          description="Ideas worth keeping for the future."

          items={maybe}

          type="maybe"

        />







        <Section

          title="🚫 Not For Now"

          description="Places neither of you selected."

          items={rejected}

          type="rejected"

        />



      </div>


    </main>

  );

}
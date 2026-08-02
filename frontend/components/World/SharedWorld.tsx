"use client";


import {
  getSharedCountries,
} from "@/lib/destinationComparison";


import {
  countries,
} from "@/lib/countries";




export default function SharedWorld(){


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
        mt-10
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
        ❤️ Our Shared World
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
            gap-5
            md:grid-cols-3
          "
        >

          {
            sharedCountries.map(
              (country)=>(

                <div
                  key={country.id}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-6
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
                    ❤️ Shared destination
                  </p>


                </div>

              )
            )

          }

        </div>

      }


    </section>

  );

}
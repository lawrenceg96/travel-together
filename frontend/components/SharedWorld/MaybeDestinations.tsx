"use client";


import {
  getMaybeCountries,
} from "@/lib/destinationComparison";


import {
  countries,
} from "@/lib/countries";







export default function MaybeDestinations(){



  const maybeCountries =

    getMaybeCountries();





  const destinations =

    maybeCountries.map(

      (id)=>

        countries.find(

          (country)=>

            country.id === id

        )

    )

    .filter(Boolean);







  if(destinations.length === 0){

    return null;

  }







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

        Maybe List

      </p>






      <h2

        className="
          mt-3
          text-4xl
          font-light
        "

      >

        💭 Worth Discussing

      </h2>






      <p

        className="
          mt-4
          text-white/50
        "

      >

        Places one of you loves and the other might be convinced by.

      </p>








      <div

        className="
          mt-8
          grid
          gap-5
          md:grid-cols-2
          lg:grid-cols-3
        "

      >



        {

          destinations.map(

            (country)=>(


              <div

                key={country!.id}

                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-black/20
                  p-6
                "

              >



                <div

                  className="
                    text-4xl
                  "

                >

                  🌍

                </div>





                <h3

                  className="
                    mt-4
                    text-2xl
                    font-light
                  "

                >

                  {country!.name}

                </h3>





                <p

                  className="
                    mt-3
                    text-sm
                    text-white/50
                  "

                >

                  Maybe worth adding to your future adventures.

                </p>





              </div>


            )

          )

        }



      </div>





    </section>


  );


}
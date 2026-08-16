"use client";


import {
  getSharedTravelDNA,
} from "@/lib/travelDNAStorage";


import {
  travelExperiences,
} from "@/lib/travelExperiences";





const categoryIcons: Record<string,string> = {

  Culture: "🏛️",

  History: "🏰",

  Adventure: "🥾",

  Wildlife: "🦁",

  Relaxation: "🌊",

  Food: "🍜",

  Shopping: "🛍️",

};






export default function SharedTravelStyle(){



  const sharedDNA =

    getSharedTravelDNA();





  const experiences =

    sharedDNA

      .map(

        (item)=>

          travelExperiences.find(

            (experience)=>

              experience.id === item.experienceId

          )

      )

      .filter(Boolean);





  const categories =

    experiences.reduce(

      (

        result,

        experience

      )=>{


        if(!experience){

          return result;

        }



        if(!result[experience.category]){

          result[experience.category] = [];

        }



        result[experience.category].push(

          experience

        );



        return result;


      },

      {} as Record<string, typeof travelExperiences>

    );









  if(experiences.length === 0){


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

        Shared Travel DNA

      </p>





      <h2

        className="
          mt-3
          text-4xl
          font-light
        "

      >

        ❤️ Your Shared Travel Style

      </h2>





      <p

        className="
          mt-4
          text-white/50
        "

      >

        The experiences that define the adventures you both enjoy.

      </p>








      <div

        className="
          mt-8
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-3
        "

      >



        {

          Object.entries(categories)

            .map(

              ([

                category,

                items

              ])=>(



                <div

                  key={category}

                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-black/20
                    p-6
                  "

                >



                  <h3

                    className="
                      text-2xl
                      font-light
                    "

                  >

                    {categoryIcons[category] || "🌍"}

                    {" "}

                    {category}

                  </h3>






                  <div

                    className="
                      mt-5
                      flex
                      flex-wrap
                      gap-2
                    "

                  >


                    {

                      items.map(

                        (item)=>(


                          <span

                            key={item.id}

                            className="
                              rounded-full
                              border
                              border-white/10
                              bg-white/5
                              px-3
                              py-1
                              text-xs
                              text-white/70
                            "

                          >

                            {item.name}

                          </span>


                        )

                      )

                    }


                  </div>




                </div>


              )


            )


        }



      </div>






    </section>


  );


}
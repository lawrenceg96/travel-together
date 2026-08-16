"use client";


import {
  getMaybeCountries,
} from "@/lib/destinationComparison";


import {
  getTravelDNAResponses,
} from "@/lib/travelDNAStorage";


import {
  countries,
} from "@/lib/countries";


import {
  travelExperiences,
} from "@/lib/travelExperiences";


import {
  countryExperienceMapping,
} from "@/lib/countryExperienceMapping";







type DNAResponse = {

  person:
    | "Lawrence"
    | "Ciara";

  experienceId:string;

  answer:
    | "love"
    | "enjoy"
    | "maybe"
    | "not-really"
    | "no";

};








export default function MaybeDestinations(){



  const maybeCountries =

    getMaybeCountries();





  const responses =

    getTravelDNAResponses();





  const lawrence =

    responses.filter(

      (item)=>

        item.person === "Lawrence"

    );





  const ciara =

    responses.filter(

      (item)=>

        item.person === "Ciara"

    );








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









  function getExperiencesForPerson(

    countryId:string,

    personResponses:DNAResponse[],

    answers:string[]

  ){



    const experiences =

      countryExperienceMapping[countryId] || [];






    return experiences

      .filter(

        (experienceId)=>

          personResponses.some(

            (response)=>

              response.experienceId === experienceId

              &&

              answers.includes(

                response.answer

              )

          )

      )

      .map(

        (experienceId)=>

          travelExperiences.find(

            (experience)=>

              experience.id === experienceId

          )

      )

      .filter(Boolean);


  }









  function ExperiencePills({

    items,

  }:{

    items:any[];

  }){



    if(items.length === 0){

      return (

        <p className="text-sm text-white/30">

          Nothing matched yet

        </p>

      );

    }





    return (

      <div

        className="
          mt-3
          flex
          flex-wrap
          gap-2
        "

      >

        {

          items.map(

            (experience)=>(


              <span

                key={experience.id}

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

                {experience.name}

              </span>


            )

          )

        }


      </div>

    );


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

        Destinations where your travel styles are different, but there may be something worth exploring together.

      </p>








      <div

        className="
          mt-8
          grid
          gap-6
          lg:grid-cols-2
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




                <h3

                  className="
                    text-3xl
                    font-light
                  "

                >

                  🌍 {country!.name}

                </h3>









                <div className="mt-6">


                  <p className="text-sm text-white/50">

                    ❤️ Lawrence loves:

                  </p>


                  <ExperiencePills

                    items={

                      getExperiencesForPerson(

                        country!.id,

                        lawrence,

                        [
                          "love",
                          "enjoy"
                        ]

                      )

                    }

                  />


                </div>








                <div className="mt-6">


                  <p className="text-sm text-white/50">

                    ❤️ Ciara loves:

                  </p>


                  <ExperiencePills

                    items={

                      getExperiencesForPerson(

                        country!.id,

                        ciara,

                        [
                          "love",
                          "enjoy"
                        ]

                      )

                    }

                  />


                </div>








                <div className="mt-6">


                  <p className="text-sm text-white/50">

                    🤔 Lawrence is unsure about:

                  </p>


                  <ExperiencePills

                    items={

                      getExperiencesForPerson(

                        country!.id,

                        lawrence,

                        [
                          "maybe",
                          "not-really"
                        ]

                      )

                    }

                  />


                </div>








                <div className="mt-6">


                  <p className="text-sm text-white/50">

                    🤔 Ciara is unsure about:

                  </p>


                  <ExperiencePills

                    items={

                      getExperiencesForPerson(

                        country!.id,

                        ciara,

                        [
                          "maybe",
                          "not-really"
                        ]

                      )

                    }

                  />


                </div>







              </div>


            )

          )

        }



      </div>





    </section>


  );


}
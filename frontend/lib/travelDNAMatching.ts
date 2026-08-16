import {
  getSharedTravelDNA,
  getTravelDNAResponses,
} from "@/lib/travelDNAStorage";


import {
  cityExperiences,
  CityExperience,
} from "@/lib/cityExperiences";







export type CityMatch = {

  cityId: string;

  countryId: string;

  score: number;

  matchedExperiences: string[];

};








function getExperienceScore(

  answer: string

){


  switch(answer){


    case "love":

      return 3;


    case "enjoy":

      return 2;


    case "maybe":

      return 1;


    default:

      return 0;


  }


}









export function getCityMatches():

CityMatch[] {



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





  const matches =

    cityExperiences.map(

      (city: CityExperience)=>{



        let score = 0;


        const matchedExperiences:string[] = [];






        city.experiences.forEach(

          (experience)=>{



            const lawrenceAnswer =

              lawrence.find(

                (item)=>

                  item.experienceId === experience

              );





            const ciaraAnswer =

              ciara.find(

                (item)=>

                  item.experienceId === experience

              );







            if(

              lawrenceAnswer

              &&

              ciaraAnswer

            ){





              const lawrenceScore =

                getExperienceScore(

                  lawrenceAnswer.answer

                );





              const ciaraScore =

                getExperienceScore(

                  ciaraAnswer.answer

                );







              if(

                lawrenceScore > 0

                &&

                ciaraScore > 0

              ){



                score +=

                  lawrenceScore +

                  ciaraScore;



                matchedExperiences.push(

                  experience

                );


              }




            }



          }

        );







        return {

          cityId:

            city.cityId,


          countryId:

            city.countryId,


          score,


          matchedExperiences,

        };



      }

    );








  return matches

    .filter(

      (city)=>

        city.score > 0

    )

    .sort(

      (a,b)=>

        b.score - a.score

    );



}









export function getTopCityMatches(

  limit:number = 5

){



  return getCityMatches()

    .slice(

      0,

      limit

    );


}









export function getCityMatchPercentage(

  score:number,

  maxScore:number

){



  if(maxScore === 0){

    return 0;

  }




  return Math.round(

    (

      score /

      maxScore

    )

    *

    100

  );


}









// Compatibility for older test-dna page

export function getSharedExperiences(

  lawrence:any[],

  ciara:any[]

){


  const shared:any[] = [];




  lawrence.forEach(

    (item)=>{


      const match =

        ciara.find(

          (other)=>

            other.experienceId === item.experienceId

            &&

            other.answer === item.answer

        );



      if(match){

        shared.push(item);

      }


    }

  );




  return shared;


}









// Compatibility for older test-dna page

export function getRecommendedCities(

  shared:any[],

  countries?:string[]

){



  const sharedExperienceIds =

    shared.map(

      (item)=>

        item.experienceId

    );







  return cityExperiences

    .map(

      (city:CityExperience)=>{


        const matchedExperiences =

          city.experiences.filter(

            (experience)=>

              sharedExperienceIds.includes(

                experience

              )

          );





        return {


          city:

            city.cityId,



          countryName:

            city.countryId,



          score:

            matchedExperiences.length * 20,



          matchedExperiences,



        };


      }

    )

    .filter(

      (city)=>

        city.score > 0

    )

    .filter(

      (city)=>

        !countries ||

        countries.includes(

          city.countryName

        )

    )

    .sort(

      (a,b)=>

        b.score - a.score

    );


}
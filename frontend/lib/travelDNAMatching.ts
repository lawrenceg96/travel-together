import {
  getSharedTravelDNA,
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







export function getCityMatches():

CityMatch[] {


  const sharedDNA =

    getSharedTravelDNA();





  const sharedExperienceIds =

    sharedDNA.map(

      (item)=>

        item.experienceId

    );







  const matches =

    cityExperiences.map(

      (city: CityExperience)=>{


        const matched =

          city.experiences.filter(

            (experience)=>

              sharedExperienceIds.includes(

                experience

              )

          );





        return {

          cityId:

            city.cityId,


          countryId:

            city.countryId,


          score:

            matched.length,


          matchedExperiences:

            matched,

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

      (city: CityExperience)=>{


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
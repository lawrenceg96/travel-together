import {
  getSharedTravelDNA,
} from "@/lib/travelDNAStorage";

import {
  cityExperiences,
  CityExperience,
} from "@/lib/cityExperiences";

import {
  getSharedCountries,
} from "@/lib/destinationComparison";



export type TravelDNACityMatch = {

  cityId: string;

  countryId: string;

  score: number;

  matchedExperiences: string[];

};





export function getTravelDNACityMatches():


TravelDNACityMatch[] {


  const sharedCountries =

    getSharedCountries();




  const sharedDNA =

    getSharedTravelDNA();




  const sharedExperienceIds =

    sharedDNA.map(

      (item)=>

        item.experienceId

    );






  const possibleCities =

    cityExperiences.filter(

      (city)=>

        sharedCountries.includes(

          city.countryId

        )

    );







  const matches =

    possibleCities.map(

      (city: CityExperience)=>{



        const matchedExperiences =

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

            matchedExperiences.length,


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







export function getTopTravelDNACityMatches(

  limit:number = 10

){


  return getTravelDNACityMatches()

    .slice(

      0,

      limit

    );


}
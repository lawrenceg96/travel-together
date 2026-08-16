import {
  DestinationCity,
} from "@/lib/destinationTypes";


import {
  allDestinations,
} from "@/lib/destinations/index";




export const destinationDatabase: DestinationCity[] = [

  ...allDestinations,

];





export function getDestinationsByCountry(

  countryId:string

){

  return destinationDatabase.filter(

    (destination)=>

      destination.countryId === countryId

  );

}





export function getDestinationById(

  cityId:string

){

  return destinationDatabase.find(

    (destination)=>

      destination.id === cityId

  );

}
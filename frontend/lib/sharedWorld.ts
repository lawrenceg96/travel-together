import {
  countries,
} from "@/lib/countries";


import {
  getSharedCountries,
} from "@/lib/destinationComparison";





export function getSharedCountryObjects(){

  const sharedIds =
    getSharedCountries();



  return countries.filter(
    (country)=>
      sharedIds.includes(
        country.id
      )
  );

}





export function isSharedCountry(
  countryId:string
){

  const sharedIds =
    getSharedCountries();


  return sharedIds.includes(
    countryId
  );

}
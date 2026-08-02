"use client";


import {
  getDestinationPreferences,
} from "@/lib/destinationStorage";



export function getSharedCountries() {


  const preferences =
    getDestinationPreferences();



  const lawrence =
    preferences.find(
      (item) =>
        item.person === "Lawrence"
    );



  const ciara =
    preferences.find(
      (item) =>
        item.person === "Ciara"
    );



  if (
    !lawrence ||
    !ciara
  ) {

    return [];

  }



  return lawrence.countries
    .filter(
      (country) =>

        country.answer === "yes"

        &&

        ciara.countries.some(
          (ciaraCountry) =>

            ciaraCountry.countryId ===
            country.countryId

            &&

            ciaraCountry.answer === "yes"

        )

    )
    .map(
      (country) =>
        country.countryId
    );

}





export function getMaybeCountries() {


  const preferences =
    getDestinationPreferences();



  const lawrence =
    preferences.find(
      (item) =>
        item.person === "Lawrence"
    );



  const ciara =
    preferences.find(
      (item) =>
        item.person === "Ciara"
    );



  if (
    !lawrence ||
    !ciara
  ) {

    return [];

  }




  return lawrence.countries
    .filter(
      (country) => {


        const ciaraChoice =
          ciara.countries.find(
            (item) =>
              item.countryId ===
              country.countryId
          );



        return (

          country.answer === "yes"

          &&

          ciaraChoice?.answer !== "yes"

        );


      }

    )
    .map(
      (country) =>
        country.countryId
    );

}





export function getRejectedCountries() {


  const preferences =
    getDestinationPreferences();



  const lawrence =
    preferences.find(
      (item) =>
        item.person === "Lawrence"
    );



  const ciara =
    preferences.find(
      (item) =>
        item.person === "Ciara"
    );



  if (
    !lawrence ||
    !ciara
  ) {

    return [];

  }





  return lawrence.countries
    .filter(
      (country) => {


        const ciaraChoice =
          ciara.countries.find(
            (item) =>
              item.countryId ===
              country.countryId
          );



        return (

          country.answer === "no"

          &&

          ciaraChoice?.answer === "no"

        );


      }

    )
    .map(
      (country) =>
        country.countryId
    );

}
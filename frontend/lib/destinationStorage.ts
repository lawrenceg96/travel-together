"use client";


export type Person =
  | "Lawrence"
  | "Ciara";


export type DestinationAnswer =
  | "yes"
  | "no";



export type DestinationChoice = {

  countryId: string;

  answer: DestinationAnswer;

};



export type DestinationPreferences = {

  person: Person;

  countries: DestinationChoice[];

};




const STORAGE_KEY =
  "travel-destination-preferences";





export function getDestinationPreferences()
: DestinationPreferences[] {


  if (
    typeof window === "undefined"
  ) {

    return [];

  }



  const saved =
    localStorage.getItem(
      STORAGE_KEY
    );



  if (!saved) {

    return [];

  }



  return JSON.parse(saved);

}






export function saveDestinationPreferences(
  preferences: DestinationPreferences
) {


  const current =
    getDestinationPreferences();



  const filtered =
    current.filter(
      (item) =>
        item.person !== preferences.person
    );



  localStorage.setItem(

    STORAGE_KEY,

    JSON.stringify(
      [
        ...filtered,
        preferences,
      ]
    )

  );


}






export function getPersonDestinations(
  person: Person
) {


  const preferences =
    getDestinationPreferences();



  return (
    preferences.find(
      (item) =>
        item.person === person
    )
    ?.countries
    ||
    []
  );

}






export function getSharedDestinations() {


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
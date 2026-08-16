"use client";


export type Person =
  | "Lawrence"
  | "Ciara";



export type TravelIdentityChoice = {

  id: string;

  selected: boolean;

};




export type TravelIdentityPreferences = {

  person: Person;

  choices: TravelIdentityChoice[];

  completed: boolean;

};




const STORAGE_KEY =
  "travel-identity-preferences";





export function getTravelIdentityPreferences()
: TravelIdentityPreferences[] {


  if(
    typeof window === "undefined"
  ){

    return [];

  }



  const saved =
    localStorage.getItem(
      STORAGE_KEY
    );



  if(!saved){

    return [];

  }



  return JSON.parse(saved);


}







export function saveTravelIdentityPreferences(
  preferences: TravelIdentityPreferences
){


  const current =
    getTravelIdentityPreferences();




  const filtered =
    current.filter(
      item =>
        item.person !== preferences.person
    );




  localStorage.setItem(

    STORAGE_KEY,

    JSON.stringify(
      [
        ...filtered,
        preferences
      ]
    )

  );


}






export function hasCompletedTravelIdentity(
  person: Person
){


  const preferences =
    getTravelIdentityPreferences();



  return Boolean(

    preferences.find(
      item =>
        item.person === person
        &&
        item.completed
    )

  );


}
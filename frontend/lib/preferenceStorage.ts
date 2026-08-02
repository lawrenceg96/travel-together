"use client";


export type Person =
  | "Lawrence"
  | "Ciara";


export type Rating =
  | "love"
  | "maybe"
  | "no";



export type PreferenceChoice = {

  id: string;

  rating: Rating;

};



export type UserPreferences = {

  person: Person;

  choices: PreferenceChoice[];

};




export function getPreferences(): UserPreferences[] {


  if (
    typeof window === "undefined"
  ) {

    return [];

  }



  const saved =
    localStorage.getItem(
      "travel-preferences"
    );



  return saved
    ? JSON.parse(saved)
    : [];

}




export function savePreferences(
  preferences: UserPreferences
) {


  const current =
    getPreferences();



  const filtered =
    current.filter(
      (item) =>
        item.person !== preferences.person
    );



  localStorage.setItem(

    "travel-preferences",

    JSON.stringify(
      [
        ...filtered,
        preferences,
      ]
    )

  );


}
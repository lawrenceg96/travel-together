"use client";

import {
  getPreferences,
} from "@/lib/preferenceStorage";

import {
  preferenceCategories,
} from "@/lib/preferences";



function getAllOptions() {

  return preferenceCategories.flatMap(
    (category) =>
      category.options.map(
        (option) => option.id
      )
  );

}



function getPersonChoice(
  choices: any[],
  id: string
) {

  return choices.find(
    (choice) =>
      choice.id === id
  );

}




export function getJointChoices() {

  const preferences =
    getPreferences();


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


  if (!lawrence || !ciara) {
    return [];
  }



  return getAllOptions().filter(
    (id) => {

      const l =
        getPersonChoice(
          lawrence.choices,
          id
        );


      const c =
        getPersonChoice(
          ciara.choices,
          id
        );



      return (
        l?.rating === "love" &&
        c?.rating === "love"
      );

    }
  );

}





export function getMaybeLaterChoices() {

  const preferences =
    getPreferences();


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


  if (!lawrence || !ciara) {
    return [];
  }



  return getAllOptions().filter(
    (id) => {


      const l =
        getPersonChoice(
          lawrence.choices,
          id
        );


      const c =
        getPersonChoice(
          ciara.choices,
          id
        );



      const lRating =
        l?.rating;


      const cRating =
        c?.rating;



      // Remove true joint choices
      if (
        lRating === "love" &&
        cRating === "love"
      ) {

        return false;

      }



      // Lawrence likes it,
      // Ciara is open or hasn't answered
      if (
        (
          lRating === "love" ||
          lRating === "maybe"
        )
        &&
        (
          cRating === undefined ||
          cRating === "maybe"
        )
      ) {

        return true;

      }



      // Ciara likes it,
      // Lawrence is open or hasn't answered
      if (
        (
          cRating === "love" ||
          cRating === "maybe"
        )
        &&
        (
          lRating === undefined ||
          lRating === "maybe"
        )
      ) {

        return true;

      }



      return false;

    }
  );

}





export function getNotInterestedChoices() {

  const preferences =
    getPreferences();


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


  if (!lawrence || !ciara) {
    return [];
  }



  return getAllOptions().filter(
    (id) => {


      const l =
        getPersonChoice(
          lawrence.choices,
          id
        );


      const c =
        getPersonChoice(
          ciara.choices,
          id
        );



      return (

        (!l || l.rating === "no")

        &&

        (!c || c.rating === "no")

      );

    }
  );

}
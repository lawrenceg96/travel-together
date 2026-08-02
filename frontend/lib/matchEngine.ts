"use client";


import {
  destinations,
  Destination,
} from "@/lib/destinations";


import {
  getJointChoices,
} from "@/lib/preferenceComparison";



const preferenceTags: Record<string,string[]> = {


  beach: [
    "beach",
    "relaxation",
    "islands",
  ],


  museums: [
    "culture",
    "history",
    "art",
  ],


  food: [
    "food",
  ],


  hiking: [
    "hiking",
    "nature",
    "adventure",
  ],


  adventure: [
    "adventure",
    "nature",
  ],


  "city-break": [
    "city-break",
    "culture",
  ],


  spas: [
    "relaxation",
    "wellness",
  ],


  zoos: [
    "wildlife",
    "nature",
  ],


};



function convertPreferences(
  choices:string[]
) {


  return choices.flatMap(
    (choice)=>
      preferenceTags[choice] || []
  );

}




export function calculateMatch(
  destination:Destination
) {


  const jointChoices =
    getJointChoices();



  const desiredTags =
    convertPreferences(
      jointChoices
    );



  if (
    desiredTags.length === 0
  ) {

    return {
      score:0,
      matches:[],
    };

  }



  const matches =
    destination.tags.filter(
      (tag)=>
        desiredTags.includes(tag)
    );



  const score =
    Math.round(
      (
        matches.length /
        desiredTags.length
      )
      *
      100
    );



  return {

    score,

    matches,

  };


}



export function getDestinationMatches() {


  return destinations
    .map(
      (destination)=>({

        ...destination,

        ...calculateMatch(
          destination
        ),

      })
    )
    .sort(
      (a,b)=>
        b.score-a.score
    );

}
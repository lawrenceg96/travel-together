"use client";

import {
  TravelDNAResponse,
} from "@/lib/travelDNAQuestions";


const STORAGE_KEY =
  "travel-dna-responses";




export function saveTravelDNAResponses(

  responses: TravelDNAResponse[]

){

  try {

    localStorage.setItem(

      STORAGE_KEY,

      JSON.stringify(
        responses
      )

    );

  }

  catch(error){

    console.error(
      "Unable to save Travel DNA:",
      error
    );

  }

}







export function getTravelDNAResponses():

TravelDNAResponse[] {


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





  try {

    return JSON.parse(saved);

  }

  catch(error){

    console.error(
      "Unable to read Travel DNA:",
      error
    );

    return [];

  }


}







export function getSharedTravelDNA(){


  const responses =

    getTravelDNAResponses();





  const lawrence =

    responses.filter(

      (response)=>

        response.person === "Lawrence"

    );





  const ciara =

    responses.filter(

      (response)=>

        response.person === "Ciara"

    );





  return lawrence.filter(

    (lawrenceAnswer)=>

      ciara.some(

        (ciaraAnswer)=>

          ciaraAnswer.experienceId ===
          lawrenceAnswer.experienceId

          &&

          ciaraAnswer.answer ===
          lawrenceAnswer.answer

          &&

          (

            lawrenceAnswer.answer === "love"

            ||

            lawrenceAnswer.answer === "enjoy"

          )

      )

  );


}
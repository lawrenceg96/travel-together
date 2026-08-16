"use client";


import {
  getTravelDNAResponses,
} from "@/lib/travelDNAStorage";



export function getTravelDNACompatibility(){


  const responses =
    getTravelDNAResponses();



  const lawrence =
    responses.filter(

      item =>
        item.person === "Lawrence"

    );



  const ciara =
    responses.filter(

      item =>
        item.person === "Ciara"

    );



  if(
    lawrence.length === 0 ||
    ciara.length === 0
  ){

    return 0;

  }





  let score = 0;



  let maximum = 0;





  lawrence.forEach(

    (lawrenceAnswer)=>{


      const ciaraAnswer =

        ciara.find(

          item =>

            item.experienceId ===
            lawrenceAnswer.experienceId

        );



      if(!ciaraAnswer){

        return;

      }





      maximum += 10;





      if(

        lawrenceAnswer.answer === "love"

        &&

        ciaraAnswer.answer === "love"

      ){

        score += 10;

      }



      else if(

        lawrenceAnswer.answer === "enjoy"

        &&

        ciaraAnswer.answer === "enjoy"

      ){

        score += 7;

      }



      else if(

        lawrenceAnswer.answer === ciaraAnswer.answer

      ){

        score += 5;

      }



    }

  );






  if(maximum === 0){

    return 0;

  }




  return Math.round(

    (score / maximum) * 100

  );


}
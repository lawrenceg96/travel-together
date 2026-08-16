"use client";

import {
  useState,
} from "react";

import {
  travelDNAQuestions,
  TravelDNAAnswer,
  TravelDNAResponse,
} from "@/lib/travelDNAQuestions";

import {
  saveTravelDNAResponses,
  getTravelDNAResponses,
} from "@/lib/travelDNAStorage";

import {
  setCurrentPlanner,
} from "@/lib/userStorage";

import TravelDNAComplete from "@/components/TravelDNA/TravelDNAComplete";



type Planner =
  | "Lawrence"
  | "Ciara";




const answerOptions: {
  value: TravelDNAAnswer;
  label: string;
  emoji: string;
}[] = [

  {
    value: "love",
    label: "Love it",
    emoji: "🔥",
  },

  {
    value: "enjoy",
    label: "Would enjoy it",
    emoji: "❤️",
  },

  {
    value: "maybe",
    label: "Maybe",
    emoji: "🤔",
  },

  {
    value: "not-really",
    label: "Probably not",
    emoji: "😐",
  },

  {
    value: "no",
    label: "Not for us",
    emoji: "❌",
  },

];






export default function TravelDNAQuestionnaire(){


  const [
    person,
    setPerson
  ] = useState<Planner | null>(null);



  const [
    questionIndex,
    setQuestionIndex
  ] = useState(0);



  const [
    finished,
    setFinished
  ] = useState(false);



  const [
    complete,
    setComplete
  ] = useState(false);







  function choosePerson(

    planner: Planner

  ){

    setCurrentPlanner(
      planner
    );


    setPerson(
      planner
    );


  }









  if(!person){


    return (

      <main

        className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-[#07141F]
          text-white
          p-10
        "

      >


        <div

          className="
            max-w-xl
            rounded-[40px]
            border
            border-white/10
            bg-white/5
            p-10
            text-center
          "

        >


          <div className="text-6xl">

            🧬

          </div>




          <h1

            className="
              mt-6
              text-4xl
              font-light
            "

          >

            Travel DNA

          </h1>




          <p

            className="
              mt-4
              text-white/50
            "

          >

            Choose traveller profile

          </p>





          <div

            className="
              mt-10
              flex
              justify-center
              gap-5
            "

          >



            <button

              onClick={()=>choosePerson("Lawrence")}

              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-8
                py-4
                transition
                hover:bg-white/10
              "

            >

              Lawrence

            </button>





            <button

              onClick={()=>choosePerson("Ciara")}

              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-8
                py-4
                transition
                hover:bg-white/10
              "

            >

              Ciara

            </button>



          </div>


        </div>


      </main>

    );

  }








  const question =
    travelDNAQuestions[questionIndex];







  function answerQuestion(

    answer: TravelDNAAnswer

  ){


    const response: TravelDNAResponse = {


      person,


      experienceId:

        question.id,


      answer,


    };







    const existing =

      getTravelDNAResponses();







    const filtered =

      existing.filter(

        (item)=>

          !(
            item.person === person
            &&
            item.experienceId === question.id
          )

      );








    const updated = [

      ...filtered,

      response,

    ];






    saveTravelDNAResponses(

      updated

    );







    if(

      questionIndex <

      travelDNAQuestions.length - 1

    ){


      setQuestionIndex(

        previous => previous + 1

      );


      return;


    }








    setFinished(true);








    const otherPerson: Planner =

      person === "Lawrence"

      ?

      "Ciara"

      :

      "Lawrence";







    const otherAnswers =

      updated.filter(

        (item)=>

          item.person === otherPerson

      );







    setComplete(

      otherAnswers.length ===

      travelDNAQuestions.length

    );


  }












  if(finished){


    return (

      <TravelDNAComplete

        person={person}

        complete={complete}

        waitingFor={

          person === "Lawrence"

          ?

          "Ciara"

          :

          "Lawrence"

        }

      />

    );


  }









  return (

    <main

      className="
        min-h-screen
        bg-[#07141F]
        p-10
        text-white
      "

    >


      <div

        className="
          mx-auto
          max-w-3xl
        "

      >



        <h1

          className="
            text-5xl
            font-light
          "

        >

          🧬 {person}'s Travel DNA

        </h1>





        <p

          className="
            mt-4
            text-white/50
          "

        >

          Discover the experiences that shape your perfect trips.

        </p>








        <div

          className="
            mt-12
            rounded-[45px]
            border
            border-white/10
            bg-white/5
            p-10
          "

        >




          <p

            className="
              text-white/50
            "

          >

            Question {questionIndex + 1} / {travelDNAQuestions.length}

          </p>






          <h2

            className="
              mt-6
              text-3xl
              font-light
            "

          >

            {question.question}

          </h2>







          <div

            className="
              mt-10
              grid
              gap-4
            "

          >



            {

              answerOptions.map(

                (option)=>(


                  <button

                    key={option.value}

                    onClick={()=>answerQuestion(option.value)}

                    className="
                      rounded-3xl
                      border
                      border-white/10
                      bg-white/5
                      p-5
                      text-left
                      transition
                      hover:bg-white/10
                    "

                  >


                    <span className="text-2xl">

                      {option.emoji}

                    </span>



                    <span className="ml-4">

                      {option.label}

                    </span>



                  </button>


                )

              )

            }



          </div>


        </div>


      </div>


    </main>

  );


}
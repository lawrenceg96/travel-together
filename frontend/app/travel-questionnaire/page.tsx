"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

import { countries } from "@/lib/countries";
import { isCountryAllowed } from "@/lib/countryFilters";
import { countryContinents } from "@/lib/countryContinents";
import { travelPriority } from "@/lib/travelPriority";

import {
  getActiveUser,
  getUsers,
  User,
} from "@/lib/users";

import {
  saveDestinationPreferences,
  getDestinationPreferences,
  DestinationAnswer,
} from "@/lib/destinationStorage";

import PassportComplete from "@/components/Passport/PassportComplete";



export default function PassportPage() {


  const router = useRouter();



  const [user, setUser] =
    useState<User | null>(null);



  const [continentIndex, setContinentIndex] =
    useState(0);



  const [countryIndex, setCountryIndex] =
    useState(0);



  const [showContinent, setShowContinent] =
    useState(true);



  const [answers, setAnswers] =
    useState<
      Record<string, DestinationAnswer>
    >({});



  const [complete, setComplete] =
    useState(false);

  
  const [bothComplete, setBothComplete] =
  useState(false);


  const groupedCountries =
    useMemo(() => {


      const grouped:
        Record<string, typeof countries> = {};



      countries

        .filter(country =>
          isCountryAllowed(
            country.id
          )
        )

        .forEach(country => {


          const continent =
            countryContinents[
              country.id
            ];



          if(!continent){
            return;
          }



          if(!grouped[continent]){

            grouped[continent] = [];

          }



          grouped[continent].push(
            country
          );


        });





      Object.keys(grouped)
        .forEach(continent => {


          grouped[continent].sort(
            (a,b)=>{


              const aIndex =
                travelPriority.indexOf(
                  a.id
                );


              const bIndex =
                travelPriority.indexOf(
                  b.id
                );



              return (

                (aIndex === -1 ? 9999 : aIndex)

                -

                (bIndex === -1 ? 9999 : bIndex)

              );


            }
          );


        });




      return grouped;


    }, []);







  const continents =
    Object.keys(
      groupedCountries
    );



  const currentContinent =
    continents[
      continentIndex
    ];



  const currentCountries =
    groupedCountries[
      currentContinent
    ] ?? [];



  const currentCountry =
    currentCountries[
      countryIndex
    ];







  useEffect(() => {


    const active =
      getActiveUser();



    const users =
      getUsers();



    const selected =
      users.find(
        item =>
          item.id === active
      );



    if(selected){

      setUser(selected);

    }


  }, []);







  useEffect(() => {


    setShowContinent(true);



    const timer =
      setTimeout(() => {

        setShowContinent(false);

      },2100);



    return () =>
      clearTimeout(timer);



  },[
    continentIndex
  ]);







function finishQuestionnaire(
  finalAnswers:
  Record<string, DestinationAnswer>
){

  if(!user){
    return;
  }



  saveDestinationPreferences({

    person:
      user.name as
      "Lawrence" | "Ciara",


    countries:

      Object.entries(
        finalAnswers
      )
      .map(
        ([
          countryId,
          answer
        ]) => ({

          countryId,

          answer,

        })

      ),


    completed:true,

  });




  const updated =
    getDestinationPreferences();



  const lawrence =
    updated.find(
      item =>
        item.person === "Lawrence"
    );



  const ciara =
    updated.find(
      item =>
        item.person === "Ciara"
    );




  if(
    lawrence &&
    ciara
  ){

    setBothComplete(true);

  }



  setComplete(true);


}







  function answerCountry(
    answer: DestinationAnswer
  ){


    if(!currentCountry){
      return;
    }



    const updatedAnswers = {

      ...answers,

      [currentCountry.id]:
        answer,

    };



    setAnswers(
      updatedAnswers
    );



    setTimeout(() => {


      if(
        countryIndex <
        currentCountries.length - 1
      ){


        setCountryIndex(
          countryIndex + 1
        );


      }


      else if(
        continentIndex <
        continents.length - 1
      ){


        setContinentIndex(
          continentIndex + 1
        );


        setCountryIndex(0);


      }


      else {


        finishQuestionnaire(
          updatedAnswers
        );


      }



    },350);



  }

    function buttonStyle(
    option: DestinationAnswer
  ){


    const selected =
      currentCountry &&
      answers[currentCountry.id] === option;



    if(
      selected &&
      option === "yes"
    ){

      return `
        bg-emerald-600
        border-emerald-500
        text-white
      `;

    }



    if(
      selected &&
      option === "maybe"
    ){

      return `
        bg-yellow-600
        border-yellow-500
        text-white
      `;

    }



    if(
      selected &&
      option === "no"
    ){

      return `
        bg-red-600
        border-red-500
        text-white
      `;

    }



    return `
      border-white/20
      hover:bg-white/10
      text-white
    `;


  }







  function continentTitle(){

    if(currentContinent === "Caribbean"){

      return "The Caribbean";

    }


    return currentContinent;

  }








  if(!user){

    return (

      <main
        className="
          min-h-screen
          flex
          items-center
          justify-center
          text-white
        "
      >

        Loading...

      </main>

    );

  }







  if(complete){


    const loved =
      Object.values(answers)
      .filter(
        answer =>
          answer === "yes"
      )
      .length;



    const maybe =
      Object.values(answers)
      .filter(
        answer =>
          answer === "maybe"
      )
      .length;




return (

  <PassportComplete

    name={user.name}

    loved={loved}

    maybe={maybe}

    complete={bothComplete}

    showTravelDNA={bothComplete}

    waitingFor={
      user.name === "Lawrence"
      ? "Ciara"
      : "Lawrence"
    }

    onStartTravelDNA={() =>
      router.push(
        "/travel-dna"
      )
    }

    onContinue={() =>
      router.push(
        "/shared-world"
      )
    }

  />

);


  }








  return (

    <main
      className="
        min-h-screen
        flex
        items-center
        justify-center
        text-white
      "
    >


      <AnimatePresence mode="wait">


        {
          showContinent ?


          (

            <motion.div

              key={currentContinent}

              initial={{
                opacity:0,
                scale:0.85
              }}

              animate={{
                opacity:1,
                scale:1
              }}

              exit={{
                opacity:0,
                scale:1.15
              }}

              transition={{
                duration:0.8
              }}


              className="
                rounded-[45px]
                border
                border-white/10
                bg-white/5
                px-20
                py-16
                text-center
                backdrop-blur-xl
              "

            >


              <p
                className="
                  uppercase
                  tracking-[0.5em]
                  text-sm
                  text-white/40
                "
              >

                Discovering

              </p>



              <h1
                className="
                  mt-8
                  text-7xl
                  font-light
                "
              >

                {continentTitle()}

              </h1>



              <p
                className="
                  mt-6
                  text-white/50
                "
              >

                {currentCountries.length}

                {" "}
                destinations to explore

              </p>



            </motion.div>


          )



          :



          (

            <motion.div

              key={
                currentCountry?.id
              }

              initial={{
                opacity:0,
                y:50
              }}

              animate={{
                opacity:1,
                y:0
              }}

              exit={{
                opacity:0,
                y:-50
              }}

              transition={{
                duration:0.6
              }}


              className="
                w-full
                max-w-xl
                rounded-[45px]
                border
                border-white/10
                bg-white/5
                p-12
                text-center
                backdrop-blur-xl
              "

            >


              <p
                className="
                  text-sm
                  uppercase
                  tracking-[0.4em]
                  text-white/40
                "
              >

                {continentTitle()}

              </p>





              <p
                className="
                  mt-4
                  text-white/60
                "
              >

                Hi {user.name}

              </p>






              <div className="mt-10">


                <div
                  className="
                    text-8xl
                  "
                >

                  {currentCountry.flag}

                </div>




                <h1
                  className="
                    mt-6
                    text-5xl
                    font-light
                  "
                >

                  {currentCountry.name}

                </h1>


              </div>







              <p
                className="
                  mt-8
                  text-white/50
                "
              >

                {
                  currentCountries.length -
                  countryIndex -
                  1
                }

                {" "}
                countries remaining

              </p>







              <div
                className="
                  mt-10
                  flex
                  justify-center
                  gap-4
                "
              >



                {
                  (
                    [
                      "yes",
                      "maybe",
                      "no"
                    ] as DestinationAnswer[]
                  )
                  .map(option => (


                    <button

                      key={option}

                      onClick={() =>
                        answerCountry(option)
                      }


                      className={`
                        rounded-full
                        border
                        px-8
                        py-3
                        transition
                        ${buttonStyle(option)}
                      `}

                    >

                      {
                        option
                        .charAt(0)
                        .toUpperCase()
                        +
                        option.slice(1)
                      }

                    </button>


                  ))

                }



              </div>




            </motion.div>


          )


        }



      </AnimatePresence>


    </main>

  );


}
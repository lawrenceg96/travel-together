"use client";

import { useState } from "react";

import {
  countries,
} from "@/lib/countries";

import {
  countryRegions,
  Region,
} from "@/lib/countryRegions";

import CountryCard from "@/components/Destinations/CountryCard";

import RegionCard from "@/components/Destinations/RegionCard";

import {
  saveDestinationPreferences,
  DestinationChoice,
  Person,
} from "@/lib/destinationStorage";



export default function DestinationsPage() {


  const [person,setPerson] =
    useState<Person | null>(null);


  const [region,setRegion] =
    useState<Region | null>(null);


  const [current,setCurrent] =
    useState(0);


  const [answers,setAnswers] =
    useState<DestinationChoice[]>([]);


  const [completedRegions,setCompletedRegions] =
    useState<string[]>([]);




  function choosePerson(
    name:Person
  ){

    setPerson(name);

  }





  function chooseRegion(
    selected:Region
  ){

    setRegion(selected);

    setCurrent(0);

    setAnswers([]);

  }





  function answerCountry(
    answer:"yes"|"no"
  ){


    if(!region) return;



    const regionCountries =
      countries.filter(
        (country)=>
          region.countries.includes(
            country.id
          )
      );



    const country =
      regionCountries[current];



    const newAnswer = {

      countryId:country.id,

      answer,

    };



    const updatedAnswers = [

      ...answers,

      newAnswer,

    ];



    setAnswers(
      updatedAnswers
    );





    if(
      current <
      regionCountries.length - 1
    ){


      setTimeout(()=>{

        setCurrent(
          previous =>
            previous + 1
        );

      },500);



    }
    else {


      if(person){

        saveDestinationPreferences({

          person,

          countries:
            updatedAnswers,

          completed:
            true,

        });

      }



      setCompletedRegions(
        previous => [

          ...previous,

          region.id,

        ]
      );



      setRegion(null);


    }


  }





  if(!person){


    return (

      <main className="
        min-h-screen
        bg-[#07141F]
        p-10
        text-white
      ">

        <div className="
          mx-auto
          max-w-xl
          text-center
        ">


          <h1 className="
            text-5xl
            font-light
          ">
            🌍 Destination Picker
          </h1>


          <p className="
            mt-5
            text-white/50
          ">
            Who is choosing destinations?
          </p>



          <div className="
            mt-10
            flex
            justify-center
            gap-5
          ">


            <button
              onClick={() =>
                choosePerson("Lawrence")
              }
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-8
                py-4
              "
            >
              ❤️ Lawrence
            </button>



            <button
              onClick={() =>
                choosePerson("Ciara")
              }
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-8
                py-4
              "
            >
              ❤️ Ciara
            </button>


          </div>


        </div>

      </main>

    );

  }





  if(!region){


    return (

      <main className="
        min-h-screen
        bg-[#07141F]
        p-10
        text-white
      ">


        <div className="
          mx-auto
          max-w-6xl
        ">


          <h1 className="
            text-center
            text-5xl
            font-light
          ">
            🌍 Where would you like to explore first?
          </h1>


          <p className="
            mt-5
            text-center
            text-white/50
          ">
            Choose a continent
          </p>




          <div className="
            mt-12
            grid
            gap-6
            md:grid-cols-3
          ">


            {countryRegions.map(
              (item)=>(

                <RegionCard

                  key={item.id}

                  region={item}

                  completed={
                    completedRegions.includes(
                      item.id
                    )
                  }

                  onClick={()=>{

                    if(
                      completedRegions.includes(
                        item.id
                      )
                    ){
                      return;
                    }


                    chooseRegion(item);

                  }}

                />

              )
            )}


          </div>


        </div>


      </main>

    );

  }






  const regionCountries =
    countries.filter(
      (country)=>
        region.countries.includes(
          country.id
        )
    );



  const country =
    regionCountries[current];





  return (

    <main className="
      min-h-screen
      bg-[#07141F]
      p-10
      text-white
    ">


      <div className="
        mx-auto
        max-w-5xl
      ">


        <p className="
          text-center
          text-white/50
        ">

          {region.emoji}

          {" "}

          {region.name}

        </p>



        <h1 className="
          mt-4
          text-center
          text-4xl
          font-light
        ">

          {person}'s Choices

        </h1>



        <p className="
          mt-5
          text-center
          text-white/40
        ">

          Country {current + 1}

          {" / "}

          {regionCountries.length}

        </p>




        <div className="mt-12">

          <CountryCard

            key={country.id}

            country={country}

            onAnswer={
              answerCountry
            }

          />

        </div>


      </div>


    </main>

  );

}
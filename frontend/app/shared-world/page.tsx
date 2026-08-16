"use client";

import {
  useEffect,
  useMemo,
  useState,
} from "react";

import {
  getSharedCountries,
  getMaybeCountries,
} from "@/lib/destinationComparison";

import {
  countries,
} from "@/lib/countries";

import {
  countryContinents,
} from "@/lib/countryContinents";

import SharedStats from "@/components/SharedWorld/SharedStats";

import InteractiveSharedMap from "@/components/SharedWorld/InteractiveSharedMap";

import ContinentTile from "@/components/SharedWorld/ContinentTile";






export default function SharedWorldPage(){


  const [mounted,setMounted] =
    useState(false);



  useEffect(()=>{

    setMounted(true);

  },[]);




  const shared =
    getSharedCountries();



  const maybe =
    getMaybeCountries();





  const continentGroups =
    useMemo(()=>{


      const grouped:
      Record<string, typeof countries> = {};



      shared.forEach(id=>{


        const country =
          countries.find(
            item =>
              item.id === id
          );



        if(!country){
          return;
        }



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



      return grouped;



    },[shared]);





  if(!mounted){

    return null;

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
          max-w-7xl
        "
      >



        <h1
          className="
            text-6xl
            font-light
          "
        >

          🌍 Your World Together

        </h1>



        <p
          className="
            mt-5
            text-xl
            text-white/50
          "
        >

          The destinations you both discovered.

        </p>




        <div
          className="
            mt-10
          "
        >

          <SharedStats

            sharedCount={
              shared.length
            }

            maybeCount={
              maybe.length
            }

          />

        </div>






        <div className="mt-10">

          <InteractiveSharedMap />

        </div>






        <section
          className="
            mt-12
            grid
            gap-6
            md:grid-cols-2
            xl:grid-cols-3
          "
        >


          {
            Object.entries(
              continentGroups
            )
            .map(
              ([
                continent,
                continentCountries
              ])=>(


                <ContinentTile

                  key={continent}

                  continent={continent}

                  countries={
                    continentCountries
                  }

                />


              )

            )

          }



        </section>






      </div>


    </main>

  );


}
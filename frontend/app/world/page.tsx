"use client";


import WorldMap from "@/components/World/WorldMap";

import SharedWorldMap from "@/components/World/SharedWorldMap";



export default function WorldPage() {


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
            text-5xl
            font-light
          "
        >
          🌍 World Explorer
        </h1>



        <p
          className="
            mt-4
            text-white/50
          "
        >
          Explore countries, cities and attractions together.
        </p>




        <section
          className="
            mt-10
          "
        >

          <WorldMap />

        </section>





        <section
          className="
            mt-16
          "
        >

          <SharedWorldMap />

        </section>



      </div>


    </main>

  );

}
"use client";


import {
  getTravelDNACompatibility,
} from "@/lib/travelDNACompatibility";



export default function TravelDNACompatibility(){


  const score =
    getTravelDNACompatibility();




  return (

    <section

      className="
        mt-12
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-8
        text-center
      "

    >


      <p

        className="
          text-xs
          uppercase
          tracking-[0.3em]
          text-white/40
        "

      >

        Couple Travel DNA

      </p>




      <h2

        className="
          mt-5
          text-7xl
          font-light
        "

      >

        {score}%

      </h2>




      <p

        className="
          mt-3
          text-xl
          text-white/60
        "

      >

        Travel compatibility

      </p>


    </section>

  );


}
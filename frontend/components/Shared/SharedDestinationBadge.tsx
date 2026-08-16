"use client";

import { useEffect, useState } from "react";

import {
  getSharedCountries,
} from "@/lib/destinationComparison";


interface Props {
  countryId: string;
  countryName: string;
}



export default function SharedDestinationBadge({
  countryId,
  countryName,
}: Props) {


  const [
    shared,
    setShared
  ] = useState(false);



  useEffect(() => {


    const sharedCountries =
      getSharedCountries();



    setShared(
      sharedCountries.includes(
        countryId
      )
    );


  }, [countryId]);





  if (!shared) {

    return null;

  }





  return (

    <div
      className="
        mt-6
        rounded-3xl
        border
        border-[#2E6F57]
        bg-[#2E6F57]/20
        p-6
      "
    >

      <p
        className="
          text-xs
          uppercase
          tracking-[0.3em]
          text-white/50
        "
      >

        Shared Destination

      </p>



      <h2
        className="
          mt-3
          text-3xl
          font-light
        "
      >

        ❤️ Both selected {countryName}

      </h2>


    </div>

  );

}
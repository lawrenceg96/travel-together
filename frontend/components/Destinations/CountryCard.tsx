"use client";

import { useState } from "react";


export default function CountryCard({
  country,
  onAnswer,
}: {
  country: any;

  onAnswer: (
    answer: "yes" | "no"
  ) => void;

}) {


  const [animation, setAnimation] =
    useState("");



  function answer(
    choice: "yes" | "no"
  ) {


    setAnimation(
      choice === "yes"
        ? "animate-yes"
        : "animate-no"
    );


    setTimeout(() => {

      onAnswer(choice);

    }, 500);


  }





  return (

    <div
      className={`
        mx-auto
        max-w-md
        rounded-[40px]
        border
        border-white/10
        bg-white/5
        p-8
        text-white
        backdrop-blur-xl

        transition-all
        duration-500

        ${animation}

      `}
    >


      <div
        className="
          text-center
        "
      >


        <div
          className="
            text-7xl
          "
        >

          {country.flag}

        </div>




        <h1
          className="
            mt-6
            text-5xl
            font-light
          "
        >

          {country.name}

        </h1>




        <p
          className="
            mt-5
            text-white/50
          "
        >

          Would you like to travel here?

        </p>




        <div
          className="
            mt-8
            flex
            justify-center
            gap-5
          "
        >



          <button

            onClick={() =>
              answer("yes")
            }

            className="
              rounded-full
              border
              border-[#2E6F57]
              bg-[#2E6F57]/20
              px-8
              py-4
              transition
              hover:bg-[#2E6F57]/40
              hover:scale-105
            "

          >

            ❤️ Yes

          </button>





          <button

            onClick={() =>
              answer("no")
            }

            className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-8
              py-4
              transition
              hover:bg-white/10
              hover:scale-105
            "

          >

            ❌ No

          </button>



        </div>



      </div>



    </div>

  );

}
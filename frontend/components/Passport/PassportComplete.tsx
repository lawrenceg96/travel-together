"use client";

import { motion } from "framer-motion";


interface Props {

  name: string;

  loved: number;

  maybe: number;

  waitingFor?: string;

  complete?: boolean;

  showTravelDNA?: boolean;

  onContinue: () => void;

  onStartTravelDNA?: () => void;

}





export default function PassportComplete({

  name,

  loved,

  maybe,

  waitingFor,

  complete,

  showTravelDNA,

  onContinue,

  onStartTravelDNA,

}: Props) {



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


  <motion.div

    initial={{
      opacity:0,
      scale:0.85
    }}

    animate={{
      opacity:1,
      scale:1
    }}

    transition={{
      duration:1.2
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



    <div
      className="
        text-6xl
      "
    >

      {
        complete
        ? "🌍"
        : "✈️"
      }

    </div>





    <h1
      className="
        mt-8
        text-5xl
        font-light
      "
    >

      Ciara & Lawrence's

    </h1>



    <h2
      className="
        mt-3
        text-3xl
        font-light
      "
    >

      Travel Passport

    </h2>






    <p
      className="
        mt-8
        text-xl
        text-white/70
      "
    >

      {
        complete
        ? "Your Shared World is ready"
        : `${name}'s journey is complete`
      }

    </p>








    <div
      className="
        mt-10
        grid
        grid-cols-2
        gap-4
      "
    >


      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-6
        "
      >

        <p
          className="
            text-3xl
          "
        >

          ❤️

        </p>


        <p
          className="
            mt-3
            text-2xl
          "
        >

          {loved}

        </p>


        <p
          className="
            text-sm
            text-white/50
          "
        >

          Loved

        </p>


      </div>





      <div
        className="
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-6
        "
      >

        <p
          className="
            text-3xl
          "
        >

          🤔

        </p>


        <p
          className="
            mt-3
            text-2xl
          "
        >

          {maybe}

        </p>


        <p
          className="
            text-sm
            text-white/50
          "
        >

          Maybe

        </p>


      </div>


    </div>








    {
      waitingFor &&

      <p
        className="
          mt-10
          text-white/50
        "
      >

        Waiting for {waitingFor} to complete theirs...

      </p>

    }









    {
      complete &&

      <p
        className="
          mt-10
          text-white/70
        "
      >

        Your next adventure
        starts here.

      </p>

    }









    {
      showTravelDNA &&

      <div

        className="
          mt-10
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-6
        "

      >

        <div className="text-4xl">

          🧬

        </div>


        <h3

          className="
            mt-4
            text-2xl
            font-light
          "

        >

          Discover Your Travel DNA

        </h3>



        <p

          className="
            mt-3
            text-white/60
          "

        >

          Find out what experiences you both
          would love creating together.

        </p>




        <button

          onClick={onStartTravelDNA}

          className="
            mt-6
            rounded-full
            bg-purple-600
            px-8
            py-3
            transition
            hover:bg-purple-500
          "

        >

          Start Travel DNA →

        </button>



      </div>

    }









    <button

      onClick={onContinue}

      className="
        mt-10
        rounded-full
        bg-emerald-600
        px-10
        py-4
        transition
        hover:bg-emerald-500
      "

    >

      {
        complete
        ? "Explore Shared World →"
        : "Continue"
      }

    </button>





  </motion.div>


</main>

);

}
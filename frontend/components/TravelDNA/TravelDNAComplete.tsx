"use client";

import {
  motion,
} from "framer-motion";

import {
  useRouter,
} from "next/navigation";



interface Props {

  person: string;

  complete: boolean;

  waitingFor?: string;

  onContinue?: () => void;

}



export default function TravelDNAComplete({

  person,

  complete,

  waitingFor,

  onContinue,

}: Props){


  const router =
    useRouter();





  function continueAction(){


    if(onContinue){

      onContinue();

      return;

    }



    if(complete){

      router.push(
        "/shared-world"
      );

    }

    else{

      router.push(
        "/dashboard"
      );

    }


  }






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
          duration:1
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
        "

      >


        <div className="text-7xl">

          🧬

        </div>




        <h1

          className="
            mt-8
            text-5xl
            font-light
          "

        >

          Travel DNA

        </h1>





        <p

          className="
            mt-6
            text-xl
            text-white/70
          "

        >

          {

            complete

            ?

            "Your Shared Travel DNA is ready"

            :

            `${person}'s Travel DNA is complete`

          }


        </p>






        {

          !complete && waitingFor &&

          <p

            className="
              mt-6
              text-white/50
            "

          >

            Waiting for {waitingFor} to discover theirs...

          </p>

        }







        {

          complete &&

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

              ❤️ 🌍 ✈️

            </div>


            <p

              className="
                mt-4
                text-white/70
              "

            >

              Your shared experiences
              and dream destinations
              are ready to explore.

            </p>


          </div>

        }







        <button

          onClick={continueAction}

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

            ?

            "Explore Shared Travel DNA →"

            :

            "Return to Dashboard"

          }


        </button>





      </motion.div>


    </main>

  );

}
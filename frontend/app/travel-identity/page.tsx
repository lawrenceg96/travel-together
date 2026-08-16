"use client";

import {
  useEffect,
  useState,
} from "react";

import { useRouter } from "next/navigation";

import {
  motion,
  AnimatePresence,
} from "framer-motion";


import {
  travelIdentityQuestions,
} from "@/lib/travelIdentityQuestions";


import {
  saveTravelIdentityPreferences,
} from "@/lib/travelIdentityStorage";


import {
  getActiveUser,
  getUsers,
  User,
} from "@/lib/users";





export default function TravelIdentityPage(){


  const router = useRouter();



  const [user,setUser] =
    useState<User | null>(null);



  const [started,setStarted] =
    useState(false);



  const [questionIndex,setQuestionIndex] =
    useState(0);



  const [selected,setSelected] =
    useState<string[]>([]);



  const [complete,setComplete] =
    useState(false);






  useEffect(()=>{


    const active =
      getActiveUser();



    const users =
      getUsers();



    const found =
      users.find(
        item =>
          item.id === active
      );



    if(found){

      setUser(found);

    }



  },[]);








  const question =
    travelIdentityQuestions[
      questionIndex
    ];







  function toggleOption(id:string){


    if(selected.includes(id)){


      setSelected(

        selected.filter(
          item =>
            item !== id
        )

      );


    }


    else {


      setSelected([

        ...selected,

        id

      ]);


    }


  }







  function next(){


    if(
      questionIndex <
      travelIdentityQuestions.length - 1
    ){


      setQuestionIndex(
        questionIndex + 1
      );



    }


    else {


      finish();


    }


  }








  function finish(){


    if(!user){

      return;

    }




    saveTravelIdentityPreferences({

      person:
        user.name as
        "Lawrence" | "Ciara",


      choices:

        selected.map(
          id => ({

            id,

            selected:true

          })

        ),



      completed:true,

    });



    setComplete(true);


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
            scale:0.8
          }}

          animate={{
            opacity:1,
            scale:1
          }}

          className="
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
              text-7xl
            "
          >

            🌍

          </div>




          <h1
            className="
              mt-8
              text-5xl
              font-light
            "
          >

            Travel Identity Complete

          </h1>




          <p
            className="
              mt-6
              text-white/60
            "
          >

            {user.name}, your travel style
            has been discovered.

          </p>





          <button

            onClick={() =>
              router.push(
                "/dashboard"
              )
            }

            className="
              mt-10
              rounded-full
              bg-emerald-600
              px-10
              py-4
              hover:bg-emerald-500
            "

          >

            Continue

          </button>




        </motion.div>



      </main>

    );

  }








  if(!started){


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
            y:40
          }}

          animate={{
            opacity:1,
            y:0
          }}

          className="
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

            🌍

          </div>



          <h1
            className="
              mt-8
              text-5xl
              font-light
            "
          >

            Discover Your Travel Identity

          </h1>




          <p
            className="
              mt-6
              text-white/60
            "
          >

            Find out what experiences,
            places and adventures make
            you happiest when travelling.

          </p>




          <button

            onClick={() =>
              setStarted(true)
            }

            className="
              mt-10
              rounded-full
              bg-emerald-600
              px-10
              py-4
              hover:bg-emerald-500
            "

          >

            Begin

          </button>



        </motion.div>



      </main>

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


        <motion.div

          key={
            question.id
          }


          initial={{
            opacity:0,
            y:40
          }}

          animate={{
            opacity:1,
            y:0
          }}

          exit={{
            opacity:0,
            y:-40
          }}

          transition={{
            duration:0.5
          }}



          className="
            w-full
            max-w-3xl
            rounded-[45px]
            border
            border-white/10
            bg-white/5
            p-12
            backdrop-blur-xl
          "

        >



          <p
            className="
              uppercase
              tracking-[0.4em]
              text-white/40
            "
          >

            Question {questionIndex + 1}
            /
            {travelIdentityQuestions.length}

          </p>





          <h1
            className="
              mt-6
              text-4xl
              font-light
            "
          >

            {question.emoji}
            {" "}
            {question.title}

          </h1>





          <div
            className="
              mt-10
              grid
              gap-4
              md:grid-cols-2
            "
          >


            {
              question.options.map(
                option => (


                  <button

                    key={
                      option.id
                    }


                    onClick={() =>
                      toggleOption(
                        option.id
                      )
                    }


                    className={`
                      rounded-3xl
                      border
                      p-6
                      text-left
                      transition
                      ${
                        selected.includes(
                          option.id
                        )

                        ?

                        "bg-emerald-600 border-emerald-500"

                        :

                        "border-white/10 hover:bg-white/10"

                      }
                    `}

                  >

                    <span
                      className="
                        text-3xl
                      "
                    >

                      {option.emoji}

                    </span>


                    <p
                      className="
                        mt-3
                        text-lg
                      "
                    >

                      {option.label}

                    </p>


                  </button>


                )

              )

            }


          </div>






          <button

            onClick={next}

            className="
              mt-10
              rounded-full
              bg-emerald-600
              px-10
              py-4
              hover:bg-emerald-500
            "

          >

            {
              questionIndex ===
              travelIdentityQuestions.length - 1

              ?

              "Complete"

              :

              "Continue →"

            }


          </button>






        </motion.div>


      </AnimatePresence>



    </main>

  );

}
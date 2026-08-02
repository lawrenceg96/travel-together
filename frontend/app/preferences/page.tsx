"use client";

import { useState } from "react";

import {
  preferenceCategories,
} from "@/lib/preferences";

import {
  savePreferences,
  Person,
  Rating,
  PreferenceChoice,
} from "@/lib/preferenceStorage";

import PreferenceResults from "@/components/Preferences/PreferenceResults";


export default function PreferencesPage() {


  const [person, setPerson] =
    useState<Person | null>(null);


  const [choices, setChoices] =
    useState<PreferenceChoice[]>([]);



  function selectPerson(
    name: Person
  ) {

    setPerson(name);


    const saved =
      localStorage.getItem(
        "travel-preferences"
      );


    if (!saved) {

      setChoices([]);

      return;

    }


    const data = JSON.parse(saved);


    const existing =
      data.find(
        (item: any) =>
          item.person === name
      );


    setChoices(
      existing
        ? existing.choices
        : []
    );

  }




  function setRating(
    id: string,
    rating: Rating
  ) {


    setChoices((current) => {


      const existing =
        current.find(
          (item) =>
            item.id === id
        );



      if (existing) {


        return current.map(
          (item) =>
            item.id === id
              ? {
                  ...item,
                  rating,
                }
              : item
        );


      }



      return [
        ...current,
        {
          id,
          rating,
        },
      ];


    });


  }




  function getRating(
    id:string
  ) {

    return choices.find(
      (item) =>
        item.id === id
    )?.rating;


  }




  function saveAnswers() {


    if (!person) return;



    savePreferences({

      person,

      choices,

    });



    alert(
      `${person}'s preferences saved!`
    );


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
          max-w-6xl
        "
      >


        <h1
          className="
            text-5xl
            font-light
          "
        >
          💑 Our Preferences
        </h1>


        <p
          className="
            mt-4
            text-white/60
          "
        >
          Tell us what you both love,
          enjoy and would avoid.
        </p>




        <section className="mt-10">

          <h2 className="text-2xl font-light">
            Who is answering?
          </h2>


          <div className="mt-5 flex gap-4">

            {(["Lawrence","Ciara"] as Person[])
              .map((name)=>(

              <button

                key={name}

                onClick={() =>
                  selectPerson(name)
                }

                className={`

                  rounded-full
                  border
                  px-8
                  py-3
                  transition

                  ${
                    person === name

                    ? "border-[#2E6F57] bg-[#2E6F57]/30"

                    : "border-white/10 bg-white/5"

                  }

                `}

              >

                ❤️ {name}

              </button>

            ))}


          </div>

        </section>




        {person && (

          <>


          <h2
            className="
              mt-12
              text-3xl
              font-light
            "
          >
            {person}'s Preferences
          </h2>




          {preferenceCategories.map(
            (category)=>(

            <section
              key={category.id}
              className="mt-10"
            >


              <h3 className="text-2xl font-light">
                {category.title}
              </h3>


              <p className="mt-2 text-white/50">
                {category.description}
              </p>



              <div
                className="
                  mt-6
                  grid
                  gap-4
                  md:grid-cols-3
                "
              >


              {category.options.map(
                (option)=>(


                <div
                  key={option.id}
                  className="
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/5
                    p-5
                  "
                >


                  <div className="text-3xl">
                    {option.emoji}
                  </div>


                  <p className="mt-3">
                    {option.label}
                  </p>



                  <div
                    className="
                      mt-5
                      flex
                      gap-2
                    "
                  >


                    <button
                      onClick={() =>
                        setRating(
                          option.id,
                          "love"
                        )
                      }
                      className={`
                        rounded-full
                        px-3
                        py-2
                        text-sm

                        ${
                          getRating(option.id)
                          === "love"

                          ? "bg-[#2E6F57]"

                          : "bg-white/10"

                        }
                      `}
                    >
                      ❤️
                    </button>



                    <button
                      onClick={() =>
                        setRating(
                          option.id,
                          "maybe"
                        )
                      }
                      className={`
                        rounded-full
                        px-3
                        py-2
                        text-sm

                        ${
                          getRating(option.id)
                          === "maybe"

                          ? "bg-yellow-600"

                          : "bg-white/10"

                        }
                      `}
                    >
                      🤔
                    </button>



                    <button
                      onClick={() =>
                        setRating(
                          option.id,
                          "no"
                        )
                      }
                      className={`
                        rounded-full
                        px-3
                        py-2
                        text-sm

                        ${
                          getRating(option.id)
                          === "no"

                          ? "bg-red-600"

                          : "bg-white/10"

                        }
                      `}
                    >
                      ❌
                    </button>


                  </div>


                </div>


              ))}


              </div>


            </section>

          ))}





          <button
            onClick={saveAnswers}
            className="
              mt-12
              rounded-full
              bg-[#2E6F57]
              px-8
              py-4
            "
          >
            Save {person}'s Preferences
          </button>


          </>

        )}



        <PreferenceResults />


      </div>


    </main>

  );

}
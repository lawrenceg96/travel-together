"use client";

import { useEffect, useState } from "react";

import {
  getJointChoices,
  getMaybeLaterChoices,
  getNotInterestedChoices,
} from "@/lib/preferenceComparison";

import {
  getPreferences,
} from "@/lib/preferenceStorage";

import {
  preferenceCategories,
} from "@/lib/preferences";



function getOption(id: string) {

  for (const category of preferenceCategories) {

    const option =
      category.options.find(
        (item) =>
          item.id === id
      );


    if (option) {
      return option;
    }

  }

}



function getPersonLabel(id: string) {

  const preferences =
    getPreferences();


  return preferences
    .filter((person) =>
      person.choices.some(
        (choice) =>
          choice.id === id &&
          choice.rating !== "no"
      )
    )
    .map(
      (person) =>
        person.person
    );

}




function ChoiceSection({
  title,
  description,
  choices,
  style,
  showPeople = false,
}: {
  title: string;
  description: string;
  choices: string[];
  style: string;
  showPeople?: boolean;
}) {


  return (

    <section className="mt-12">


      <h2
        className="
          text-4xl
          font-light
        "
      >
        {title}
      </h2>


      <p
        className="
          mt-3
          text-white/50
        "
      >
        {description}
      </p>



      <div
        className="
          mt-6
          grid
          gap-4
          md:grid-cols-3
        "
      >

        {choices.map((id) => {

          const option =
            getOption(id);


          if (!option) {
            return null;
          }



          return (

            <div
              key={id}
              className={`
                rounded-3xl
                border
                p-5
                ${style}
              `}
            >

              <div className="text-3xl">
                {option.emoji}
              </div>


              <p className="mt-3">
                {option.label}
              </p>



              {showPeople &&
                getPersonLabel(id).length > 0 && (

                <div
                  className="
                    mt-4
                    border-t
                    border-white/10
                    pt-3
                    text-sm
                    text-white/50
                  "
                >

                  <p className="mb-2">
                    Picked by:
                  </p>


                  {getPersonLabel(id)
                    .map((person) => (

                    <p key={person}>
                      ❤️ {person}
                    </p>

                  ))}


                </div>

              )}


            </div>

          );

        })}


      </div>


    </section>

  );

}




export default function PreferenceResults() {


  const [loaded, setLoaded] =
    useState(false);


  const [joint, setJoint] =
    useState<string[]>([]);


  const [maybe, setMaybe] =
    useState<string[]>([]);


  const [notInterested, setNotInterested] =
    useState<string[]>([]);



  useEffect(() => {


    setJoint(
      getJointChoices()
    );


    setMaybe(
      getMaybeLaterChoices()
    );


    setNotInterested(
      getNotInterestedChoices()
    );


    setLoaded(true);


  }, []);



  if (!loaded) {

    return null;

  }



  return (

    <div className="mt-16">


      <ChoiceSection

        title="❤️ Joint Choices"

        description="Things you both want to experience."

        choices={joint}

        style="
          border-[#2E6F57]
          bg-[#2E6F57]/20
        "

        showPeople={true}

      />



      <ChoiceSection

        title="💭 Maybe Later"

        description="Things one of you would like to try."

        choices={maybe}

        style="
          border-white/10
          bg-white/5
        "

        showPeople={true}

      />



      <ChoiceSection

        title="🚫 Not Interested"

        description="Things neither of you selected."

        choices={notInterested}

        style="
          border-red-500/20
          bg-red-500/10
        "

        showPeople={false}

      />


    </div>

  );

}
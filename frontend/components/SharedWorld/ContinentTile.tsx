"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import { Country } from "@/types/country";

import { continentImages } from "@/lib/continentImages";


interface Props {

  continent: string;

  countries: Country[];

}





export default function ContinentTile({

  continent,

  countries,

}: Props) {



  const [open, setOpen] =
    useState(false);




  function title(){


    if(continent === "Caribbean"){

      return "🏝 The Caribbean";

    }


    if(continent === "Europe"){

      return "🇪🇺 Europe";

    }


    if(continent === "Asia"){

      return "🌏 Asia";

    }


    if(continent === "Oceania"){

      return "🌊 Oceania";

    }


    if(continent === "North America"){

      return "🌎 North America";

    }


    if(continent === "South America"){

      return "🌎 South America";

    }


    if(continent === "Africa"){

      return "🌍 Africa";

    }


    return continent;


  }





  const image =
    continentImages[continent];






  return (


    <motion.div

      layout

      className="
        overflow-hidden
        rounded-[35px]
        border
        border-white/10
        bg-white/5
        backdrop-blur-xl
      "

      whileHover={{
        scale:1.02
      }}

      transition={{
        duration:0.3
      }}

    >





      <button

        onClick={() =>
          setOpen(!open)
        }

        className="
          relative
          h-56
          w-full
          overflow-hidden
          text-left
        "

      >



        {
          image &&

          <img

            src={image}

            alt={continent}

            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
            "

          />

        }






        <div

          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/90
            via-black/40
            to-black/10
          "

        />






        <div

          className="
            absolute
            bottom-0
            left-0
            right-0
            p-6
          "

        >



          <h2

            className="
              text-3xl
              font-light
            "

          >

            {title()}

          </h2>




          <div

            className="
              mt-2
              flex
              items-center
              justify-between
              text-sm
              text-white/60
            "

          >


            <span>

              {countries.length}
              {" "}
              destinations

            </span>



            <span
              className="
                text-xl
              "
            >

              {open ? "−" : "+"}

            </span>


          </div>



        </div>





      </button>








      <AnimatePresence>


        {
          open &&


          (

            <motion.div


              initial={{
                height:0,
                opacity:0
              }}


              animate={{
                height:"auto",
                opacity:1
              }}


              exit={{
                height:0,
                opacity:0
              }}


              transition={{
                duration:0.4
              }}



              className="
                border-t
                border-white/10
              "


            >



              <div

                className="
                  grid
                  gap-3
                  p-5
                  md:grid-cols-2
                "

              >



                {
                  countries.map(
                    country => (


                      <Link

                        key={
                          country.id
                        }

                        href={
                          `/countries/${country.id}`
                        }


                        className="
                          flex
                          items-center
                          gap-4
                          rounded-2xl
                          border
                          border-white/10
                          bg-black/20
                          p-4
                          transition
                          hover:bg-white/10
                        "

                      >



                        <span
                          className="
                            text-4xl
                          "
                        >

                          {country.flag}

                        </span>





                        <div>


                          <p
                            className="
                              text-lg
                              font-light
                            "
                          >

                            {country.name}

                          </p>



                          <p
                            className="
                              text-xs
                              text-white/40
                            "
                          >

                            Explore destination →

                          </p>



                        </div>



                      </Link>


                    )

                  )

                }



              </div>



            </motion.div>


          )

        }


      </AnimatePresence>




    </motion.div>


  );


}
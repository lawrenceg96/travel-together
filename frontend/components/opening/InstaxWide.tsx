"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InstaxWide() {

  return (

    <motion.div

      initial={{
        opacity:0,
        y:20,
        scale:0.96,
      }}

      animate={{
        opacity:1,
        y:0,
        scale:1,
      }}

      transition={{
        duration:1,
        ease:"easeOut",
      }}

      className="
        relative
        w-fit
      "

    >


      <div
        className="
          absolute
          inset-0
          translate-y-4
          rounded-[18px]
          bg-black/40
          blur-2xl
        "
      />



      <div
        className="
          relative
          rounded-[16px]
          bg-[#F5F2EB]
          p-3
          pb-5
          border
          border-[#E6E0D6]
          shadow-[0_12px_40px_rgba(0,0,0,0.5)]
        "
      >


        <div
          className="
            relative
            overflow-hidden
            rounded-[9px]
            w-[305px]
            max-w-[60vw]
            aspect-[1.62/1]
            bg-black
          "
        >


          <motion.div

            initial={{
              scale:1,
            }}

            animate={{
              scale:1.03,
            }}

            transition={{
              duration:8,
              ease:"easeOut",
            }}

            className="
              relative
              h-full
              w-full
            "

          >

            <Image

              src="/images/cover.jpg"

              alt="Ciara and Lawrence"

              fill

              priority

              className="
                object-cover
              "

            />

          </motion.div>



          <div
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-black/5
              via-transparent
              to-black/10
            "
          />

        </div>



        <div className="h-3" />


      </div>


    </motion.div>

  );

}
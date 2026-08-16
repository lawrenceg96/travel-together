"use client";


interface Props {

  emoji?: string;

  title?: string;

  description?: string;

}



export default function ComingSoonPage({

  emoji,

  title = "Coming Soon",

  description = "This feature is currently being built.",

}: Props) {


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
          max-w-4xl
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-10
          text-center
        "

      >


        {

          emoji &&

          <div

            className="
              text-5xl
            "

          >

            {emoji}

          </div>

        }



        <h1

          className="
            mt-6
            text-5xl
            font-light
          "

        >

          {title}

        </h1>



        <p

          className="
            mt-6
            text-lg
            text-white/50
          "

        >

          {description}

        </p>


      </div>


    </main>

  );

}
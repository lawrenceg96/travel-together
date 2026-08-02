"use client";


export default function RegionCard({

  region,

  completed,

  onClick,

}:{

  region:any;

  completed:boolean;

  onClick:()=>void;

}){


  return (

    <button

      disabled={completed}

      onClick={onClick}

      className={`
        rounded-[40px]
        border
        p-8
        text-left
        text-white
        transition

        ${
          completed

          ?

          `
          border-[#2E6F57]
          bg-[#2E6F57]/20
          opacity-70
          cursor-not-allowed
          `

          :

          `
          border-white/10
          bg-white/5
          hover:scale-105
          hover:bg-white/10
          `

        }

      `}

    >


      <div className="text-6xl">

        {region.emoji}

      </div>



      <h2 className="
        mt-6
        text-4xl
        font-light
      ">

        {region.name}

      </h2>



      {
        completed

        ?

        <p className="
          mt-3
          text-[#8dd8ae]
        ">
          ✅ Completed
        </p>


        :


        <p className="
          mt-3
          text-white/50
        ">

          {region.countries.length}

          {" "}

          countries

        </p>

      }


    </button>

  );

}
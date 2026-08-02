"use client";


export default function SharedStats({

  sharedCount,

  maybeCount,

}:{

  sharedCount:number;

  maybeCount:number;

}){


  return (

    <div
      className="
        mt-10
        grid
        gap-5
        md:grid-cols-3
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
            text-white/50
          "
        >
          ❤️ Shared Countries
        </p>


        <h2
          className="
            mt-3
            text-4xl
            font-light
          "
        >
          {sharedCount}
        </h2>

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
            text-white/50
          "
        >
          💭 Maybe Later
        </p>


        <h2
          className="
            mt-3
            text-4xl
            font-light
          "
        >
          {maybeCount}
        </h2>

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
            text-white/50
          "
        >
          🌍 Continents
        </p>


        <h2
          className="
            mt-3
            text-4xl
            font-light
          "
        >
          6
        </h2>

      </div>


    </div>

  );

}
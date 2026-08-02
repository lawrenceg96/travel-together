"use client";


import {
  getDestinationMatches,
} from "@/lib/matchEngine";



export default function MatchesPage() {


  const matches =
    getDestinationMatches();



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
          max-w-5xl
        "
      >


        <h1
          className="
            text-5xl
            font-light
          "
        >
          🌍 Destination Matches
        </h1>



        <div
          className="
            mt-10
            grid
            gap-5
            md:grid-cols-2
          "
        >

          {matches.map(
            (place)=>(

              <div
                key={place.id}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-6
                "
              >

                <h2
                  className="
                    text-3xl
                    font-light
                  "
                >
                  {place.name}
                </h2>


                <p className="mt-3">
                  ❤️ {place.score}% match
                </p>


                <p
                  className="
                    mt-3
                    text-white/50
                  "
                >
                  {place.matches.join(", ")}
                </p>


              </div>

            )
          )}

        </div>


      </div>


    </main>

  );

}
"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import {
  useRouter,
} from "next/navigation";

import {
  select,
  geoNaturalEarth1,
  geoPath,
} from "d3";

import {
  getSharedCountries,
} from "@/lib/destinationComparison";

import {
  countries,
} from "@/lib/countries";

import type {
  GeoPermissibleObjects,
} from "d3-geo";



import type {
  Feature,
  Geometry,
} from "geojson";


type GeoFeature = Feature<Geometry, {

  name: string;

}>;






export default function InteractiveSharedMap(){


  const svgRef =
    useRef<SVGSVGElement | null>(null);



  const router =
    useRouter();



  const [
    loaded,
    setLoaded
  ] = useState(false);




  const sharedIds =
    getSharedCountries();




  const sharedCountries =
    countries.filter(

      (country) =>

        sharedIds.includes(
          country.id
        )

    );







  useEffect(()=>{


    async function loadMap(){


      const response =
        await fetch("/maps/world.json");



      const data =
        await response.json();





      const svg =
        select(svgRef.current);



      svg.selectAll("*").remove();





      const width = 1000;

      const height = 500;





      const projection =
        geoNaturalEarth1()

          .scale(160)

          .translate([

            width / 2,

            height / 2,

          ]);






      const path =
        geoPath()

          .projection(
            projection
          );






      const features =
        data.features as GeoFeature[];







      svg

        .selectAll<SVGPathElement, GeoFeature>("path")

        .data(features)

        .enter()

        .append("path")

        .attr(

          "d",

          (feature) =>

            path(feature) ?? ""

        )





        .attr(

          "fill",

          (feature) => {


            const shared =

              sharedCountries.find(

                (country) =>

                  country.name ===
                  feature.properties.name

              );



            return shared

              ? "#2E6F57"

              : "#14232C";


          }

        )






        .attr(

          "stroke",

          "#304956"

        )





        .attr(

          "stroke-width",

          0.5

        )





        .style(

          "cursor",

          "pointer"

        )







        .on(

          "mouseenter",

          function(){

            select(this)

              .transition()

              .duration(200)

              .attr(

                "fill",

                "#7BC47F"

              );


          }

        )







        .on(

          "mouseleave",

          function(event, feature){


            const shared =

              sharedCountries.find(

                (country) =>

                  country.name ===
                  feature.properties.name

              );



            select(this)

              .transition()

              .duration(300)

              .attr(

                "fill",

                shared

                  ? "#2E6F57"

                  : "#14232C"

              );


          }

        )








        .on(

          "click",

          function(event, feature){



            const country =

              countries.find(

                (item) =>

                  item.name ===
                  feature.properties.name

              );



            if(country){


              router.push(

                `/countries/${country.id}`

              );


            }


          }

        );






      setLoaded(true);


    }





    loadMap();



  },[]);







  return (

    <section

      className="
        mt-16
        rounded-[50px]
        border
        border-white/10
        bg-white/5
        p-10
      "

    >



      <h2

        className="
          text-4xl
          font-light
        "

      >

        🌍 Interactive Shared Map

      </h2>





      <p

        className="
          mt-3
          text-white/50
        "

      >

        Countries you both want to explore together.

      </p>







      <div

        className="
          mt-10
          overflow-hidden
          rounded-[40px]
          border
          border-white/10
          bg-[#06131d]
        "

      >



        <svg

          ref={svgRef}

          viewBox="
            0 0 1000 500
          "

          className="
            w-full
          "

        />





        {
          !loaded &&

          <div

            className="
              p-10
              text-center
              text-white/40
            "

          >

            Loading map...

          </div>

        }




      </div>



    </section>

  );

}
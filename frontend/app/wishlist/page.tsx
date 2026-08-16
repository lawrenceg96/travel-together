"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  getWishlist,
  removeFromWishlist,
  WishlistItem,
} from "@/lib/wishlist";

import { countries } from "@/lib/countries";
import { cities } from "@/lib/cities";
import { attractions } from "@/lib/attractions";


export default function WishlistPage() {


  const [
    items,
    setItems
  ] = useState<WishlistItem[]>([]);



  useEffect(() => {

    setItems(getWishlist());

  }, []);





  function removeItem(
    id:string,
    type:WishlistItem["type"]
  ){

    removeFromWishlist(
      id,
      type
    );

    setItems(
      getWishlist()
    );

  }





  function getLink(
    item:WishlistItem
  ){


    if(item.type === "country"){

      return `/countries/${item.id}`;

    }



    if(item.type === "city"){

      const city =
        cities.find(
          (city)=>
            city.id === item.id
        );


      if(city){

        return `/countries/${city.countryId}/${city.id}`;

      }

    }




    if(item.type === "attraction"){

      const attraction =
        attractions.find(
          (item2)=>
            item2.id === item.id
        );


      const city =
        cities.find(
          (city)=>
            city.id === attraction?.cityId
        );


      if(attraction && city){

        return `/countries/${city.countryId}/${city.id}/${attraction.id}`;

      }

    }



    return "#";

  }





  const categories = [
    "country",
    "city",
    "attraction",
  ] as const;






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

          ❤️ Wishlist

        </h1>


        <p
          className="
            mt-4
            text-white/60
          "
        >

          Countries, cities and attractions you have saved.

        </p>





        {
          categories.map(
            (category)=>(


              <section
                key={category}
                className="mt-12"
              >


                <h2
                  className="
                    text-3xl
                    font-light
                    capitalize
                  "
                >

                  {category}s

                </h2>





                <div
                  className="
                    mt-6
                    grid
                    gap-6
                    md:grid-cols-2
                    lg:grid-cols-3
                  "
                >



                  {
                    items
                      .filter(
                        item =>
                          item.type === category
                      )
                      .map(
                        item=>(


                          <div
                            key={`${item.type}-${item.id}`}
                            className="
                              overflow-hidden
                              rounded-3xl
                              border
                              border-white/10
                              bg-white/5
                            "
                          >



                            <Link
                              href={getLink(item)}
                            >


                              {
                                item.image &&

                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="
                                    h-48
                                    w-full
                                    object-cover
                                  "
                                />

                              }



                              <div className="p-6">


                                <p
                                  className="
                                    text-xs
                                    uppercase
                                    tracking-[0.25em]
                                    text-white/40
                                  "
                                >

                                  {item.type}

                                </p>



                                <h3
                                  className="
                                    mt-3
                                    text-2xl
                                    font-light
                                  "
                                >

                                  {item.name}

                                </h3>


                              </div>


                            </Link>





                            <div
                              className="
                                px-6
                                pb-6
                              "
                            >

                              <button

                                onClick={() =>
                                  removeItem(
                                    item.id,
                                    item.type
                                  )
                                }

                                className="
                                  rounded-full
                                  border
                                  border-white/20
                                  px-5
                                  py-2
                                  text-sm
                                  text-white/70
                                  hover:bg-white/10
                                "

                              >

                                Remove

                              </button>


                            </div>



                          </div>


                        )

                      )

                  }


                </div>


              </section>


            )

          )

        }




      </div>


    </main>

  );

}
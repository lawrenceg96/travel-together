"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import {
  getWishlist,
  removeFromWishlist,
  WishlistItem,
} from "@/lib/wishlist";


export default function WishlistPage() {

  const [items, setItems] = useState<WishlistItem[]>([]);


  useEffect(() => {
    setItems(getWishlist());
  }, []);



  function removeItem(
    id: string,
    type: WishlistItem["type"]
  ) {

    removeFromWishlist(id, type);

    setItems(
      getWishlist()
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

      <div className="mx-auto max-w-6xl">


        <h1
          className="
            text-5xl
            font-light
          "
        >
          ❤️ My Wishlist
        </h1>


        <p
          className="
            mt-4
            text-white/60
          "
        >
          Places you want to explore together.
        </p>



        {items.length === 0 ? (

          <div
            className="
              mt-10
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              text-white/50
            "
          >
            Your wishlist is empty.
          </div>

        ) : (


          <div
            className="
              mt-10
              grid
              gap-6
              md:grid-cols-2
              lg:grid-cols-3
            "
          >

            {items.map((item) => (

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


                {item.image && (

                  <img
                    src={item.image}
                    alt={item.name}
                    className="
                      h-48
                      w-full
                      object-cover
                    "
                  />

                )}



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


                  <h2
                    className="
                      mt-3
                      text-2xl
                      font-light
                    "
                  >
                    {item.name}
                  </h2>



                  <button
                    onClick={() =>
                      removeItem(
                        item.id,
                        item.type
                      )
                    }
                    className="
                      mt-5
                      rounded-full
                      border
                      border-white/20
                      px-5
                      py-2
                      text-sm
                      text-white/70
                      transition
                      hover:bg-white/10
                    "
                  >
                    Remove
                  </button>


                </div>


              </div>

            ))}


          </div>

        )}


      </div>


    </main>
  );
}
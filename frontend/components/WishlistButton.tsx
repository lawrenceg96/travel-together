"use client";

import { useEffect, useState } from "react";

import {
  addToWishlist,
  getWishlist,
  removeFromWishlist,
} from "@/lib/wishlist";


interface Props {
  id: string;
  name: string;
  type:
    | "country"
    | "city"
    | "attraction";
  image?: string;
}



export default function WishlistButton({
  id,
  name,
  type,
  image,
}: Props) {


  const [
    saved,
    setSaved
  ] = useState(false);



  const [
    loaded,
    setLoaded
  ] = useState(false);





  useEffect(() => {


    const exists =
      getWishlist().some(
        (item) =>
          item.id === id &&
          item.type === type
      );



    setSaved(exists);

    setLoaded(true);



  }, [id, type]);







  function toggleWishlist(){


    if(saved){


      removeFromWishlist(
        id,
        type
      );


      setSaved(false);


      return;

    }





    addToWishlist({

      id,

      name,

      type,

      image,

    });



    setSaved(true);


  }







  return (

    <button

      onClick={toggleWishlist}

      disabled={!loaded}

      className="
        rounded-full
        border
        border-white/20
        px-6
        py-3
        text-sm
        text-white/80
        transition
        hover:bg-white/10
        disabled:opacity-50
      "

    >

      {
        loaded
          ? (
              saved
                ? "❤️ Saved"
                : "🤍 Save"
            )
          : "Save"
      }


    </button>

  );

}
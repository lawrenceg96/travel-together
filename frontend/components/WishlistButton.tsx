"use client";

import { useState } from "react";
import {
  addToWishlist,
  getWishlist,
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

  const [saved, setSaved] =
    useState(() =>
      getWishlist().some(
        (item) =>
          item.id === id &&
          item.type === type
      )
    );


  function toggleWishlist() {

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
      className="
        rounded-full
        border
        border-white/20
        bg-white/10
        px-6
        py-3
        transition
        hover:bg-white/20
      "
    >
      {saved ? "❤️ Saved" : "🤍 Save"}
    </button>
  );
}
"use client";

import { Heart } from "lucide-react";

import { useWishlist } from "@/context/WishlistContext";

type FavoriteButtonProps = {
  id: string;
  type: "country" | "city" | "attraction";
};

export default function FavoriteButton({
  id,
  type,
}: FavoriteButtonProps) {
  const {
    isSaved,
    toggle,
  } = useWishlist();

  const liked = isSaved(id);

  return (
    <button
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();

        toggle({
          id,
          type,
        });
      }}
      className="
        absolute
        right-4
        top-4
        z-20
        flex
        h-12
        w-12
        items-center
        justify-center
        rounded-full
        border
        border-white/20
        bg-black/40
        backdrop-blur-md
        transition-all
        duration-300
        hover:scale-110
        hover:bg-black/60
      "
      aria-label="Add to wishlist"
    >
      <Heart
        size={24}
        className={`transition-all duration-300 ${
          liked
            ? "fill-red-500 text-red-500"
            : "text-white"
        }`}
      />
    </button>
  );
}
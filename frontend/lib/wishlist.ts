"use client";

export type WishlistItem = {
  id: string;
  name: string;
  type: "country" | "city" | "attraction";
  image?: string;
};


export function getWishlist(): WishlistItem[] {
  if (typeof window === "undefined") {
    return [];
  }

  const saved = localStorage.getItem("wishlist");

  return saved
    ? JSON.parse(saved)
    : [];
}



export function addToWishlist(
  item: WishlistItem
) {

  const current = getWishlist();

  const exists = current.some(
    (saved) =>
      saved.id === item.id &&
      saved.type === item.type
  );


  if (exists) {
    return;
  }


  localStorage.setItem(
    "wishlist",
    JSON.stringify([
      ...current,
      item,
    ])
  );

}



export function removeFromWishlist(
  id: string,
  type: WishlistItem["type"]
) {

  const current = getWishlist();


  localStorage.setItem(
    "wishlist",
    JSON.stringify(
      current.filter(
        (item) =>
          !(
            item.id === id &&
            item.type === type
          )
      )
    )
  );

}
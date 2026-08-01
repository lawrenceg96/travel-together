export type WishlistItem = {
  id: string;
  type: "city" | "attraction";
  referenceId: string;
  title: string;
  image: string;
  country: string;
  saved: boolean;
};

export const wishlist: WishlistItem[] = [];
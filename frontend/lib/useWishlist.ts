"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "travel-together-wishlist";

export type WishlistItem = {
  id: string;
  type: "country" | "city" | "attraction";
};

export function useWishlist() {
  const [items, setItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);

    if (stored) {
      try {
        setItems(JSON.parse(stored));
      } catch {
        setItems([]);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(items)
    );
  }, [items]);

  function isSaved(id: string) {
    return items.some((item) => item.id === id);
  }

  function toggle(item: WishlistItem) {
    setItems((current) => {
      const exists = current.some(
        (saved) => saved.id === item.id
      );

      if (exists) {
        return current.filter(
          (saved) => saved.id !== item.id
        );
      }

      return [...current, item];
    });
  }

  function clear() {
    setItems([]);
  }

  return {
    items,
    isSaved,
    toggle,
    clear,
  };
}
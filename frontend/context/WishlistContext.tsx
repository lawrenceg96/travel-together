"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type WishlistItem = {
  id: string;
  type: "country" | "city" | "attraction";
};

type WishlistContextType = {
  items: WishlistItem[];
  isSaved: (id: string) => boolean;
  toggle: (item: WishlistItem) => void;
  clear: () => void;
};

const STORAGE_KEY = "travel-together-wishlist";

const WishlistContext =
  createContext<WishlistContextType | null>(null);

export function WishlistProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [items, setItems] = useState<WishlistItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      try {
        setItems(JSON.parse(saved));
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

  const value = useMemo(
    () => ({
      items,
      isSaved,
      toggle,
      clear,
    }),
    [items]
  );

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}
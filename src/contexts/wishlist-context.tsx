"use client";

import { createContext, useState, ReactNode } from "react";

interface WishlistItem {
  id: string;
  name: string;
  img: string;
  slug?: string;
  category?: string;
}

interface WishlistContextType {
  wishlistItems: WishlistItem[];
  toggleWishlist: (item: WishlistItem) => void;
  isInWishlist: (id: string ,name:string) => boolean;
  removeItem: (id: string, name: string) => void; 
}

export const WishlistContext = createContext<WishlistContextType>({
  wishlistItems: [],
  toggleWishlist: () => {},
  isInWishlist: () => false,
  removeItem: () => {}, 
});

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);

  const toggleWishlist = (item: WishlistItem) => {
    setWishlistItems((prev) => {
      const exists = prev.find((i) => i.id === item.id && i.name === item.name);
      if (exists) {
        return prev.filter((i) => i.id !== item.id && i.name !== item.name);
      } else {
        return [...prev, item];
      }
    });
  };

  const isInWishlist = (id: string, name: string) => {
    return wishlistItems.some((item) => item.id === id && item.name === name);
  };

  const removeItem = (id: string, name: string) => {
    setWishlistItems((prev) => {
      return prev.filter((item) => !(item.id === id && item.name === name));

    });
  };

  return (
    <WishlistContext.Provider
      value={{ wishlistItems, toggleWishlist, isInWishlist, removeItem }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

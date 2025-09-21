"use client";

import { createContext, useState, ReactNode } from "react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  img: string;
  quantity: number;
  // هر ویژگی دیگه‌ای که محصول داره
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: CartItem) => void;
  removeFromCart: (id: string, name: string) => void;
}

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: CartItem) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === product.id && item.name === product.name
      );

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id && item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (id: string, name: string) => {
    setCartItems((prev) => {
      const existingItem = prev.find(
        (item) => item.id === id && item.name === name
      );

      if (existingItem && existingItem.quantity > 1) {
        return prev.map((item) =>
          item.id === id && item.name === name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      } else {
        return prev.filter(
          (item) => !(item.id === id && item.name === name)
        );
      }
    });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
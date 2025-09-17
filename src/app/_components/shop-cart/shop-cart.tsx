"use client";

import React, { useContext } from "react";
import { CartContext } from "@/contexts/cart-context";
import Image from "next/image";

const ShopCart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto min-h-96 text-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">🛒 Your shopping cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">The shopping cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border p-4 rounded-md shadow-sm h-28 bg-gray-50"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded object-contain"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-600">{item.price} $ </p>
                </div>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          ))}

          <div className="mt-6 flex justify-between text-xl font-bold">
            <span>
              <span className="text-sm font-bold">Total Items : </span>
              {cartItems.length}
            </span>
            <span>
              <span className="text-sm font-bold">Total Price : </span>
              {totalPrice.toLocaleString()} $
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopCart;

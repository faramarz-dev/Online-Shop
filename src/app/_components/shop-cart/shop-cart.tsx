"use client";

import React, { useContext } from "react";
import { CartContext } from "@/contexts/cart-context";
import Image from "next/image";

const ShopCart = () => {
  const { cartItems, removeFromCart, addToCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="p-6 max-w-4xl mx-auto min-h-96 bg-white rounded-lg shadow-md">
      <h1 className="text-3xl font-extrabold mb-8 text-center text-gray-800">
        🛒 Your Shopping Cart
      </h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500 text-center text-lg">
          Your cart is currently empty.
        </p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition duration-200 bg-gray-50"
            >
              <div className="flex items-center gap-5">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="rounded-lg object-cover border border-gray-300"
                />
                <div className="text-left">
                  <h2 className="text-xl font-semibold text-gray-700">
                    {item.name}
                  </h2>
                  <p className="text-gray-600 mt-1">
                    <span className="font-medium">{item.price} $</span> ×{" "}
                    <span className="font-medium">{item.quantity}</span> ={" "}
                    <span className="font-bold text-green-600">
                      {(item.price * item.quantity).toLocaleString()} $
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => removeFromCart(item.id, item.name)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-lg font-bold"
                >
                  −
                </button>

                <span className="text-lg font-semibold text-gray-700">
                  {item.quantity}
                </span>

                <button
                  onClick={() => addToCart(item)}
                  className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-lg font-bold"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="mt-8 border-t pt-6 flex justify-between items-center text-xl font-bold text-gray-800">
            <span>
              🧮 Total Items:{" "}
              <span className="text-blue-600">{totalItems}</span>
            </span>
            <span>
              💰 Total Price:{" "}
              <span className="text-green-600">
                {totalPrice.toLocaleString()} $
              </span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopCart;

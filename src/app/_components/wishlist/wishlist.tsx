"use client";

import React, { useContext } from "react";
import { WishlistContext } from "@/contexts/wishlist-context";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { IoHeartDislikeSharp } from "react-icons/io5";
const Wishlist = () => {
  const { wishlistItems, removeItem } = useContext(WishlistContext);

  return (
    <>
      <div className="max-w-5xl mx-auto p-6 min-h-96">
        <h1 className="text-3xl font-bold mb-8 text-center text-purple-700">
          ❤️ Your Wishlist
        </h1>

        {wishlistItems.length === 0 ? (
          <p className="text-center text-gray-500 text-lg">
            You haven&apos;t added any products to your wishlist yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {wishlistItems.map((item, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 bg-white flex flex-col items-center justify-between"
              >
                <Image
                  src={item.img}
                  alt={item.name}
                  width={200}
                  height={200}
                  className="object-contain mx-auto mb-4"
                />
                <div className="text-center">
                  <h2 className="text-lg font-semibold text-center">
                    {item.name}
                  </h2>
                  <Link
                    href={`/product-details/${item.id}`}
                    className="block mt-4 text-center text-purple-600 hover:underline"
                  >
                    View Details
                  </Link>
                  <button
                    onClick={() => {
                      removeItem(item.id, item.name);
                      toast.success(`${item.name} removed from wishlist`, {
                        icon: (
                          <IoHeartDislikeSharp className="text-red-600 h-7 w-7" />
                        ),
                      });
                    }}
                    className=" mt-4 text-center text-red-600 hover:underline hover:font-bold bg-red-200 p-2 rounded-lg"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default Wishlist;

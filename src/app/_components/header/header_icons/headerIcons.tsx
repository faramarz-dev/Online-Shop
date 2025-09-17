"use client"

import React, { useState, useRef, useEffect, useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { CartContext } from "@/contexts/cart-context";

export const HeaderIcons = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { cartItems, removeFromCart } = useContext(CartContext);
  // مدیریت کلیک خارج از منو
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    // اضافه کردن لیسنر به سند
    document.addEventListener("mousedown", handleClickOutside);

    // پاک کردن لیسنر هنگام خروج از کامپوننت
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="header-icons-wrapper ">
      {/* آیکون حساب کاربری */}
      <div className="header-icons relative">
        <button onClick={() => setMenuOpen((prev) => !prev)}>
          <Image
            src="/images/icons/header-icons/account-icon.png"
            alt="account"
            width={30}
            height={15}
          />
        </button>
        <div
          ref={menuRef}
          className={`absolute right-3 mt-2 top-8 bg-indigo-950 bg-opacity-85 text-white rounded-lg shadow-xl w-32 text-sm transition-all duration-300 ease-out transform ${
            menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {menuOpen && (
            <ul className="py-2">
              <li className="px-4 py-2 hover:bg-purple-800 cursor-pointer transition-colors">
                Profile
              </li>
              <li className="px-4 py-2 hover:bg-purple-800 cursor-pointer transition-colors">
                Settings
              </li>
              <li className="px-4 py-2 hover:bg-red-800 hover:text-black text-red-400 cursor-pointer transition-colors">
                Logout
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* لیست علاقه‌مندی‌ها */}
      <div className="header-icons">
        <Link href="/shop-wishlist" className="header-icons-link ">
          <div className="relative">
            <span className="absolute top-6 bg-purple-600 text-white text-xs rounded-full px-2 py-0 shadow-md">
              3
            </span>
            <Image
              src="/images/icons/header-icons/wishlist-icon.png"
              alt="wishlist"
              width={30}
              height={15}
            />
          </div>
        </Link>
      </div>

      {/* سبد خرید */}
      <div className="header-icons">
        <Link
          href="/shop-cart"
          className="header-icons-link flex items-center space-x-2 hover:text-gray-300 transition-all"
        >
          <div className="">
            <span className= {`absolute top-11 bg-purple-600 text-white text-xs rounded-full px-2 py-0 shadow-md ${cartItems.length ===0 ?  "hidden" : "block" }`}>
              {cartItems.length}
            </span>
            <Image
              src="/images/icons/header-icons/cart-icon.png"
              alt="cart"
              width={30}
              height={15}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

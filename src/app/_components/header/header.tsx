"use client";

import Link from "next/link";
import React, { useState } from "react";
import { IconBar } from "../icons/icons";

import Image from "next/image";
import { navItems } from "@/data/navItem.data";
import { HeaderIcons } from "./header_icons/headerIcons";
import { HeaderMobile } from "../header_mobile/header-mobile";
import { NavLink } from "./navlink";
export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Navbar */}
      <nav className="header-wrapper ">
        <div className="header-wrapper__header ">
          <div className="header__nav ">
            <div className="header-logo">
              {/* Logo */}
              <Link href="/" className="w-40">
                <Image
                  src="/images/logo/logo1.png"
                  alt="logo"
                  width={70}
                  height={25}
                  className="object-cover"
                />
              </Link>
              {/* search input */}
              <div className="header__search-box">
                <input
                  type="text"
                  placeholder="search for items"
                  className="px-2 py-2 lg:w-64 lg:h-12 xs:w-56 xs:h-10 border rounded-lg border-purple-900 focus:border-2 focus:border-purple-600 outline-none"
                />
              </div>

              {/* Mobile menu button */}
              <div className="flex lg:hidden md:hidden">
                <button
                  onClick={toggleMenu}
                  type="button"
                  className="toggle-btn"
                  aria-label="toggle menu"
                >
                  {isOpen ? <IconBar strokeWidth={3} /> : <HeaderMobile />}
                </button>
              </div>
            </div>

            {/* Menu */}
            <div className={`header-menu-wrapper`}>
              <div className="header_menu">
                {navItems.map((item, index) => (
                  <NavLink href={item.href} key={index}>
                    {item.label}
                  </NavLink>
                ))}
              </div>
              {/* Icons */}
              <HeaderIcons />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

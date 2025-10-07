"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { IBestProductCard } from "./best-products-card .types";
import SmallTag from "@/app/_components/small-tag/small-tag";
import { Rate } from "@/app/_components/rate/rate";
import { CartContext } from "@/contexts/cart-context";
import toast from "react-hot-toast";
import { WishlistContext } from "@/contexts/wishlist-context";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";
import { IoHeartDislikeSharp } from "react-icons/io5";

const BestProductsCard: React.FC<IBestProductCard> = ({
  product_id,
  title,
  img,
  price,
  rate,
  ratersNumber,
  discount,
  tag_type,
  slug,
  category,
}) => {
  const { addToCart } = useContext(CartContext);
  const finalPrice = ((1 - discount / 100) * price).toFixed(0);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);


const productImages = img
    ? img.map(img => `/images/${img}`)
    : img 
      ? [`/images/${img}`] 
      : ["/images/none.jpg"];



  const handleAddToCart = () => {
    addToCart({
      id: product_id,
      name: title,
      price: Number(finalPrice),
      img: productImages[0],
      quantity: 0,
    });
    toast.success("Product successfully added to cart!", {
      icon: <MdAddShoppingCart className="text-green-600 h-6 w-6" />,
    });
  };

  const handleAddToWishlist = () => {
    toggleWishlist({
      id: product_id,
      name: title,
      img: `/images/${img || "none.jpg"}`,
      slug: slug,
      category: category,
    });

    if (!isInWishlist(product_id, title)) {
      toast.success("Product successfully added to wishlist!", {
        icon: <FaHeart className="text-red-600 h-6 w-6" />,
      });
    } else {
      toast.error("Product removed from wishlist!", {
        icon: <IoHeartDislikeSharp className="text-red-600 h-7 w-7" />,
      });
    }
  };

  return (
    <div className="product-card-wrapper group relative">
      <div className="card-tools absolute right-6 flex-col gap-2 group-hover:flex">
        <button
          onClick={handleAddToWishlist}
          className="p-2 rounded-full transition"
        >
          {isInWishlist(product_id, title) ? (
            <FaHeart className="text-red-600 h-6 w-6" />
          ) : (
            <FaRegHeart className="text-gray-900 h-6 w-6" />
          )}
        </button>
      </div>

      <div className="product-card-image-box">
        {tag_type ? (
          <SmallTag tag_type={tag_type}>{`${discount || ""} %`}</SmallTag>
        ) : (
          <SmallTag tag_type="success">new</SmallTag>
        )}
        <div className="product-image-wrapper">
          <Image
            width={200}
            height={200}
            src={productImages[0]}
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="card-content">
        <div className="flex items-center justify-between">
            {title}
            <button className="p-2 transition hidden group-hover:flex">
              <Link href={`/products/${category}/${slug}`}target="_blank">
                <TbListDetails className="text-gray-900 h-6 w-6 hover:text-purple-700" />
              </Link>
            </button>
          </div>

        <div className="product-card-rate-wrapper">
          <Rate rate={rate} ratersNumber={ratersNumber} />
        </div>

        <div className="product-card-price-info group-hover:hidden">
          <span className="text-lg font-bold">${finalPrice}</span>
          &nbsp;
          <del className="text-shop-gray-500">${price}</del>
        </div>

        <div
          className={`product-card-buy-button hidden h-[60px] items-center justify-center rounded-md border border-shop-gray-400 px-4 text-center hover:text-white group-hover:flex`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full h-full text-shop-gray-700 hover:text-white"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default BestProductsCard;

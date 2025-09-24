"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { IProductsCardProps } from "./products-card.types";
import SmallTag from "@/app/_components/small-tag/small-tag";
import { Rate } from "@/app/_components/rate/rate";
import { CartContext } from "@/contexts/cart-context";
import { WishlistContext } from "@/contexts/wishlist-context";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { TbListDetails } from "react-icons/tb";

const ProductsCard: React.FC<IProductsCardProps> = ({
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
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const productImages = img
    ? img.map(img => `/images/products/${img}`)
    : img 
      ? [`/images/products/${img}`] 
      : ["/images/products/none.jpg"];

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
      img: productImages[0],
      slug: slug,
      category: category,
    });
    toast.success("Product successfully added to wishlist!", {
      icon: <FaHeart className="text-red-600 h-6 w-6" />,
    });
  };

  return (
    <>
      <div className="product-card-wrapper group relative">
        <div className="card-tools absolute right-6 flex-col gap-2 group-hover:flex">
          <button onClick={handleAddToWishlist}>
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
          <div className="product-image-wrapper relative">
            <Image
              width={200}
              height={200}
              src={productImages[0]}
              alt={title}
              className="h-full w-full object-contain"
            />
            
            {/* Image indicators for multiple images */}
            {/* {productImages.length > 1 && (
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full ${
                      currentImageIndex === index ? 'bg-purple-700' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            )} */}
          </div>
        </div>

        <div className="card-content">
          <div className="flex items-center justify-between">
            {title}
            <button className="p-2 transition hidden group-hover:flex">
              <Link href={`/products/${category}/${slug}`}>
                <TbListDetails className="text-gray-900 h-6 w-6 hover:text-purple-700" />
              </Link>
            </button>
          </div>
          <div className="product-card-rate-wrapper">
            <Rate rate={rate} ratersNumber={ratersNumber} />
          </div>
          <div className="product-card-price-info group-hover:hidden">
            <span className="text-lg font-bold">
              ${((1 - discount / 100) * price).toFixed(0)}
            </span>{" "}
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
    </>
  );
};

export default ProductsCard;

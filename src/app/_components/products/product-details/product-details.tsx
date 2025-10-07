"use client";

import { useContext, useState, useEffect } from "react";
import { ProductsListData } from "@/data/products.data";
import { BestProductListData } from "@/data/best-products.data";
import { CartContext } from "@/contexts/cart-context";
import { WishlistContext } from "@/contexts/wishlist-context";
import toast from "react-hot-toast";
import { MdAddShoppingCart } from "react-icons/md";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoHeartDislikeSharp } from "react-icons/io5";
import Image from "next/image";
import { Rate } from "@/app/_components/rate";
import { IProductDetailsProps } from "./products-details.types";

export default function ProductDetails({ category, slug }: IProductDetailsProps) {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);

  const [isInCart, setIsInCart] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const allProductsData = [...ProductsListData, ...BestProductListData];
  const product = allProductsData.find(
    (p) => p.slug === slug && p.category === category
  );

  const productImages = product?.img
    ? Array.isArray(product.img)
      ? product.img.map((img) => `/images/${img}`)
      : [`/images/${product.img}`]
    : ["/images/none.jpg"];

  useEffect(() => {
    if (product) {
      const cartItem = cartItems.find((item) => item.id === product.product_id);
      setIsInCart(!!cartItem);
    }
  }, [cartItems, product]);

  if (!product) {
    return (
      <div className="text-center mt-20 text-red-600 text-lg">
        Product not found.
      </div>
    );
  }

  const finalPrice = ((1 - product.discount / 100) * product.price).toFixed(0);

  const handleAddToCart = () => {
    addToCart({
      id: product.product_id,
      name: product.title,
      price: Number(finalPrice),
      img: productImages[0],
      quantity: 0,
    });
    toast.success("Product successfully added to cart!", {
      icon: <MdAddShoppingCart className="text-green-600 h-6 w-6" />,
    });
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.product_id, product.title);
  };

  const handleAddToWishlist = () => {
    toggleWishlist({
      id: product.product_id,
      name: product.title,
      img: productImages[0],
      slug,
      category,
    });

    if (!isInWishlist(product.product_id, product.title)) {
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
    <section className="containerD mt-20">
      <div className="flex flex-col md:flex-row gap-10 justify-center mt-10 w-full p-2 mx-auto">
        <div className="flex flex-col md:flex-row gap-10 border p-2 rounded-lg">
          {/* Main Image */}
          <div className="rounded-md overflow-hidden">
            <Image
              src={productImages[selectedImage]}
              alt={product.title}
              width={500}
              height={500}
              className="w-[420px] h-[420px] object-contain"
            />
          </div>

          {/* Thumbnail Gallery */}
          <div className="flex flex-row md:flex-col gap-2 mt-4 overflow-x-auto pb-3 justify-center items-center">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                  selectedImage === index
                    ? "border-purple-700"
                    : "border-gray-200 blur-[2px]"
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.title} view ${index + 1}`}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <h1 className="text-xl md:text-2xl xl:text-3xl font-bold text-gray-900">
            {product.title}
          </h1>

          <div className="flex justify-between items-center">
            <Rate rate={product.rate} ratersNumber={product.ratersNumber} />
            <button onClick={handleAddToWishlist}>
              {isInWishlist(product.product_id, product.title) ? (
                <FaHeart className="text-red-600 h-6 w-6" />
              ) : (
                <FaRegHeart className="text-gray-900 h-6 w-6" />
              )}
            </button>
          </div>

          <div className="text-xl text-gray-800">
            Price:{" "}
            <span className="font-bold text-purple-700">${finalPrice}</span>
            &nbsp;
            <del className="text-gray-500">${product.price}</del>
          </div>

          <div className="mt-4 text-gray-600 text-sm leading-relaxed">
            {product.description}
          </div>

          {!isInCart ? (
            <button
              onClick={handleAddToCart}
              className="bg-purple-800 text-white px-3 py-3 rounded hover:bg-purple-600 text-lg"
            >
              Add to Cart
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                onClick={handleRemoveFromCart}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-lg font-bold"
              >
                −
              </button>

              <span className="text-lg font-semibold text-gray-700">
                {
                  cartItems.find((item) => item.id === product.product_id)
                    ?.quantity
                }
              </span>

              <button
                onClick={handleAddToCart}
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 text-lg font-bold"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
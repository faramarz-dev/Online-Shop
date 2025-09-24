"use client";

import { ProductsListData } from "@/data/products.data";
import { useContext, useState, useEffect } from "react";
import { CartContext } from "@/contexts/cart-context";
import toast from "react-hot-toast";
import { MdAddShoppingCart } from "react-icons/md";
import Image from "next/image";
import { Rate } from "@/app/_components/rate";

interface ProductDetailsProps {
  category?: string;
  slug?: string;
}

export default function ProductDetails({ category, slug }: ProductDetailsProps) {
  const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
  const [isInCart, setIsInCart] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = ProductsListData.find(
    (p) => p.slug === slug && p.category === category
  );

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
      img: `/images/products/${product.img?.[0] || product.img || "none.jpg"}`,
      quantity: 0,
    });
    toast.success("Product successfully added to cart!", {
      icon: <MdAddShoppingCart className="text-green-600 h-6 w-6" />,
    });
  };

  const handleRemoveFromCart = () => {
    removeFromCart(product.product_id, product.title);
  };

  const productImages = product.img
    ? product.img.map(img => `/images/products/${img}`)
    : product.img 
      ? [`/images/products/${product.img}`] 
      : ["/images/products/none.jpg"];

  return (
    <section className="containerD mt-20">
      <div className="flex flex-col md:flex-row gap-20 mt-10 w-3/4 mx-auto">
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
                  selectedImage === index ? 'border-purple-700' : 'border-gray-200 blur-[2px]'
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

        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-xl md:text-2xl xl:text-3xl font-bold text-gray-900">{product.title}</h1>

          <Rate rate={product.rate} ratersNumber={product.ratersNumber} />

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
              className="bg-purple-700 text-white px-3 py-1 rounded hover:bg-purple-600 text-lg"
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
                {cartItems.find((item) => item.id === product.product_id)?.quantity}
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

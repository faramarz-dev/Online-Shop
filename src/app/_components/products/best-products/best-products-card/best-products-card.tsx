// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { IProductCard } from "./best-products-card .types";
// import { IconWishlist } from "@/app/_components/icons/icons";
// import SmallTag from "@/app/_components/small-tag/small-tag";
// import { Rate } from "@/app/_components/rate/rate";

// const BestProductsCard: React.FC<IProductCard> = ({
//   title,
//   img,
//   price,
//   rate,
//   ratersNumber,
//   discount,
//   tag_type,
//   slug,
// }) => {
//   return (
//     <>
//       <div className="product-card-wrapper group relative">
//         <div className="card-tools absolute right-6  flex-col gap-2 group-hover:flex">
//           <a className="" href="shop-wishlist.html">
//             <IconWishlist />
//           </a>
//         </div>
//         <div className="product-card-image-box ">
//           {tag_type ? (
//             <SmallTag tag_type={tag_type}>{`${discount || ""} %`}</SmallTag>
//           ) : (
//             <SmallTag tag_type="success">new</SmallTag>
//           )}
//           <div className="product-image-wrapper">
//             <Image
//               width={200}
//               height={200}
//               src={`/images/bestproducts/${img || 'none.jpg'}`}
//               alt=""
//               className="h-full w-full object-contain"
//             />
//           </div>
//         </div>

//         <div className="card-content">
//           <Link className="product-card-description" href={`/product-details`}>
//             {title}
//           </Link>
//           <div className="product-card-rate-wrapper">
//             <Rate rate={rate} ratersNumber={ratersNumber} />
//           </div>
//           <div className="product-card-price-info group-hover:hidden">
//             <span className="text-lg font-bold">
//               ${((1 - discount / 100) * price).toFixed(0)}
//             </span>{" "}
//             &nbsp;
//             <del className="text-shop-gray-500">${price}</del>
//           </div>
//           <div
//             className={`product-card-buy-button hidden h-[60px] items-center justify-center rounded-md border border-shop-gray-400 px-4 text-center hover:text-white group-hover:flex`}
//           >
//             <a className="" href={`/products/${slug}`}>
//               Add To Cart
//             </a>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BestProductsCard;

"use client";

import React, { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { IProductCard } from "./best-products-card .types";
import { IconWishlist } from "@/app/_components/icons/icons";
import SmallTag from "@/app/_components/small-tag/small-tag";
import { Rate } from "@/app/_components/rate/rate";
import { CartContext } from "@/contexts/cart-context"; // مسیر دقیق رو با توجه به پروژه تنظیم کن
import toast from "react-hot-toast";

const BestProductsCard: React.FC<IProductCard> = ({
  product_id,
  title,
  img,
  price,
  rate,
  ratersNumber,
  discount,
  tag_type,

}) => {
  const { addToCart } = useContext(CartContext);

  const finalPrice = ((1 - discount / 100) * price).toFixed(0);

  const handleAddToCart = () => {
    
    addToCart({
      id: product_id,
      name: title,
      price: Number(finalPrice),
      img: `/images/bestproducts/${img || "none.jpg"}`
    });
    toast.success("Product successfully added to cart!");
  };

  return (
    <div className="product-card-wrapper group relative">
      <div className="card-tools absolute right-6 flex-col gap-2 group-hover:flex">
        <Link href="/shop-wishlist">
          <IconWishlist />
        </Link>
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
            src={`/images/bestproducts/${img || "none.jpg"}`}
            alt=""
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      <div className="card-content">
        <Link className="product-card-description" href={`/product-details`}>
          {title}
        </Link>

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

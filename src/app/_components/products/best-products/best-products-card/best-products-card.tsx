import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IProductCard } from "./best-products-card .types";
import { IconWishlist } from "@/app/_components/icons/icons";
import SmallTag from "@/app/_components/small-tag/small-tag";
import { Rate } from "@/app/_components/rate/rate";

const BestProductsCard: React.FC<IProductCard> = ({
  title,
  img,
  price,
  rate,
  ratersNumber,
  discount,
  tag_type,
  slug,
}) => {
  return (
    <>
      <div className="product-card-wrapper group relative">
        <div className="card-tools absolute right-6  flex-col gap-2 group-hover:flex">
          <a className="" href="shop-wishlist.html">
            <IconWishlist />
          </a>
        </div>
        <div className="product-card-image-box ">
          {tag_type ? (
            <SmallTag tag_type={tag_type}>{`${discount || ""} %`}</SmallTag>
          ) : (
            <SmallTag tag_type="success">new</SmallTag>
          )}
          <div className="product-image-wrapper">
            <Image
              width={200}
              height={200}
              src={`/images/bestproducts/${img || 'none.jpg'}`}
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
            <span className="text-lg font-bold">
              ${((1 - discount / 100) * price).toFixed(0)}
            </span>{" "}
            &nbsp;
            <del className="text-shop-gray-500">${price}</del>
          </div>
          <div
            className={`product-card-buy-button hidden h-[60px] items-center justify-center rounded-md border border-shop-gray-400 px-4 text-center hover:text-white group-hover:flex`}
          >
            <a className="" href={`/products/${slug}`}>
              Add To Cart
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BestProductsCard;

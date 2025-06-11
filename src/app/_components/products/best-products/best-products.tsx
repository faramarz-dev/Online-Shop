"use client";
import { BestProductListData } from "@/data/best-products.data";
import BestProductsCard from "./best-products-card/best-products-card";
import Link from "next/link";

function BestProducts() {
  return (
    <>
      <div className="flex items-center mt-5">
        <div className="bg-purple-900 h-8 w-4 mr-4 rounded-lg"></div>
        <p className="text-purple-900 font-bold">This Month</p>
      </div>
      <div className="flex justify-between items-center ">
        <p className="xs:text-lg lg:text-[2.2rem] md:text-[1.8rem] ">
          Best Selling Products
        </p>
        <Link
          href="/products"
          className="flex text-center justify-center p-3 rounded-xl bg-purple-900 text-white  hover:bg-purple-800"
        >
          <button className="xs:text-xxs md:text-md lg:text-lg">
            See All
          </button>
        </Link>
      </div>

      <div className="inline-flex gap-12 overflow-x-auto w-[100%] p-3 mt-7">
        {BestProductListData.map((item) => (
          <BestProductsCard
            key={item.product_id}
            product_id={item.product_id}
            title={item.title}
            img={item.img}
            price={item.price}
            discount={item.discount}
            rate={item.rate}
            ratersNumber={item.ratersNumber}
            tag_type={item.tag_type}
            slug={item.slug}
          />
        ))}
      </div>
    </>
  );
}

export default BestProducts;

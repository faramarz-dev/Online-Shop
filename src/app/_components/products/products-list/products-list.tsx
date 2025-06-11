'use client'

import React from "react"
import { ProductsListData } from "@/data/products.data"
import ProductsCard from "./products-card/products-card"
import Link from "next/link"

function ProductsList() {
    return (
      <>
        <div className="flex items-center mt-5">
          <div className="bg-purple-900 h-8 w-4 mr-4 rounded-lg"></div>
          <p className="text-purple-900 font-bold">Our Products</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="xs:text-lg lg:text-[2.2rem] md:text-[1.8rem]">
            Explore Our Products
          </p>
          <Link
            href="/products"
            className="flex text-center justify-center p-3 rounded-xl bg-purple-900 text-white  hover:bg-purple-800"
          >
            <button className="xs:text-xxs md:text-md lg:text-lg">
              View All
            </button>
          </Link>
        </div>
        <div className="grid xs:grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-6 lg:grid-cols-4 mt-12">
          {ProductsListData.slice(0, 12).map((item, i) => (
            <ProductsCard
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

export default ProductsList;
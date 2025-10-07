"use client";

import { useParams } from "next/navigation";
import BreadCrumb from "@/app/_components/bread-crumbs/bread-crumbs";
import ProductDetails from "@/app/_components/products/product-details/product-details";
import { ProductsListData } from "@/data/products.data";
import { BestProductListData } from "@/data/best-products.data";
export default function ProductDetailsPage() {
  const { category, slug } = useParams();


const allProductsData=[...ProductsListData,...BestProductListData]
  const product = allProductsData.find(
    (p) => p.slug === slug && p.category === category
  );

  if (!product) {
    return (
      <div className="text-center mt-20 text-red-600 text-lg">
        Product not found.
      </div>
    );
  }

  const BreadCrumbItem = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: `${product.category}`, href: `/products?category=${product.category}` },
    { label: `${product.title}`, href: `/products/${product.category}/${product.slug}` },
  ];

  return (
    <section>
      <section>
        <BreadCrumb items={BreadCrumbItem} />
      </section>
      <section>
        <ProductDetails {...product}/>
      </section>
      <section>
      </section>
    </section>
  );
}
"use client";

import ProductDetails from "@/app/_components/products/product-details/product-details";
import BreadCrumb from "@/app/_components/bread-crumbs/bread-crumbs";
import { ProductsListData } from "@/data/products.data";
import { BestProductListData } from "@/data/best-products.data";

export default function ProductDetailsPage({ category, slug }: { category: string; slug: string }) {
  const allProductsData = [...ProductsListData, ...BestProductListData];
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

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: product.category, href: `/products?category=${product.category}` },
    { label: product.title, href: `/products/${product.category}/${product.slug}` },
  ];

  return (
    <section>
      <BreadCrumb items={breadcrumbItems} />
      <ProductDetails {...product} />
    </section>
  );
}
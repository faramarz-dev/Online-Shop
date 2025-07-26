"use client";

import { useRouter } from "next/navigation"; // ✅ اضافه کردن کنترل مسیر
import { useState } from "react";
import ProductGroups from "../_components/products/products-groups/product-groups";
import AttributeSection from "../_components/attribute-section/attribute";
import BestProducts from "../_components/products/best-products/best-products";
import BannerSlider from "../_components/banner/banner";
import ProductsList from "../_components/products/products-list/products-list";
import NewArrivals from "../_components/new-arrivals/new-arrivals";
import Support from "../_components/support/support";

export default function Home() {
  const router = useRouter();
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null); // ✅ مدیریت دسته انتخاب‌شده

  const handleSelectCategory = (slug: string) => {
    setSelectedSlug(slug);
    router.push(`/products?category=${slug}`); // ✅ هدایت به صفحه محصولات با دسته انتخاب‌شده
  };

  return (
    <>
      <section className="container-fluid mx-auto flex flex-col items-center space-y-[50px] py-16 relative">
        <section className="containerD">
          {/* ✅ ارسال `selectedSlug` و `onSelectCategory` به `ProductGroups` */}
          <ProductGroups
            selectedSlug={selectedSlug}
            onSelectCategory={handleSelectCategory}
          />
        </section>
        <section className="containerD">
          <AttributeSection />
        </section>
        <section className="containerD">
          <BestProducts />
        </section>
        <hr className="border border-gray-100 w-full" />
        <section className="containerD xs:hidden md:block">
          <BannerSlider />
        </section>
        <section className="containerD">
          <ProductsList />
        </section>
        <hr className="border border-gray-100 w-full" />
        <section className="containerD">
          <NewArrivals />
        </section>
        <section className="containerD">
          <Support />
        </section>
      </section>
    </>
  );
}

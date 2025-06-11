"use client";

import React, { FC } from "react";
import { productsGroups } from "@/data/product-groups.data";
import { ProductGroup } from "./product-group"; // ✅ حالا از کامپوننت جدا استفاده می‌کنیم

interface ProductGroupsProps {
  selectedSlug: string | null;
  onSelectCategory: (slug: string) => void;
}

const ProductGroups: FC<ProductGroupsProps> = ({
  selectedSlug,
  onSelectCategory,
}) => {
  return (
    <>
      <div className="flex items-center">
        <div className="bg-purple-900 h-8 w-4 mr-4 rounded-lg"></div>
        <p className="text-purple-900 font-bold">Categories</p>
      </div>
      <p className=" xs:text-lg lg:text-[2.2rem] md:text-[1.8rem]">
        Browse By Category
      </p>
      <div className="w-full flex overflow-x-auto lg:justify-between md:gap-10 pb-3 mt-[60px]">
        {productsGroups.map((group) => (
          <ProductGroup
            key={group.id}
            {...group}
            selectedSlug={selectedSlug} // ✅ ارسال دسته انتخاب‌شده برای تغییر استایل
            onSelectCategory={onSelectCategory}
          />
        ))}
      </div>
    </>
  );
};

export default ProductGroups;

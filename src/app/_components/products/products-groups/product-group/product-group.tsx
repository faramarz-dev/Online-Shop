// import Image from "next/image";
// import React, { FC } from "react";
// import { IProductGroup } from "./product-group.types";

// export const ProductGroup: FC<IProductGroup> = (props) => {
//   const { title, img, count, slug } = props;
//   return (
//     <>
//       <a
//         href={`/product_groups/${slug}`}
//         className="flex w-fit flex-col items-center gap-1"
//       >
//         <div className="border rounded-md w-[150px] h-[150px] p-4 hover:bg-purple-100">
//           <Image
//             src={`/images/product-groups/${img}`}
//             alt="OnlineShop"
//             width="120"
//             height="120"
//           />
//         </div>
//         <p className="mt-2 text-nowrap text-center text-xxs font-semibold leading-[22.5px] text-shop-gray-900 sm:leading-[18px] md:text-md">
//           {title}
//         </p>
//         <p className="text-xxs text-shop-gray-500">{count} items</p>
//       </a>
//     </>
//   );
// };

"use client";

import Image from "next/image";
import React, { FC } from "react";
import { IProductGroup } from "./product-group.types";

interface ProductGroupProps extends IProductGroup {
  selectedSlug: string | null;
  onSelectCategory: (slug: string) => void;
}

export const ProductGroup: FC<ProductGroupProps> = ({
  title,
  img,
  count,
  slug,
  selectedSlug,
  onSelectCategory,
}) => {
  return (
    <div
      role="button"
      aria-label={`Select ${title}`}
      onClick={() => onSelectCategory(slug)}
      className="flex w-fit flex-col items-center gap-1 cursor-pointer transition"
    >
      {/* ✅ فقط تصویر تغییر کند */}
      <div
        className={`border rounded-full w-[100px] h-[100px] md:w-[150px] md:h-[150px] p-4 transition duration-300 ease-in-out ${
          selectedSlug === slug
            ? "bg-purple-200 border-purple-500 rounded-md"
            : "hover:bg-purple-100"
        }`}
      >
        <Image
          src={`/images/product-groups/${img}`}
          alt={title}
          width={120}
          height={120}
          loading="lazy"
        />
      </div>

      {/* ✅ متن بدون تغییر */}
      <p className="mt-2 text-nowrap text-center text-xxs font-semibold">
        {title}
      </p>
      <p className="text-xxs text-shop-gray-500">{count} items</p>
    </div>
  );
};
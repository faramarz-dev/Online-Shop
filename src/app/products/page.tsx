
// "use client";

// import { useSearchParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import BreadCrumb from "../_components/bread-crumbs/bread-crumbs";
// import ProductGroups from "../_components/products/products-groups/product-groups";
// import AllProducts from "../_components/products/all-products/all-products";
// import { ProductsListData } from "@/data/products.data";
// import { PRODUCTS_PER_PAGE } from "@/configs/items-per-page";
// import Pagination from "../_components/pagination/pagination";

// const BreadCrumbItem = [
//   { label: "Home", href: "/" },
//   { label: "Products", href: "/products" },
// ];

// export default function Products() {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const activePage = Number(searchParams.get("page")) || 1;
  
//   const categoryFromURL = searchParams.get("category") || "all"; 
//   const [selectedCategory, setSelectedCategory] = useState(categoryFromURL);
//   const [selectedSlug, setSelectedSlug] = useState<string | null>(categoryFromURL !== "all" ? categoryFromURL : null); // ✅ مدیریت افکت دسته‌بندی

//   useEffect(() => {
//     setSelectedCategory(categoryFromURL);
//     setSelectedSlug(categoryFromURL !== "all" ? categoryFromURL : null); // ✅ تنظیم دسته‌بندی انتخاب‌شده برای افکت
//   }, [categoryFromURL]);

//   const handleReset = () => {
//     setSelectedCategory("all");
//     setSelectedSlug(null); // ✅ حذف دسته‌بندی انتخاب‌شده از نظر افکت
//     router.push("/products");
//   };

//   const handleSelectCategory = (slug: string) => {
//     setSelectedCategory(slug);
//     setSelectedSlug(slug); // ✅ تنظیم دسته انتخاب‌شده برای نمایش افکت
//     router.push(`/products?category=${slug}`);
//   };

//   const filteredProducts =
//     selectedCategory === "all"
//       ? ProductsListData
//       : ProductsListData.filter((product) => product.category === selectedCategory);

//   return (
//     <>
//       <section>
//         <section>
//           <BreadCrumb items={BreadCrumbItem} />
//         </section>
//         <section className="containerD mt-6 border-b-2">
//           {/* ✅ ارسال مقدار `selectedSlug` به `ProductGroups` برای کنترل افکت */}
//           <ProductGroups selectedSlug={selectedSlug} onSelectCategory={handleSelectCategory} />
//           <button
//             type="button"
//             onClick={handleReset} // ✅ هنگام کلیک، دسته انتخاب‌شده حذف می‌شود
//             className="px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-600 transition"
//           >
//             All Products
//           </button>
//         </section>
//         <section className="containerD mt-24">
//           <AllProducts visibleProducts={filteredProducts} />
//         </section>
//         <section>
//           <Pagination activePage={activePage} totalItems={filteredProducts.length} itemsPerPage={PRODUCTS_PER_PAGE} />
//         </section>
//       </section>
//     </>
//   );
// }

"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BreadCrumb from "../_components/bread-crumbs/bread-crumbs";
import ProductGroups from "../_components/products/products-groups/product-groups";
import AllProducts from "../_components/products/all-products/all-products";
import { ProductsListData } from "@/data/products.data";
import { PRODUCTS_PER_PAGE } from "@/configs/items-per-page";
import Pagination from "../_components/pagination/pagination";

const BreadCrumbItem = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
];

export default function Products() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const activePage = Number(searchParams.get("page")) || 1;
  
  const categoryFromURL = searchParams.get("category") || "all"; 
  const [selectedCategory, setSelectedCategory] = useState(categoryFromURL);
  const [selectedSlug, setSelectedSlug] = useState<string | null>(categoryFromURL !== "all" ? categoryFromURL : null);

  useEffect(() => {
    setSelectedCategory(categoryFromURL);
    setSelectedSlug(categoryFromURL !== "all" ? categoryFromURL : null);
  }, [categoryFromURL]);

  const handleReset = () => {
    setSelectedCategory("all");
    setSelectedSlug(null);
    router.push("/products");
  };

  const handleSelectCategory = (slug: string) => {
    setSelectedCategory(slug);
    setSelectedSlug(slug);
    router.push(`/products?category=${slug}`);
  };

  // 🔹 فیلتر کردن محصولات بر اساس دسته‌بندی
  const filteredProducts =
    selectedCategory === "all"
      ? ProductsListData
      : ProductsListData.filter((product) => product.category === selectedCategory);

  // 🔹 اعمال صفحه‌بندی: فقط ۱۲ محصول در هر صفحه نمایش داده شوند
  const startIndex = (activePage - 1) * PRODUCTS_PER_PAGE;
  const endIndex = startIndex + PRODUCTS_PER_PAGE;
  const visibleProducts = filteredProducts.slice(startIndex, endIndex);

  return (
    <>
      <section className="ml-3 lg:ml-0">
        <section>
          <BreadCrumb items={BreadCrumbItem} />
        </section>
        <section className="containerD mt-6 border-b-2">
          <ProductGroups
            selectedSlug={selectedSlug}
            onSelectCategory={handleSelectCategory}
          />
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 bg-purple-800 text-white rounded-md hover:bg-purple-600 transition"
          >
            All Products
          </button>
        </section>
        <section className="containerD mt-24">
          <AllProducts visibleProducts={visibleProducts} />
        </section>
        <section>
          <Pagination
            activePage={activePage}
            totalItems={filteredProducts.length}
            itemsPerPage={PRODUCTS_PER_PAGE}
          />
        </section>
      </section>
    </>
  );
}
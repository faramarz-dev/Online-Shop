import React from "react";
import { IPagination } from "./pagination.types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const Pagination: React.FC<IPagination> = ({
  totalItems,
  activePage,
  itemsPerPage,
}) => {
  // 🔹 محاسبه تعداد صفحات بر اساس تعداد کل محصولات و تعداد نمایش در هر صفحه
  const pageCount = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  
  // 🔹 دریافت مقدار دسته‌بندی از URL، در صورت وجود
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category") ? `&category=${searchParams.get("category")}` : "";

  // 🔹 تنظیم محدوده‌ی نمایش شماره‌های صفحه (۵ صفحه قبل و بعد از صفحه فعال)
  const startPage = Math.max(1, activePage - 2);
  const endPage = Math.min(pageCount, activePage + 2);
  const visiblePages = pages.slice(startPage - 1, endPage);

  return (
    <div className="flex items-center justify-center space-x-4 mt-6 scale-90">
      {/* 🔹 دکمه‌ی "قبلی" (اگر صفحه‌ی فعلی بزرگ‌تر از ۱ باشد) */}
      {activePage > 1 && (
        <Link
          href={`?page=${activePage - 1}${categoryParam}`} // ✅ حفظ دسته‌بندی در هنگام تغییر صفحه
          className="px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full shadow-xl hover:scale-105 transition-all duration-300"
        >
          قبلی
        </Link>
      )}

      {/* 🔹 نمایش شماره‌های صفحات */}
      {visiblePages.map((page) => (
        <Link
          key={page}
          href={`?page=${page}${categoryParam}`} // ✅ حفظ دسته‌بندی در هنگام تغییر صفحه
          className={`px-4 py-2 rounded-full text-center shadow-xl transition-all duration-300 ${
            activePage === page
              ? "bg-gradient-to-r from-purple-700 to-purple-950 text-white font-bold hover:scale-110"
              : "bg-gray-200 text-gray-600 hover:bg-gradient-to-r hover:from-violet-200 hover:to-violet-400 hover:text-white hover:scale-105"
          }`}
        >
          {page}
        </Link>
      ))}

      {/* 🔹 دکمه‌ی "بعدی" (اگر صفحه‌ی فعلی کمتر از تعداد کل صفحات باشد) */}
      {activePage < pageCount && (
        <Link
          href={`?page=${activePage + 1}${categoryParam}`} // ✅ حفظ دسته‌بندی در هنگام تغییر صفحه
          className="px-4 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full shadow-xl hover:scale-105 transition-all duration-300"
        >
          بعدی
        </Link>
      )}
    </div>
  );
};

export default Pagination;
import React from "react";
import Image from "next/image"; // بهینه‌سازی تصویر لوگو

const LoadingSpinner: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full  flex flex-col items-center justify-center z-50">
      {/* متن بارگذاری */}
      <h1 className="text-4xl font-bold mb-6  animate-fade-in">
        LOADING...
      </h1>

      {/* لوگو با افکت محو شدن */}
      <div className="animate-bounce">
        <Image
          src="/images/logo/logo1.png" // مسیر لوگو را تنظیم کنید
          width={100}
          height={100}
          alt="Logo"
          className="rounded-full shadow-lg"
        />
      </div>
    </div>
  );
};

export default LoadingSpinner;

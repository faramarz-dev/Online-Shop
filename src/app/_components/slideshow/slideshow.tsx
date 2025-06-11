"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

interface SlideshowProps {
  images: string[];
  interval?: number; // زمان بین تغییر اسلاید‌ها (اختیاری)
}

const Slideshow: React.FC<SlideshowProps> = ({ images, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval); // زمان قابل تنظیم از طریق props

    return () => clearInterval(slideInterval); // جلوگیری از مشکلات حافظه
  }, [interval, images.length]);

  const goToNextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length); // حرکت به اسلاید بعدی
  };

  const goToPrevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length); // حرکت به اسلاید قبلی
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index); // حرکت به اسلاید مورد نظر با کلیک روی نقطه
  };

  return (
    <div className="relative w-[100%] h-96 overflow-hidden rounded-tl-[6rem] rounded-br-[6rem] group shadow-[0_0_10px_10px_rgba(0,0,0,0.5)]">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image}
          width={1000}
          height={100}
          alt={`Slide ${index + 1}`}
          className={`absolute top-0 left-0 w-full h-96 transition-opacity duration-1000  ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* دکمه قبلی */}
      <button
        onClick={goToPrevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-300  h-[50%] rounded-tl-3xl rounded-tr-md rounded-bl-3xl rounded-br-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <Image src="/images/icons/banner-icons/arrow-left.png" alt="arrow-left" width={30} height={20}/>
      </button>

      {/* دکمه بعدی */}
      <button
        onClick={goToNextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-300 h-[50%] rounded-tl-md rounded-tr-3xl rounded-bl-md rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <Image src="/images/icons/banner-icons/arrow-right.png" alt="arrow-right" width={30} height={20}/>
      </button>

      {/* نقاط */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-gray-50" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;

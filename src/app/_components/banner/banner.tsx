import React from "react";
import Slideshow from "../slideshow/slideshow";

const images = [
  "./images/banner/banner-1.jpg",
  "./images/banner/banner-2.webp",
  "./images/banner/banner-3.webp",
  "./images/banner/banner-5.jpg",
];
function BannerSlideer() {
  return (
    <>
      <div className="mt-24 mb-6">
        <Slideshow images={images} interval={5000} />
      </div>
      
    </>
  );
}

export default BannerSlideer;

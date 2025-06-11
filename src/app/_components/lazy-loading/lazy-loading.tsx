"use client";

import { useState, useEffect, ReactNode } from "react";

interface LazyLoaderProps {
  children: ReactNode;
}

const LazyLoader = ({ children }: LazyLoaderProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    });

    const element = document.getElementById("lazy-component");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <div id="lazy-component">
      {isVisible ? children : <p>در حال بارگذاری...</p>}
    </div>
  );
};

export default LazyLoader;
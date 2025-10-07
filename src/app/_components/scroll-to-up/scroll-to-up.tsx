"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-50 bottom-4 right-4  rounded-full shadow-xl transform transition-all duration-500${
        showButton
          ? "opacity-100 scale-75 bg-gradient-to-r from-slate-100 to-pink-100 hover:scale-90 hover:shadow-2xl"
          : "opacity-0 scale-0"
      }`}
    >
      <Image
        src="/images/icons/scroll/scrollUp.png"
        alt="scrollUp"
        width={65}
        height={40}
      />
    </button>
  );
}



// ..................... Method 2 .................

// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";

// export default function ScrollToTopButton() {
//   const [showButton, setShowButton] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setShowButton(window.scrollY > 300);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToTop = () => {
//     // Start position
//     const startPosition = window.pageYOffset;
//     // Total distance to scroll
//     const distance = startPosition;
//     // Duration of scroll (in ms)
//     const duration = 3000;

//     // Start time
//     let start: number | null = null;
//     // Animation function
//     function animation(currentTime: number) {
//       // If start is null, set start to current time
//       if (start === null) start = currentTime;

//       // Calculate time elapsed
//       const timeElapsed = currentTime - start;

//       // Calculate progress (0 to 1)
//       const progress = Math.min(timeElapsed / duration, 1);

//       // Apply easing function (ease-out)
//       const easeOut = 1 - Math.pow(1 - progress, 3);

//       // Calculate scroll position
//       window.scrollTo(0, startPosition - distance * easeOut);

//       // Continue animation if not complete
//       if (timeElapsed < duration) {
//         requestAnimationFrame(animation);
//       }
//     }

//     // Start animation
//     requestAnimationFrame(animation);
//   };

//   return (
//     <button
//       onClick={scrollToTop}
//       className={`fixed z-50 bottom-4 right-4 rounded-full shadow-xl transform transition-all duration-500${
//         showButton
//           ? "opacity-100 scale-75 bg-gradient-to-r from-slate-100 to-pink-100 hover:scale-90 hover:shadow-2xl"
//           : "opacity-0 scale-0"
//       }`}
//     >
//       <Image
//         src="/images/icons/scroll/scrollUp.png"
//         alt="scrollUp"
//         width={65}
//         height={40}
//       />
//     </button>
//   );
// }

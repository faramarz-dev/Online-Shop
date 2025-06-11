"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "../header";
import { Footer } from "../footer";
import LoadingSpinner from "../loading-spinner/loading-spinner";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [startLoadTime, setStartLoadTime] = useState<number | null>(null);

  useEffect(() => {
    // ثبت زمان شروع بارگذاری
    setStartLoadTime(performance.now());
    
    const timeout = setTimeout(() => {
      const loadDuration = performance.now() - (startLoadTime ?? 0); // محاسبه زمان واقعی لودینگ
      setLoading(false);
      console.log(`✅ زمان بارگذاری واقعی: ${loadDuration.toFixed(2)} میلی‌ثانیه`);
    }, 1000); // تنظیم مقدار مینیموم برای جلوگیری از تغییرات ناگهانی
    
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <>
      <Header />

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loading"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <LoadingSpinner />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {children}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}


// "use client";

// import { useState, useEffect } from "react";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import LazyLoader from "../lazy-loading/lazy-loading"; // ایمپورت کامپوننت LazyLoader
// import { Header } from "../header";
// import { Footer } from "../footer";
// import LoadingSpinner from "../loading-spinner/loading-spinner";

// const LOADING_TIME = 1000;

// export default function ClientWrapper({ children }: { children: React.ReactNode }) {
//   const pathname = usePathname();
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     if (!loading) {
//       setLoading(true);
//       const timeout = setTimeout(() => setLoading(false), LOADING_TIME);
//       return () => clearTimeout(timeout);
//     }
//   }, [pathname]);

//   return (
//     <>
//       <Header />

//       <AnimatePresence mode="wait">
//         {loading ? (
//           <motion.div
//             key="loading"
//             initial={{ opacity: 0, scale: 0.8 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//           >
//             <LoadingSpinner />
//           </motion.div>
//         ) : (
//           <>
//             <LazyLoader>
//               <motion.div
//                 key="content"
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.7, ease: "easeOut" }}
//               >
//                 {children}
//               </motion.div>
//             </LazyLoader>

//             {/* فوتر فقط بعد از لودینگ نمایش داده شود */}
//             {!loading && (
//               <LazyLoader>
//                 <Footer />
//               </LazyLoader>
//             )}
//           </>
//         )}
//       </AnimatePresence>
//     </>
//   );
// }
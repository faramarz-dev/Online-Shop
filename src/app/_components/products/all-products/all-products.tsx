// import React from "react";
// import Link from "next/link";
// import ProductsCard from "../products-list/products-card/products-card";
// import { IAllProductsProps } from "./all-products.types";

// const AllProducts: React.FC<IAllProductsProps> = ({ visibleProducts }) => {
//   return (
//     <>
//       <div className="flex items-center mt-5">
//         <div className="bg-purple-900 h-8 w-4 mr-4 rounded-lg"></div>
//         <p className="text-purple-900 font-bold">All Products</p>
//       </div>
//       <div className="flex justify-between h-28 items-end">
//         <p className="text-[2.5rem] mb-12">Explore Our Products</p>
//       </div>
//       <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
//         {visibleProducts.map((item) => (
//           <ProductsCard
//             key={item.product_id}
//             product_id={item.product_id}
//             title={item.title}
//             img={item.img}
//             price={item.price}
//             discount={item.discount}
//             rate={item.rate}
//             ratersNumber={item.ratersNumber}
//             tag_type={item.tag_type}
//             slug={item.slug}
//           />
//         ))}
//       </div>
//     </>
//   );
// };

// export default AllProducts;


import React from "react";
import ProductsCard from "../products-list/products-card/products-card";
import { IAllProductsProps } from "./all-products.types";

const AllProducts: React.FC<IAllProductsProps> = ({ visibleProducts }) => {
  return (
    <>
      <div className="flex items-center mt-5">
        <div className="bg-purple-900 h-8 w-4 mr-4 rounded-lg"></div>
        <p className="text-purple-900 font-bold">All Products</p>
      </div>
      <div className="flex justify-between h-28 items-end">
        <p className="text-[2.5rem] mb-12">Explore Our Products</p>
      </div>
      <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
        {visibleProducts.map((item) => (
          <ProductsCard key={item.product_id} {...item} />
        ))}
      </div>
    </>
  );
};

export default AllProducts;
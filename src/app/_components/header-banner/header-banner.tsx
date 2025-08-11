// import React from "react";
// import Image from "next/image";
// function HeaderBanner() {
//   return (
//     <>
//       <div className="relative flex mx-auto w-full mt-16 [@media(min-width:1600px)]:max-w-[2000px] z-0">
//         <Image
//           src="/images/header/header-banner.jpg"
//           alt="banner"
//           width={2000}
//           height={1}
//           className="h-72"
//         />
//         <div className="absolute text-white w-[50%] p-5">
//           <h1 className="text-[5rem]">Online Shop</h1>
//           <p className="ml-6">
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
//             rem eveniet nemo maiores option
//           </p>
//           <br />
//           <br />
//           <p className="ml-6">Lorem ipsum dolor sit ame</p>
//           <p></p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default HeaderBanner;

import React from "react";
import Image from "next/image";

function HeaderBanner() {
  return (
    <>
      <div className="relative flex flex-col mt-16 md:flex-row w-full max-w-[2000px] z-0">
        <Image
          src="/images/header/header-banner.jpg"
          alt="banner"
          width={2000}
          height={500}
          className="w-full h-72 object-cover md:h-72"
        />
        <div className="absolute text-white w-full md:w-[60%] p-5 text-center md:text-left">
          <h1 className="text-2xl  md:text-3xl font-bold">Online Shop</h1>
          <p className="mt-4 text-lg md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            rem eveniet nemo maiores option
          </p>
          <br />
          <p className="mt-2 text-lg md:text-xl">Lorem ipsum dolor sit ame</p>
        </div>
      </div>
    </>
  );
}

export default HeaderBanner;
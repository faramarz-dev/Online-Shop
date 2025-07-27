// import Image from 'next/image'
// import Link from 'next/link'
// import { IconClose } from '../icons/icons'
// import { MenuItem } from './menu-item/menu-item'
// import ProfileInfo from './profile-info/profile-info'
// import MobileBaner from './mobile-baner/mobile-baner'
// import HeaderFooter from './header-footer/header-footer'

// export const HeaderMobile: React.FC = () => {
//     return (
//       <>
//         <div className=" fixed cursor-auto right-0 top-0 z-[999] w-[360px] bg-purple-100 p-8">
//           {/* logo && close btn */}
//           <div className="flex justify-between border-b border-shop-gray-border pb-4">
//             {/* Logo */}
//             <Link href="/" className="relative inline-block w-32 md:w-40">
//               <Image
//                 src="/images/logo/logo1.png"
//                 alt="logo"
//                 width={60}
//                 height={37}
//                 className="object-cover"
//               />
//             </Link>
//             <div className='cursor-pointer'>
//               <IconClose strokeWidth={3} />
//             </div>
//           </div>
//           {/* menu item */}
//           <MenuItem />

//           {/* profile info */}
//           <ProfileInfo />
//           {/* mobile baner */}
//           <MobileBaner />

//           {/* footer */}
//           <HeaderFooter />
//         </div>
//       </>
//     );
// }

import { IconClose } from "../icons/icons";
import { MenuItem } from "./menu-item/menu-item";
import ProfileInfo from "./profile-info/profile-info";
import MobileBaner from "./mobile-baner/mobile-baner";
import HeaderFooter from "./header-footer/header-footer";

interface HeaderMobileProps {
  onClose: () => void;
}

export const HeaderMobile: React.FC<HeaderMobileProps> = ({ onClose }) => {
  return (
    <div className="fixed cursor-auto right-0 top-0 z-[999] w-[320px] bg-purple-100 dark:bg-purple-500/40 p-8">
      {/* logo && close btn */}
      <div className="flex justify-between border-b border-shop-gray-border pb-4">
        {/* <Link href="/" className="relative inline-block w-32 md:w-40">
          <Image
            src="/images/logo/logo1.png"
            alt="logo"
            width={60}
            height={37}
            className="object-cover"
          />
        </Link> */}
        <div className="mt-6 mb-4">
          <input
            type="text"
            placeholder="search for items"
            className="w-full px-3 py-2 border border-purple-500 rounded-md focus:outline-none focus:border-purple-700 focus:border-2"
          />
        </div>
        <div className="h-0 bg-black text-gray-500 hover:text-gray-600 cursor-pointer"  onClick={onClose}>
          <IconClose strokeWidth={3} />
        </div>
      </div>

      {/* menu item */}
      <MenuItem />

      {/* profile info */}
      <ProfileInfo />

      {/* mobile baner */}
      <MobileBaner />

      {/* footer */}
      <HeaderFooter />
    </div>
  );
};

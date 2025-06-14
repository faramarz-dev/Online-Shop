import Image from 'next/image'
import Link from 'next/link'
import { IconClose } from '../icons/icons'
import { MenuItem } from './menu-item/menu-item'
import ProfileInfo from './profile-info/profile-info'
import MobileBaner from './mobile-baner/mobile-baner'
import HeaderFooter from './header-footer/header-footer'

export const HeaderMobile: React.FC = () => {
    return (
      <>
        <div className=" fixed right-0 top-0 z-[999] w-[360px] bg-purple-100 p-8">
          {/* logo && close btn */}
          <div className="flex justify-between border-b border-shop-gray-border pb-4">
            {/* Logo */}
            <Link href="/" className="relative inline-block w-32 md:w-40">
              <Image
                src="/images/logo/logo1.png"
                alt="logo"
                width={60}
                height={37}
                className="object-cover"
              />
            </Link>
            <div>
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
      </>
    );
}

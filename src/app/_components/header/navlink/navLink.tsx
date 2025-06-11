

import Link from "next/link";
import { usePathname } from "next/navigation";
export const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  const pathname = usePathname();

  // بررسی لینک فعال
  const isActive = pathname === href;

  return (
    <>
    <Link
      href={href}
      className={`m-2 w-[80px] text-start text-md transition-colors duration-700 ${
        isActive
          ? "font-bold text-purple-800 border-b border-purple-800"
          : "text-shop-gray-900 hover:text-purple-800 hover:border-b hover:border-purple-800"
      } lg:mt-0 lg:text-center `}
    >
      {children}
    </Link>
    
    </>
  );
};

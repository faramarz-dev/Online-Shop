import { BreadCrumbProps } from "./bread-crumbs.types";
import Link from "next/link";

const BreadCrumb: React.FC<BreadCrumbProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb">
      <ul className="flex items-center border-b-2 space-x-2 mt-16 p-3 mx-auto w-full [@media(min-width:1600px)]:max-w-[2000px] ">
        {items.map((item, index) => (
          <li
            key={`${index}-bread-crumb`}
            className={`flex items-center ${
              index !== items.length - 1
                ? "text-gray-600"
                : "text-purple-800 font-bold"
            } `}
          >
            <Link href={item.href} className="hover:underline">
              {item.label}
            </Link>
            {index !== items.length - 1 && (
              <span className="mx-2 text-gray-400">&gt;</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BreadCrumb;

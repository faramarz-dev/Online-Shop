import React from "react";
import Image from "next/image";
import { ISupportItem } from "./support-item.types";

const SupportItem: React.FC<ISupportItem> = (props) => {
  const { title, image, description } = props;
  return (
    <>
      <div className="flex flex-col gap-2 h-72 justify-center items-center w-80  ">
        <div className="xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-purple-950 rounded-full flex justify-center items-center m-6 sm:m-4 md:m-10">
          <div className="lg:scale-100 md:w-16 md:h-16 xs:scale-75 bg-white rounded-full flex object-center">
            <Image
              src={image}
              width={50}
              height={50}
              alt=""
              className="mx-auto my-auto"
            />
          </div>
        </div>
        <h3 className="lg:text-lg  md:text-md xs:text-xxs">{title}</h3>
        <p className=" md:text-xs xs:text-[10px] text-gray-500">
          {description}
        </p>
      </div>
    </>
  );
};

export default SupportItem;
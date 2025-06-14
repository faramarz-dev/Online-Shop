import React from "react";
import Image from "next/image";
import { ISupportItem } from "./support-item.types";

const SupportItem: React.FC<ISupportItem> = (props) => {
  const { title, image, description } = props;
  return (
    <>
      <div className="flex flex-col items-center md:scale-75 lg:scale-100 xs:scale-75">
        <div className="xs:w-20 xs:h-20 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-purple-950 rounded-full flex justify-center items-center m-6 sm:m-4 md:m-10">
          <div className=" md:w-16 md:h-16  bg-white rounded-full flex object-center">
            <Image
              src={image}
              width={50}
              height={50}
              alt=""
              className="mx-auto my-auto"
            />
          </div>
        </div>
        <h3 className="text-lg sm:text-base md:text-2xl">{title}</h3>
        <p className="text-xs sm:text-[10px] md:text-xs text-gray-500">{description}</p>
      </div>
    </>
  );
};

export default SupportItem;
import React from "react";
import { INewArrivalProps } from "./new-arrival.types";
import Image from "next/image";
import Link from "next/link";
const NewArrival: React.FC<INewArrivalProps> = (props) => {
  const { title, description, image } = props;

  return (
    <>
      <div className="h-full relative shadow-6 rounded-md">
        <div className="absolute bottom-4 ml-2 w-2/3">
          <h1 className="lg:text-xl md:text-lg ">{title}</h1>
          <p className="md:text-sm mb-2 xs:text-xxs">{description}</p>
          <Link href={"/"} className="underline md:text-xxs lg:text-sm">
            More
          </Link>
        </div>

        <Image
          src={`/images/new-arrivals/${image}`}
          alt=""
          width={1000}
          height={300}
          className="h-full rounded-md "
        />
      </div>
    </>
  );
};

export default NewArrival;

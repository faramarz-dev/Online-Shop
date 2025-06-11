
import React from "react";
import NewArrivalsData from "@/data/new-arrival.data";
import NewArrival from "./new-arrival/new-arrival";

const NewArrivals = () => {
  const getGridClass = (index: number): string => {
    switch (index % 4) {
      case 0:
        return "row-span-2 col-span-2 text-white";
      case 1:
        return "col-span-2 row-span-1";
      case 2:
        return "row-span-1 sm:col-span-1 xs:col-span-2 text-white";
      default:
        return "row-span-1 col-span-1 text-white";
    }
  };

  return (
    <>
      <div className="flex items-center mt-5">
        <div className="bg-purple-900 h-8 w-4 mr-4 rounded-lg"></div>
        <p className="text-purple-900 font-bold">Featured</p>
      </div>

      <p className="xs:text-[1.8rem] lg:text-[2.2rem] md:text-[1.8rem] ">
        New Arrivals
      </p>

      <div className="mt-10 ">
        <div className=" grid grid-flow-row xs:grid-cols-1 md:grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-3">
          {NewArrivalsData.map((item, i) => (
            <div key={i} className={getGridClass(i)}>
              <NewArrival
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewArrivals;

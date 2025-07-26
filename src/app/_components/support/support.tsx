import React from "react";
import SupportItemsData from "@/data/support-item.data";
import SupportItem from "./support-item/support-item";

function Support() {
  return (
    <>
      <div className="flex lg:justify-around md:justify-around gap-2 mt-10 h-96 bg-purple-100 items-center text-center ">
        {SupportItemsData.map((item, index) => (
          <SupportItem
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
}

export default Support;

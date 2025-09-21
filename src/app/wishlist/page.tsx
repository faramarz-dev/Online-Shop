import React from "react";
import BreadCrumb from "../_components/bread-crumbs/bread-crumbs";
import Wishlist from "../_components/wishlist/wishlist";
function ShopCartPage() {
  const BreadCrumbItem = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Wish List",
      href: "/wishlist",
    },
  ];

  return (
    <>
      <section>
        <section>
          <BreadCrumb items={BreadCrumbItem} />
        </section>
        <section className="containerD">
          <Wishlist />
        </section>
      </section>
    </>
  );
}

export default ShopCartPage;

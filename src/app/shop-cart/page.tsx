import React from "react";
import BreadCrumb from "../_components/bread-crumbs/bread-crumbs";
import ShopCart from "../_components/shop-cart/shop-cart";

function ShopCartPage() {
  const BreadCrumbItem = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Shop Cart",
      href: "/shop-cart",
    },
  ];

  return (
    <>
      <section>
        <section>
          <BreadCrumb items={BreadCrumbItem} />
        </section>
        <section className="containerD">
          <ShopCart />
        </section>
      </section>
    </>
  );
}

export default ShopCartPage;

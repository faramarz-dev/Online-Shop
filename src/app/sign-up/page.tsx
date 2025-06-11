import React from "react";
import AuthForm from "../_components/sign-up/sign-up";
import BreadCrumb from "../_components/bread-crumbs/bread-crumbs";



function SignUpPage() {
    const BreadCrumbItem = [
      {
        label: "Home",
        href: "/",
      },
      {
        label: "Sign Up",
        href: "/sign-up",
      },
    ];
    
  return (
    <>
      <section >
        <section>
          <BreadCrumb items={BreadCrumbItem} />
        </section>
        <section className="containerD">
          <AuthForm />
        </section>
      </section>
    </>
  );
}

export default SignUpPage;

import AboutUs from "../_components/about-us/about-us";
import BreadCrumb from "../_components/bread-crumbs/bread-crumbs";
import Support from "../_components/support/support";
export default function AboutUsPage() {
  const BreadCrumbItem = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About Us",
      href: "/about-us",
    },
  ];
  return (
    <>
      <section>
        <section>
          <BreadCrumb items={BreadCrumbItem} />
        </section>

        <section className="containerD">
          <AboutUs />
        </section>
        <section className="containerD">
          <Support />
        </section>
      </section>
    </>
  );
}

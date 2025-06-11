import ContactForm from "../_components/contact/contact";
import BreadCrumb from "../_components/bread-crumbs/bread-crumbs";

const ContactPage = () => {
  const BreadCrumbItem = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <>
      <section>
        <section>
          <BreadCrumb items={BreadCrumbItem} />
        </section>
        <section className="containerD">
          <ContactForm />
        </section>
      </section>
    </>
  );
};
export default ContactPage;

/** @format */

import Accordion from "../components/Accordion/Accordion";
import Banner from "../components/Banner/Banner";
import Blogs from "../components/Blogs/Blogs";
import Contact from "../components/ContactForm/Contact";
import Footer from "../components/Footer/Footer";
import Brands from "../components/GlobalBrands/Brands";
import Industries from "../components/Industries/Industries";
import OfferedService from "../components/OfferedService/OfferedService";
import Testimonials from "../components/Testimonials/Testimonials";

const MainLayout = () => {
  return (
    <>
      <Banner />
      <Brands />
      <OfferedService />
      <Industries />
      <Accordion />
      <Blogs />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default MainLayout;

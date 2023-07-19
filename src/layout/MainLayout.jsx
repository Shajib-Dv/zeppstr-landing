/** @format */

import Accordion from "../components/Accordion/Accordion";
import Banner from "../components/Banner/Banner";
import Blogs from "../components/Blogs/Blogs";
import Brands from "../components/GlobalBrands/Brands";
import Industries from "../components/Industries/Industries";
import OfferedService from "../components/OfferedService/OfferedService";

const MainLayout = () => {
  return (
    <>
      <Banner />
      <Brands />
      <OfferedService />
      <Industries />
      <Accordion />
      <Blogs />
    </>
  );
};

export default MainLayout;

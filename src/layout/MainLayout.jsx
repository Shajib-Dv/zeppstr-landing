/** @format */

import Banner from "../components/Banner/Banner";
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
    </>
  );
};

export default MainLayout;

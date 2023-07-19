/** @format */

import forbes from "../../assets/forbe-logo.png";
import netflix from "../../assets/netflix.png";
import amazon from "../../assets/amazon.png";
import sej from "../../assets/sej-logo.png";
import entrepreneur from "../../assets/entrepreneur-logo.png";
import BrandInfo from "./BrandInfo";
const Brands = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl text-center font-bold">
        Global Brands that have trusted us
      </h2>
      <div className="brand-container md:h-28 md:w-4/5 mx-auto flex flex-col md:flex-row items-center justify-around gap-8 px-6 mb-20 rounded-lg">
        <img className="w-full" src={forbes} />
        <img className="w-full" src={netflix} />
        <img className="w-full" src={amazon} />
        <img className="w-full" src={sej} />
        <img className="w-full" src={entrepreneur} />
      </div>
      <BrandInfo />
    </div>
  );
};

export default Brands;

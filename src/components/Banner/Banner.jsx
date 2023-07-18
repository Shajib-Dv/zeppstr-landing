/** @format */

import React from "react";
import Navbar from "../Navbar/Navbar";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-wave max-w-[1440px] min-h-[788px] px-8">
        <Navbar />
        <div className="h-full mt-36">
          <div className="flex flex-col md:flex-row items-center justify-center gap-32">
            <div className="w-full md:w-[522px] h-full md:h-[416px] pl-4">
              <p className="text-5xl">
                Best{" "}
                <span className="primary-txt font-bold uppercase">
                  SEO Services
                </span>{" "}
                Company in <br /> Bangalore
              </p>
              <p className="font-bold py-5">
                Get past your competition with latest SEO strategies
              </p>
              <p className="space-y-4">
                If you're looking for the best SEO company for your business,
                PageTraffic is the perfect choice.{" "}
              </p>
              <div className="flex items-center gap-6 mt-8">
                <button className="primary-btn">Talk to our Expert</button>
                <p className="primary-txt underline"> Free Website Audit</p>
              </div>
            </div>
            <form className="w-full md:w-[498px] h-full md:h-[498px] form px-6 pt-12 pb-2 space-y-5">
              <input
                type="text"
                name="name"
                placeholder="NAME"
                className="input w-full "
              />
              <input
                type="email"
                name="email"
                placeholder="EMAIL ID"
                className="input w-full "
              />
              <input
                type="tel"
                name="phone"
                placeholder="PHONE"
                className="input w-full "
              />
              <input
                type="text"
                name="otp"
                placeholder="OTP"
                className="input w-full "
              />
              <div className="flex justify-center md:pt-10">
                <input type="submit" value="Contacts" className="primary-btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

/** @format */

import React from "react";
import Navbar from "../Navbar/Navbar";
import Swal from "sweetalert2";

const Banner = () => {
  const handleContacts = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phone.value;
    const otp = e.target.otp.value;

    const user = { name, email, phone, otp };

    fetch("https://zeppstr-server.vercel.app/users", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire(
            "Your contact info has been saved",
            "Please check you email !",
            "success"
          );
          e.target.reset();
        }
      })
      .catch((err) => Swal.fire(`An Error occurred: ${err.message}`));
  };

  return (
    <div className="banner">
      <div className="banner-wave max-w-[1440px] min-h-[788px] md:px-8">
        <Navbar />
        <div className="h-full mt-36">
          <div className="flex flex-col md:flex-row items-center justify-center gap-32 px-2">
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
            <form
              onSubmit={handleContacts}
              className="w-full md:w-[498px] h-full md:h-[498px] form px-6 pt-12 pb-2 space-y-5"
            >
              <input
                type="text"
                name="name"
                required
                placeholder="NAME"
                className="input w-full "
              />
              <input
                type="email"
                name="email"
                required
                placeholder="EMAIL ID"
                className="input w-full "
              />
              <input
                type="tel"
                name="phone"
                required
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

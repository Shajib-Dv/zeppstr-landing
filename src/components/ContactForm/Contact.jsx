/** @format */

import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235850.81273496852!2d88.18218797827097!3d22.535343079884083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f882db4908f667%3A0x43e330e68f6c2cbc!2sKolkata%2C%20West%20Bengal%2C%20India!5e0!3m2!1sen!2sbd!4v1689763779969!5m2!1sen!2sbd"
        width="100%"
        height="550px"
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <form
        onSubmit={handleSubmit}
        className="bg-[#295DF3] md:w-2/5 h-fit text-white p-6 space-y-4 rounded-lg absolute top-0 right-0 m-10"
      >
        <p className="text-xl font-bold">Get in Touch</p>
        <input
          type="text"
          name="name"
          placeholder="NAME"
          className="input-2 w-full "
        />
        <input
          type="email"
          name="email"
          placeholder="EMAIL ID"
          className="input-2 w-full "
        />
        <input
          type="tel"
          name="phone"
          placeholder="PHONE"
          className="input-2 w-full "
        />
        <input
          type="text"
          name="web"
          placeholder="Website"
          className="input-2 w-full "
        />
        <input
          type="email"
          name="company"
          placeholder="Company Name"
          className="input-2 w-full "
        />
        <input
          type="submit"
          value="Submit"
          className="rounded-3xl p-4 w-full bg-[#EC642B]"
        />
      </form>
    </div>
  );
};

export default Contact;

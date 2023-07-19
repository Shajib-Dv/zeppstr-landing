/** @format */

import React from "react";
import AccordionGroup from "./AccordionGroup";

const Accordion = () => {
  return (
    <>
      <div className="accordion-info flex items-center justify-center flex-col">
        <h2 className="text-3xl text-center font-bold">
          Get a Free SEO Audit!
        </h2>
        <p className="py-4 md:px-80 text-center">
          Let us increase the search engine rank and site traffic of your
          website. Our team of professional SEO experts and copywriters allows
          us to meet the needs of companies with complex websites in competitive
          industries.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-5">
          <input
            type="url"
            placeholder="Inter your Website URL"
            className="seo-input"
          />
          <input
            type="email"
            placeholder="Inter your Email ID"
            className="seo-input"
          />
          <button className="btn btn-accent rounded-3xl shadow-2xl">
            Free Website Adit
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 my-20 h-96">
        <AccordionGroup />

        <div className="text-white text-justify bg-[#4782F5] p-6 second-scroll  overflow-y-auto">
          <h2 className="text-3xl text-left">
            Get Traffic Ticking With Our <br /> Premium SEO Service.
          </h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus similique totam minima sequi excepturi quidem incidunt
            corporis nihil, amet eius harum pariatur nobis quasi consectetur
            mollitia aliquam a, culpa quod? Sed temporibus perspiciatis quas nam
            provident ipsa delectus sunt sequi qui, corrupti quaerat quae porro
            optio quibusdam dolorem dolore animi vero quis maxime ut?
            Consectetur quibusdam, vitae aliquid ab minus fugiat possimus rerum
            placeat ipsam voluptatem? Fugit at, quod voluptatum nulla voluptatem
            optio! Exercitationem tempore quidem blanditiis officia omnis nihil
            qui sit inventore impedit sequi rerum eligendi est quos, rem ex eum,
            corporis architecto beatae natus facere. Eveniet autem quasi nam
            architecto ducimus minima nesciunt beatae placeat eius? Accusamus
            repellat velit rem sed distinctio nihil eveniet? Sit sapiente beatae
            temporibus eos, odio, aut laboriosam delectus laudantium ratione,
            non consectetur possimus quaerat in nulla aliquam doloremque dolorum
            et ipsum repellat officia magnam dolores ipsa. Assumenda quae
            laboriosam magnam officia tempora minus, nostrum cumque veniam et
            quas doloribus, rerum quasi aspernatur deserunt in expedita cum
            dolore saepe sequi. Veritatis blanditiis natus commodi, consequuntur
            soluta rerum atque esse aperiam ducimus perspiciatis doloremque
            quibusdam. Maiores sunt eum repellat id alias voluptatibus minima
            odio deserunt ut, odit unde eveniet omnis inventore eligendi ipsam
            saepe eius.
          </p>
        </div>
      </div>
    </>
  );
};

export default Accordion;

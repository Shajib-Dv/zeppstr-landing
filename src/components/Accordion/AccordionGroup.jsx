/** @format */

const AccordionGroup = () => {
  return (
    <div className="px-4 font-bold bg-[#F2F8FE] space-y-5 pt-8 hide-scroll overflow-y-auto h-full">
      <h2 className="text-3xl text-[#ED7848]">Some of FAQ's</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
        voluptatem!
      </p>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" checked="checked" />
        <div className="collapse-title text-[#4580F4] text-2xl font-medium">
          What is SEO?
        </div>
        <div className="collapse-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            similique aperiam dolores quo distinctio ipsa quisquam consequatur
            est, nostrum velit!
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-[#4580F4] text-2xl font-medium">
          Why Should I Use SEO?
        </div>
        <div className="collapse-content">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus cum
            atque dolore quos tempora repellat illum, ducimus, laborum
            laudantium ullam, exercitationem optio unde.
          </p>
        </div>
      </div>
      <div className="collapse collapse-plus ">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-[#4580F4] text-2xl font-medium">
          What is the Benefit of SEO?
        </div>
        <div className="collapse-content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugit
            modi quis eligendi beatae hic voluptas ipsam ipsum assumenda
            doloribus natus deserunt, incidunt libero officia quas ea rem atque,
            quae iusto odit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccordionGroup;

/** @format */

import rank from "../../assets/rank.png";
const Blogs = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-around px-4">
        <div className="w-full">
          <h2 className="text-[#ED7848] font-bold text-3xl">Our Blogs</h2>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <p className="md:px-20">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          voluptatum commodi dolorem quo reiciendis impedit earum atque, ut modi
          illum quibusdam odio
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 mt-10">
        <div>
          <div className="relative mb-10">
            <img src={rank} />
            <p className="absolute -bottom-4 left-10 btn">19th July 2023</p>
          </div>
          <h2 className="text-2xl font-bold">
            Top 10 Things to Improve Skills
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
            adipisci eaque optio voluptas accusantium error quas, laborum
            debitis blanditiis dicta....
          </p>
        </div>
        <div>
          <div className="card lg:card-side bg-base-100 shadow-xl mb-2">
            <figure className="md:w-1/2 min-h-full">
              <img src={rank} className="h-full object-cover" />
            </figure>
            <div className="card-body">
              <p>19th July 2023</p>
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
            </div>
          </div>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="md:w-1/2 min-h-full">
              <img src={rank} className="h-full object-cover" />
            </figure>
            <div className="card-body">
              <p>19th July 2023</p>
              <h2 className="card-title">New album is released!</h2>
              <p>Click the button to listen on Spotiwhy app.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-6 my-10">
        <button className="btn btn-outline btn-accent rounded-3xl">
          See All Testimonials
        </button>
        <button className="btn btn-primary rounded-3xl">
          Review On Google
        </button>
      </div>
      <img src={rank} />
    </>
  );
};

export default Blogs;

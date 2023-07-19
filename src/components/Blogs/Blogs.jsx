/** @format */

import blog from "../../assets/blog.png";
import rank from "../../assets/rank.png";
const Blogs = () => {
  return (
    <>
      <div>
        <img src={blog} />
        <div className="flex items-center justify-center gap-6 my-10">
          <button className="btn btn-outline btn-accent rounded-3xl">
            See All Testimonials
          </button>
          <button className="btn btn-primary rounded-3xl">
            Review On Google
          </button>
        </div>
        <img src={rank} />
      </div>
    </>
  );
};

export default Blogs;

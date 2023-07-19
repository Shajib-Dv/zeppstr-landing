/** @format */

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import user from "../../assets/user.jpg";
import logo from "../../assets/amazon.png";

const Testimonials = () => {
  return (
    <div className="bg-[#F8F9FA] mt-10 p-5">
      <h2 className="text-3xl text-center font-bold">
        Reviews From Our Customers
      </h2>
      <div>
        <Swiper
          direction={"vertical"}
          slidesPerView={1}
          spaceBetween={30}
          mousewheel={true}
          pagination={{
            clickable: true,
          }}
          modules={[Mousewheel, Pagination]}
          className="mySwiper md:w-1/2 mx-auto h-96 "
        >
          <SwiperSlide className="mt-10">
            <div className="bg-[#FFFFFF] md:p-10 p-6 ml-20 relative">
              <p className="text-5xl text-blue-700">&#8220;</p>
              <i>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                in sapiente eligendi porro modi eos officia qui accusamus quae,
                debitis reiciendis dolorum dignissimos ipsam omnis accusantium
                ab, neque eius tenetur?
              </i>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold pt-4">Shajib Hossain </p>
                  <small>Frontend Developer</small>
                </div>
                <div>
                  <img src={logo} className="w-12 md:w-auto" />
                </div>
              </div>
              <div className="absolute top-24 -left-16 z-20">
                <img src={user} className="md:w-24 w-20" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mt-10">
            <div className="bg-[#FFFFFF] md:p-10 p-6 ml-20 relative">
              <p className="text-5xl text-blue-700">&#8220;</p>
              <i>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                in sapiente eligendi porro modi eos officia qui accusamus quae,
                debitis reiciendis dolorum dignissimos ipsam omnis accusantium
                ab, neque eius tenetur?
              </i>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold pt-4">Shajib Hossain </p>
                  <small>Frontend Developer</small>
                </div>
                <div>
                  <img src={logo} className="w-12 md:w-auto" />
                </div>
              </div>
              <div className="absolute top-24 -left-16 z-20">
                <img src={user} className="md:w-24 w-20" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="mt-10">
            <div className="bg-[#FFFFFF] md:p-10 p-6 ml-20 relative">
              <p className="text-5xl text-blue-700">&#8220;</p>
              <i>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
                in sapiente eligendi porro modi eos officia qui accusamus quae,
                debitis reiciendis dolorum dignissimos ipsam omnis accusantium
                ab, neque eius tenetur?
              </i>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold pt-4">Shajib Hossain </p>
                  <small>Frontend Developer</small>
                </div>
                <div>
                  <img src={logo} className="w-12 md:w-auto" />
                </div>
              </div>
              <div className="absolute top-24 -left-16 z-20">
                <img src={user} className="md:w-24 w-20" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;

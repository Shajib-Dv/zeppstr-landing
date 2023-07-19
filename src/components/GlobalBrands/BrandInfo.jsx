/** @format */
import serviceLogo1 from "../../assets/service-logo1.png";
import serviceLogo2 from "../../assets/service-logo2.png";
const BrandInfo = () => {
  return (
    <div className="md:w-4/5 mx-auto flex flex-col md:flex-row gap-16 mb-20">
      <div className="w-full p-2">
        <h3 className="text-2xl font-bold leading-10">
          What do we offer you as an <br />
          <span className="primary-txt">SEO Agency?</span>
        </h3>
        <p className="py-4">
          Nowadays, SEO optimization is an indispensable element for businesses
          that want to succeed online. Our SEO strategies will help you grow
          your business online and rank higher in Google search results. In
          addition, our dedicated team will also provide weekly and monthly
          reports of your page's positions regarding the used keywords, links
          obtained and indexed pages.
        </p>
        <div className="flex items-center gap-20 ">
          <div>
            <p className="text-[#FF1D03] text-2xl font-semibold">1.9k</p>
            <p>Total Audience</p>
          </div>
          <div>
            <p className="text-[#2EC4B6] text-2xl font-semibold">5.7k</p>
            <p>Complete Project</p>
          </div>
        </div>
        <button className="second-btn mt-8">Explore Now</button>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 px-2 md:p-0">
        <div className="primary-card">
          <img src={serviceLogo1} />
          <h2 className="text-xl font-bold leading-10">Global SEO</h2>
          <p>
            We combine creative SEO tactics, enhanced marketing techniques, and
            high-end inbound content marketing to help businesses rank in the
            targeted country.
          </p>
        </div>
        <div className="secondary-card md:mt-8">
          <div className="p-5 bg-[#2ec4b553] w-fit rounded-lg">
            <img src={serviceLogo2} />
          </div>
          <h2 className="text-xl font-bold leading-10">Local SEO</h2>
          <p>
            We help position your business in the first position of local
            searches performed by users.
          </p>
        </div>
        <div className="secondary-card md:-mt-8">
          <div className="p-5 bg-[#2ec4b553] w-fit rounded-lg">
            <img src={serviceLogo2} />
          </div>
          <h2 className="text-xl font-bold leading-10">Naitonal SEO</h2>
          <p>
            Our highly proficient SEO team has in-depth knowledge of the ongoing
            market trends and can make you a national leader in no time.
          </p>
        </div>
        <div className="primary-card">
          <img src={serviceLogo1} />
          <h2 className="text-xl font-bold leading-10">Product SEO</h2>
          <p>Looking to get higher ROI by improving website.</p>
          <a href="#" className="primary-txt flex items-end h-20 font-semibold">
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BrandInfo;

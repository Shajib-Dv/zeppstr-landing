/** @format */
import serviceLogo from "../../assets/service-logo.png";
const OfferedService = () => {
  return (
    <div className="max-w-[1456px]">
      <div className="md:h-96 flex flex-col md:flex-row items-start gap-6 justify-between text-white px-4 pt-8 pb-4 bg-blue-700">
        <div className="font-bold w-full">
          <h2 className="text-3xl">Service We Offer</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam,
            repellendus incidunt obcaecati eaque aut veritatis vel.
          </p>
        </div>
        <div className="w-full">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut ducimus
            molestias esse eum vitae consequuntur nostrum amet ad nisi? Ut
            delectus adipisci, corrupti a vel necessitatibus ab quibusdam saepe
            natus?
          </p>
        </div>
      </div>
      <div className="md:-mt-36">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-black px-2">
          <div className="md:col-span-2 rounded-none w-full card lg:card-side bg-yellow-500 shadow-xl">
            <div className="card-body">
              <h2 className="card-title font-bold">Global SEO</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, odit fugit similique eos commodi labore.
              </p>
            </div>
            <figure className="md:w-full p-4">
              <img src={serviceLogo} />
            </figure>
          </div>

          <div className="card card-compact w-full bg-[#E8D0D5] rounded-none shadow-xl">
            <figure className="p-4">
              <img src={serviceLogo} />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">Local SEO</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, inventore?
              </p>
            </div>
          </div>

          <div className="card card-compact w-full bg-[#6CD8F1] rounded-none shadow-xl">
            <figure className="p-4">
              <img src={serviceLogo} />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">National SEO</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, inventore?
              </p>
            </div>
          </div>

          <div className="card card-compact w-full bg-[#E4B89E] rounded-none shadow-xl">
            <figure className="p-4">
              <img src={serviceLogo} />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">E-commerce Marketing</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, inventore?
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 text-white mt-5 px-2">
          <div className="card card-compact w-full bg-[#275DF6] rounded-none shadow-xl">
            <figure className="p-4">
              <img src={serviceLogo} />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">Guest Posting</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, inventore?
              </p>
            </div>
          </div>

          <div className="card card-compact w-full bg-[#7DBBDE] rounded-none shadow-xl">
            <figure className="p-4">
              <img src={serviceLogo} />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">App Store Optimization</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, inventore?
              </p>
            </div>
          </div>

          <div className="card card-compact w-full bg-[#6AD1B4] rounded-none shadow-xl">
            <figure className="p-4">
              <img src={serviceLogo} />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-bold">Mobile-App Marketing</h2>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Commodi, inventore?
              </p>
            </div>
          </div>

          <div className="md:col-span-2 rounded-none w-full card lg:card-side bg-[#3F33A2] shadow-xl">
            <div className="card-body">
              <h2 className="card-title font-bold">Content Marketing</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Numquam, odit fugit similique eos commodi labore.
              </p>
            </div>
            <figure className="md:w-full p-4">
              <img src={serviceLogo} />
            </figure>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 my-10">
        <button className="btn btn-outline btn-accent rounded-3xl">
          Request a free Quot
        </button>
        <button className="btn btn-primary rounded-3xl">
          Talk to Our Expert
        </button>
      </div>
    </div>
  );
};

export default OfferedService;

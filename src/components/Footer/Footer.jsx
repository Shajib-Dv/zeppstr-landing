/** @format */

import logo from "../../assets/logo.png";
import user from "../../assets/user.jpg";
import {
  FaCircle,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="p-10 footer-section">
      <footer className="footer justify-between  text-base-content">
        <div className="w-full">
          <img src={logo} />
          <p className="py-3">
            FindBestSEO has ranked PageTraffic <br /> among the top 10 SEO
            companies for 2020.
          </p>
          <div className="flex items-center gap-10">
            <FaFacebook className="txt-grn text-2xl " />
            <FaTwitter className="txt-grn text-2xl " />
            <FaLinkedin className="txt-grn text-2xl " />
            <FaInstagram className="txt-grn text-2xl " />
            <FaYoutube className="txt-grn text-2xl " />
          </div>
        </div>
        <div className="md:mt-10 w-full">
          <span className="font-bold text-xl txt-grn">Company</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>

        <div className="md:mt-10 md:w-4/5">
          <span className="font-bold text-xl txt-grn">Latest News</span>
          <div className="flex items-center gap-5">
            <img src={user} className="w-24" />
            <div>
              <p className="text-xl txt-grn font-bold">
                Lorem ipsum dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, hic?
              </p>
              <p className="text-[#EC642B] flex items-center gap-3">
                <FaCircle />
                19th July 2023
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img src={user} className="w-24" />
            <div>
              <p className="text-xl txt-grn font-bold">
                Lorem ipsum dolor sit amet.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quaerat, hic?
              </p>
              <p className="text-[#EC642B] flex items-center gap-3">
                <FaCircle />
                19th July 2023
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex items-center justify-between mt-10">
        <p>© 2021 DeMO Insurance Inc. Patent Pending. All Rights Reserved.</p>
        <p>
          <span className="txt-grn">Privacy</span> | Terms of Service
        </p>
      </div>
    </div>
  );
};

export default Footer;

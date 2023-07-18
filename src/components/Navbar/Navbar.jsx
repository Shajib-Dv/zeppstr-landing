/** @format */

import logo from "../../assets/logo.png";
import NavItems from "./NavItems";
const Navbar = () => {
  return (
    <div className="navbar bg-transparent md:pr-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <div
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-[calc(100vw-20px)] cursor-pointer"
          >
            <NavItems />
          </div>
        </div>
        <div className="md:pl-16">
          <img src={logo} alt="logo" className="w-full" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="menu menu-horizontal space-x-4 font-semibold cursor-pointer">
          <NavItems />
        </div>
      </div>
      <div className="navbar-end md:w-fit md:pl-10">
        <a className="primary-btn">Contacts</a>
      </div>
    </div>
  );
};

export default Navbar;

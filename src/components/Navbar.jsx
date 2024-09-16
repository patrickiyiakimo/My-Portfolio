import React from "react";
import CoreSkills from "./CoreSkills";
import Languages from "./Languages";
import Tools from "./Tools";
import Footer from "./Footer";
import { CiMenuKebab } from "react-icons/ci";
import RightSection from "../pages/RightSection";

const Navbar = () => {
  return (
    <div className="drawer ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn bg-gray-800">
          <CiMenuKebab className="animate-pulse-scale text-3xl text-green-400 w-5 md:w-10  hover:text-black" />
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 backdrop-blur-md w-72 md:w-80 min-h-full text-base-content  ">
          <div className="text-gray-100  ">
            <div className="backdrop-blur-md w-64  rounded-md md:ml-2">
              <div className=" ">
                <figure>
                  <img
                    src="/images/pato.JPG"
                    alt="patick picture"
                    className=" rounded-md  mb-10 "
                  />
                </figure>
              </div>
              <div className=" flex justify-center items-center mr-3 font-bold text-2xl">
                Fullstack Engineer
              </div>
              <hr className="w-60 ml-2 mt-4 border-2 border-solid border-green-600 "></hr>
              <CoreSkills />
              <Tools />
              <Languages />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
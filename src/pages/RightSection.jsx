import React from "react";
import { FaHome } from "react-icons/fa";
import { PiSelectionBackgroundFill } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const RightSection = () => {
  return (
    <div className="">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ml-96">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn  bg-gray-800"
          >
            <TiThMenuOutline className=" hover:text-black animate-pulse-scale text-3xl text-green-400 w-5 md:w-10" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full backdrop-blur-md pt-52 font-semibold text-xl text-gray-100">
            {/* Sidebar content here */}
            <li>
              <a href="#home">
                <FaHome /> Home
              </a>
            </li>
            <Link to="/background">
              <li>
                <a>
                  <PiSelectionBackgroundFill /> Background
                </a>
              </li>
            </Link>
            <Link to="/portfolio">
              <li>
                <a>
                  <FaRegLightbulb />
                  Projects
                </a>
              </li>
            </Link>
            <Link to="/contact">
              <li>
                <a>
                  <FaPhoneAlt />
                  Contact
                </a>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
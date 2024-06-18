import React from "react";
import { FaHome } from "react-icons/fa";
import { PiSelectionBackgroundFill } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";
import { FaCode } from "react-icons/fa";

const RightSection = () => {
  return (
    <div className="">
      <div className="drawer drawer-end">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ml-96">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-4"
            className="drawer-button btn btn-primary"
          >
            Right drawer
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-gray-600  pt-64 pl-10 font-semibold text-xl text-gray-100">
            {/* Sidebar content here */}
            <li>
              <a>
                <FaHome /> Home
              </a>
            </li>
            <li>
              <a>
                <PiSelectionBackgroundFill /> Background
              </a>
            </li>
            <li>
              <a>
                <FaRegLightbulb />
                Portfolio
              </a>
            </li>
            <li>
              <a>
                <FaCode />
                Other Skills
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RightSection;

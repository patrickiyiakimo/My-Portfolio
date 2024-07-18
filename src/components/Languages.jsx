import React from "react";
import { FaDownload } from "react-icons/fa6";

const Languages = () => {
  return (
    <div className="mb-5  ">
      <div
        className="radial-progress ml-5 mt-5 mr-10 text-green-600 font-semibold"
        style={{ "--value": 90 }}
        role="progressbar"
      >
        98%
      </div>
      <div
        className="radial-progress mt-5 text-green-600 font-semibold"
        style={{ "--value": 80 }}
        role="progressbar"
      >
        80%
      </div>
      <div className="flex ml-7">
        <p className="mr-24 ">English</p>
        <p>Igbo</p>
      </div>
      <hr className="w-60 ml-2 mt-4 border-2 border-solid border-green-600 "></hr>
      <p className="ml-5 mt-5">Email Address</p>
      <small className="ml-5 text-gray-400">
        iyiakimopatrick2002@gmail.com
      </small>
      <p className="ml-5 mt-5">Phone Number</p>
      <small className="ml-5 text-gray-400">+2348143643066</small>
      <hr className="w-60 ml-2 mt-4 mb-5 border-2 border-solid border-green-600 "></hr>
      <a
        href="https://flowcv.com/resume/ws4se0s24h"
        className=" font-semibold hover:underline hover:text-green-200 gap-3 flex justify-center items-center"
      >
        View Resume <FaDownload />
      </a>
      <progress className="progress w-56 ml-3"></progress>
    </div>
  );
};

export default Languages;

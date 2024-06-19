import React from "react";
import background from "../images/galaxy.webp";
import Navbar from "../components/Navbar";
import RightSection from "./RightSection";
import avatar from "../images/avataaars.png";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { PiSelectionBackgroundFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa";


const Hero = () => {
  return (
    <div
      className="bg-cover h-screen bg-bottom w-full"
      style={{ backgroundImage: `url(${background})` }}
    >
      {/* <div className="flex md:hidden md:flex md:mr-10 ">
        <Navbar />
        <RightSection className="" />
      </div> */}
      <div className="bg-gray-900  bg-opacity-30 backdrop-blur-lg p-10  shadow-lg text-gray-200 md:ml-40 md:mr-40 pt-10 pb-10 rounded-md">
        <div className="md:ml-20 md:mr-20 bg-gray-800 pt-6 pb-10    bg-opacity-30 backdrop-blur-lg p-10 rounded-lg shadow-lg">
          <div className="hidden md:flex md:mr-10 ">
            <Navbar className="" />
            <RightSection className="" />
          </div>

          <img src={avatar} alt="my avatar" className="w-40 ml-16 md:ml-64 " />
          <h1 className="text-center text-2xl md:text-4xl font-bold">
            Hello, my name is Patrick Iyiakimo
          </h1>
          <p className="md:pl-10 mt-4 text-xl md:text-3xl text-center">
            I am a Frontend Engineer
          </p>

          <p className="bg-green-500 text-gray-600 pl-10 mt-4 rounded-full md:ml-52 w-72 text-xl ">
            2 years of Experience
          </p>
        </div>
        <div className="md:grid md:grid-cols-2 text-green-500 pt-2">
          <p className="md:ml-20 ">
            <button className="pr-2">
              <FaGithub />
            </button>
            https://github.com/patrickiyiakimo
          </p>
          <p>
            <button className="pr-2">
              <FaLinkedin />
            </button>
            https://linkedin.com/in/patrick-iyiakimo-6a15a226a
          </p>
          <p className="md:ml-20">
            <button className="pr-2">
              <PiSelectionBackgroundFill />
            </button>
            My Background
          </p>
          <p>
            <button className="pr-2">
              <FaCode />
            </button>
            Other Skills & Hobbies
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

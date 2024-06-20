import React from "react";
import background from "../images/galaxy.webp";
import Navbar from "../components/Navbar";
import RightSection from "./RightSection";
import avatar from "../images/avataaars.png";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { PiSelectionBackgroundFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      className="bg-cover h-screen bg-bottom w-full pt-16"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-gray-900  bg-opacity-30 backdrop-blur-lg p-10  shadow-lg text-gray-200 md:ml-40 md:mr-40 pt-10 pb-10 rounded-md">
        <div className="md:ml-20 md:mr-20 bg-gray-800 pt-6 pb-10    bg-opacity-30 backdrop-blur-lg p-10 rounded-lg shadow-lg">
          <div className="hidden md:flex md:mr-10 ">
            <Navbar className="" />
            <RightSection className="" />
          </div>

          <img src={avatar} alt="my avatar" className="w-40 ml-16 md:ml-64 " />
          <h1 className=" text-xl md:text-4xl text-center font-bold">
            Hello, I am Patrick Iyiakimo
          </h1>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <TypeAnimation
              sequence={[
                "I am a Frontend Engineer",
                2000,
                "With 2 years of experience ",
                2000,
                "and I am passionate about problem solving.",
                2000,
                "You can click on any of the Icons to know more about me. Thank You :)",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "1em", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 text-gray-300 pt-2">
          <p className="md:ml-20  hover:text-green-500">
            <button className="pr-2">
              <FaGithub />
            </button>
            <a href=" https://github.com/patrickiyiakimo" className="">
              https://github.com/patrickiyiakimo
            </a>
          </p>
          <p className=" hover:text-green-500">
            <button className="pr-2 ">
              <FaLinkedin />
            </button>
            <a
              href=" https://linkedin.com/in/patrick-iyiakimo-6a15a226a"
              className=""
            >
              https://linkedin.com/in/patrick-iyiakimo-6a15a226a
            </a>
          </p>
          <p className="md:ml-20  hover:text-green-500">
            <button className="pr-2">
              <PiSelectionBackgroundFill />
            </button>
            <a href="/"> My Background</a>
          </p>
          <p className=" hover:text-green-500">
            <button className="pr-2">
              <FaCode />
            </button>
            <a href="/"> Other Skills & Hobbies</a>
          </p>
        </div>
      </div>
      {/* <div className="flex md:hidden">
        <Navbar className=""/>
        <RightSection className="" />
      </div> */}
    </div>
  );
};

export default Hero;

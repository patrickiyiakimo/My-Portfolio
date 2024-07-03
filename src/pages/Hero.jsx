import React from "react";
import background from "../images/galaxy.webp";
import Navbar from "../components/Navbar";
import RightSection from "./RightSection";
import avatar from "../images/avataaars.png";
import html from "../images/HTML logo.png";
import css from "../images/CSS logo.png";
import javascript from "../images/JavaScript.png";
import tailwind from "../images/Tailwind logo.png";
import next from "../images/Next js logo.png";
import chakra from "../images/ChakraUI logo.jpeg";
import material from "../images/Material UI logo.png";
import typescript from "../images/Typescript logo.png";
import react from "../images/React.png";
import vue from "../images/Vue js logo.png";
import nodejs from "../images/Node jslogo.png";
import expressjs from "../images/Expressjs logo.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div
      className="bg-cover h-screen w-full overflow-hidden text-gray-200"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="text-gray-800 bg-white h-full bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row mb-10 mr-20 -ml-3 md:mr-40 md:ml-20 pt-5">
          <Navbar className="mb-4 md:mb-0" />
          <RightSection className="mb-4 md:mb-0" />
        </div>
        <div className="text-center">
          <img
            src={avatar}
            alt="my avatar"
            className="w-36 mx-auto md:w-40 mb-4"
          />
          <h1 className="text-xl md:text-6xl font-bold mb-4">
            Hello, I am Patrick Iyiakimo
          </h1>
          <TypeAnimation
            sequence={[
              "I am a Frontend Engineer",
              2000,
              "and a passionate problem solver.",
              2000,
            ]}
            wrapper="span"
            speed={10}
            style={{ fontSize: "2em", color: "white", fontWeight: "bold" }}
            repeat={Infinity}
          />
          <p>You can click on any of the Icons to know more about me</p>
          <TypeAnimation
            sequence={[" Thank You :)", 2000]}
            wrapper="span"
            speed={10}
            style={{ fontSize: "2em", color: "white", fontWeight: "bold" }}
            repeat={Infinity}
          />
        </div>
        <div className="ml-10 pb-10 grid grid-cols-4 md:flex md:items-center md:justify-center gap-4 text-center text-gray-300 pt-10">
          <img src={html} alt="html logo" className="w-8" />
          <img src={css} alt="css logo" className="w-8" />
          <img src={javascript} alt="javascript logo" className="w-8" />
          <img src={vue} alt="vue logo" className="w-8" />
          <img src={react} alt="react logo" className="w-8" />
          <img src={tailwind} alt="tailwind logo" className="w-8" />
          <img src={next} alt="next logo" className="w-8" />
          <img src={typescript} alt="typescript logo" className="w-8" />
          <img src={chakra} alt="chakra logo" className="w-8" />
          <img src={material} alt="material logo" className="w-8" />
          <img src={nodejs} alt="nodejs logo" className="w-8" />
          <img src={expressjs} alt="expressjs logo" className="w-8" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

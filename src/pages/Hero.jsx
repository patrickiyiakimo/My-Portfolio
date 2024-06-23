import React from "react";
import background from "../images/galaxy.webp";
import Navbar from "../components/Navbar";
import RightSection from "./RightSection";
import avatar from "../images/avataaars.png";
import html from '../images/HTML logo.png';
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
      className="bg-cover h-screen w-full  overflow-hidden"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="bg-gray-900 bg-opacity-30 backdrop-blur-lg p-10 shadow-lg text-gray-200 mx-auto max-w-6xl h-full flex flex-col justify-center rounded-md">
  
        <div className="-mt-20 md:mt-1 bg-gray-800 bg-opacity-30 backdrop-blur-lg p-10 rounded-lg shadow-lg">
          <div className=" md:mr-14 md:flex  md:mb-10">
            <Navbar />

            <RightSection />
          </div>

          <div className="text-center">
            <img src={avatar} alt="my avatar" className="w-40 mx-auto mb-4" />
            <h1 className="text-xl md:text-6xl font-bold mb-4">
              Hello, I am Patrick Iyiakimo
            </h1>

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

          <div className="grid grid-cols-4 md:flex md:items-center md:justify-center gap-4 text-center text-gray-300 pt-10">
            <img src={html} alt="html logo" className="w-8" />
            <img src={css} alt="html logo" className="w-8" />
            <img src={javascript} alt="html logo" className="w-8" />
            <img src={vue} alt="html logo" className="w-8" />
            <img src={react} alt="html logo" className="w-8" />
            <img src={tailwind} alt="html logo" className="w-8" />
            <img src={next} alt="html logo" className="w-8" />
            <img src={typescript} alt="html logo" className="w-8" />
            <img src={chakra} alt="html logo" className="w-8" />
            <img src={material} alt="html logo" className="w-8" />
            <img src={nodejs} alt="html logo" className="w-8" />
            <img src={expressjs} alt="html logo" className="w-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
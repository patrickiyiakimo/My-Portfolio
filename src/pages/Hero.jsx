import React from "react";
import background from "../images/galaxy.webp";
import Navbar from "../components/Navbar";
import RightSection from "./RightSection";
import avatar from "../images/avataaars.png"
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
      <div className="bg-gray-900  bg-opacity-30 backdrop-blur-lg p-10  shadow-lg text-gray-200 ml-40 mr-40 pt-10 pb-10 rounded-md">
        <div className="ml-20 mr-20 bg-gray-800 pt-6 pb-20    bg-opacity-30 backdrop-blur-lg p-10 rounded-lg shadow-lg">
          <Navbar />
          <RightSection />
          <img src={avatar} alt="my avatar" className="w-40 ml-96 " />
          <h1 className="text-center text-5xl font-bold">
            Hello, my name is Patrick Iyiakimo
          </h1>
          <p className="pl-10 mt-4 text-3xl text-center">
            I am a Frontend Engineer
          </p>

          <p className="bg-green-500 text-black pl-10 mt-4 rounded-full ml-80 w-72 text-xl ">
            2 years of Experience
          </p>
        </div>
        <div className="grid grid-cols-2 text-green-500 pt-2">
          <p className="ml-20 ">
            <button>
              <FaGithub />
            </button>
            https://github.com/patrickiyiakimo
          </p>
          <p>
            <button>
              <FaLinkedin />
            </button>
            https://linkedin.com/in/patrick-iyiakimo-6a15a226a
          </p>
          <p className="ml-20">
            <button>
              {" "}
              <PiSelectionBackgroundFill />
            </button>
            My Background
          </p>
          <p>
            <button>
              {" "}
              <FaCode />
            </button>{" "}
            Other Skills & Hobbies
          </p>
        </div>
      </div>

      {/* <div className="bg-gray-900 w-full">
        <h2>Hello I am Patrick Iyiakimo</h2>
        <p>I am a Frontend Engineer</p>
     </div> */}
      {/* <div className="card w-96 glass">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="car!"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Life hack</h2>
          <p>How to park your car at your garage?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;

// import React from "react";
// import background from "../images/galaxy.webp";
// import Navbar from "../components/Navbar";
// import RightSection from "./RightSection";
// import avatar from "../images/avataaars.png";
// import { TypeAnimation } from "react-type-animation";
// import Footer from "./Footer";
// import { FaHtml5 } from "react-icons/fa";
// import { FaCss3Alt } from "react-icons/fa";
// import { IoLogoJavascript } from "react-icons/io5";
// import { FaVuejs } from "react-icons/fa";
// import { FaReact } from "react-icons/fa";
// import { RiTailwindCssFill } from "react-icons/ri";
// import { RiNextjsFill } from "react-icons/ri";
// import { SiTypescript } from "react-icons/si";
// import { SiChakraui } from "react-icons/si";
// import { FaNodeJs } from "react-icons/fa";
// import { SiExpress } from "react-icons/si";
// import { FaGitAlt } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { FaArrowPointer } from "react-icons/fa6";


// const Hero = () => {
//   return (
//     <div
//       className="bg-cover h-screen w-full overflow-hidden text-gray-200"
//       style={{ backgroundImage: `url(${background})` }}
//     >
//       <div className="text-gray-800 bg-white h-full bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg">
//         <FaArrowPointer className="text-white absolute w-8 h-8 left-10 top-14 sm:hidden" />
//         <div className="flex flex-col md:flex-row mb-5 mr-20 -ml-3 md:mr-40 md:ml-20 pt-5">
//           <Navbar className="" />
//           <RightSection className=" " />
//         </div>
//         <div className="text-center">
//           <img
//             src={avatar}
//             alt="my avatar"
//             className="w-36 mx-auto md:w-40 mb-1"
//           />
//           <h1 className="text-xl md:text-6xl font-bold mb-1">
//             Hello, I am Patrick Iyiakimo
//           </h1>
//           <TypeAnimation
//             sequence={[
//               "I am a Frontend Engineer",
//               2000,
//               "and a passionate problem solver.",
//               2000,
//             ]}
//             wrapper="span"
//             speed={10}
//             style={{ fontSize: "1em", color: "white", fontWeight: "bold" }}
//             repeat={Infinity}
//           />
//           <p>You can click on any of the Icons to know more about me</p>
//           <TypeAnimation
//             sequence={[" Thank You🙂", 2000]}
//             wrapper="span"
//             speed={10}
//             style={{ fontSize: "1em", color: "white", fontWeight: "bold" }}
//             repeat={Infinity}
//           />
//         </div>
//         <div className="ml-10 pb-32 grid grid-cols-4 md:flex md:items-center md:justify-center gap-4 text-center text-gray-300 pt-10">
//           <FaHtml5 className="text-orange-500 w-10 h-10" />
//           <FaCss3Alt className="text-blue-600 w-10 h-10" />
//           <IoLogoJavascript className="text-yellow-400 w-10 h-10" />
//           <FaVuejs className="text-green-600 w-10 h-10" />
//           <FaReact className="text-sky-400 w-10 h-10" />
//           <RiTailwindCssFill className="text-sky-400 w-10 h-10" />
//           <RiNextjsFill className="text-white w-10 h-10" />
//           <SiTypescript className="text-blue-600 w-10 h-10" />
//           <SiChakraui className="text-sky-400 w-10 h-10" />
//           <FaNodeJs className="text-green-600 w-10 h-10" />
//           <SiExpress className="text-white w-10 h-10" />
//           <FaGitAlt className="text-orange-500 w-10 h-10" />
//           <FaGithub className="w-10 h-10" />
//         </div>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Hero;



import React, { useState, useEffect } from "react";
import background from "../images/galaxy.webp";
import Navbar from "../components/Navbar";
import RightSection from "./RightSection";
import avatar from "../images/avataaars.png";
import { TypeAnimation } from "react-type-animation";
import Footer from "./Footer";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaVuejs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowPointer } from "react-icons/fa6";

const Hero = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-cover h-screen w-full overflow-hidden text-gray-200">
      {loading && (
        <div className="flex justify-center items-center h-screen">
          <span className="loading loading-bars loading-xs  text-gray-900"></span>
          <span className="loading loading-bars loading-sm text-gray-900"></span>
          <span className="loading loading-bars loading-md text-gray-900"></span>
          <span className="loading loading-bars loading-lg text-gray-900"></span>
        </div>
      )}
      {!loading && (
        <div
          className="text-gray-800 bg-white h-full bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg"
          style={{ backgroundImage: `url(${background})` }}
        >
          <FaArrowPointer className="text-white absolute w-8 h-8 left-10 top-14 sm:hidden" />
          <div className="flex flex-col md:flex-row mb-5 mr-20 -ml-3 md:mr-40 md:ml-20 pt-5">
            <Navbar className="" />
            <RightSection className=" " />
          </div>
          <div className="text-center">
            <img
              src={avatar}
              alt="my avatar"
              className="w-36 mx-auto md:w-40 mb-1"
            />
            <h1 className="text-xl md:text-6xl text-white font-bold mb-1">
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
              style={{
                fontSize: "1em",
                color: "white",
                fontWeight: "bold",
              }}
              repeat={Infinity}
            />
            <p>You can click on any of the Icons to know more about me</p>
            <TypeAnimation
              sequence={[" Thank You🙂", 2000]}
              wrapper="span"
              speed={10}
              style={{
                fontSize: "1em",
                color: "white",
                fontWeight: "bold",
              }}
              repeat={Infinity}
            />
            <div className="ml-10 pb-32 grid grid-cols-4 md:flex md:items-center md:justify-center gap-4 text-center text-gray-300 pt-10">
              <FaHtml5 className="text-orange-500 w-10 h-10" />
              <FaCss3Alt className="text-blue-600 w-10 h-10" />
              <IoLogoJavascript className="text-yellow-400 w-10 h-10" />
              <FaVuejs className="text-green-600 w-10 h-10" />
              <FaReact className="text-sky-400 w-10 h-10" />
              <RiTailwindCssFill className="text-sky-400 w-10 h-10" />
              <RiNextjsFill className="text-white w-10 h-10" />
              <SiTypescript className="text-blue-600 w-10 h-10" />
              <SiChakraui className="text-sky-400 w-10 h-10" />
              <FaNodeJs className="text-green-600 w-10 h-10" />
              <SiExpress className="text-white w-10 h-10" />
              <FaGitAlt className="text-orange-500 w-10 h-10" />
              <FaGithub className="w-10 h-10" />
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Hero;

import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";



const Footer = () => {
  return (
    <div className="bg-gray-800 rounded-md ">
      <div className="flex justify-center  items-center gap-10">
        <button>
          <a href="https://github.com/patrickiyiakimo">
            <FaGithub className="h-14" />
          </a>
        </button>
        <button>
          <a href="https://linkedin.com/in/patrick-iyiakimo-6a15a226a">
            <SiLinkedin />
          </a>
        </button>
      </div>
    </div>
  );
}

export default Footer
import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";



const Footer = () => {
  return (
    <div className="bg-gray-800 rounded-md ">
      <div className='flex justify-center items-center gap-10'>
        <button className=''>
          <FaGithub className='h-14'/>
        </button>
        <button>
          <SiLinkedin />
        </button>
      </div>
    </div>
  );
}

export default Footer
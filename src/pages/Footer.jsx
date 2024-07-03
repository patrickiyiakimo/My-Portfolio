import React from 'react'
import { MdOutlineMail } from "react-icons/md";


const Footer = () => {
  return (
    <div>
      <div className="hidden lg:flex bg-gray-900 text-sm px-2 py-2 text-gray-400 pl-40">
        <p className="mr-40">©2024 Uptrust. All rights Reserved</p>
        <p className="mr-40">This was created ❤️ by Patrick Iyiakimo</p>
        <p>
          <button>
            <MdOutlineMail className="mr-1 " />
          </button>
          iyiakimopatrick2002@gmail.com
        </p>
      </div>
    </div>
  );
}

export default Footer
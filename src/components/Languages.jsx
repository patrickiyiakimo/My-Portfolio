import React from "react";

const Languages = () => {
  return (
    <div className="">
      <div>
        <h2 className=" font-semibold m-7 text-2xl">Languages</h2>
      </div>
      <span className="flex ml-5">
        <p className="mr-32">English</p>
        <p>100%</p>
      </span>
      <input
        type="range"
        min={0}
        max="100"
        value="100"
        className="range range-success border-green-600 w-52 ml-5"
      />
      <span className="flex ml-5">
        <p className="mr-36">Igbo</p>
        <p>100%</p>
      </span>
      <input
        type="range"
        min={0}
        max="100"
        value="100"
        className="range range-success border-green-600 w-52 ml-5"
      />
      <hr className="w-60 ml-2 mt-4 border-2 border-solid border-green-600 "></hr>
      <p className="ml-5 mt-5">Email Address</p>
      <small className="ml-5">iyiakimopatrick2002@gmail.com</small>
      <p className="ml-5 mt-5">Phone Number</p>
      <small className="ml-5">*2348143643066</small>
      <hr className="w-60 ml-2 mt-4 mb-5 border-2 border-solid border-green-600 "></hr>
      <a href="Patrick-Iyiakimo-FlowCV-Resume-20240616.pdf" className="ml-5 ">Visit Resume</a>
    </div>
  );
};

export default Languages;

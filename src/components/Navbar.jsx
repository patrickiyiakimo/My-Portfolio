import React from "react";
import patrick from "../images/pato.JPG";
import CoreSkills from "./CoreSkills";

const Navbar = () => {
  return (
    <div className="text-gray-800 ">
      <div className="card w-96 glass">
        <figure>
          <img
            src={patrick}
            alt="patick picture"
            className="w-1/2 rounded-md m-10"
          />
        </figure>
        <div className="flex ml-10 gap-16">
          <div className="card-body ">
            <h2 className="card-title">Resident:</h2>
            <p>City:</p>
            <p>Age:</p>
          </div>
          <div className="font-semibold ">
            <h2>Nigeria</h2>
            <p>Lagos</p>
            <p>22</p>
          </div>
        </div>
        <hr className="w-60 ml-5 mt-4 border-4 border-solid border-green-600 "></hr>
      </div>
      <CoreSkills />
    </div>
  );
};

export default Navbar;

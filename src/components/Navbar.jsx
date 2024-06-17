import React from "react";
import patrick from "../images/pato.JPG";
import CoreSkills from "./CoreSkills";
import Languages from "./Languages";
import Tools from "./Tools";
import Footer from "./Footer";

const Navbar = () => {
  return (
    <div className="text-gray-100 mb-2 ">
      <div className="card w-64 glass bg-gray-900 rounded-md ml-2">
        <div className="bg-gray-900 ">
          <figure>
            <img
              src={patrick}
              alt="patick picture"
              className="w-2/3 rounded-md pt-5 ml-10 mb-10 "
            />
          </figure>
        </div>
        <div className="flex ml-10 gap-16">
          <div className="card-body ">
            <h2 className="card-title">Resident:</h2>
            <p>City:</p>
            <p>Age:</p>
          </div>
          <div className="font-semibold ">
            <h2>Nigeria</h2>
            <p>Lagos</p>
            <p>25</p>
          </div>
        </div>
        <hr className="w-60 ml-2 mt-4 border-2 border-solid border-green-600 "></hr>
        <CoreSkills />
        <Tools />
        <Languages />
        <Footer />
      </div>
    </div>
  );
};

export default Navbar;

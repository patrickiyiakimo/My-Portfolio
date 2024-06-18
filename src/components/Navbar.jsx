import React from "react";
import patrick from "../images/pato.JPG";
import CoreSkills from "./CoreSkills";
import Languages from "./Languages";
import Tools from "./Tools";
import Footer from "./Footer";

const Navbar = () => {
  return (
    // <div className="text-gray-100  ">
    //   <div className="card w-64 glass bg-gray-900 rounded-md ml-2">
    //     <div className="bg-gray-900 ">
    //       <figure>
    //         <img
    //           src={patrick}
    //           alt="patick picture"
    //           className="w-2/3 rounded-md pt-5 ml-2 mb-10 "
    //         />
    //       </figure>
    //     </div>
    //     <div className="flex justify-center items-center">
    //       <div className="card-body ">
    //         <h2 className="">Resident:</h2>
    //         <p>City:</p>
    //         <p>Age:</p>
    //       </div>
    //       <div className="font-semibold ">
    //         <h2>Nigeria</h2>
    //         <p>Lagos</p>
    //         <p>25</p>
    //       </div>
    //     </div>
    //     <hr className="w-60 ml-2 mt-4 border-2 border-solid border-green-600 "></hr>
    //     <CoreSkills />
    //     <Tools />
    //     <Languages />
    //     <Footer />
    //   </div>
    // </div>
    <div className="drawer ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* Page content here */}
        <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
          Left drawer
        </label>
      </div>
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu p-4 w-80 min-h-full text-base-content bg-gray-500 ">
          <div className="text-gray-100  ">
            <div className="card w-64 glass bg-gray-900 rounded-md ml-2">
              <div className=" ">
                <figure>
                  <img
                    src={patrick}
                    alt="patick picture"
                    className="w- rounded-md  mb-10 "
                  />
                </figure>
              </div>
              <div className="flex justify-center items-center mr-5">
                <div className="card-body ">
                  <h2 className="">Resident:</h2>
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;

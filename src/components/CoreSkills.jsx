import React from 'react'

const CoreSkills = () => {
  return (
    <div>
      <div className="m-10 ml-5">
        <h2 className=" font-semibold mb-5 text-2xl">Core Skills</h2>
        <span className="flex">
          <p className="mr-32">HTML</p>
          <p>100%</p>
        </span>
        <input
          type="range"
          min={0}
          max="100"
          value="100"
          className="range range-success border-green-600 w-52"
        />
        <span className="flex">
          <p className="mr-36">CSS</p>
          <p>100%</p>
        </span>
        <input
          type="range"
          min={0}
          max="100"
          value="100"
          className="range range-success border-green-600 w-52"
        />
        <span className="flex">
          <p className="mr-24">Javascript</p>
          <p>100%</p>
        </span>
        <input
          type="range"
          min={0}
          max="100"
          value="100"
          className="range range-success border-green-600 w-52"
        />
        <span className="flex">
          <p className="mr-32">React</p>
          <p>100%</p>
        </span>
        <input
          type="range"
          min={0}
          max="100"
          value="100"
          className="range range-success border-green-600 w-52"
        />
        <span className="flex">
          <p className="mr-32">VueJs</p>
          <p>80%</p>
        </span>
        <input
          type="range"
          min={0}
          max="100"
          value="100"
          className="range range-success border-green-600 w-44"
        />
        <span className="flex">
          <p className="mr-24">Typescript</p>
          <p>90%</p>
        </span>
        <input
          type="range"
          min={0}
          max="100"
          value="100"
          className="range range-success border-green-600 w-48"
        />
        <span className="flex">
          <p className="mr-28">Next Js</p>
          <p>90%</p>
        </span>
        <input
          type="range"
          min={0}
          max="100"
          value="100"
          className="range range-success border-green-600 w-48"
        />
      </div>
      <hr className="w-60 ml-2 mt-4 border-2 border-solid border-green-600 "></hr>
    </div>
  );
}

export default CoreSkills
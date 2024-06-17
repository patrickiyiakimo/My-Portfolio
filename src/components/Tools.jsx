import React from 'react'

const Tools = () => {
  return (
    <div>
      <diiv>
        <h2 className="text-2xl font-semibold ml-5 mb-5 mt-10">
          Management Tools
        </h2>
        <span className="grid grid-cols-2 ml-5 mb-10">
          <div>Git</div>
          <div>GitHub</div>
          <div>Slack</div>
          <div>Google Meet</div>
          <div>Trello</div>
          <div>Zoom</div>
        </span>
      </diiv>
      <hr className="w-60 ml-2 mt-4 border-2 border-solid border-green-600 "></hr>
    </div>
  );
}

export default Tools
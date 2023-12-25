import React from "react";
import VideoSource from "../assets/welcomepage.mp4";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();

  // Handle navigation when a button is clicked
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div>
      <video
        autoPlay
        muted
        loop
        className="w-screen h-screen object-cover absolute top-0 left-0 z-0"
      >
        <source src={VideoSource} type="video/mp4" />
        {/* Add other video sources for different formats if needed */}
        Your browser does not support HTML5 video.
      </video>
      <div className="absolute  mt-16 lg:m-24">
        <div className=" text-white absolute font-serif text-center">
          <h1 className="text-6xl lg:text-9xl">Welcome</h1>
          <h1 className=" text-white text-start ml-3 p-8 text-2xl lg:text-3xl lg:p-0 lg:mt-12 lg:w-4/5 lg:ml-24">
            "Join us for a night of laughter, love, and unforgettable memories.
            Be our guest and celebrate the magic!"
          </h1>
        </div>
        <div className=" font-serif m-10 mt-80 ml-[5rem] lg:mt-[28rem] ">
          <button
            className="border m-4 p-3 lg:w-60 rounded-2xl w-32 border-indigo-500/75 hover:bg-gradient-to-r from-violet-400 to-purple-800 hover:backdrop-blur-md hover:-translate-y-1 hover:scale-110 duration-300 text-white"
          >
            Guest
          </button>
          <button className="border m-4 p-3 lg:w-60 rounded-2xl w-32 border-indigo-500/75 hover:bg-gradient-to-r from-violet-400 to-purple-800 hover:backdrop-blur-md hover:-translate-y-1 hover:scale-110 duration-300 text-white"
           onClick={() => handleNavigation("/welcome/category")}>
            Host
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;

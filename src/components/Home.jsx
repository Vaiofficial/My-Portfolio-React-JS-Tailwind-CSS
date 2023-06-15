import React from "react";
import heroimage from "../assets/portfolio/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name = "home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Full Stack Developer</h2>

          {/* Home page paragraph here */}
          <p className="py-4 max-w-md text-gray-500">
            I'am a 2nd Year AL&ML Student. Currently I am working on Web App
            Projects using Technologies like React , Tailwind , Node , Express &
            MongoDB.
          </p>

          {/* Button tab here */}
          <div>
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer ">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </button>
          </div>
        </div>

        <div className="w-2/3">
          <img src={heroimage} alt="" className="rounded-2xl mx-auto w-2/3 md:w-2/3"/>
        </div>

      </div>
    </div>
  );
};

export default Home;

import React from "react";
import internal from "../assets/portfolio/internal.png";
import os from "../assets/portfolio/os.png";
import thon from "../assets/portfolio/thon.png";
import dsa from "../assets/portfolio/dsa.png";
import panda from "../assets/portfolio/panda.png";
import matplot from "../assets/portfolio/matplot.png";
// import {Link} from "react-router-dom";


const Youtube = () => {
  // CREATING ARRAY FOR GRID ITEMS

  const youtube = [
    {
      id: 1,
      src: internal,
      watch:'https://youtu.be/o4GSF5VtYFM',
    },
    {
      id: 2,
      src: os,
      watch:'https://youtu.be/noAJWib8L1M',
    },
    {
      id: 3,
      src: thon,
      watch:'https://youtu.be/jaVIarmHyiE',
    },
    {
      id: 4,
      src: dsa,
      watch:'https://youtu.be/uJxCIp-0y3A',
    },
    {
      id: 5,
      src: panda,
      watch:'https://youtu.be/psuYa1PocpI',
    },
    {
      id: 6,
      src: matplot,
      watch:'https://youtu.be/xOg4DqgObBc',
    },
  ];


  return (
    <div
      name="Youtube"
      className=" w-full text-white md:h-screen bg-gradient-to-b from-black to-gray-800 \"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        {/* THIS DIV IS FOR THE HEADING */}

        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            My Youtube Video's
          </p>
          <p className="py-6">Check our some of my Youtube Video's</p>
        </div>

        {/* THIS DIV IS FOR THE WHOLE STRUCTURE OF THE CART - GRID ITEMS*/}

        <div
          
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
        >
          {youtube.map(({ id, src , watch}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={watch} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Watch Video
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Youtube;

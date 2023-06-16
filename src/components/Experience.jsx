import React from "react";
import html from "../assets/portfolio/html.png";
import css from "../assets/portfolio/css.png";
import tailwind from "../assets/portfolio/tailwind.png";
import javascript from "../assets/portfolio/javascript.png";
import reactImage from "../assets/portfolio/react.png";
import nodejs from "../assets/portfolio/node.png";
import express from "../assets/portfolio/html.png";
import mongo from "../assets/portfolio/html.png";
import github from "../assets/portfolio/github.png";
import python from "../assets/portfolio/html.png";
import cpp from "../assets/portfolio/html.png";
// import java from "../assets/portfolio/html.png";
import postman from "../assets/portfolio/html.png";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-blue-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-orange-500",
    },
    {
      id: 3,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-500",
    },
    {
      id: 4,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: reactImage,
      title: "ReactJS",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: nodejs,
      title: "NodeJS",
      style: "shadow-green-500",
    },
    {
      id: 7,
      src: express,
      title: "ExpressJS",
      style: "shadow-orange-500",
    },
    {
      id: 8,
      src: mongo,
      title: "MongoDB",
      style: "shadow-orange-600",
    },
    {
      id: 9,
      src: github,
      title: "GitHub",
      style: "shadow-white",
    },
    {
      id: 10,
      src: python,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      id: 11,
      src: cpp,
      title: "C & C++",
      style: "shadow-blue-500",
    },
    {
      id: 12,
      src: postman,
      title: "Postman API",
      style: "shadow-orange-500",
    },
  ];

  return (
    <div 
      name="experience"
      className=" w-full h-screen bg-gradient-to-b from-gray-800 to-black"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-screen text-white">

        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 p-2">
            Experience
          </p>
          <p className="py-6 ">These are the Technology I am working with
          </p>
        </div>

        {/* Area for images */}

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;

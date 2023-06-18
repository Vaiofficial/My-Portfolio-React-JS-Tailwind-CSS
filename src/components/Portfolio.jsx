import React from "react";
import Clipboard from "../assets/portfolio/Clipboard.png";
import product from "../assets/portfolio/PRODUCT.png";
import dicet from "../assets/portfolio/DICET (1).png";
import pricing from "../assets/portfolio/PRICING.png";
import list from "../assets/portfolio/listnew.png";
import portfolio from "../assets/portfolio/portfolio.png";
// import {Link} from "react-router-dom";


const Portfolio = () => {
  // CREATING ARRAY FOR GRID ITEMS

  const portfolios = [
    {
      id: 1,
      src: Clipboard,
      demo:'https://clipboard-website1.netlify.app/',
      code:'https://github.com/Vaiofficial/clipboard-website.git'
    },
    {
      id: 2,
      src: product,
      demo:'https://product-modal1.netlify.app/',
      code:'https://github.com/Vaiofficial/Responsive-Product-Modal.git'
    },
    {
      id: 3,
      src: dicet,
      demo:'https://dicet-website-clone.netlify.app/',
      code:'https://github.com/Vaiofficial/Dicet-website-clone.git'
    },
    {
      id: 4,
      src: pricing,
      demo:'https://pricing-grid1.netlify.app/',
      code:'https://github.com/Vaiofficial/Responsive-Pricing-Grid-Tailwind-CSS.git'
    },
    {
      id: 5,
      src: list,
      demo:'https://todolistprojectjs.netlify.app/',
      code:'https://github.com/Vaiofficial/To-Do-List-Using-HTML-Tailwind-CSS-JS.git'
    },
    {
      id: 6,
      src: portfolio,
      demo:'vaibhavofficialportfolio.netlify.app',
      code:'https://github.com/Vaiofficial/My-Portfolio-React-JS-Tailwind-CSS.git'
    },
  ];


  return (
    <div
      name="Portfolio"
      className=" w-full text-white md:h-screen bg-gradient-to-b from-black to-gray-800 \"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        {/* THIS DIV IS FOR THE HEADING */}

        <div className="pb-8 ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Portfolio
          </p>
          <p className="py-6">Check our some of my work right here</p>
        </div>

        {/* THIS DIV IS FOR THE WHOLE STRUCTURE OF THE CART - GRID ITEMS*/}

        <div
          
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
        >
          {portfolios.map(({ id, src , demo , code}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={demo} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>

                <a href={code} className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "Portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "youtube channel",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center px-4 w-full h-20 text-white fixed bg-black">
      
      <div>
        <h1 className="text-5xl font-signature ml-2">Vaibhav</h1>
      </div>

      {/* NAVBAR ELEMENT WORK HERE */} 

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer capitalize font-medium px-4 hover:scale-105 text-gray-500 duration-200"
          >
            <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>

      {/* FAVBARS WORK HERE*/}

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* HenBurger Navbar Style Work */}

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="capitalize px-4 py-6 cursor-pointer text-3xl"
            >
              <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;

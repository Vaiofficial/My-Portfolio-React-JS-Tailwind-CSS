import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const links = [
    {
      id: 1,
      link: "Home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 5,
      link: "Home",
    },
  ];

  return (
    <div className="flex justify-between items-center px-4 w-full h-20 text-white fixed bg-black">
      <div>
        <h1 className="text-5xl font-signature ml-2">Vaibhav</h1>
      </div>

      <ul className="flex">
      {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer capitalize font-medium px-4 hover:scale-105 text-gray-500 duration-200"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;

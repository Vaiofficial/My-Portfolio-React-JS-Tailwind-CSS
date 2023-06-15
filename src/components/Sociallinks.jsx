import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Sociallinks = () => {
  const links = [
    {
      id: 1,
      child:(
        <>
        LinkeDin <FaLinkedin size={30}/>
        </>
      ),
      href:'https://Linkedin.com',
      style:'rounded-tr-md',
    },

    {
        id: 1,
        child:(
          <>
          LinkeDin <FaLinkedin size={30}/>
          </>
        ),
        href:'https://Linkedin.com',
        style:'rounded-tr-md',
      },

      {
        id: 1,
        child:(
          <>
          LinkeDin <FaLinkedin size={30}/>
          </>
        ),
        href:'https://Linkedin.com',
        style:'rounded-tr-md',
      },

      {
        id: 1,
        child:(
          <>
          LinkeDin <FaLinkedin size={30}/>
          </>
        ),
        href:'https://Linkedin.com',
        style:'rounded-tr-md',
      },
  ];

  return (
    <div className="flex flex-col top-[35%] left-0 fixed">
      <ul>
        <li className="flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 ">
          <a
            href=""
            className="flex justify-between items-center w-full text-white"
          >
            <>
              LinkeDin <FaLinkedin size={30} />
            </>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sociallinks;

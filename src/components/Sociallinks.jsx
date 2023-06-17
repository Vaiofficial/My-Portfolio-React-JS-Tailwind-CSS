import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
// import { Link, useNavigate } from "react-router-dom";

const Sociallinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkeDin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/pvaibhav2002/",
      style: "rounded-tr-md",
    },

    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Vaiofficial",
    },

    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:pvaibhavofficial@gmail.com",
    },

    {
      id: 4,
      child: (
        <>
          My Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/pvaibhav_resume_done final.pdf",
      download: true,
      style: "pl-3",
    },

    {
      id: 5,
      child: (
        <>
          Vaibhav Talks <AiFillYoutube size={30} />
        </>
      ),
      href: "https://youtube.com/@VaibhavTalkspv",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, download, href, style }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sociallinks;

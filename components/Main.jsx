import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-width-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            {`LET'S BUILD SOMETHING TOGETHER`}
          </p>
          <h1 className="py-4 text-gray-700">
            {`Hi, I'm`} <span className="text-[#5651e5]">Abhishek</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Front-End Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {`I'm a front-end web developer specializing in building front-end
            responsive-web-application.Currently, I'm focused on new-generations
            platforms while learning back-end technologies.`}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <Link
              href={"https://www.linkedin.com/in/abhisingh2001/"}
              target="_blank"
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href={"https://github.com/abhishekParker/"}
              target="_blank"
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
            >
              <FaGithub />
            </Link>
            <Link
              href={"/#contact"}
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300"
            >
              <AiOutlineMail />
            </Link>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

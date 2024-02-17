import React from "react";
import titleImg from "../image/Logo.png";
import { IoLogoGithub } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { TbBrandFiverr } from "react-icons/tb";

export default function Footer() {
  return (
    <div className=" border-t border-[#84848448] mb-2 sm:flex mx-auto justify-between w-full sm:w-11/12 lg:w-4/5 h-10 sm:px-5">
      <div className="sm:flex gap-5">
        <img
          src={titleImg}
          alt=""
          className="h-6 mx-auto  hidden  grayscale mt-auto"
        />
        <h1 className="font-Sriracha text-gray-400 text-center sm:text-start text-xs mb-1 mt-1 sm:mt-auto">
          © LinkHub 2024
        </h1>
      </div>
      <div className="flex gap-5 sm:justify-start justify-center mt-auto mb-1">
        <a href="https://www.fiverr.com/users/benihin_">
          <TbBrandFiverr className=" text-gray-400 hover:text-black size-5" />
        </a>
        <a href="https://www.instagram.com/">
          <FaInstagram className=" text-gray-400 hover:text-black size-5" />
        </a>
        <a href="https://github.com/">
          <IoLogoGithub className=" text-gray-400 hover:text-black size-5" />
        </a>
        <a href="https://twitter.com/">
          <BsTwitterX className=" text-gray-400 hover:text-black size-4" />
        </a>
        <a href="https://linkedin.com/">
          <FaLinkedin className=" text-gray-400 hover:text-black size-5" />
        </a>
      </div>
    </div>
  );
}

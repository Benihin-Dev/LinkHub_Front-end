import React from "react";
import NavBarImg from "../image/Logo.png";
import { IoHome } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div
      className={` z-10 flex justify-between pt-4 pb-1 w-11/12 bg-[#ffffffd2] right-0 left-0 px-3 sm:px-10 md:px-2 fixed  sm:pt-4 md:w-11/12 lg:w-4/5 mx-auto`}
    >
      <div>
        <img src={NavBarImg} alt="NavImage" className=" h-8" />
      </div>

      <div className="flex">
        <NavLink to="/">
          <IoHome className=" size-6 text-[#00ffcc] danceAnimation" />
        </NavLink>
      </div>
    </div>
  );
}

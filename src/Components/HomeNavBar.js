import React, { useState, useEffect } from "react";
import NavBarImg from "../image/Logo.png";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { Link, scrollSpy } from "react-scroll";

export default function HomeNavBar() {
  const [menu, setmenu] = useState(false);

  const [activeSection, setActiveSection] = useState("home-section");

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  useEffect(() => {
    scrollSpy.update();
  }, []);

  return (
    <div className=" flex justify-between py-1  bg-[#ffffffd2] right-0 left-0 px-3 w-11/12 sm:px-10 md:px-2 fixed sm:py-2 sm:pt-4 md:w-11/12 lg:w-4/5 mx-auto">
      <div>
        <img src={NavBarImg} alt="NavImage" className=" h-8" />
      </div>
      {menu && (
        <div className=" md:hidden fixed text-end justify-end px-4 sm:px-10 flex mx-auto top-10 bg-[#ffffffdb] pb-3 w-full right-0">
          <ul className="font-Sriracha flex-col ">
            <li
              className={
                activeSection === "home-section"
                  ? "border-b-2 border-[#00ffca] text-sm text-slate-600 hover:text-[#00ffca] py-1 duration-100"
                  : "text-slate-600 text-sm hover:text-[#00ffca] py-1 duration-100"
              }
            >
              <Link
                to="home-section"
                smooth={true}
                duration={500}
                spy={true}
                offset={70}
                onSetActive={handleSetActive}
              >
                HOME
              </Link>
            </li>
            <li
              className={
                activeSection === "plans-section"
                  ? "border-b-2 border-[#00ffca] text-sm text-slate-600 hover:text-[#00ffca] py-1 duration-100"
                  : "text-slate-600 text-sm hover:text-[#00ffca] py-1 duration-100"
              }
            >
              <Link
                to="plans-section"
                smooth={true}
                duration={500}
                spy={true}
                offset={-120}
                onSetActive={handleSetActive}
              >
                PLANS
              </Link>
            </li>
            <li
              className={
                activeSection === "contact-section"
                  ? "border-b-2 border-[#00ffca] text-sm text-slate-600 hover:text-[#00ffca] mb-2 py-1 duration-100"
                  : "text-slate-600 text-sm hover:text-[#00ffca] py-1 duration-100 mb-2"
              }
            >
              <Link
                to="contact-section"
                smooth={true}
                duration={500}
                spy={true}
                offset={-100}
                onSetActive={handleSetActive}
              >
                CONTACT
              </Link>
            </li>

            <NavLink to="/login">
              <li className="text-slate-600 text-sm bg-[#00ffcc13] hover:text-black duration-100 border-[#00ffca] hover:bg-[#00ffcc83] border rounded-2xl px-5 py-1">
                SIGN IN
              </li>
            </NavLink>
          </ul>
        </div>
      )}
      <div className=" flex justify-center items-center">
        <FaBars
          onClick={() => {
            setmenu(!menu);
          }}
          className="text-slate-600 hover:text-[#00ffca]  text-lg  md:hidden cursor-pointer"
        />
      </div>
      <div className="hidden md:flex">
        <ul className="font-Sriracha md:flex gap-10 ">
          <li
            className={
              activeSection === "home-section"
                ? "border-b-2 border-[#00ffca] text-sm text-slate-600 hover:text-[#00ffca] py-1 duration-100"
                : "text-slate-600 text-sm hover:text-[#00ffca] py-1 duration-100"
            }
          >
            <Link
              to="home-section"
              smooth={true}
              duration={500}
              spy={true}
              offset={0}
              onSetActive={handleSetActive}
            >
              HOME
            </Link>
          </li>
          <li
            className={
              activeSection === "plans-section"
                ? "border-b-2 border-[#00ffca] text-sm text-slate-600 hover:text-[#00ffca] py-1 duration-100"
                : "text-slate-600 text-sm hover:text-[#00ffca] py-1 duration-100"
            }
          >
            <Link
              to="plans-section"
              smooth={true}
              duration={500}
              spy={true}
              offset={-120}
              onSetActive={handleSetActive}
            >
              PLANS
            </Link>
          </li>
          <li
            className={
              activeSection === "contact-section"
                ? "border-b-2 border-[#00ffca] text-sm text-slate-600 hover:text-[#00ffca] py-1 duration-100"
                : "text-slate-600 text-sm hover:text-[#00ffca] py-1 duration-100"
            }
          >
            <Link
              to="contact-section"
              smooth={true}
              duration={500}
              spy={true}
              offset={-120}
              onSetActive={handleSetActive}
            >
              CONTACT
            </Link>
          </li>
          <NavLink to="/login">
            <li className="text-slate-600 text-sm bg-[#00ffcc13] hover:text-black duration-100 border-[#00ffca] hover:bg-[#00ffcc83] border rounded-2xl px-5 py-1">
              SIGN IN
            </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

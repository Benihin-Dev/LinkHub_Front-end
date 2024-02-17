import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import checkmarkf from "../image/check-markf.png";
import checkmarkf1 from "../image/check-mark2.png";
import checkmarkf2 from "../image/close.png";
import PlansImg from "../image/PlansImg.png";
import { NavLink } from "react-router-dom";

export default function AccountSelection() {
  return (
    <>
      <NavBar />
      <div className="md:flex sm:w-11/12 lg:w-4/5 mx-auto pt-28 mb-16">
        <div className=" font-Sriracha w-11/12 md:w-3/5 mx-auto pt-5">
          <h1 className="text-center mb-5 md:mb-0 text-lg text-slate-600 border-b mx-10">
            Account Plans
          </h1>
          <div className=" flex gap-8 sm:gap-10 sm:mx-10  mx-8">
            <div className="bg-[#00ffcc0c] hover:bg-[#00ffcc1f] border border-[#00ffca] rounded-lg  w-1/2 sm:my-6 md:my-10 mb-6 sm:mb-0">
              <NavLink to="/guest">
                <h1 className=" mt-3 text-center mx-3 border-b border-white pb-2">
                  BASIC
                </h1>
                <div className=" my-5 mx-2 md:mx-4 lg:mx-8 text-xs md:text-sm">
                  <ul>
                    <div className="flex justify-between">
                      <li>Limited links</li>
                      <img src={checkmarkf1} alt="" className="h-5" />
                    </div>
                    <div className="flex justify-between">
                      <li>Edit the links</li>
                      <img src={checkmarkf2} alt="" className="h-5" />
                    </div>
                  </ul>
                  <div className="flex mx-auto justify-center mt-9 w-full ">
                    <button className="border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white text-slate-500 px-4 md:px-2 mb-3 sm:mb-0 lg:px-3 py-1">
                      Get it Free
                    </button>
                  </div>
                </div>
              </NavLink>
            </div>

            <div className="bg-[#00ffcc0c] hover:bg-[#00ffcc1f] border border-[#00ffca] rounded-lg  w-1/2 sm:my-6 md:my-10 mb-6 sm:mb-0">
              <NavLink to="/account-create" >
                <h1 className=" mt-3 text-center mx-3 border-b border-white pb-2">
                  STANDART
                </h1>
                <div className=" my-5 mx-2 md:mx-4 lg:mx-8 text-xs md:text-sm">
                  <ul>
                    <div className="flex justify-between">
                      <li>Unlimited links</li>
                      <img src={checkmarkf} alt="" className="h-5" />
                    </div>
                    <div className="flex justify-between">
                      <li>Edit the links</li>
                      <img src={checkmarkf} alt="" className="h-5" />
                    </div>
                    <div className="flex justify-between">
                      <li>Unique single link</li>
                      <img src={checkmarkf} alt="" className="h-5" />
                    </div>
                  </ul>
                  <div className="flex mx-auto justify-center mt-4 md:mt-3 lg:mt-4 w-full ">
                    <button className="border rounded-full border-[#f89959] hover:bg-[#f89959] hover:text-white text-[#f89959] px-2 sm:px-4 md:px-2 mb-3 sm:mb-0 lg:px-3 py-1">
                      Get an Account
                    </button>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="md:w-1/3  sm:px-28 md:px-0 pt-5 flex justify-end items-center">
          <img src={PlansImg} alt="" className=" object-cover" />
        </div>
      </div>

      <footer className=" fixed bottom-0 sm:bottom-0 right-0 left-0">
        <Footer />
      </footer>
    </>
  );
}

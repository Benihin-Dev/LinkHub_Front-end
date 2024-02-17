import React from "react";
import checkmarkf from "../image/check-markf.png";
import checkmarkf1 from "../image/check-mark2.png";
import checkmarkf2 from "../image/close.png";
import { NavLink } from "react-router-dom";

export default function Plans() {
  return (
    <div
      id="plans"
      className="font-Sriracha sm:h-60 md:h-[280px] lg:h-72 mb-24 sm:flex mx-3 border border-[#00ffcc35] bg-[#cefff520] w-full sm:w-11/12 lg:w-4/5 sm:mx-auto mt-20"
    >
      <div className=" sm:w-5/12 p-6 text-xs  w-10/12 mx-auto md:text-sm lg:text-base lg:p-8 leading-3 flex  items-end">
        <p className="text-slate-600">
          <span className=" text-3xl text-[#00ffca]">PLANS </span>
          <br />
          Selecting your plan is a declaration of self-worth and a promise to
          invest in your own growth. Embrace the journey ahead you're on the
          path to greatness!
        </p>
      </div>
      <div className="sm:w-7/12 sm:flex mx-6 sm:mx-10 sm:mb-1 lg:mx-16 gap-10 lg:gap-10">
        <div className="bg-[#ffffffd2] border  w-2/3 mx-auto border-green-100 rounded-sm  sm:w-1/2 sm:my-6 md:my-10 mb-6 sm:mb-0">
          <h1 className=" mt-3 text-center mx-3 border-b border-green-200 pb-2">
            BASIC
          </h1>
          <div className=" my-5 mx-2 md:mx-4 h-32  lg:mx-8 text-xs md:text-sm">
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
              <NavLink to="/guest">
                <button className="border rounded-full border-blue-500 hover:bg-blue-500 hover:text-white text-slate-500 px-4 md:px-2 mb-3 sm:mb-0 lg:px-3 py-1">
                  Get it Free
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <div className="bg-[#ffffffd2] w-2/3 mx-auto border border-green-100 rounded-sm   sm:w-1/2 sm:my-6 md:my-10 mb-6 sm:mb-0">
          <h1 className=" mt-3 text-center  mx-3 border-b border-green-200 pb-2">
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
              <NavLink to="/account-create">
                <button className="border rounded-full border-[#f89959] hover:bg-[#f89959] hover:text-white text-[#f89959] px-4 md:px-2 mb-3 sm:mb-0 lg:px-3 py-1">
                  Get Account
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

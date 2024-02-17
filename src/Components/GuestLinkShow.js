import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import linkShow from "../image/linkShow.png";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
import { FaPinterestP } from "react-icons/fa";
import { TbBrandTinder } from "react-icons/tb";

export default function GuestLinkShow() {
  const location = useLocation();
  const receivedData = location.state;
  let GuestUserData = receivedData.fetchedGuestUserData;

  return (
    <>
      <NavBar />

      <div className="font-Sriracha sm:flex sm:mx-auto pt-[80px] mb-10 mx-4 sm:w-11/12 lg:w-4/5 ">
        <div className="sm:w-5/12 sm:ml-1  flex justify-center items-end mb-5 ">
          <div className=" ">
            <div className="mr-5 sm:mx-5">
              <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-[14px]">
                <span className="text-[#00ffca] text-2xl sm:text-3xl md:text-4xl">
                  Thank you for choosing Linkhub!.
                </span>
                <br />
                Enjoy managing your social media effortlessly. <br />{" "}
                <span className="text-xs sm:text-sm text-[#f3a775]">
                  Stay Connected, Stay Engaged!..
                </span>
              </p>
            </div>
            <div className="mx-10 sm:mx-5 lg:mx-10">
              <img src={linkShow} alt="" />
            </div>
          </div>
        </div>

        <div className="sm:w-7/12 lg:w-6/12 sm:mx-8 mt-4 sm:mt-10 border-[#f4f2f2c9] bg-cover bg-center showlinkimage md:mx-5">
          <div className=" h-96 py-5 pl-5 bg-red-50 w-8/12 border">
            <div className="mb-3">
              <h3 className=" text-sm text-slate-600">
                {GuestUserData.username}
              </h3>
            </div>

            <div className="  overflow-y-scroll showalllink h-80">
              <div className=" flex pb-5 gap-5 ">
                <FaSquareFacebook className=" text-gray-400 hover:text-blue-500 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    -{" "}
                    <span className="text-slate-600">
                      {GuestUserData.facebook}
                    </span>
                  </h6>
                </div>
              </div>
              <div className=" flex pb-5 gap-5 ">
                <IoLogoYoutube className=" text-gray-400 hover:text-red-500 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    -{" "}
                    <span className="text-slate-600 hover:text-slate-950">
                      {GuestUserData.youtube}
                    </span>
                  </h6>
                </div>
              </div>
              <div className=" flex pb-5 gap-5 ">
                <IoLogoTiktok className=" text-gray-400 hover:text-red-500 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    -{" "}
                    <span className="text-slate-600 hover:text-slate-950">
                      {GuestUserData.tiktok}
                    </span>
                  </h6>
                </div>
              </div>

              <div className=" flex pb-5 gap-5 ">
                <FaInstagram className=" text-gray-400 hover:text-[#f86769] size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    -{" "}
                    <span className="text-slate-600 hover:text-slate-950">
                      {GuestUserData.instagram}
                    </span>
                  </h6>
                </div>
              </div>

              <div className=" flex pb-5 gap-5 ">
                <FaSnapchatSquare className=" hover:text-yellow-300 text-gray-400 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    -{" "}
                    <span className="text-slate-600 hover:text-slate-950">
                      {GuestUserData.snapchat}
                    </span>
                  </h6>
                </div>
              </div>

              <div className=" flex pb-5 gap-5 ">
                <RiTwitterXLine className=" text-gray-400 hover:text-black size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    -{" "}
                    <span className="text-slate-600 hover:text-slate-950">
                      {GuestUserData.x}
                    </span>
                  </h6>
                </div>
              </div>

              <div className=" flex pb-5 gap-5 ">
                <FaPinterestP className=" text-gray-400 hover:text-red-500 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    -{" "}
                    <span className="text-slate-600 hover:text-slate-950">
                      {GuestUserData.pinterest}
                    </span>
                  </h6>
                </div>
              </div>

              <div className=" flex pb-5 gap-5 ">
                <TbBrandTinder className=" text-gray-400 hover:text-pink-600 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    -{" "}
                    <span className="text-slate-600 hover:text-slate-950">
                      {GuestUserData.tinder}
                    </span>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

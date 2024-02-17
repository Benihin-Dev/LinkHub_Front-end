import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";
import linkShow from "../image/linkShow.png";
import { FaWhatsapp } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaSnapchatSquare } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaRedditAlien } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { TbBrandFiverr } from "react-icons/tb";
import { FaThreads } from "react-icons/fa6";
import { FaFlickr } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaMeetup } from "react-icons/fa6";
import { BsSinaWeibo } from "react-icons/bs";
import { TbBrandTinder } from "react-icons/tb";
import { FaTumblrSquare } from "react-icons/fa";
import { IoLogoXing } from "react-icons/io";

export default function PaidUserLinkShow() {
  const location = useLocation();
  const receivedData = location.state;
  let PaidUserData = receivedData.fetchedPaidUserData;

  const renderSocialMedia = (socialMediaName) => {
    const socialMediaData = PaidUserData.socialMedia[socialMediaName];

    return socialMediaData.length === 0 ? (
      <span className="text-slate-600 hover:text-slate-950">...</span>
    ) : socialMediaData.length === 1 ? (
      <span className="text-slate-600 hover:text-slate-950">
        {socialMediaData[0]}
      </span>
    ) : (
      socialMediaData.map((id, index) => (
        <span key={index} className="text-slate-600 hover:text-slate-950">
          {index !== 0 && <>&nbsp;&nbsp;&nbsp;</>}
          {id}
          <br />
        </span>
      ))
    );
  };

  return (
    <>
      <NavBar />
      <div className="font-Sriracha sm:flex sm:mx-auto pt-[80px] mb-10 mx-4 sm:w-11/12 lg:w-4/5 ">
        <div className="sm:w-5/12 sm:ml-10 flex justify-center items-end mb-5 ">
          <div className=" ">
            <div className="mr-5 sm:mx-5">
              <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-[14px]">
                <span className="text-[#00ffca] text-2xl sm:text-3xl md:text-4xl">
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
          <div className=" h-96 py-5 pl-5 bg-green-50 w-8/12 border">
            <div className="mb-3">
              <h3 className=" text-sm text-slate-600">
                {PaidUserData.username}
              </h3>
            </div>

            <div className="  overflow-y-scroll showalllink h-80">
              <div className=" flex pb-5 gap-5 ">
                <FaWhatsapp className=" text-gray-400 hover:text-green-500 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("whatsapp")}
                  </h6>
                </div>
              </div>
              <div className=" flex pb-5 gap-5 ">
                <FaSquareFacebook className=" text-gray-400 hover:text-blue-500 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("facebook")}
                  </h6>
                </div>
              </div>
              <div className=" flex pb-5 gap-5 ">
                <IoLogoYoutube className=" text-gray-400 hover:text-red-500 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("youtube")}
                  </h6>
                </div>
              </div>
              <div className=" flex pb-5 gap-5 ">
                <MdAlternateEmail className=" text-gray-400 hover:text-red-800 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("email")}
                  </h6>
                </div>
              </div>
              <div className=" flex pb-5 gap-5 ">
                <CiLinkedin className=" text-gray-400 hover:text-blue-500 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("linkedin")}
                  </h6>
                </div>
              </div>

              <div className=" flex pb-5 gap-5 ">
                <FaInstagram className=" text-gray-400 hover:text-pink-600 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("instagram")}
                  </h6>
                </div>
              </div>
              <div className=" flex pb-5 gap-5 ">
                <FaTelegramPlane className=" text-gray-400 hover:text-blue-400 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("telegram")}
                  </h6>
                </div>
              </div>
              <div className=" flex pb-5 gap-5 ">
                <FaSnapchatSquare className=" text-gray-400 hover:text-yellow-300 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("snapchat")}
                  </h6>
                </div>
              </div>
              <div className=" flex pb-5 gap-5 ">
                <IoLogoTiktok className=" text-gray-400 hover:text-black size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("tiktok")}
                  </h6>
                </div>
              </div>

              <div className=" flex pb-5 gap-5 ">
                <TbBrandFiverr className=" text-gray-400 hover:text-black size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("fiverr")}
                  </h6>
                </div>
              </div>
              <div className=" flex pb-5 gap-5 ">
                <FaRedditAlien className=" text-gray-400 hover:text-red-400 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("reddit")}
                  </h6>
                </div>
              </div>
              <div className=" flex pb-5 gap-5 ">
                <RiTwitterXLine className=" text-gray-400 hover:text-black size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("x")}
                  </h6>
                </div>
              </div>
              <div className=" flex pb-5 gap-5 ">
                <FaThreads className=" text-gray-400 hover:text-black size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("threads")}
                  </h6>
                </div>
              </div>
              <div className=" flex pb-5 gap-5 ">
                <FaFlickr className=" text-gray-400 hover:text-slate-200  size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("flickr")}
                  </h6>
                </div>
              </div>
              <div className=" flex pb-5 gap-5 ">
                <FaGithub className=" text-gray-400 hover:text-black size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("github")}
                  </h6>
                </div>
              </div>
              <div className=" flex pb-5 gap-5 ">
                <FaPinterestP className=" text-gray-400 hover:text-red-500 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("pinterest")}
                  </h6>
                </div>
              </div>
              <div className=" flex pb-5 gap-5 ">
                <FaMeetup className=" text-gray-400 hover:text-red-500 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("meetup")}
                  </h6>
                </div>
              </div>
              <div className=" flex pb-5 gap-5 ">
                <BsSinaWeibo className=" text-gray-400 hover:text-red-800 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("sinaWeibo")}
                  </h6>
                </div>
              </div>
              <div className=" flex pb-5 gap-5 ">
                <TbBrandTinder className=" text-gray-400 hover:text-pink-600 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("tinder")}
                  </h6>
                </div>
              </div>
              <div className=" flex pb-5 gap-5 ">
                <FaTumblrSquare className=" text-gray-400 hover:text-blue-500 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("tumblr")}
                  </h6>
                </div>
              </div>
              <div className=" flex pb-5 gap-5 ">
                <IoLogoXing className=" text-gray-400 hover:text-cyan-800 size-6" />
                <div className="    items-end">
                  <h6 className=" text-xs text-slate-400">
                    - {renderSocialMedia("xing")}
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

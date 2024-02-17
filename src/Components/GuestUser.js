import "../CustomCSS/Guest.css";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import guestImg from "../image/guestImg.png";
import guestProfileImg from "../image/guestProfile.png";
import facebook from "../image/socialMedia/facebook.png";
import youtube from "../image/socialMedia/YouTube.png";
import instagram from "../image/socialMedia/Instgram.png";
import snapchat from "../image/socialMedia/SnapChat.png";
import tiktok from "../image/socialMedia/TikTok.png";
import x from "../image/socialMedia/X.png";
import pinterest from "../image/socialMedia/Pinterest.png";
import tinder from "../image/socialMedia/Tinder.png";
import axios from "axios";
import clipboardy from "clipboardy";
import { FaRegCopy } from "react-icons/fa6";

export default function Guest() {
  const [loading, setLoading] = useState(false);
  const [copyboardcolour, setcopyboardcolour] = useState(
    "border-orange-400 text-orange-400"
  );
  const [inputBoxColor, setinputBoxColor] = useState(
    "border-b-2 border-[#36c6a918]"
  );
  const [accountState, setaccountState] = useState(false);
  const [usernameAlreadyExistsMessage, setusernameAlreadyExistsMessage] =
    useState("");
  const [formData, setFormData] = useState({
    username: "",
    facebook: "",
    youtube: "",
    instagram: "",
    snapchat: "",
    tiktok: "",
    x: "",
    pinterest: "",
    tinder: "",
  });
  const [isMounted, setIsMounted] = useState(false);
  let timeoutId = null;

  useEffect(() => {
    timeoutId = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  const HandleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      // console.log(formData);
      const response = await axios.post(
        "https://linkhub-datatransfer-apiservice.onrender.com/guestUserData",
        formData
      );

      if (response.status === 200) {
        setLoading(false);
        // console.log("Data submitted successfully!", response.data);
        setaccountState(true);
      } else {
        // console.error("Error submitting data:", response.statusText);
        setinputBoxColor(" border-b-2 shadow-2xl border-[#da3f34a6]");
        setLoading(false);
      }
    } catch (error) {
      // console.error("Error:", error);
      setLoading(false);
      setinputBoxColor(" border-b-2 shadow-2xl border-[#da3f34a6]");
      setusernameAlreadyExistsMessage("Username already exists!..");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <NavBar />
      <div
        className={`${
          isMounted ? "slide-in" : ""
        } opacity-0 font-Sriracha sm:flex sm:mx-auto pt-[25px] mx-4 sm:w-11/12 lg:w-4/5 `}
      >
        <div className="sm:w-7/12 mt-4 sm:mt-10">
          {accountState === true ? (
            <div className={` h-full ${isMounted ? "slide-in" : ""} opacity-0`}>
              <h1 className="text-green-300 text-xs pl-10  w-10/12 sm:text-base py-5">
                Your Account has been Created Successfully!..
              </h1>
              <div className="flex my-20  sm:my-10 justify-center items-center h-2/4">
                <div className="pt-3 pb-1 border rounded-md border-slate-300 shadow flex w-10/12 ">
                  <h1 className=" px-4  w-10/12">{formData.username}</h1>
                  <div
                    className={`px-5 ${copyboardcolour}  flex justify-center items-center w-2/12`}
                    onClick={() => {
                      const linkToCopy = `${formData.username}`;
                      clipboardy
                        .write(linkToCopy)
                        .then(() => {
                          setcopyboardcolour(
                            "border-orange-300 text-orange-300"
                          );
                        })
                        .catch((error) => {
                          console.error("Error copying link:", error);
                          alert("Failed to copy link. Please try again.");
                        });
                    }}
                  >
                    <FaRegCopy />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <form
              action="#"
              className=" text-xs sm:text-sm relative"
              onSubmit={HandleSubmit}
            >
              <div className={`${loading === true ? "blur" : "blur-none"}`}>
                <h1 className=" w-full pl-16 text-red-400 text-end px-7 h-4 text-xs py-0 my-0">
                  {usernameAlreadyExistsMessage}
                </h1>
                <div className={`guestname ${inputBoxColor}`}>
                  <img
                    className="guestpic"
                    src={guestProfileImg}
                    alt=""
                    width="30vw"
                  />
                  <input
                    type="text"
                    className="gues-tname text-sm"
                    name="username"
                    placeholder="Your Name"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="linkshow_block ">
                  <div className="linkshow my-[10px] mx-[5px] sm:mx-[8px] links_start">
                    <img
                      className="social_image"
                      src={facebook}
                      width="30vw"
                      height="30vw"
                      alt=""
                    />
                    <p className="social_nam"></p>{" "}
                    <input
                      type="text"
                      name="facebook"
                      className="facebook_colour text-sm show_social_link pink"
                      placeholder="...."
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="linkshow my-[10px] mx-[5px] sm:mx-[8px] links_start">
                    <img
                      className="social_image"
                      src={youtube}
                      width="30vw"
                      height="30vw"
                      alt=""
                    />
                    <p className="social_nam"></p>{" "}
                    <input
                      type="text"
                      name="youtube"
                      className=" youtube_colour text-sm show_social_link pink"
                      placeholder="...."
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="linkshow my-[10px] mx-[5px] sm:mx-[8px] links_start">
                    <img
                      className="social_image"
                      src={instagram}
                      width="30vw"
                      height="30vw"
                      alt=""
                    />
                    <p className="social_nam"></p>{" "}
                    <input
                      type="text"
                      name="instagram"
                      className="instragram_colour text-sm show_social_link pink"
                      placeholder="...."
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="linkshow my-[10px] mx-[5px] sm:mx-[8px] links_start">
                    <img
                      className="social_image"
                      src={snapchat}
                      width="30vw"
                      height="30vw"
                      alt=""
                      required
                    />
                    <p className="social_nam"></p>{" "}
                    <input
                      type="text"
                      name="snapchat"
                      className="snapchat_colour text-sm show_social_link pink"
                      placeholder="...."
                      onChange={handleChange}
                    />
                  </div>
                  <div className="linkshow my-[10px] mx-[5px] sm:mx-[8px] links_start">
                    <img
                      className="social_image"
                      src={tiktok}
                      width="30vw"
                      height="30vw"
                      alt=""
                    />
                    <p className="social_nam"></p>{" "}
                    <input
                      type="text"
                      name="tiktok"
                      className="tiktok_colour text-sm show_social_link pink"
                      placeholder="...."
                      onChange={handleChange}
                    />
                  </div>

                  <div className="linkshow my-[10px] mx-[5px] sm:mx-[8px] links_start">
                    <img
                      className="social_image"
                      src={x}
                      width="30vw"
                      height="30vw"
                      alt=""
                    />
                    <p className="social_nam"></p>{" "}
                    <input
                      type="text"
                      name="x"
                      className="x_colour text-sm show_social_link pink"
                      placeholder="...."
                      onChange={handleChange}
                    />
                  </div>

                  <div className="linkshow my-[10px] mx-[5px] sm:mx-[8px] links_start">
                    <img
                      className="social_image"
                      src={pinterest}
                      width="30vw"
                      height="30vw"
                      alt=""
                    />
                    <p className="social_nam"></p>{" "}
                    <input
                      type="text"
                      name="pinterest"
                      className="pinterest_colour text-sm show_social_link pink"
                      placeholder="...."
                      onChange={handleChange}
                    />
                  </div>

                  <div className="linkshow my-[10px] mx-[5px] sm:mx-[8px] links_start">
                    <img
                      className="social_image"
                      src={tinder}
                      width="30vw"
                      height="30vw"
                      alt=""
                    />
                    <p className="social_nam"></p>{" "}
                    <input
                      type="text"
                      name="tinder"
                      className="tinder_colour text-sm show_social_link pink"
                      placeholder="...."
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="save_link">
                  <button name="submit" className=" save_link_btn">
                    Save & Get Link
                  </button>
                </div>
              </div>

              <div
                className={` absolute top-[50%] right-[50%] size-5  sm:size-6 ${
                  loading === true ? "flex" : "hidden"
                } items-center`}
              >
                <div className="innerBox bg-orange-400  border  w-4"></div>
                <div className="innerBox bg-orange-400 border  w-4"></div>
                <div className="innerBox bg-orange-400 border  w-4"></div>
                <div className="innerBox bg-orange-400 border  w-4"></div>
                <div className="innerBox bg-orange-400 border  w-4"></div>
              </div>
            </form>
          )}
        </div>

        <div className="sm:w-5/12 mt-4 sm:ml-10 w-10/12 mx-auto lg:ml-20 sm:mt-10 mb-5 ">
          <div className="mr-5 sm:mx-5">
            <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-[14px]">
              <span className="text-[#00ffca] text-2xl sm:text-3xl md:text-4xl">
                Thank you for choosing Linkhub!.
              </span>
              <br />
              Your social media journey just got simpler. Stay connected, and if
              you need any assistance, we're here to help!.
            </p>
          </div>
          <div className="mx-5 sm:mx-5">
            <img src={guestImg} alt="" />
          </div>
        </div>
      </div>

      <footer className=" mt-4">
        <Footer />
      </footer>
    </>
  );
}

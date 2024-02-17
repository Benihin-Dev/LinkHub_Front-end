import "../CustomCSS/PaidUser.css";
import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import clipboardy from "clipboardy";
import { FaRegCopy } from "react-icons/fa6";
import NavBar from "./NavBar";
import Footer from "./Footer";
import guestImg from "../image/guestImg.png";
import facebook from "../image/socialMedia/facebook.png";
import Fiverr from "../image/socialMedia/Fiverr.png";
import Flickr from "../image/socialMedia/Flickr.png";
import Github from "../image/socialMedia/Github.png";
import Gmail from "../image/socialMedia/Gmail.png";
import Instgram from "../image/socialMedia/Instgram.png";
import LinkedIn from "../image/socialMedia/LinkedIn.png";
import Meetup from "../image/socialMedia/Meetup.png";
import Pinterest from "../image/socialMedia/Pinterest.png";
import Reddit from "../image/socialMedia/Reddit.png";
import SinaWeibo from "../image/socialMedia/Sina Weibo.png";
import SnapChat from "../image/socialMedia/SnapChat.png";
import Telegram from "../image/socialMedia/Telegram.png";
import Threads from "../image/socialMedia/Threads.png";
import TikTok from "../image/socialMedia/TikTok.png";
import Tinder from "../image/socialMedia/Tinder.png";
import Tumblr from "../image/socialMedia/Tumblr.png";
import whatsapp from "../image/socialMedia/whatsapp.png";
import X from "../image/socialMedia/X.png";
import Xing from "../image/socialMedia/Xing.png";
import YouTube from "../image/socialMedia/YouTube.png";
import guestProfileImg from "../image/guestProfile.png";

export default function PaidUser() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const receivedData = location.state;
  let PaidUserData = receivedData.formData3;

  const [copyboardcolour, setcopyboardcolour] = useState(
    "border-orange-600 text-orange-600"
  );
  const [accountState, setaccountState] = useState(false);
  const [socialMedia, setsocialMedia] = useState({
    socialMedia: {
      whatsapp: [""],
      facebook: [""],
      youtube: [""],
      email: [""],
      linkedin: [""],
      instagram: [""],
      telegram: [""],
      snapchat: [""],
      tiktok: [""],
      reddit: [""],
      x: [""],
      threads: [""],
      fiverr: [""],
      flickr: [""],
      github: [""],
      pinterest: [""],
      meetup: [""],
      sinaWeibo: [""],
      tinder: [""],
      tumblr: [""],
      xing: [""],
    },
  });

  const [fetchedsocialMedia, setFetchedSocialMedia] = useState(
    PaidUserData.socialMedia
  );
  const handleUpdateChange = (event, platform) => {
    const { value } = event.target;
    setFetchedSocialMedia((prevSocialMedia) => ({
      ...prevSocialMedia,
      [platform]: value.split("\n"),
    }));
  };

  function handleChange(event) {
    const { name, value } = event.target;

    const values = value
      .trim()
      .split("\n")
      .filter((line) => line.trim())
      .map((line) => line.trim());

    setsocialMedia((prevState) => ({
      ...prevState,
      socialMedia: {
        ...prevState.socialMedia,
        [name]: values,
      },
    }));
  }

  const handleSubmitUpdatedData = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      // console.log({ fetchedsocialMedia });
      const response = await axios.patch(
        `https://linkhub-datatransfer-apiservice.onrender.com/paidUserData/${PaidUserData.username}`,
        { socialMedia: fetchedsocialMedia }
      );
      setLoading(false);
      // console.log("User Updated successfully!", response.data);
      setaccountState(true);
    } catch (error) {
      setLoading(false);
      console.error("Error adding user:", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      // console.log(socialMedia);
      const response = await axios.patch(
        `https://linkhub-datatransfer-apiservice.onrender.com/paidUserData/${PaidUserData.username}`,
        socialMedia
      );
      setLoading(false);
      // console.log("User added successfully!", response.data);
      setaccountState(true);
    } catch (error) {
      setLoading(false);
      console.error("Error adding user:", error);
    }
  };

  if (
    PaidUserData &&
    typeof PaidUserData === "object" &&
    PaidUserData.hasOwnProperty("socialMedia")
  ) {
    return (
      <>
        <NavBar />
        <div
          className={`font-Sriracha sm:flex sm:mx-auto py-[30px] ${
            accountState && "sm:pt-20 pt-12"
          } mx-4 sm:w-10/12 lg:w-8/12 `}
        >
          <div className="sm:w-7/12 lg:w-6/12 lg:mx-8 mt-4 sm:mt-10">
            {accountState === true ? (
              <div className="  h-full">
                <h1 className="text-green-300 text-xs pl-20  w-10/12 sm:text-base py-5">
                  Your Account has been Updated Successfully!..
                </h1>
                <div className="flex my-20 sm:my-10 justify-center items-center h-2/4">
                  <h1 className=" text-xs  border-b  text-end w-6/12 sm:text-base pr-2 py-1">
                    {PaidUserData.username}
                  </h1>
                  <div
                    className={`px-5 ml-4 border ${copyboardcolour} rounded-lg py-1`}
                    onClick={() => {
                      const linkToCopy = `http://localhost:8080/paidUserData/${PaidUserData.username}`;
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
            ) : (
              <form
                className=" relative"
                action="#"
                onSubmit={handleSubmitUpdatedData}
              >
                <div className="user-name border-b">
                  <input
                    type="text"
                    name="username"
                    className="accuser-name"
                    readOnly
                    value={PaidUserData.username}
                  />
                  <img
                    className="userpic"
                    src={guestProfileImg}
                    width="33vw"
                    alt=""
                  />
                </div>
                <div className="acc_block">
                  <div className="links links_start">
                    <img src={whatsapp} width="22vw" alt="" />
                    <p className="social_name">Whatsapp</p>{" "}
                    <textarea
                      name="whatsapp"
                      type="text"
                      className={`social_link resize-none col light_green `}
                      placeholder="...."
                      required
                      rows={`${fetchedsocialMedia.whatsapp.length}`}
                      value={fetchedsocialMedia.whatsapp.join("\n")}
                      onChange={(event) =>
                        handleUpdateChange(event, "whatsapp")
                      }
                    />
                  </div>
                  <div className="links links_end">
                    <img src={facebook} width="22vw" alt="" />
                    <p className="social_name">FaceBook</p>{" "}
                    <textarea
                      name="facebook"
                      type="text"
                      className="social_link resize-none blue"
                      rows={`${fetchedsocialMedia.facebook.length}`}
                      value={fetchedsocialMedia.facebook.join("\n")}
                      onChange={(event) =>
                        handleUpdateChange(event, "facebook")
                      }
                    />
                  </div>
                  <div className="links links_start">
                    <img src={YouTube} width="22vw" alt="" />
                    <p className="social_name">YouTube</p>{" "}
                    <textarea
                      name="youtube"
                      type="text"
                      className="social_link resize-none red"
                      placeholder="...."
                      rows={`${fetchedsocialMedia.youtube.length}`}
                      value={fetchedsocialMedia.youtube.join("\n")}
                      onChange={(event) => handleUpdateChange(event, "youtube")}
                    />
                  </div>
                  <div className="links links_end">
                    <img src={Gmail} width="22vw" alt="" />
                    <p className="social_name"> Email</p>
                    <textarea
                      name="email"
                      type="text"
                      className="social_link resize-none orange"
                      placeholder="..."
                      rows={`${fetchedsocialMedia.email.length}`}
                      value={fetchedsocialMedia.email.join("\n")}
                      onChange={(event) => handleUpdateChange(event, "email")}
                    />
                  </div>
                  <div className="links links_start">
                    <img src={LinkedIn} width="22vw" alt="" />
                    <p className="social_name">LinkedIn</p>{" "}
                    <textarea
                      name="linkedin"
                      type="text"
                      className="social_link resize-none light_blue"
                      placeholder="...."
                      rows={`${fetchedsocialMedia.linkedin.length}`}
                      value={fetchedsocialMedia.linkedin.join("\n")}
                      onChange={(event) =>
                        handleUpdateChange(event, "linkedin")
                      }
                    />
                  </div>
                  <div className="links links_end">
                    <img src={Instgram} width="22vw" alt="" />
                    <p className="social_name">Instagram</p>{" "}
                    <textarea
                      name="instragram"
                      type="text"
                      className="social_link resize-none pink"
                      placeholder="..."
                      rows={`${fetchedsocialMedia.instagram.length}`}
                      value={fetchedsocialMedia.instagram.join("\n")}
                      onChange={(event) =>
                        handleUpdateChange(event, "instagram")
                      }
                    />
                  </div>
                  <div className="links links_start">
                    <img src={Telegram} width="22vw" alt="" />
                    <p className="social_name">Telegram</p>{" "}
                    <textarea
                      name="telegram"
                      type="text"
                      className="social_link resize-none light_blue"
                      placeholder="...."
                      rows={`${fetchedsocialMedia.telegram.length}`}
                      value={fetchedsocialMedia.telegram.join("\n")}
                      onChange={(event) =>
                        handleUpdateChange(event, "telegram")
                      }
                    />
                  </div>
                  <div className="links links_end">
                    <img src={SnapChat} width="22vw" alt="" />
                    <p className="social_name">Snapchat</p>
                    <textarea
                      name="snapchat"
                      type="text"
                      className="social_link resize-none yellow"
                      placeholder="..."
                      rows={`${fetchedsocialMedia.snapchat.length}`}
                      value={fetchedsocialMedia.snapchat.join("\n")}
                      onChange={(event) =>
                        handleUpdateChange(event, "snapchat")
                      }
                    />
                  </div>
                  <div className="links links_start">
                    <img src={TikTok} width="22vw" alt="" />
                    <p className="social_name">TikTok</p>{" "}
                    <textarea
                      name="tiktok"
                      type="text"
                      className="social_link resize-none black"
                      placeholder="...."
                      rows={`${fetchedsocialMedia.tiktok.length}`}
                      value={fetchedsocialMedia.tiktok.join("\n")}
                      onChange={(event) => handleUpdateChange(event, "tiktok")}
                    />
                  </div>
                  <div className="links links_end">
                    <img src={Reddit} width="22vw" alt="" />
                    <p className="social_name"> Reddit</p>
                    <textarea
                      name="reddit"
                      type="text"
                      className="social_link resize-none red"
                      placeholder="..."
                      rows={`${fetchedsocialMedia.reddit.length}`}
                      value={fetchedsocialMedia.reddit.join("\n")}
                      onChange={(event) => handleUpdateChange(event, "reddit")}
                    />
                  </div>
                  <div className="links links_start">
                    <img src={X} width="22vw" alt="" />
                    <p className="social_name">X</p>{" "}
                    <textarea
                      name="x"
                      type="text"
                      className="social_link resize-none purple"
                      placeholder="...."
                      rows={`${fetchedsocialMedia.x.length}`}
                      value={fetchedsocialMedia.x.join("\n")}
                      onChange={(event) => handleUpdateChange(event, "x")}
                    />
                  </div>
                  <div className="links links_end">
                    <img src={Threads} width="22vw" alt="" />
                    <p className="social_name">Threads</p>
                    <textarea
                      name="threads"
                      type="text"
                      className="social_link resize-none black"
                      placeholder="..."
                      rows={`${fetchedsocialMedia.threads.length}`}
                      value={fetchedsocialMedia.threads.join("\n")}
                      onChange={(event) => handleUpdateChange(event, "threads")}
                    />
                  </div>
                  <div className="links links_start">
                    <img src={Flickr} width="22vw" alt="" />
                    <p className="social_name">Flickr</p>{" "}
                    <textarea
                      name="flickr"
                      type="text"
                      className="social_link resize-none pink"
                      placeholder="...."
                      rows={`${fetchedsocialMedia.flickr.length}`}
                      value={fetchedsocialMedia.flickr.join("\n")}
                      onChange={(event) => handleUpdateChange(event, "flickr")}
                    />
                  </div>
                  <div className="links links_end">
                    <img src={Github} width="22vw" alt="" />
                    <p className="social_name">GitHub</p>{" "}
                    <textarea
                      name="github"
                      type="text"
                      className="social_link resize-none yellow "
                      placeholder="..."
                      rows={`${fetchedsocialMedia.github.length}`}
                      value={fetchedsocialMedia.github.join("\n")}
                      onChange={(event) => handleUpdateChange(event, "github")}
                    />
                  </div>
                  <div className="links links_start">
                    <img src={Pinterest} width="22vw" alt="" />
                    <p className="social_name">Pinterest</p>{" "}
                    <textarea
                      name="pinterest"
                      type="text"
                      className="social_link resize-none light_blue"
                      placeholder="...."
                      rows={`${fetchedsocialMedia.pinterest.length}`}
                      value={fetchedsocialMedia.pinterest.join("\n")}
                      onChange={(event) =>
                        handleUpdateChange(event, "pinterest")
                      }
                    />
                  </div>
                  <div className="links links_end">
                    <img src={Meetup} width="22vw" alt="" />
                    <p className="social_name"> Meetup</p>{" "}
                    <textarea
                      name="meetup"
                      type="text"
                      className="social_link resize-none light_green"
                      placeholder="..."
                      rows={`${fetchedsocialMedia.meetup.length}`}
                      value={fetchedsocialMedia.meetup.join("\n")}
                      onChange={(event) => handleUpdateChange(event, "meetup")}
                    />
                  </div>
                  <div className="links links_start">
                    <img src={SinaWeibo} width="22vw" alt="" />
                    <p className="social_name">SinaWeibo</p>{" "}
                    <textarea
                      name="sinaweigo"
                      type="text"
                      className="social_link resize-none green"
                      placeholder="...."
                      rows={`${fetchedsocialMedia.sinaWeibo.length}`}
                      value={fetchedsocialMedia.sinaWeibo.join("\n")}
                      onChange={(event) =>
                        handleUpdateChange(event, "sinaWeibo")
                      }
                    />
                  </div>
                  <div className="links links_end">
                    <img src={Fiverr} width="6%" alt="" />
                    <p className="social_name">Fiverr</p>{" "}
                    <textarea
                      name="fiverr"
                      type="text"
                      className="social_link resize-none purple"
                      placeholder="..."
                      rows={`${fetchedsocialMedia.fiverr.length}`}
                      value={fetchedsocialMedia.fiverr.join("\n")}
                      onChange={(event) => handleUpdateChange(event, "fiverr")}
                    />
                  </div>
                  <div className="links links_start">
                    <img src={Tinder} width="22vw" alt="" />
                    <p className="social_name">Tinder</p>
                    <textarea
                      name="tinder"
                      type="text"
                      className="social_link resize-none light_blue"
                      placeholder="..."
                      rows={`${fetchedsocialMedia.tinder.length}`}
                      value={fetchedsocialMedia.tinder.join("\n")}
                      onChange={(event) => handleUpdateChange(event, "tinder")}
                    />
                  </div>
                  <div className="links links_end">
                    <img src={Tumblr} width="22vw" alt="" />
                    <p className="social_name"> tumblr</p>{" "}
                    <textarea
                      name="tumblr"
                      type="text"
                      className="social_link resize-none pink"
                      placeholder="...."
                      rows={`${fetchedsocialMedia.tumblr.length}`}
                      value={fetchedsocialMedia.tumblr.join("\n")}
                      onChange={(event) => handleUpdateChange(event, "tumblr")}
                    />
                  </div>
                  <div className="links links_start">
                    <img src={Xing} width="22vw" alt="" />
                    <p className="social_name">Xing</p>{" "}
                    <textarea
                      name="xing"
                      type="text"
                      className="social_link resize-none light_green"
                      placeholder="..."
                      rows={`${fetchedsocialMedia.xing.length}`}
                      value={fetchedsocialMedia.xing.join("\n")}
                      onChange={(event) => handleUpdateChange(event, "xing")}
                    />
                  </div>
                </div>
                <div className="update_link">
                  <button name="submit" className="btn update_link_btn">
                    Save Links
                  </button>
                </div>
                <div
                  className={` absolute top-[40%] right-[50%]  md:right-[50%] size-5 sm:size-6 ${
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

          <div className="sm:w-5/12 sm:ml-10 flex justify-center items-end mb-5 ">
            <div className=" ">
              <div className="mr-5 mx-10 sm:mx-5">
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
                <img src={guestImg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  } else {
    return (
      <>
        <NavBar />
        <div
          className={`font-Sriracha sm:flex sm:mx-auto py-[30px] ${
            accountState && "sm:pt-20 pt-12"
          } mx-4 sm:w-10/12 lg:w-8/12 `}
        >
          <div className="sm:w-7/12 lg:w-6/12 lg:mx-8 mt-4 sm:mt-10">
            {accountState === true ? (
              <div className="  h-full">
                <h1 className="text-green-300 text-xs pl-20  w-10/12 sm:text-base py-5">
                  Your Account has been Created Successfully!..
                </h1>
                <div className="flex my-20 sm:my-10 justify-center items-center h-2/4">
                  <h1 className=" text-xs  border-b text-end w-6/12 sm:text-base pr-2 py-1">
                    {PaidUserData.username}
                  </h1>
                  <div
                    className={`px-3 ml-4 border ${copyboardcolour} rounded-lg py-1`}
                    onClick={() => {
                      const linkToCopy = `http://localhost:8080/paidUserData/${PaidUserData.username}`;
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
            ) : (
              <form action="#" className=" relative" onSubmit={handleSubmit}>
                <div className="user-name border-b">
                  <input
                    type="text"
                    name="username"
                    className="accuser-name"
                    readOnly
                    value={PaidUserData.username}
                  />
                  <img
                    className="userpic"
                    src={guestProfileImg}
                    width="33vw"
                    alt=""
                  />
                </div>
                <div className="acc_block">
                  <div className="links links_start">
                    <img src={whatsapp} width="22vw" alt="" />
                    <p className=" text-sm">WhatsApp</p>{" "}
                    <textarea
                      name="whatsapp"
                      type="text"
                      className="social_link light_green"
                      placeholder="...."
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="links links_end">
                    <img src={facebook} width="22vw" alt="" />
                    <p className="social_name">FaceBook</p>{" "}
                    <textarea
                      name="facebook"
                      type="text"
                      row={2}
                      className="social_link blue"
                      placeholder="..."
                      onChange={handleChange}
                    />
                  </div>
                  <div className="links links_start">
                    <img src={YouTube} width="22vw" alt="" />
                    <p className="social_name">YouTube</p>{" "}
                    <textarea
                      name="youtube"
                      type="text"
                      row={2}
                      className="social_link red"
                      placeholder="...."
                      onChange={handleChange}
                    />
                  </div>
                  <div className="links links_end">
                    <img src={Gmail} width="22vw" alt="" />
                    <p className="social_name"> Email</p>
                    <textarea
                      name="email"
                      type="text"
                      row={2}
                      className="social_link orange"
                      placeholder="..."
                      onChange={handleChange}
                    />
                  </div>
                  <div className="links links_start">
                    <img src={LinkedIn} width="22vw" alt="" />
                    <p className="social_name">LinkedIn</p>{" "}
                    <textarea
                      name="linkedin"
                      type="text"
                      row={2}
                      className="social_link light_blue"
                      placeholder="...."
                      onChange={handleChange}
                    />
                  </div>
                  <div className="links links_end">
                    <img src={Instgram} width="22vw" alt="" />
                    <p className="social_name">Instagram</p>{" "}
                    <textarea
                      name="instagram"
                      type="text"
                      row={2}
                      className="social_link pink"
                      placeholder="..."
                      onChange={handleChange}
                    />
                  </div>
                  <div className="links links_start">
                    <img src={Telegram} width="22vw" alt="" />
                    <p className="social_name">Telegram</p>{" "}
                    <textarea
                      name="telegram"
                      type="text"
                      row={2}
                      className="social_link light_blue"
                      placeholder="...."
                      onChange={handleChange}
                    />
                  </div>
                  <div className="links links_end">
                    <img src={SnapChat} width="22vw" alt="" />
                    <p className="social_name">Snapchat</p>
                    <textarea
                      name="snapchat"
                      type="text"
                      row={2}
                      className="social_link yellow"
                      placeholder="..."
                      onChange={handleChange}
                    />
                  </div>
                  <div className="links links_start">
                    <img src={TikTok} width="22vw" alt="" />
                    <p className="social_name">TikTok</p>{" "}
                    <textarea
                      name="tiktok"
                      type="text"
                      row={2}
                      className="social_link black"
                      placeholder="...."
                      onChange={handleChange}
                    />
                  </div>
                  <div className="links links_end">
                    <img src={Reddit} width="22vw" alt="" />
                    <p className="social_name"> Reddit</p>
                    <textarea
                      name="reddit"
                      type="text"
                      row={2}
                      className="social_link red"
                      placeholder="..."
                      onChange={handleChange}
                    />
                  </div>
                  <div className="links links_start">
                    <img src={X} width="22vw" alt="" />
                    <p className="social_name">X</p>{" "}
                    <textarea
                      name="x"
                      type="text"
                      row={2}
                      className="social_link purple"
                      placeholder="...."
                      onChange={handleChange}
                    />
                  </div>
                  <div className="links links_end">
                    <img src={Threads} width="22vw" alt="" />
                    <p className="social_name">Threads</p>
                    <textarea
                      name="threads"
                      type="text"
                      row={2}
                      className="social_link black"
                      placeholder="..."
                      onChange={handleChange}
                    />
                  </div>

                  <div className="links links_start">
                    <img src={Flickr} width="22vw" alt="" />
                    <p className="social_name">Flickr</p>{" "}
                    <textarea
                      name="flickr"
                      type="text"
                      row={2}
                      className="social_link pink"
                      placeholder="...."
                      onChange={handleChange}
                    />
                  </div>

                  <div className="links links_end">
                    <img src={Github} width="22vw" alt="" />
                    <p className="social_name">GitHub</p>{" "}
                    <textarea
                      name="github"
                      type="text"
                      row={2}
                      className="social_link yellow "
                      placeholder="..."
                      onChange={handleChange}
                    />
                  </div>
                  <div className="links links_start">
                    <img src={Pinterest} width="22vw" alt="" />
                    <p className="social_name">Pinterest</p>{" "}
                    <textarea
                      name="pinterest"
                      type="text"
                      row={2}
                      className="social_link light_blue"
                      placeholder="...."
                      onChange={handleChange}
                    />
                  </div>
                  <div className="links links_end">
                    <img src={Meetup} width="22vw" alt="" />
                    <p className="social_name"> Meetup</p>{" "}
                    <textarea
                      name="meetup"
                      type="text"
                      row={2}
                      className="social_link light_green"
                      placeholder="..."
                      onChange={handleChange}
                    />
                  </div>

                  <div className="links links_start">
                    <img src={SinaWeibo} width="22vw" alt="" />
                    <p className="social_name">SinaWeibo</p>{" "}
                    <textarea
                      name="sinaWeibo"
                      type="text"
                      row={2}
                      className="social_link green"
                      placeholder="...."
                      onChange={handleChange}
                    />
                  </div>
                  <div className="links links_end">
                    <img src={Fiverr} width="6%" alt="" />
                    <p className="social_name">Fiverr</p>{" "}
                    <textarea
                      name="fiverr"
                      type="text"
                      row={2}
                      className="social_link purple"
                      placeholder="..."
                      onChange={handleChange}
                    />
                  </div>
                  <div className="links links_start">
                    <img src={Tinder} width="22vw" alt="" />
                    <p className="social_name">Tinder</p>
                    <textarea
                      name="tinder"
                      type="text"
                      row={2}
                      className="social_link light_blue"
                      placeholder="..."
                      onChange={handleChange}
                    />
                  </div>
                  <div className="links links_end">
                    <img src={Tumblr} width="22vw" alt="" />
                    <p className="social_name"> tumblr</p>{" "}
                    <textarea
                      name="tumblr"
                      type="text"
                      row={2}
                      className="social_link pink"
                      placeholder="...."
                      onChange={handleChange}
                    />
                  </div>

                  <div className="links links_start">
                    <img src={Xing} width="22vw" alt="" />
                    <p className="social_name">Xing</p>{" "}
                    <textarea
                      name="xing"
                      type="text"
                      row={2}
                      className="social_link light_green"
                      placeholder="..."
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="update_link">
                  <button name="submit" className="btn update_link_btn">
                    Save Links
                  </button>
                </div>
                <div
                  className={` absolute top-[40%] right-[50%]  md:right-[50%] size-5 sm:size-6 ${
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

          <div className="sm:w-5/12 sm:ml-10 mx-auto w-10/12 flex justify-center items-end mb-5 ">
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
                <img src={guestImg} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-0 right-0 left-0 sm:relative sm:mt-16">
          <Footer />
        </div>
      </>
    );
  }
}

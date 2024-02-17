import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import PlansImg from "../image/PlansImg.png";

export default function About() {
  const [isMounted, setIsMounted] = useState(false);
  let timeoutId = null;

  useEffect(() => {
    timeoutId = setTimeout(() => {
      setIsMounted(true);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <>
      <NavBar />
      <div
        className={`${
          isMounted ? "slide-in" : ""
        } opacity-0 about font-Sriracha gap-10 sm:flex w-11/12 sm:px-10 pt-16 md:pt-24 mx-auto mb-5 sm:w-4/5`}
      >
        <div className="sm:pr-4 about h-[450px] overflow-y-scroll mx-auto w-11/12 sm:w-3/5">
          <div className="mt-5 sm:mt-10">
            <p className=" text-slate-800 text-[16px] text-justify leading-5">
              Welcome to our social media ID management platform! We provide a
              convenient and secure way for users to manage and share their
              social media IDs with ease.
            </p>
          </div>
          <div className="mt-5 w-full">
            <h1 className="border-b text-orange-400 text-[17px]">Our Vision</h1>
            <p className="text-slate-400 text-[14px] text-justify pt-1">
              Our vision is to simplify the process of managing and sharing
              social media IDs, making it effortless for individuals and
              businesses to connect and share their online presence.
            </p>
          </div>
          <div className="mt-5 w-full">
            <h1 className="border-b text-end text-orange-400 text-[17px]">
              Unique User Accounts
            </h1>
            <p className="text-slate-400 text-[14px] text-justify pt-1">
              Users can create either guest or paid user accounts, each with a
              unique username. These usernames serve as a key to access and
              share their social media IDs and profile names.
            </p>
          </div>
          <div className="mt-5 w-full">
            <h1 className="border-b text-orange-400 text-[17px]">
              Manage Social Media IDs
            </h1>
            <p className="text-slate-400 text-[14px] text-justify pt-1">
              Once logged in, users can easily save and update their social
              media IDs and profile names under their username. This allows for
              quick and efficient management of their online profiles.
            </p>
          </div>
          <div className="mt-5 w-full">
            <h1 className="border-b text-end text-orange-400 text-[17px]">
              Share Social Media IDs
            </h1>
            <p className="text-slate-400 text-[14px] text-justify pt-1">
              Users can share their social media IDs list with others by simply
              providing their unique username. This feature enables seamless
              sharing of social media profiles and enhances connectivity.
            </p>
          </div>
          <div className="mt-5 w-full">
            <h1 className="border-b text-orange-400 text-[17px]">
              Get Connected
            </h1>
            <p className="text-slate-400 text-[14px] text-justify pt-1">
              Our platform not only helps users manage their social media
              presence but also facilitates networking by allowing others to
              easily access their social media IDs.
            </p>
          </div>
          <div className="mt-5 w-full">
            <h1 className="border-b text-end text-orange-400 text-[17px]">
              Join Us Today!
            </h1>
            <p className="text-slate-400 text-[14px] text-justify pt-1">
              Whether you're an individual looking to manage your social media
              presence or a business seeking to connect with customers, our
              platform offers the tools you need. Join us today and experience
              the convenience of managing and sharing your social media IDs
              effortlessly.
            </p>
          </div>
          <div className="mt-5 w-full">
            <button className=" border bg-orange-400 border-orange-400 text-white rounded-full py-2 w-full mb-10">
              Join Now
            </button>
          </div>
        </div>
        <div className=" flex w-11/12 sm:w-2/5 mx-auto">
          <img src={PlansImg} alt="" className="mt-5 sm:mt-auto" />
        </div>
      </div>
      <Footer />
    </>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";
import userImg from "../image/user.png";
import contactImg from "../image/contact.png";
import logImg from "../image/unlock.png";
import emailImg from "../image/email.png";
import signatureImg from "../image/signature.png";
import { IoIosEye } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function AccountCreate() {
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const [inputType, setinpuType] = useState(true);
  const [usernameAlert, setusernameAlert] = useState(
    "border-b border-[#27574d82] hover:border-[#4649486c]"
  );
  const [passwordBorder, setpasswordBorder] = useState(
    "border-b border-[#27574d82]"
  );
  const [usernameAlreadyExistsMessage, setusernameAlreadyExistsMessage] =
    useState("");
  const [formData3, setFormData3] = useState({
    firstname: "",
    lastname: "",
    useremail: "",
    username: "",
    password: "",
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
      // console.log(formData3);
      const response = await axios.post(
        "https://linkhub-datatransfer-apiservice.onrender.com/paidUserData",
        formData3
      );

      if (response.status === 200) {
        setLoading(false);
        // console.log("Data submitted successfully!", response.data);
        navigate("/paid-user", { state: { formData3 } });
      } else {
        setLoading(false);
        // console.error("Error submitting data:", response.statusText);
        setusernameAlert("border-b-2 border-red-400");
        setusernameAlreadyExistsMessage("Username already exists!..");
      }
    } catch (error) {
      setLoading(false);
      // console.error("Error:", error);
      setusernameAlert("border-b-2 shadow-lg border-red-400");
      setusernameAlreadyExistsMessage("username already exists!..");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "username") {
      setFormData3((prevData) => ({
        ...prevData,
        [name]: value + "*",
      }));
    } else if (name === "password" && value.length < 4) {
      setpasswordBorder("border-b-2 shadow shadow-red-300 border-red-400");
    } else if (name === "password" && value.length === 4) {
      setpasswordBorder(
        "border-b-2  shadow shadow-orange-400 border-orange-300"
      );
    } else if (name === "password" && value.length === 8) {
      setpasswordBorder("border-b-2 shadow shadow-green-300 border-green-300");
    } else {
      setFormData3((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  return (
    <>
      <NavBar />
      <div
        className={` ${
          isMounted ? "slide-in" : ""
        } opacity-0 font-Sriracha sm:flex sm:w-9/12 md:w-3/5 lg:w-2/5 mx-auto pt-20 sm:pt-40 md:pt-40 lg:pt-[180px]`}
      >
        <div className="w-10/12  mx-auto  sm:pt-auto flex justify-end items-center sm:w-5/12">
          <p className="text-slate-500 px-5 text-sm">
            <span className=" text-[#00ffca] text-3xl sm:text-3xl ">
              Congratulations!
            </span>{" "}
            <br />
            Fill out the form to create your Linkhub account. Showcase all your
            social media profiles in one place.
            <br />
            <span className="text-sm text-[#f3a775]">Almost there!</span>
          </p>
        </div>
        <div className="sm:w-7/12 w-10/12 mx-auto mb-20 mt-16 sm:mt-0 lg:mt-0">
          <form action="#" onSubmit={HandleSubmit} className=" relative">
            <div className={`${loading === true ? "blur" : "blur-none"}`}>
              <div className="mb-3 flex mx-auto w-10/12 sm:w-10/12  hover:border-[#4649486c] border-b border-[#27574d82]  overflow-hidden">
                <div className="w-2/12 sm:w-1/12 lg:w-2/12 bg-[#ffffffad] border-[#00ffca] flex justify-center items-center">
                  <img
                    src={signatureImg}
                    alt="userImg"
                    className=" size-5   "
                  />
                </div>
                <input
                  className="px-3 w-10/12 pt-2 pb-0 text-sm sm:w-11/12 lg:w-10/12 outline-none  bg-[#8ef0dc05] hover:bg-white duration-500"
                  type="text"
                  name="firstname"
                  id="firstname"
                  placeholder="Firstname"
                  onChange={handleChange}
                  required
                  autoFocus
                />
              </div>
              <div className="mb-2 flex mx-auto w-10/12 sm:w-10/12 hover:border-[#4649486c]  border-b border-[#27574d82] overflow-hidden">
                <div className="w-2/12 sm:w-1/12 lg:w-2/12 bg-[#ffffffad] border-[#00ffca] flex justify-center items-center">
                  <img
                    src={signatureImg}
                    alt="userImg"
                    className=" size-5   "
                  />
                </div>
                <input
                  className="px-3 w-10/12 pt-2 pb-0 text-sm sm:w-11/12 lg:w-10/12 outline-none  bg-[#8ef0dc05] hover:bg-white duration-500"
                  type="text"
                  name="lastname"
                  id="lastname"
                  placeholder="Lastname"
                  required
                  onChange={handleChange}
                />
              </div>
              <div
                className={`mb-2 flex mx-auto w-10/12 sm:w-10/12 hover:border-[#4649486c] border-b border-[#27574d82] overflow-hidden`}
              >
                <div className="w-2/12 sm:w-1/12 lg:w-2/12  bg-[#ffffffad] border-[#00ffca]  flex justify-center items-center">
                  <img src={emailImg} alt="userImg" className=" size-5   " />
                </div>
                <input
                  className="px-3 w-10/12 pt-2 pb-0 text-sm sm:w-11/12 lg:w-10/12 outline-none  bg-[#8ef0dc05] hover:bg-white duration-500"
                  type="text"
                  name="useremail"
                  id="email"
                  placeholder="Email"
                  autoComplete="new-email"
                  required
                  onChange={handleChange}
                />
              </div>
              <div
                className={`mb-2 flex mx-auto w-10/12 sm:w-10/12 ${usernameAlert}  overflow-hidden`}
              >
                <div className="w-2/12 sm:w-1/12 lg:w-2/12 bg-[#ffffffad] border-[#00ffca] flex justify-center items-center">
                  <img src={userImg} alt="userImg" className=" size-5   " />
                </div>
                <input
                  className="px-3 w-10/12 pt-2 pb-0 text-sm sm:w-11/12 lg:w-10/12 outline-none  bg-[#8ef0dc05] hover:bg-white duration-500"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Username"
                  autoComplete="new-username"
                  required
                  onChange={handleChange}
                />
              </div>
              <div
                className={`flex mb-2 mx-auto w-10/12 sm:w-10/12 ${passwordBorder}    overflow-hidden`}
              >
                <div className="w-2/12 sm:w-1/12 lg:w-2/12 bg-[#ffffffad] border-[#00ffca] flex justify-center items-center">
                  <img src={logImg} alt="userImg" className=" size-5  " />
                </div>
                <input
                  className="  px-3 w-9/12 pt-2 pb-0 text-sm sm:w-10/12 lg:w-9/12 outline-none bg-[#8ef0dc05] hover:bg-white duration-500"
                  type={inputType === true ? "password" : "text"}
                  name="password"
                  id="password"
                  placeholder="Password"
                  autoComplete="new-password"
                  required
                  onChange={handleChange}
                />
                <div className="w-1/12 sm:w-1/12 lg:w-1/12 bg-[#8ef0dc05] cursor-pointer flex r lg:justify-left items-center">
                  <IoIosEye
                    className=" text-gray-500size-5 pr-1 "
                    onClick={() => {
                      setinpuType(!inputType);
                    }}
                  />
                </div>
              </div>

              <div className="flex mb-2 mx-auto w-10/12 sm:w-10/12  overflow-hidden">
                <div className="px-3 cursor-pointer text-sm font-bold w-full pt-2 pb-1 outline-none text-center  bg-[#00ffcc49] hover:bg-[#00ffca] duration-500">
                  <input type="submit" value="Create Account" />
                </div>
              </div>
              <h1 className="mx-auto w-10/12 text-red-400 sm:w-10/12 text-xs h-3    text-right">
                {usernameAlreadyExistsMessage}
              </h1>
            </div>
            <div
              className={` absolute top-[35%] right-[50%] size-5 sm:size-6 ${
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
        </div>
        <div className="sm:hidden w-6/12 mx-auto mb-20 mt-16 sm:mt-0 lg:mt-0">
          <img src={contactImg} alt="" />
        </div>
      </div>
      <footer className=" fixed bottom-0 sm:bottom-0 right-0 left-0">
        <Footer />
      </footer>
    </>
  );
}

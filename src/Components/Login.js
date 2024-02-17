import React, { useState } from "react";
import axios from "axios";
import NavBar from "./NavBar";
import Footer from "./Footer";
import userImg from "../image/user.png";
import logImg from "../image/unlock.png";
import { IoIosEye } from "react-icons/io";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [inputType, setinpuType] = useState(true);
  const [wrongUsernamePasswordText, setwrongUsernamePasswordText] =
    useState("");
  const [wrongUsernameAlert, setwrongUsernameAlert] =
    useState("border-[#5b5b5b7e]");
  const [wrongPasswordAlert, setwrongPasswordAlert] =
    useState("border-[#5b5b5b7e]");

  const [formData4, setFormData4] = useState({
    username: "",
    password: "",
  });

  const HandleSubmit = async (event) => {
    event.preventDefault();
    let formData3 = "";
    try {
      setLoading(true);
      console.log(formData4);
      const response = await axios.get(
        `https://linkhub-datatransfer-apiservice.onrender.com/paidUserData/${formData4.username}`
      );
      formData3 = response.data;
      if (response.status === 200) {
        setLoading(false);

        if (wrongUsernameAlert === "border-red-400 shadow-md shadow-red-100") {
          setwrongUsernameAlert("border-[#5b5b5b7e]");
        }
        // console.log("Data fetched successfully!", response.data);
        if (formData3.password === formData4.password) {
          navigate("/paid-user", { state: { formData3 } });
        } else {
          setwrongPasswordAlert("border-red-400 shadow-md shadow-red-100");
          setwrongUsernamePasswordText(" Incorrect Password !..");
        }
      } else {
        // console.error("Error submitting data:", response.statusText);
        setwrongUsernameAlert("border-red-400 shadow-md shadow-red-100");
        setwrongUsernamePasswordText(" Invalid Username !..");
      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      setwrongUsernameAlert("border-red-400 shadow-md shadow-red-100");
      setwrongUsernamePasswordText(" Invalid Username !..");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData4((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <>
      <NavBar />
      <div className=" font-Sriracha sm:flex sm:w-9/12  md:w-8/12 lg:w-2/4 h-96 mx-auto pt-20 sm:pt-32 md:pt-40 lg:pt-60">
        <div className="py-5 sm:px-5 w-11/12 mx-auto md:px-0 lg:pt-1 md:pt-16 lg:w-6/12 ">
          <p className="text-slate-500 text-xs sm:text-sm lg:pr-20">
            <span className=" text-[#00ffca] text-4xl">Welcome back.!</span>
            <br />
            Sign in to your Linkhub account and effortlessly manage your social
            media presence from one centralized hub.
            <br />{" "}
            <span className="text-xs text-[#f3a775]">
              Stay Connected, Stay Engaged!..
            </span>
          </p>
        </div>
        <div className="lg:w-6/12 w-10/12 mx-auto relative mt-7 mb-20 lg:mt-0">
          <form action="#" onSubmit={HandleSubmit} className="relative">
            <h1 className="text-right text-xs mx-auto h-4 text-red-400 w-10/12 sm:w-10/12">
              {wrongUsernamePasswordText}
            </h1>
            <div
              className={`flex mb-4 mx-auto w-10/12 sm:w-10/12 border-b ${wrongUsernameAlert} overflow-hidden`}
            >
              <div className="w-2/12 sm:w-2/12 lg:w-2/12 border-r bg-[#51fbd90e] border-[#3c3d3d1f] flex justify-center items-center">
                <img
                  src={userImg}
                  alt="userImg"
                  className=" size-4 sm:size-5 "
                />
              </div>
              <input
                className="px-3 w-10/12 pt-3 pb-1 text-xs sm:text-sm sm:w-11/12 lg:w-10/12 outline-none  bg-[#00ffcc0c] hover:bg-white duration-500"
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
              className={`flex mb-4 mx-auto w-10/12 sm:w-10/12 border-b ${wrongPasswordAlert} overflow-hidden`}
            >
              <div className="w-2/12 sm:w-2/12 lg:w-2/12 border-r bg-[#51fbd90e] border-[#3c3d3d1f] flex justify-center items-center">
                <img
                  src={logImg}
                  alt="userImg"
                  className=" size-4   sm:size-5 "
                />
              </div>
              <input
                className="px-3 w-9/12 pt-3 pb-1 text-xs sm:text-sm sm:w-10/12 lg:w-9/12 outline-none  bg-[#00ffcc0c] hover:bg-white duration-500"
                type={inputType === true ? "password" : "text"}
                name="password"
                id="password"
                placeholder="Password"
                autoComplete="new-password"
                required
                onChange={handleChange}
              />
              <div className="w-1/12 sm:w-1/12 lg:w-1/12  bg-[#00ffcc0c] cursor-pointer flex r lg:justify-left items-center">
                <IoIosEye
                  onClick={() => {
                    setinpuType(!inputType);
                  }}
                  className=" text-gray-600 size-4 sm:size-5 pr-1 "
                />
              </div>
            </div>

            <div className="flex mb-2 mx-auto w-10/12 sm:w-10/12  border-[#00ffca] rounded overflow-hidden">
              <input
                className="px-3 cursor-pointer text-sm w-full pt-2 pb-1 outline-none  bg-[#00ffcc49] hover:bg-[#00ffca] duration-500"
                type="submit"
                value="SIGN IN"
              />
            </div>
            <div
              className={` absolute top-[50%] right-[50%]   md:right-[50%] size-5 sm:size-6 ${
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
          <div className="w-10/12 flex mx-auto items-center">
            <p className=" text-slate-400 text-xs ">
              Don't have an Acconut?..{" "}
            </p>{" "}
            <NavLink to="/account-selection">
              <button className="text-[#ffa96f] text-xs sm:px-1">
                {" "}
                Sign up
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      <footer className=" fixed bottom-0 sm:bottom-0 right-0 left-0">
        <Footer />
      </footer>
    </>
  );
}

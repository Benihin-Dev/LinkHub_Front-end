import React, { useState } from "react";
import HeroImg from "../image/Homepage.png";
import searchImg from "../image/search.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [searchBoxBorder, setsearchBoxBorder] = useState("border-[#00ffca]");
  const [inputBoxOutline, setInputBoxOutline] = useState("border-[#00ffca]");
  const [inputBoxPlaceholder, setinputBoxPlaceholder] =
    useState("Enter ID . .");
  const [invalidInputMessage, setInvalidInputMessage] = useState("");

  const handleChange = (event) => {
    setUserId(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      submitUserId();
    }
  };

  const setInvalidInput = () => {
    setInputBoxOutline("border-red-300 shadow shadow-red-200");
    setinputBoxPlaceholder("Please check the UserId..");
    setsearchBoxBorder("border-red-300");
    setInvalidInputMessage("Invalid UserId!..");
  };

  const alertMessageForEmptySearch = () => {
    setInputBoxOutline("border-[#eaf24e] shadow shadow-yellow-100");
    setinputBoxPlaceholder("Please enter UserId!..");
    setsearchBoxBorder("border-[#eaf24e]");
    setInvalidInputMessage("");
  };

  const submitUserId = async () => {
    try {
      if (!userId) {
        alertMessageForEmptySearch();
        return;
      }

      let fetchedGuestUserData = null;

      try {
        setLoading(true);
        const response1 = await axios.get(
          `https://linkhub-datatransfer-apiservice.onrender.com/guestUserData/${userId}`
        );
        setLoading(false);
        fetchedGuestUserData = response1.data;
      } catch (error) {
        // console.error("Error fetching guest user data:", error);
      }

      if (fetchedGuestUserData) {
        // console.log(fetchedGuestUserData);
        navigate("/guest-link-show", { state: { fetchedGuestUserData } });
      } else {
        try {
          setLoading(true);
          const response2 = await axios.get(
            `https://linkhub-datatransfer-apiservice.onrender.com/paidUserData/${userId}`
          );
          setLoading(false);
          const fetchedPaidUserData = response2.data;
          if (fetchedPaidUserData) {
            // console.log(fetchedPaidUserData);
            navigate("/paid-user-link-show", {
              state: { fetchedPaidUserData },
            });
          } else {
            console.log("No data fetched from both requests.");
          }
        } catch (error) {
          // console.error("Error fetching paid user data:", error);
          setLoading(false);
          setInvalidInput();
        }
      }
    } catch (error) {
      setLoading(false);
      // console.error("Error fetching user data:", error);
    }
  };

  return (
    <div
      id="home"
      className="pt-1 sm:pt-20  md:pt-44 w-11/12 lg:w-4/5 mx-auto md:gap-10 block sm:flex"
    >
      <div className=" w-full sm:w-1/2 px-2 sm:px-5">
        <p className="font-Sriracha mt-16 md:mt-24 lg:mt-20 text-[12px] sm:text-[14px] leading-4 xl:mt-32 text-[#088395]">
          <span className="text-xl md:text-3xl lg:text-4xl   text-[#00ffca]">
            Unify Everything. <br />
            In a Single, Seamless Link.
          </span>
          <br /> Join with our LinkHub and get one link to share your entire
          online presence, from instagram and TikTok to Twitter, YouTube, and
          More..
        </p>
        <NavLink to="/account-selection">
          <button className="mt-1 font-Sriracha text-sm rounded-full border py-1 px-6 hover:bg-[#f89959] hover:text-white  border-[#f89959] text-[#f89959]">
            Connect your Dots
          </button>
        </NavLink>
      </div>
      <div className="sm:w-1/2  items-center justify-center ">
        <img
          src={HeroImg}
          alt=""
          className="mt-8 sm:mt-0 h-48 sm:h-[180px] heroimg md:h-[220px] mx-auto"
        />

        <div
          className={` relative flex font-Sriracha rounded-full overflow-hidden border mt-1  mx-auto sm:w-10/12 ${inputBoxOutline}`}
        >
          <form
            action="#"
            className=" w-10/12"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className=" bg-[#00ffcc13] text-base hover:bg-white duration-300 pt-2 pl-5 border-none outline-none pb-2 w-full"
              type="text"
              placeholder={inputBoxPlaceholder}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              autoFocus
            />
          </form>
          <div
            className={` absolute bottom-2 right-16 lg:right-20 size-5  sm:size-6 ${
              loading === true ? "flex" : "hidden"
            } items-center`}
          >
            <div className="innerBox bg-orange-400  border  w-4"></div>
            <div className="innerBox bg-orange-400 border  w-4"></div>
            <div className="innerBox bg-orange-400 border  w-4"></div>
            <div className="innerBox bg-orange-400 border  w-4"></div>
            <div className="innerBox bg-orange-400 border  w-4"></div>
          </div>
          <div
            onClick={submitUserId}
            className={`w-2/12 border-l cursor-pointer ${searchBoxBorder} hover:bg-[#00ffca] duration-300`}
          >
            <img src={searchImg} alt="" className="h-6 my-2 mx-auto" />
          </div>
        </div>
        <h1 className="text-center font-Sriracha text-red-500 text-xs">
          {invalidInputMessage}
        </h1>
      </div>
    </div>
  );
}

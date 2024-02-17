import React, { useState, useRef } from "react";
import contactImg from "../image/contact.png";
import axios from "axios";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [thanksMessage, setThanksMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const formRef = useRef(null);

  const HandleSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true)
      console.log(formData);
      const response = await axios.post(
        "https://linkhub-datatransfer-apiservice.onrender.com/userCommentsData",
        formData
      );

      if (response.status === 200) {
        // console.log("Data submitted successfully!", response.data);
        setLoading(false)
        setThanksMessage(" Thank You for your Comment.");
        formRef.current.reset();
        setTimeout(() => {
          setThanksMessage("");
        }, 2800);
      } else {
        // console.error("Error submitting data:", response.statusText);
        setLoading(false)

      }
    } catch (error) {
      console.error("Error:", error);
      setLoading(false)
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
    <div
      id="contact"
      className=" font-Sriracha sm:h-72 md:h-80 mx-auto sm:flex md:w-11/12  lg:w-4/5 sm:mx-5 md:mx-auto mb-10 sm:mb-32"
    >
      <div className="sm:w-2/3 mx-0 w-11/12 relative">
        <h1 className="mx-5 h-2 text-orange-400">{thanksMessage}</h1>
        <form ref={formRef} action="#" onSubmit={HandleSubmit}>
          <h1 className="mx-5 mb-2   sm:mt-4 sm:mb-2 text-[#088395]">
            Sent a message
          </h1>

          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter name"
            required
            onChange={handleChange}
            className=" border outline-none py-1 mb-3 text-sm border-[#00ffca] rounded-full px-3 mx-4 w-full sm:w-4/5"
          />

          <input
            type="text"
            name="email"
            id="Email"
            placeholder="Email"
            required
            onChange={handleChange}
            className=" border outline-none py-1 mb-3 text-sm border-[#00ffca] rounded-full px-3 mx-4 w-full sm:w-4/5"
          />
          <input
            type="text"
            name="subject"
            id="Subject"
            placeholder="Subject"
            required
            onChange={handleChange}
            className="  border outline-none py-1 mb-3 text-sm border-[#00ffca] rounded-full px-3 mx-4 w-full sm:w-4/5"
          />
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="message"
            onChange={handleChange}
            rows={4}
            required
            className="resize-none border outline-none py-2 mb-3 text-sm MessageBox border-[#00ffca] rounded-3xl px-3 mx-4 w-full sm:w-4/5"
          />
          <input
            type="submit"
            value="Submit"
            className=" bg-[#00ffcc30] hover:bg-[#00ffca]  border outline-none py-1 mb-3 text-sm border-[#00ffca] rounded-full px-3 mx-4 w-full sm:w-4/5"
          />
        </form>
        <div
          className={` absolute top-[50%] right-[40%]  md:right-[55%] size-5 sm:size-6 ${
            loading === true ? "flex" : "hidden"
          } items-center`}
        >
          <div className="innerBox bg-orange-400  border  w-4"></div>
          <div className="innerBox bg-orange-400 border  w-4"></div>
          <div className="innerBox bg-orange-400 border  w-4"></div>
          <div className="innerBox bg-orange-400 border  w-4"></div>
          <div className="innerBox bg-orange-400 border  w-4"></div>
        </div>
      </div>
      <div className="sm:w-1/3 flex-col items-end mt-auto justify-end  px-10 sm:px-5">
        <img src={contactImg} alt="" className=" object-cover" />
      </div>
    </div>
  );
}

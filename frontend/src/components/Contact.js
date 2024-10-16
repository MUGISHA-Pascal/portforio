import React, { useState } from "react";
import { GrContact } from "react-icons/gr";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import loginImage from "../assets/loginPic.png";
import { FaPhone } from "react-icons/fa6";
const Contact = ({ id }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(null);
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const coll_message =
      message + ", phone number " + phone + " and name is " + name;
    console.log(coll_message);
    fetch("https://portforio.onrender.com/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, message: coll_message }),
    });
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };
  return (
    <section
      id={id}
      className="bg-[#FFFFFF] w-full flex flex-col justify-center items-center pb-[70px]  max-sm:pb-[30px] max-sm:w-full"
    >
      <motion.div className="bg-custom-purple h-[5px] max-sm:h-[3px] max-sm:w-[180px] shadow-custom rounded-br-md rounded-bl-md w-[400px]"></motion.div>
      <div className="flex flex-row sm:space-x-[20px] items-center max-sm:space-x-[2px] max-sm:mt-[5px] mt-[14px] justify-center">
        <GrContact className="h-[36px] w-[42px] max-sm:w-[30px] max-sm:h-[30px] max-sm:pb-[6px] text-custom-purple pt-[5px]" />
        <span className="text-custom-purple font-bold text-[34px] max-sm:text-[17px]">
          Get in Touch
        </span>
      </div>
      <div className="flex flex-row bg-[#D9D9D9] rounded-[16px] max-sm:w-full max-sm:rounded-[7px] p-[20px] mt-[30px] max-sm:mt-[10px] items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="h-[400px] w-[500px] max-sm:h-[300px] max-sm:w-[200px] max-sm:ml-[5px] max-sm:mr-[5px]  flex flex-col justify-center sm:space-y-[30px] max-sm:space-y-[10px] sm:pt-[20px] max-sm:pt-[10px]"
        >
          <div className="relative flex flex-row items-center justify-center">
            <FaUser className="absolute right-[420px] max-sm:right-[177px] max-sm:w-[10px] text-custom-purple" />
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="bg-white p-2 w-[400px] pl-[40px] max-sm:pl-[30px] max-sm:text-[7.5px] max-sm:placeholder:text-[7.5px] text-custom-purple text-[15px] placeholder:text-custom-purple placeholder:text-[15px] focus:outline-none"
              placeholder="Name"
            />
          </div>
          <div className="relative flex flex-row items-center justify-center">
            <MdEmail className="absolute right-[420px] max-sm:right-[177px] max-sm:w-[10px] text-custom-purple" />
            <input
              type="text"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="bg-white max-sm:pl-[30px] max-sm:text-[7.5px] max-sm:placeholder:text-[7.5px] p-2 w-[400px] pl-[40px] text-custom-purple text-[15px] placeholder:text-custom-purple placeholder:text-[15px] focus:outline-none"
              placeholder="Email"
            />
          </div>
          <div className="relative flex flex-row items-center justify-center">
            <FaPhone className="absolute right-[420px] max-sm:right-[177px] max-sm:w-[10px] text-custom-purple" />
            <input
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              type="text"
              className="bg-white max-sm:pl-[30px] max-sm:text-[7.5px] max-sm:placeholder:text-[7.5px] p-2 w-[400px] pl-[40px] text-custom-purple text-[15px] placeholder:text-custom-purple placeholder:text-[15px] focus:outline-none"
              placeholder="Phone"
            />
          </div>
          <div className="relative flex flex-row items-start justify-center">
            <AiFillMessage className="absolute right-[420px] max-sm:right-[177px] max-sm:w-[10px] top-[12px] max-sm:top-[5px] text-custom-purple" />
            <textarea
              className="bg-white p-2 max-sm:pl-[30px] max-sm:text-[7.5px] max-sm:placeholder:text-[7.5px] w-[400px] pl-[40px] text-custom-purple text-[15px] h-[120px] max-sm:h-[70px] placeholder:text-custom-purple placeholder:text-[15px] focus:outline-none"
              placeholder="Message"
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
            />
          </div>
          <motion.button
            type="submit"
            className="bg-custom-purple shadow-custom w-[120px] max-sm:w-[100px] ml-[52px] max-sm:text-[14px] max-sm: text-white font-bold text-[17px] p-[4px] pt-[8px] rounded-[5px] flex flex-row items-center justify-center space-x-[12px]"
          >
            <span className="pb-1">Submit</span>
            <RiSendPlaneFill className="font-bold" />
          </motion.button>
        </form>
        <img
          src={loginImage}
          className="w-[300px] h-[300px] max-sm:w-[120px] max-sm:h-[120px]"
        />
      </div>
    </section>
  );
};

export default Contact;

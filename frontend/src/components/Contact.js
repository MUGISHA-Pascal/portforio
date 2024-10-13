import React from "react";
import { GrContact } from "react-icons/gr";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { RiSendPlaneFill } from "react-icons/ri";
import loginImage from "../assets/loginPic.png";
import { FaPhone } from "react-icons/fa6";
const Contact = () => {
  return (
    <section className="bg-white flex flex-col justify-center items-center pb-[70px] rounded-tl-[14px] rounded-tr-[14px] z-20 top-[2800px] absolute right-0 left-0">
      <motion.div className="bg-custom-purple h-[5px] shadow-custom rounded-br-md rounded-bl-md w-[400px]"></motion.div>
      <div className="flex flex-row space-x-[20px] items-center mt-[14px] justify-center">
        <GrContact className="h-[36px] w-[42px] text-custom-purple pt-[5px]" />
        <span className="text-custom-purple font-bold text-[34px]">
          Get in Touch
        </span>
      </div>
      <div className="flex flex-row bg-[#D9D9D9] rounded-[16px] p-[20px] mt-[30px]">
        <form className="h-[400px] w-[500px]  flex flex-col justify-center space-y-[30px] pt-[20px]">
          <div className="relative flex flex-row items-center justify-center">
            <FaUser className="absolute right-[420px] text-custom-purple" />
            <input
              type="text"
              className="bg-white p-2 w-[400px] pl-[40px] text-custom-purple text-[15px] placeholder:text-custom-purple placeholder:text-[15px] focus:outline-none"
              placeholder="Name"
            />
          </div>
          <div className="relative flex flex-row items-center justify-center">
            <MdEmail className="absolute right-[420px] text-custom-purple" />
            <input
              type="text"
              className="bg-white p-2 w-[400px] pl-[40px] text-custom-purple text-[15px] placeholder:text-custom-purple placeholder:text-[15px] focus:outline-none"
              placeholder="Email"
            />
          </div>
          <div className="relative flex flex-row items-center justify-center">
            <FaPhone className="absolute right-[420px] text-custom-purple" />
            <input
              type="text"
              className="bg-white p-2 w-[400px] pl-[40px] text-custom-purple text-[15px] placeholder:text-custom-purple placeholder:text-[15px] focus:outline-none"
              placeholder="Phone"
            />
          </div>
          <div className="relative flex flex-row items-start justify-center">
            <AiFillMessage className="absolute right-[420px] top-[12px] text-custom-purple" />
            <textarea
              className="bg-white p-2 w-[400px] pl-[40px] text-custom-purple text-[15px] placeholder:text-custom-purple placeholder:text-[15px] focus:outline-none"
              placeholder="Message"
            />
          </div>
          <motion.button className="bg-custom-purple shadow-custom w-[140px] ml-[50px] text-white font-bold text-[17px] p-[4px] rounded-[5px] flex flex-row items-center justify-center space-x-[12px]">
            <span className="pb-1">submit</span>
            <RiSendPlaneFill className="font-bold" />
          </motion.button>
        </form>
        <img src={loginImage} className="w-[300px] h-[300px] " />
      </div>
    </section>
  );
};

export default Contact;

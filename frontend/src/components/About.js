import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import userIcon from "../assets/userIcon.png";

const About = () => {
  return (
    <section className="bg-[#D9D9D9] flex flex-col justify-center items-center pb-[70px] rounded-tl-[14px] rounded-tr-[14px]">
      <div className="flex flex-row space-x-2 items-center mt-[14px]">
        <img src={userIcon} alt="user icon" className="h-[34px] w-[40px]" />
        <span className="text-custom-purple font-bold text-[34px]">
          About me
        </span>
      </div>
      <div className="flex flex-row space-x-[40px] mt-[70px] justify-center items-center">
        <div className="bg-custom-purple h-[200px] rounded-full w-[5px]"></div>
        <div className="flex flex-col space-y-[55px] mb-[10px]">
          <p className="w-[1001px] leading-6 text-left">
            I’m{" "}
            <span className="text-custom-purple font-bold">MUGISHA Pascal</span>
            , a software engineer specializing in frontend and backend
            development, UI/UX design, and machine learning. I’m passionate
            about building seamless user experiences, creating robust
            server-side solutions, and leveraging AI to drive innovative
            projects. I love combining creativity with technical skills to solve
            complex problems and deliver efficient, impactful software
            solutions.
          </p>
          <motion.button className="bg-custom-purple shadow-custom w-[140px] text-white font-bold text-[17px] p-[4px] rounded-[5px] flex flex-row items-center justify-center space-x-[12px]">
            <span className="pb-1">resume</span>
            <IoIosArrowForward className="font-bold" />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default About;

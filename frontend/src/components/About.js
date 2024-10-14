import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";
import userIcon from "../assets/userIcon.png";

const About = () => {
  return (
    <section className="bg-[#D9D9D9] flex flex-col justify-center items-center pb-[100px] max-sm:pb-[50px] w-full">
      <motion.div className="bg-custom-purple h-[5px] max-sm:h-[3px] max-sm:w-[130px] shadow-custom rounded-br-md rounded-bl-md w-[300px]"></motion.div>
      <div className="flex flex-row space-x-2 items-center mt-[14px] max-sm:mt-[7px]">
        <img
          src={userIcon}
          alt="user icon"
          className="h-[34px] w-[40px] max-sm:w-[19px] max-sm:h-[17px]"
        />
        <span className="text-custom-purple font-bold text-[34px] max-sm:text-[17px]">
          About me
        </span>
      </div>
      <div className="flex flex-row space-x-[40px] max-sm:space-x-[20px] mt-[70px] max-sm:mt-[20px] justify-center items-center">
        <div className="bg-custom-purple h-[200px] rounded-full w-[5px] max-sm:h-[260px] max-sm:w-[3px]"></div>
        <div className="flex flex-col space-y-[55px] max-sm:space-y-[30px] mb-[10px]">
          <p className="w-[1001px] leading-6 text-left text-[15px] max-sm:text-[10px] max-sm:leading-4 max-sm:w-[200px]">
            I’m
            <span className="text-custom-purple font-bold">
              {" "}
              MUGISHA Pascal
            </span>
            , a software engineer specializing in frontend and backend
            development, UI/UX design, and machine learning. I’m passionate
            about building seamless user experiences, creating robust
            server-side solutions, and leveraging AI to drive innovative
            projects. I love combining creativity with technical skills to solve
            complex problems and deliver efficient, impactful software
            solutions.
          </p>
          <motion.a
            href="/resume.pdf"
            className="bg-custom-purple shadow-custom w-[140px] max-sm:w-[100px] max-sm:text-[14px] max-sm: text-white font-bold text-[17px] p-[4px] rounded-[5px] flex flex-row items-center justify-center space-x-[12px]"
          >
            <span className="pb-1">resume</span>
            <IoIosArrowForward className="font-bold" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default About;

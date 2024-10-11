import React from "react";
import userIcon from "../assets/userIcon.png";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa6";

const Skills = () => {
  return (
    <section className="bg-white flex flex-col justify-center items-center pb-[70px] rounded-tl-[14px] rounded-tr-[14px] z-10 top-[850px] absolute right-0 left-0">
      <motion.div className="bg-custom-purple h-[5px] shadow-custom rounded-br-md rounded-bl-md w-[400px]"></motion.div>
      <div className="flex flex-row space-x-[20px] items-center mt-[14px] justify-center">
        <FaLaptopCode className="h-[36px] w-[42px] text-custom-purple pt-[5px]" />
        <span className="text-custom-purple font-bold text-[34px]">
          Skills & Abilities
        </span>
      </div>
      <div className="bg-[#D9D9D9] w-[1260px] h-[500px] mt-[60px] rounded-[14px] flex flex-row space-x-[30px] justify-center pt-[23px]">
        <div className="bg-[#FFFFFF] flex flex-col items-center w-[270px] h-[450px] rounded-[5px]">
          <motion.div className="bg-custom-purple h-[5px] shadow-custom rounded-br-md rounded-bl-md w-[160px]"></motion.div>
          <p className="text-custom-purple font-bold text-[20px] mt-[14px]">
            Frontend
          </p>
          <div></div>
        </div>
        <div className="bg-[#FFFFFF] flex flex-col items-center w-[270px] h-[450px] rounded-[5px]">
          <motion.div className="bg-custom-purple h-[5px] shadow-custom rounded-br-md rounded-bl-md w-[160px]"></motion.div>
          <p className="text-custom-purple font-bold text-[20px] mt-[14px]">
            Backend
          </p>
        </div>
        <div className="bg-[#FFFFFF] flex flex-col items-center w-[270px] h-[450px] rounded-[5px]">
          <motion.div className="bg-custom-purple h-[5px] shadow-custom rounded-br-md rounded-bl-md w-[160px]"></motion.div>
          <p className="text-custom-purple font-bold text-[20px] mt-[14px]">
            Mobile development
          </p>
        </div>
        <div className="bg-[#FFFFFF] flex flex-col items-center w-[270px] h-[450px] rounded-[5px]">
          <motion.div className="bg-custom-purple h-[5px] shadow-custom rounded-br-md rounded-bl-md w-[160px]"></motion.div>
          <p className="text-custom-purple font-bold text-[20px] mt-[14px]">
            Machine learning
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

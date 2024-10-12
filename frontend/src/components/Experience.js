import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { IoMdArrowDropleft } from "react-icons/io";

const Experience = () => {
  return (
    <section className="bg-[#D9D9D9] flex flex-col justify-center items-center pb-[70px] rounded-tl-[14px] rounded-tr-[14px] z-20 top-[1500px] absolute right-0 left-0">
      <motion.div className="bg-custom-purple h-[5px] shadow-custom rounded-br-md rounded-bl-md w-[400px]"></motion.div>
      <div className="flex flex-row space-x-[20px] items-center mt-[14px] justify-center">
        <BsFillBriefcaseFill className="h-[36px] w-[42px] text-custom-purple pt-[5px]" />
        <span className="text-custom-purple font-bold text-[34px]">
          Experience
        </span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <motion.div className="bg-custom-purple h-[170px] w-[5px]"></motion.div>
        <motion.div className="absolute z-30 flex flex-row space-x-[20px] mt-[40px] ml-[520px]">
          <motion.div className="border-custom-purple border-[4px] h-[30px] shadow-custom flex justify-center items-center bg-white rounded-full w-[30px] ">
            <BsFillBriefcaseFill className="h-[15px] w-[15px]" />
          </motion.div>
          <motion.div className="flex flex-row  ">
            <IoMdArrowDropleft className="text-custom-purple w-[30px] h-[30px] absolute right-[488px] " />
            <motion.div className="h-[80px] rounded-[5px] w-[500px] bg-custom-purple text-left pl-[20px] pt-[3px] pb-[3px] leading-[24px]">
              <p className="font-bold text-[20px] text-white">CodeAlpha</p>
              <p className="font-bold text-[15px] text-white">
                Machine learning developer | Part time intern
              </p>
              <p className="text-[12px] text-white font-thin">
                Oct 2024 - Present
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;

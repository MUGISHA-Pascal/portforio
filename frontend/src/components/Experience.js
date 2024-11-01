import React from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { IoMdArrowDropleft } from "react-icons/io";

const Experience = ({ id }) => {
  return (
    <section
      id={id}
      className="bg-[#D9D9D9] flex flex-col justify-center w-full items-center pb-[70px] max-md:pb-[30px] max-md:w-full"
    >
      <motion.div className="bg-custom-purple h-[5px] max-md:h-[3px] max-md:w-[180px] shadow-custom rounded-br-md rounded-bl-md w-[400px]"></motion.div>
      <div className="flex flex-row sm:space-x-[20px] max-md:space-x-[5px] max-md:mt-[5px] items-center mt-[14px] justify-center">
        <BsFillBriefcaseFill className="h-[36px] w-[42px] max-md:w-[30px] max-md:h-[30px] max-md:pb-[6px] text-custom-purple pt-[5px]" />
        <span className="text-custom-purple font-bold text-[34px] max-md:text-[17px]">
          Experience
        </span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <motion.div className="bg-custom-purple h-[170px] max-md:h-[100px] max-md:w-[2px] w-[5px]"></motion.div>
        <motion.div className="absolute z-20 flex flex-row space-x-[20px] mt-[40px] max-md:mt-[20px] ml-[520px] max-md:space-x-[5px] max-md:ml-[176px]">
          <motion.div className="border-custom-purple border-[4px] max-md:w-[15px] h-[30px] shadow-custom flex justify-center max-md:h-[15px] max-md:border-[2px] items-center bg-white rounded-full w-[30px] ">
            <BsFillBriefcaseFill className="h-[15px] w-[15px] max-md:h-[7.5px] max-md:w-[7.5px]" />
          </motion.div>
          <motion.div className="flex flex-row  ">
            <IoMdArrowDropleft className="text-custom-purple w-[30px] max-md:w-[15px] max-md:h-[15px] h-[30px] absolute right-[488px] max-md:right-[164px] " />
            <motion.div className="h-[80px] rounded-[5px] w-[500px] max-md:w-[170px] max-md:h-[40px] bg-custom-purple text-left pl-[20px] max-md:pl-[10px] max-md:pt-[3.5px] pt-[7px] pb-[3px] max-md:pb-[1.5px]">
              <p className="font-bold text-[17px] text-white max-md:text-[8.5px]">
                Farm2Global
              </p>
              <p className="font-bold text-[13px] max-md:text-[6.5px] text-white">
                Full stack developer | full time job
              </p>
              <p className="text-[12px] max-md:text-[6px] text-white font-thin">
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

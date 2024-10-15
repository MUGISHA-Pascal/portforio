import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import { IoMdArrowDropleft } from "react-icons/io";
const Education = ({ id }) => {
  return (
    <section
      id={id}
      className="bg-[#FFFFFF] flex flex-col justify-center w-full items-center pb-[70px] max-sm:pb-[30px] max-sm:w-full"
    >
      <motion.div className="bg-custom-purple h-[5px] max-sm:h-[3px] max-sm:w-[180px] shadow-custom rounded-br-md rounded-bl-md w-[400px]"></motion.div>
      <div className="flex flex-row sm:space-x-[20px] max-sm:space-x-[5px] items-center mt-[14px] max-sm:mt-[5px] justify-center">
        <FaGraduationCap className="h-[36px] w-[42px] max-sm:w-[30px] max-sm:h-[30px] max-sm:pb-[6px] text-custom-purple pt-[5px]" />
        <span className="text-custom-purple font-bold text-[34px] max-sm:text-[17px]">
          Education
        </span>
      </div>
      <div className="flex flex-col justify-center items-center">
        <motion.div className="bg-custom-purple h-[170px] max-sm:h-[100px] max-sm:w-[2px] w-[5px]"></motion.div>
        <motion.div className="absolute z-20 flex flex-row space-x-[20px] mt-[40px] max-sm:mt-[20px] ml-[520px] max-sm:space-x-[5px] max-sm:ml-[176px]">
          <motion.div className="border-custom-purple border-[4px] max-sm:w-[15px] h-[30px] shadow-custom flex justify-center max-sm:h-[15px] max-sm:border-[2px] items-center bg-white rounded-full w-[30px] ">
            <FaGraduationCap className="h-[15px] w-[15px] max-sm:h-[7.5px] max-sm:w-[7.5px]" />
          </motion.div>
          <motion.div className="flex flex-row  ">
            <IoMdArrowDropleft className="text-custom-purple w-[30px] max-sm:w-[15px] max-sm:h-[15px] h-[30px] absolute right-[488px] max-sm:right-[164px] " />
            <motion.div className="h-[80px] rounded-[5px] w-[500px] max-sm:w-[170px] max-sm:h-[40px] bg-custom-purple text-left pl-[20px] max-sm:pl-[10px] max-sm:pt-[3.5px] pt-[7px] pb-[3px] max-sm:pb-[1.5px]">
              <p className="font-bold text-[17px] text-white max-sm:text-[8.5px]">
                Rwanda Coding Academy
              </p>
              <p className="font-bold text-[13px] max-sm:text-[6.5px] text-white">
                Software Development and Embedded systems{" "}
              </p>
              <p className="text-[12px] max-sm:text-[6px] text-white font-thin">
                2023 - 2026{" "}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

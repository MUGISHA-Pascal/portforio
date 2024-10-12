import React from "react";
import { GrContact } from "react-icons/gr";
import { motion } from "framer-motion";

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
    </section>
  );
};

export default Contact;

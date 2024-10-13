import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaHeart } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="text-white bg-custom-purple mt-[3000px] w-full absolute z-30 pt-[30px] p-[30px] flex flex-col space-y-[15px]">
      <div className="flex flex-row space-x-[120px] ">
        <div className="flex flex-col space-y-[20px]">
          <p className="font-bold text-[20px]">MUGISHA Pascal’s portforio</p>
          <div className="flex flex-row justify-center space-x-[30px]">
            <div className="h-[70px] w-[5px] rounded-full bg-white"></div>
            <p className="w-[300px] text-[10px] text-left leading-[17px] mt-[10px]">
              Thank you for visiting my personal portfolio website. Connect with
              me over socials.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-[16px] w-[200px]">
          <p className="font-bold text-[20px] ml-[30px]">Quick Links</p>
          <div className="flex flex-row justify-center space-x-[30px] ">
            <div className="h-[148px] w-[5px] rounded-full bg-white"></div>
            <div className="w-[300px] text-[10px] text-left space-y-[7px] mt-[10px] flex flex-col">
              <a href="" className="flex flex-row items-center space-x-[2px]">
                <IoIosArrowForward className="font-bold" />
                <p>Home</p>
              </a>
              <a href="" className="flex flex-row items-center space-x-[2px]">
                <IoIosArrowForward className="font-bold" />
                <p>Home</p>
              </a>
              <a href="" className="flex flex-row items-center space-x-[2px]">
                <IoIosArrowForward className="font-bold" />
                <p>Home</p>
              </a>
              <a href="" className="flex flex-row items-center space-x-[2px]">
                <IoIosArrowForward className="font-bold" />
                <p>Home</p>
              </a>
              <a href="" className="flex flex-row items-center space-x-[2px]">
                <IoIosArrowForward className="font-bold" />
                <p>Home</p>
              </a>
              <a href="" className="flex flex-row items-center space-x-[2px]">
                <IoIosArrowForward className="font-bold" />
                <p>Home</p>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-[16px] w-[500px]">
          <p className="font-bold text-[20px] ml-[30px]">Contact info</p>
          <div className="flex flex-row justify-center space-x-[30px] ">
            <div className="h-[107px] w-[5px] rounded-full bg-white"></div>
            <div className="w-[300px] text-[13px] text-left space-y-[7px] mt-[10px] flex flex-col">
              <div className="flex flex-row items-center space-x-[6px]">
                <FaPhone className="font-bold" />
                <p className="text-[10px] font-bold">+250 786-49-3844</p>
              </div>
              <div className="flex flex-row items-center space-x-[6px]">
                <FaLinkedin className="font-bold" />
                <p className="text-[10px] font-bold">
                  https://www.linkedin.com/in/mugisha-pascal
                </p>
              </div>
              <div className="flex flex-row items-center space-x-[6px]">
                <MdEmail className="font-bold" />
                <p className="text-[10px] font-bold">
                  mugishapascal2008@gmail.com
                </p>
              </div>
              <div className="flex flex-row items-center space-x-[6px] w-[300px]">
                <IoLogoGithub className="font-bold" />
                <p className="text-[10px] font-bold">
                  https://github.com/MUGISHA-Pascal+250 786-49-3844
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[#808080] border-t-[1px] flex flex-row gap-[4px] items-center justify-center text-[13px] pt-[10px]">
        <p>Made with </p>
        <FaHeart className="text-red-700" /> <p>by MUGISHA Pascal</p>
      </div>
    </footer>
  );
};

export default Footer;

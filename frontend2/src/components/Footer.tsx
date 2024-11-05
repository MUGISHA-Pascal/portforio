import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-scroll";
import { FaHeart } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="text-white bg-custom-purple w-full pt-[30px] p-[30px] max-md:p-[4px] flex flex-col space-y-[15px]">
      <div className="flex flex-row sm:space-x-[170px] max-md:grid max-md:grid-cols-2 max-md:gap-[7px] ">
        <div className="flex flex-col sm:space-y-[20px] max-md:space-y-[7px] max-md:w-[170px]">
          <p className="font-bold text-[20px] max-md:text-[12px]">
            MUGISHA Pascal’s portforio
          </p>
          <div className="flex flex-row justify-center items-center sm:space-x-[30px] max-md:space-x-[15px]">
            <div className="h-[70px] w-[5px] max-md:h-[50px] max-md:w-[3px] rounded-full bg-white"></div>
            <p className="w-[300px] max-md:w-[150px] text-[10px] max-md:text-[7px] text-left leading-[17px] max-md:mt-0 mt-[10px]">
              Thank you for visiting my personal portfolio website. Connect with
              me over socials.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-[16px] max-md:space-y-[7px] w-[200px] max-md:w-[170px]">
          <p className="font-bold text-[20px] ml-[30px] max-md:text-[12px]">
            Quick Links
          </p>
          <div className="flex flex-row justify-center space-x-[30px] max-md:space-x-[15px]">
            <div className="h-[148px] w-[5px] max-md:h-[120px] max-md:w-[3px] rounded-full bg-white"></div>
            <div className="w-[300px] text-[10px] text-left max-md:text-[7px] space-y-[7px] mt-[10px] flex flex-col">
              <Link
                to="home"
                className="flex flex-row items-center space-x-[2px] hover:cursor-pointer"
              >
                {" "}
                <IoIosArrowForward className="font-bold" />
                <p>Home</p>
              </Link>
              <Link
                to="about"
                className="flex flex-row items-center space-x-[2px] hover:cursor-pointer"
              >
                {" "}
                <IoIosArrowForward className="font-bold" />
                <p>About</p>
              </Link>
              <Link
                to="skills"
                className="flex flex-row items-center space-x-[2px] hover:cursor-pointer"
              >
                {" "}
                <IoIosArrowForward className="font-bold" />
                <p>Skills</p>
              </Link>
              <Link
                to="experience"
                className="flex flex-row items-center space-x-[2px] hover:cursor-pointer"
              >
                {" "}
                <IoIosArrowForward className="font-bold" />
                <p>Experience</p>
              </Link>
              <Link
                to="education"
                className="flex flex-row items-center space-x-[2px] hover:cursor-pointer"
              >
                {" "}
                <IoIosArrowForward className="font-bold" />
                <p>Education</p>
              </Link>
              <Link
                to="contact"
                className="flex flex-row items-center space-x-[2px] hover:cursor-pointer"
              >
                <IoIosArrowForward className="font-bold" />
                <p>Contact</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start space-y-[16px] max-md:space-y-[7px] w-[500px] max-md:w-[170px]">
          <p className="font-bold text-[20px] ml-[30px] max-md:text-[12px]">
            Contact info
          </p>
          <div className="flex flex-row justify-center space-x-[30px] max-md:space-x-[15px] ">
            <div className="h-[107px] w-[5px] max-md:w-[3px] rounded-full bg-white"></div>
            <div className="w-[300px] text-[13px] text-left space-y-[7px] mt-[10px] flex flex-col">
              <div className="flex flex-row items-center space-x-[6px]">
                <FaPhone className="font-bold" />
                <p className="text-[10px] font-bold  max-md:text-[7px]">
                  +250 786-49-3844
                </p>
              </div>
              <div className="flex flex-row items-center space-x-[6px]">
                <FaLinkedin className="font-bold" />
                <p className="text-[10px] font-bold  max-md:text-[7px]">
                  https://www.linkedin.com/in/mugisha-pascal
                </p>
              </div>
              <div className="flex flex-row items-center space-x-[6px]">
                <MdEmail className="font-bold" />
                <p className="text-[10px] font-bold  max-md:text-[7px]">
                  mugishapascal2008@gmail.com
                </p>
              </div>
              <div className="flex flex-row items-center space-x-[6px] w-[300px]">
                <IoLogoGithub className="font-bold" />
                <p className="text-[10px] font-bold  max-md:text-[7px]">
                  https://github.com/MUGISHA-Pascal+250 786-49-3844
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-[#808080] border-t-[1px] flex flex-row gap-[4px] items-center justify-center text-[13px] pt-[10px] max-md:pt-[7px] max-md:text-[7px]">
        <p>Made with </p>
        <FaHeart className="text-red-700" /> <p>by MUGISHA Pascal</p>
      </div>
    </footer>
  );
};

export default Footer;

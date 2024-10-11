import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { SiMui } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { DiCss3 } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaDocker } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import figmaIcon from "../assets/figma.png";
import { SiNextdotjs } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { BiLogoSpringBoot } from "react-icons/bi";
import { FaLaravel } from "react-icons/fa6";
import { GrMysql } from "react-icons/gr";
import { GrGraphQl } from "react-icons/gr";
import { SiDjango } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import postgresIcon from "../assets/postgres.png";
import awsIcon from "../assets/aws.png";
import mongodbIcon from "../assets/mongodb.png";
import firebasIcon from "../assets/firebase.png";
import flutterIcon from "../assets/flutter.png";
import { SiPytorch } from "react-icons/si";
import pandasIcon from "../assets/pandas.png";

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
      <div className="bg-[#D9D9D9] w-[1260px] h-[450px] mt-[60px] rounded-[14px] flex flex-row space-x-[30px] justify-center pt-[23px]">
        <div className="bg-[#FFFFFF] flex flex-col items-center w-[270px] h-[400px] rounded-[5px]">
          <motion.div className="bg-custom-purple h-[5px] shadow-custom rounded-br-md rounded-bl-md w-[160px]"></motion.div>
          <p className="text-custom-purple font-bold text-[20px] mt-[14px]">
            Frontend
          </p>
          <div className="flex flex-row space-x-[4px] mt-[30px]">
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <FaReact className="w-[30px] h-[30px] text-[#00D8FF]" />
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <SiMui className="w-[30px] h-[30px] text-[#1FA6CA]" />
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <FaBootstrap className="w-[30px] h-[30px] text-[#7E13F8]" />
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <DiCss3 className="w-[30px] h-[30px] text-[#0277BD]" />
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <SiNextdotjs className="w-[30px] h-[30px] text-[#000000]" />
              </div>
            </div>
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <SiRedux className="w-[30px] h-[30px] text-[#764ABC]" />
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <RiTailwindCssFill className="w-[30px] h-[30px] text-[#38BDF8]" />
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <FaDocker className="w-[30px] h-[30px] text-[#2396ED]" />
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <FaHtml5 className="w-[30px] h-[30px] text-[#E14E1D]" />
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <img src={figmaIcon} className="w-[30px] h-[30px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] flex flex-col items-center w-[270px] h-[400px] rounded-[5px]">
          <motion.div className="bg-custom-purple h-[5px] shadow-custom rounded-br-md rounded-bl-md w-[160px]"></motion.div>
          <p className="text-custom-purple font-bold text-[20px] mt-[14px]">
            Backend
          </p>
          <div className="flex flex-row space-x-[4px] mt-[30px]">
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <FaNodeJs className="w-[30px] h-[30px] text-[#539E43]" />
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <SiExpress className="w-[30px] h-[30px] text-[#000000]" />
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <BiLogoSpringBoot className="w-[30px] h-[30px] text-[#77BC1F]" />
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <img src={firebasIcon} className="w-[25px] h-[30px]" />
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <FaLaravel className="w-[30px] h-[30px] text-[#FF2D20]" />
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <GrMysql className="w-[30px] h-[30px] text-[#00618A]" />
              </div>
            </div>
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <GrGraphQl className="w-[30px] h-[30px] text-[#E535AB]" />
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <img
                  src={awsIcon}
                  className="w-[38px] h-[25px] text-[#E14E1D]"
                />
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <SiDjango className="w-[30px] h-[30px] text-[#092E20]" />
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <SiFlask className="w-[30px] h-[30px] text-[#000000]" />
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <img src={postgresIcon} className="w-[32px] h-[30px]" />
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <img src={mongodbIcon} className="w-[18px] h-[30px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] flex flex-col items-center w-[270px] h-[400px] rounded-[5px]">
          <motion.div className="bg-custom-purple h-[5px] shadow-custom rounded-br-md rounded-bl-md w-[160px]"></motion.div>
          <p className="text-custom-purple font-bold text-[20px] mt-[14px]">
            Mobile development
          </p>
          <div className="flex flex-row space-x-[4px] mt-[30px]">
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <FaReact className="w-[30px] h-[30px] text-[#00D8FF]" />
              </div>
            </div>
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]">
                <img src={flutterIcon} className="w-[30px] h-[30px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] flex flex-col items-center w-[270px] h-[400px] rounded-[5px]">
          <motion.div className="bg-custom-purple h-[5px] shadow-custom rounded-br-md rounded-bl-md w-[160px]"></motion.div>
          <p className="text-custom-purple font-bold text-[20px] mt-[14px]">
            Machine learning
          </p>
          <div className="flex flex-row space-x-[4px] mt-[30px]">
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]"></div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]"></div>
            </div>
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]"></div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

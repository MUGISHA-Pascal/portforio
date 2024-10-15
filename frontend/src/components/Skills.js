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
import tensolFlowIcon from "../assets/tensolflow.png";
import opencvIcon from "../assets/opencv.png";

const Skills = ({ id }) => {
  return (
    <section
      id={id}
      className="bg-white flex flex-col justify-center items-center pb-[70px] max-sm:pb-[30px] w-full"
    >
      <motion.div className="bg-custom-purple h-[5px] max-sm:h-[3px] max-sm:w-[180px] shadow-custom rounded-br-md rounded-bl-md w-[400px]"></motion.div>
      <div className="flex flex-row space-x-[20px] items-center mt-[14px] max-sm:mt-[5px] max-sm:space-x-[7px] justify-center ">
        <FaLaptopCode className="h-[36px] w-[42px] text-custom-purple pt-[5px] max-sm:w-[30px] max-sm:h-[30px] max-sm:pb-[6px]" />
        <span className="text-custom-purple font-bold text-[34px] max-sm:text-[17px]">
          Skills & Abilities
        </span>
      </div>
      <div className="bg-[#D9D9D9] w-[1240px] max-sm:pb-[30px] max-sm:mt-[20px] max-sm:w-full max-sm:px-[20px] h-[450px] mt-[60px] max-sm:grid max-sm:grid-cols-2 max-sm:gap-[5px] rounded-[14px] flex flex-row sm:space-x-[30px] justify-center m-[5px] pt-[23px]">
        <div className="bg-[#FFFFFF] flex flex-col items-center w-[270px] h-[400px] rounded-[5px] max-sm:w-[160px] max-sm:h-[274px]">
          <motion.div className="bg-custom-purple h-[5px] shadow-custom rounded-br-md max-sm:h-[3px] max-sm:w-[70px] rounded-bl-md w-[160px]"></motion.div>
          <p className="text-custom-purple font-bold text-[20px] mt-[14px] max-sm:text-[10px]">
            Frontend
          </p>
          <div className="flex flex-row space-x-[4px] mt-[30px]">
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] max-sm:w-[70px] max-sm:h-[30px] flex flex-row items-center space-x-[10px] pl-[3px]">
                <FaReact className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px] text-[#00D8FF]" />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Reactjs
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] max-sm:w-[70px] max-sm:h-[30px] flex flex-row items-center pl-[3px] space-x-[10px]">
                <SiMui className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px] text-[#1FA6CA]" />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  MaterialUI
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] max-sm:w-[70px] max-sm:h-[30px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[10px]">
                <FaBootstrap className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px] text-[#7E13F8]" />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Bootstrap
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] max-sm:w-[70px] max-sm:h-[30px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[10px]">
                <DiCss3 className="w-[30px] h-[30px] text-[#0277BD] max-sm:w-[20px] max-sm:h-[20px]" />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  CSS
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] max-sm:w-[70px] max-sm:h-[30px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[10px]">
                <SiNextdotjs className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px] text-[#000000]" />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Nextjs
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] max-sm:w-[70px] max-sm:h-[30px]  flex flex-row items-center pl-[3px] space-x-[10px] max-sm:space-x-[3px]">
                <SiRedux className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px] text-[#764ABC]" />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Redux
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] max-sm:w-[70px] max-sm:h-[30px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[10px]">
                <RiTailwindCssFill className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px] text-[#38BDF8]" />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Tailwindcss
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] max-sm:w-[70px] max-sm:h-[30px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[10px]">
                <FaDocker className="w-[30px] h-[30px] text-[#2396ED] max-sm:w-[20px] max-sm:h-[20px]" />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Docker
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] max-sm:w-[70px] max-sm:h-[30px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[10px]">
                <FaHtml5 className="w-[30px] h-[30px] text-[#E14E1D] max-sm:w-[20px] max-sm:h-[20px]" />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  HTML
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] max-sm:w-[70px] max-sm:h-[30px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[10px]">
                <img
                  src={figmaIcon}
                  alt="figma icon"
                  className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px]"
                />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Figma
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] flex flex-col items-center w-[270px] h-[400px] rounded-[5px] max-sm:w-[160px] max-sm:h-[274px]">
          <motion.div className="bg-custom-purple h-[5px] shadow-custom rounded-br-md max-sm:h-[3px] max-sm:w-[70px] rounded-bl-md w-[160px]"></motion.div>
          <p className="text-custom-purple font-bold text-[20px] mt-[14px] max-sm:text-[10px]">
            Backend
          </p>
          <div className="flex flex-row space-x-[4px] mt-[30px]">
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] max-sm:w-[70px] max-sm:h-[30px] flex flex-row items-center space-x-[10px] pl-[3px]">
                <FaNodeJs className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px] text-[#539E43]" />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Nodejs
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] max-sm:w-[70px] max-sm:h-[30px] flex flex-row items-center pl-[3px] space-x-[10px]">
                <SiExpress className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px] text-[#000000]" />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Expressjs
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] max-sm:w-[70px] max-sm:h-[30px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[10px]">
                <BiLogoSpringBoot className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px] text-[#77BC1F]" />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Spring boot
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] max-sm:w-[70px] max-sm:h-[30px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[15px]">
                <img
                  src={firebasIcon}
                  alt="firebase icon"
                  className="w-[25px] h-[30px] max-sm:w-[15px] max-sm:h-[20px]"
                />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Firebase
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] max-sm:w-[70px] max-sm:h-[30px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[10px]">
                <FaLaravel className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px] text-[#FF2D20]" />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Laravel
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] max-sm:w-[70px] max-sm:h-[30px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[10px]">
                <GrMysql className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px] text-[#00618A]" />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Mysql
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] max-sm:w-[70px] max-sm:h-[30px]  flex flex-row items-center pl-[3px] space-x-[10px] max-sm:space-x-[3px]">
                <GrGraphQl className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px] text-[#E535AB]" />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Graphql
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] max-sm:w-[70px] max-sm:h-[30px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[10px]">
                <img
                  src={awsIcon}
                  alt="AWS icon"
                  className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px] text-[#38BDF8]"
                />{" "}
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  AWS
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] max-sm:w-[70px] max-sm:h-[30px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[10px]">
                <SiDjango className="w-[30px] h-[30px] text-[#092E20] max-sm:w-[20px] max-sm:h-[20px]" />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Django
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] max-sm:w-[70px] max-sm:h-[30px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[10px]">
                <SiFlask className="w-[30px] h-[30px] text-[#000000] max-sm:w-[20px] max-sm:h-[20px]" />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Flask
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] max-sm:w-[70px] max-sm:h-[30px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[10px]">
                <img
                  src={postgresIcon}
                  alt="postgres Icon"
                  className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px]"
                />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Figma
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] max-sm:w-[70px] max-sm:h-[30px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[10px]">
                <img
                  src={mongodbIcon}
                  alt="mongoDB icon"
                  className="w-[20px] h-[30px] max-sm:w-[10px] max-sm:h-[20px]"
                />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  MongoDB
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] flex flex-col items-center w-[270px] h-[400px] rounded-[5px] max-sm:w-[160px] max-sm:h-[140px]">
          <motion.div className="bg-custom-purple h-[5px] shadow-custom rounded-br-md max-sm:h-[3px] max-sm:w-[70px] rounded-bl-md w-[160px]"></motion.div>
          <p className="text-custom-purple font-bold text-[20px] mt-[14px] max-sm:text-[10px]">
            Mobile development
          </p>
          <div className="flex flex-row space-x-[4px] mt-[30px]">
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] max-sm:w-[70px] max-sm:h-[30px] flex flex-row items-center space-x-[10px] pl-[3px]">
                <FaReact className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px] text-[#00D8FF]" />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  React native
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] max-sm:w-[70px] max-sm:h-[30px]  flex flex-row items-center pl-[3px] space-x-[10px] max-sm:space-x-[3px]">
                <img
                  src={flutterIcon}
                  alt="flutter icon"
                  className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px]"
                />{" "}
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Flutter
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF] flex flex-col items-center w-[270px] h-[400px] rounded-[5px] max-sm:w-[160px] max-sm:h-[140px]">
          <motion.div className="bg-custom-purple h-[5px] shadow-custom rounded-br-md max-sm:h-[3px] max-sm:w-[70px] rounded-bl-md w-[160px]"></motion.div>
          <p className="text-custom-purple font-bold text-[20px] mt-[14px] max-sm:text-[10px]">
            Machine learning
          </p>
          <div className="flex flex-row space-x-[4px] mt-[30px]">
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] max-sm:w-[70px] max-sm:h-[30px] flex flex-row items-center space-x-[10px] pl-[3px]">
                <SiPytorch className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px] text-[#EE4C2C]" />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Pytorch
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] max-sm:w-[70px] max-sm:h-[30px] flex flex-row items-center pl-[3px] space-x-[10px]">
                <img
                  src={opencvIcon}
                  alt="opencv icon"
                  className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px] "
                />{" "}
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Opencv
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] max-sm:w-[70px] max-sm:h-[30px]  flex flex-row items-center pl-[3px] space-x-[10px] max-sm:space-x-[3px]">
                <img
                  src={pandasIcon}
                  alt="pandas icon"
                  className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px]"
                />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Pandas
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] max-sm:w-[70px] max-sm:h-[30px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[10px]">
                <img
                  src={tensolFlowIcon}
                  alt="tensol flow Icon"
                  className="w-[30px] h-[30px] max-sm:w-[20px] max-sm:h-[20px]"
                />
                <p className="font-bold text-custom-purple text-[14px] max-sm:text-[7px]">
                  Tensolflow
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

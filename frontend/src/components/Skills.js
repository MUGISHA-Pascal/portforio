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

const Skills = () => {
  return (
    <section className="bg-white flex flex-col justify-center items-center pb-[70px] w-full">
      <motion.div className="bg-custom-purple h-[5px] shadow-custom rounded-br-md rounded-bl-md w-[400px]"></motion.div>
      <div className="flex flex-row space-x-[20px] items-center mt-[14px] justify-center">
        <FaLaptopCode className="h-[36px] w-[42px] text-custom-purple pt-[5px]" />
        <span className="text-custom-purple font-bold text-[34px]">
          Skills & Abilities
        </span>
      </div>
      <div className="bg-[#D9D9D9] w-[1240px] h-[450px] mt-[60px] rounded-[14px] flex flex-row space-x-[30px] justify-center m-[5px] pt-[23px]">
        <div className="bg-[#FFFFFF] flex flex-col items-center w-[270px] h-[400px] rounded-[5px]">
          <motion.div className="bg-custom-purple h-[5px] shadow-custom rounded-br-md rounded-bl-md w-[160px]"></motion.div>
          <p className="text-custom-purple font-bold text-[20px] mt-[14px]">
            Frontend
          </p>
          <div className="flex flex-row space-x-[4px] mt-[30px]">
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center space-x-[5px] pl-[3px]">
                <FaReact className="w-[30px] h-[30px] text-[#00D8FF]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  Reactjs
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <SiMui className="w-[30px] h-[30px] text-[#1FA6CA]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  MaterialUI
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <FaBootstrap className="w-[30px] h-[30px] text-[#7E13F8]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  Bootstrap
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <DiCss3 className="w-[30px] h-[30px] text-[#0277BD]" />
                <p className="font-bold text-custom-purple text-[14px]">CSS</p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <SiNextdotjs className="w-[30px] h-[30px] text-[#000000]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  Nextjs
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <SiRedux className="w-[30px] h-[30px] text-[#764ABC]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  Redux
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <RiTailwindCssFill className="w-[30px] h-[30px] text-[#38BDF8]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  Tailwindcss
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <FaDocker className="w-[30px] h-[30px] text-[#2396ED]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  Docker
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <FaHtml5 className="w-[30px] h-[30px] text-[#E14E1D]" />
                <p className="font-bold text-custom-purple text-[14px]">HTML</p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <img src={figmaIcon} className="w-[30px] h-[30px]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  Figma
                </p>
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
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <FaNodeJs className="w-[30px] h-[30px] text-[#539E43]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  Nodejs
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <SiExpress className="w-[30px] h-[30px] text-[#000000]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  Expressjs
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <BiLogoSpringBoot className="w-[30px] h-[30px] text-[#77BC1F]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  Spring boot
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <img src={firebasIcon} className="w-[25px] h-[30px]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  firebase
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <FaLaravel className="w-[30px] h-[30px] text-[#FF2D20]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  Laravel
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <GrMysql className="w-[30px] h-[30px] text-[#00618A]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  Mysql
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <GrGraphQl className="w-[30px] h-[30px] text-[#E535AB]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  Graphql
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]  flex flex-row items-center pl-[3px] space-x-[5px]">
                <img
                  src={awsIcon}
                  className="w-[38px] h-[25px] text-[#E14E1D]"
                />
                <p className="font-bold text-custom-purple text-[14px]">AWS</p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <SiDjango className="w-[30px] h-[30px] text-[#092E20]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  Django
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <SiFlask className="w-[30px] h-[30px] text-[#000000]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  Flask
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <img src={postgresIcon} className="w-[32px] h-[30px]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  Postgres
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <img src={mongodbIcon} className="w-[18px] h-[30px]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  MongoDB
                </p>
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
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <FaReact className="w-[30px] h-[30px] text-[#00D8FF]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  React native
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <img src={flutterIcon} className="w-[30px] h-[30px]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  Flutter
                </p>
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
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px]  flex flex-row items-center pl-[3px] space-x-[5px]">
                <SiPytorch className="w-[30px] h-[30px] text-[#EE4C2C]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  Pytorch
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <img src={opencvIcon} className="w-[34px] h-[30px]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  Opencv
                </p>
              </div>
            </div>
            <div className="flex flex-col space-y-[4px]">
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <img src={pandasIcon} className="w-[25px] h-[30px]" />
                <p className="font-bold text-custom-purple text-[14px]">
                  Pandas
                </p>
              </div>
              <div className="bg-[#D9D9D9] w-[125px] h-[40px] rounded-[4px] flex flex-row items-center pl-[3px] space-x-[5px]">
                <img src={tensolFlowIcon} className="w-[30px] h-[30px]" />
                <p className="font-bold text-custom-purple text-[14px]">
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

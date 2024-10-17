import React, { useState } from "react";
import { BsCollectionFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { IoMdEye } from "react-icons/io";
import { FaCode } from "react-icons/fa6";
import TaskTrack from "../assets/TaskTrack.png";
import TaskFlow from "../assets/TaskFlow.png";
import Connectify from "../assets/Connectify.png";
import FaceConnect from "../assets/FaceConnect.png";
import TechGadget from "../assets/TechGadget.png";
import BlogNest from "../assets/BlogNest.png";
import ChatterBox from "../assets/ChatterBox.png";
import ClaimStream from "../assets/ClaimStream.png";
import CreditModel from "../assets/Creditmodel.png";
import Eduverse from "../assets/Eduverse.jpeg";
import FinanceLogger from "../assets/financeLogger.png";
import ImageTool from "../assets/imageTool.png";
import Linx from "../assets/Linx.png";
import MentLife from "../assets/MentLife.png";
import NpmCard from "../assets/npmCard.png";
import Rewind from "../assets/Rewind.png";
import StudentMIS from "../assets/studentMIS.png";
import WorkTrack from "../assets/WorkTrack.png";
import Xform from "../assets/Xform.jpeg";
import ML from "../assets/ML.png";
import Librax from "../assets/Librax.png";
const Work = ({ id }) => {
  const [projectIndex, setProjectIndex] = useState(true);
  const projects = [
    {
      name: "TaskTrack",
      description: "web based app to keep track of tasks",
      ViewLink: "https://task-track-peach.vercel.app",
      codeLink: "https://github.com/MUGISHA-Pascal/TaskTrack",
      image: TaskTrack,
    },
    {
      name: "TaskFlow",
      description:
        "a web based task management system with google authentication",
      ViewLink: "https://task-flow-chi.vercel.app",
      codeLink: "https://github.com/MUGISHA-Pascal/TaskFlow",
      image: TaskFlow,
    },
    {
      name: "Connectify",
      description: "a web based chat app",
      ViewLink: "https://connectify-sand.vercel.app",
      codeLink: "https://github.com/MUGISHA-Pascal/Connectify",
      image: Connectify,
    },
    {
      name: "FaceConnect",
      description:
        "a web based application that ensure a two-way video chat between two computers",
      ViewLink: "https://face-connect.vercel.app",
      codeLink: "https://github.com/MUGISHA-Pascal/FaceConnect",
      image: FaceConnect,
    },
    {
      name: "Librax",
      description: "a web based library management application",
      ViewLink: "https://github.com/MUGISHA-Pascal/Librax",
      codeLink: "https://github.com/MUGISHA-Pascal/Librax",
      image: Librax,
    },
    {
      name: "BlogNest",
      description: "a web based blogging platform",
      ViewLink: "https://blog-nest-rose.vercel.app",
      codeLink: "https://github.com/MUGISHA-Pascal/BlogNest",
      image: BlogNest,
    },
    {
      name: "ChatterBox",
      description:
        "a web based program to connect people through exchanging text messages",
      ViewLink: "https://github.com/MUGISHA-Pascal/ChatterBox",
      codeLink: "https://github.com/MUGISHA-Pascal/ChatterBox",
      image: ChatterBox,
    },
    {
      name: "WorkTrack",
      description:
        "a web based application that manage employee performance in an organization",
      ViewLink: "https://github.com/MUGISHA-Pascal/Worktrack",
      codeLink: "https://github.com/MUGISHA-Pascal/Worktrack",
      image: WorkTrack,
    },
    {
      name: "ClaimStream",
      description:
        "a web based application that deals with insurance claim functionalities",
      ViewLink: "https://claimstream.vercel.app",
      codeLink: "https://github.com/MUGISHA-Pascal/Claimstream",
      image: ClaimStream,
    },
    {
      name: "Rewind",
      description: "a web based application that manage insurance claims",
      ViewLink: "https://github.com/MUGISHA-Pascal/Rewind",
      codeLink: "https://github.com/MUGISHA-Pascal/Rewind",
      image: Rewind,
    },
    {
      name: "Student-MIS",
      description:
        "a terminal based application to manage student grades and giving ranks",
      ViewLink: "https://github.com/MUGISHA-Pascal/student-MIS",
      codeLink: "https://github.com/MUGISHA-Pascal/student-MIS",
      image: StudentMIS,
    },
    {
      name: "TechGadget",
      description: "frontend landing pages for a tech gadget website",
      ViewLink: "https://github.com/MUGISHA-Pascal/Tech-gadget-frontend",
      codeLink: "https://github.com/MUGISHA-Pascal/Tech-gadget-frontend",
      image: TechGadget,
    },
    {
      name: "Xform",
      description: "a data correction full crud form",
      ViewLink: "https://github.com/MUGISHA-Pascal/Xform",
      codeLink: "https://github.com/MUGISHA-Pascal/Xform",
      image: Xform,
    },
    {
      name: "Mentlife",
      description: "a web based application that solves mental health problem",
      ViewLink: "https://ment-life.vercel.app",
      codeLink: "https://github.com/MUGISHA-Pascal/MentLife",
      image: MentLife,
    },
    {
      name: "Eduverse",
      description: "a web based logbook application",
      ViewLink: "https://github.com/MUGISHA-Pascal/Eduverse",
      codeLink: "https://github.com/MUGISHA-Pascal/Eduverse",
      image: Eduverse,
    },
    {
      name: "Linx",
      description: "a terminal based chatapp using C",
      ViewLink: "https://github.com/MUGISHA-Pascal/Linx",
      codeLink: "https://github.com/MUGISHA-Pascal/Linx",
      image: Linx,
    },
    {
      name: "npx card",
      description:
        "connect with me directly via terminal or console by typing npx mugishapascal",
      ViewLink: "https://github.com/MUGISHA-Pascal/npx-card",
      codeLink: "https://github.com/MUGISHA-Pascal/npx-card",
      image: NpmCard,
    },
    {
      name: "credit scoring model",
      description:
        "a credit scoring model to predict the creditworthiness of individuals based on historical financial data.",
      ViewLink: "https://github.com/MUGISHA-Pascal/credit-scoring-model",
      codeLink: "https://github.com/MUGISHA-Pascal/credit-scoring-model",
      image: CreditModel,
    },
    {
      name: "image manipulation tool",
      description:
        "a simple computer vision based desktop app for processing an image",
      ViewLink: "https://github.com/MUGISHA-Pascal/image-manipulation-tool",
      codeLink: "https://github.com/MUGISHA-Pascal/image-manipulation-tool",
      image: ImageTool,
    },
    {
      name: "finance logger",
      description: "a simple web based finance logger frontend",
      ViewLink: "https://finance-logger-theta.vercel.app",
      codeLink: "https://github.com/MUGISHA-Pascal/FinanceLogger",
      image: FinanceLogger,
    },
    {
      name: "machine learning projects",
      description: "machine learning based projects",
      ViewLink: "https://github.com/MUGISHA-Pascal/machine-learning",
      codeLink: "https://github.com/MUGISHA-Pascal/machine-learning",
      image: ML,
    },
  ];
  return (
    <section
      id={id}
      className="bg-[#D9D9D9] flex flex-col justify-center items-center pb-[70px] w-full max-sm:pb-[30px] max-sm:w-full"
    >
      <motion.div className="bg-custom-purple max-sm:h-[3px] max-sm:w-[180px] h-[5px] shadow-custom rounded-br-md rounded-bl-md w-[400px]"></motion.div>
      <div className="flex flex-row sm:space-x-[20px] max-sm:space-x-0 items-center max-sm:mt-[5px] mt-[14px] justify-center">
        <BsCollectionFill className="h-[36px] max-sm:h-[30px] max-sm:pb-[6px] w-[42px] text-custom-purple pt-[5px]" />
        <span className="text-custom-purple font-bold text-[34px] max-sm:text-[17px]">
          Projects
        </span>
      </div>
      {/* small screen */}
      <div className="max-sm:flex hidden max-sm:flex-col max-sm:space-y-[5px] max-sm:w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="w-full mr-[5px] ml-[5px] rounded-[5px] bg-white flex flex-row h-[100px] space-x-[10px] p-[5px]"
          >
            <div className="bg-[#808080] w-[200px] h-[90px] rounded-[5px]"></div>
            <div>
              <p className="text-custom-purple font-bold text-[20px] mt-[14px] max-sm:text-[10px]">
                {project.name}
              </p>
              <p className="text-[#808080] text-[7px]">{project.description}</p>
            </div>
            <div className="flex flex-row space-x-[7px] items-end">
              {" "}
              <button className="bg-custom-purple font-bold text-white h-[30px] w-[70px] text-[10px] rounded-[7px] flex flex-row space-x-[8px] justify-center items-center">
                <p>view</p>
                <IoMdEye className="font-bold text-white pt-[1px] w-[17px] h-[17px]" />
              </button>
              <button className="bg-custom-purple font-bold text-white h-[30px] w-[70px] text-[10px] rounded-[7px] flex flex-row space-x-[8px] justify-center items-center">
                <p>code</p>
                <FaCode className="font-bold text-white pb-[2px] w-[17px] h-[17px]" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* big screen */}
      <div className="grid grid-cols-3 gap-[20px] p-2 mt-[50px] max-sm:hidden">
        {projects.map((project, index) => (
          <div key={index} className="relative">
            <div className="w-[320px] h-[320px] bg-white rounded-[17px] flex flex-col justify-between">
              <div
                className="w-full h-[320px] p-2 bg-cover"
                style={{ backgroundImage: `url(${project.image})` }}
              >
                {/* <img src={project.image} className="w-full h-full" /> */}
              </div>
              {projectIndex === index ? (
                <motion.div
                  className="flex flex-col justify-center text-[20px] items-center bg-white rounded-[16px]"
                  onHoverEnd={() => {
                    setProjectIndex(null);
                  }}
                >
                  <div className="h-[50px] w-full bg-custom-purple rounded-tl-[5px] rounded-tr-[5px] flex justify-center items-center ">
                    <p className="font-bold text-white">{project.name}</p>
                  </div>
                  <p className="font-bold text-[14px] m-[20px]">
                    {project.description}
                  </p>
                  <div className="flex flex-row space-x-[50px] m-[20px]">
                    <a
                      href={project.ViewLink}
                      className="bg-custom-purple font-bold text-white p-2 w-[110px] text-[20px] rounded-[10px] flex flex-row space-x-[8px] justify-center items-center"
                    >
                      <p>view</p>
                      <IoMdEye className="font-bold text-white pt-[5px]" />
                    </a>
                    <a
                      href={project.codeLink}
                      className="bg-custom-purple font-bold text-white p-2 w-[110px] text-[20px] rounded-[10px] flex flex-row space-x-[8px] justify-center items-center"
                    >
                      <p>code</p>
                      <FaCode className="font-bold text-white pt-[5px]" />
                    </a>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  onHoverStart={() => {
                    setProjectIndex(index);
                  }}
                  className="h-[50px] w-full bg-custom-purple rounded-bl-[17px] rounded-br-[17px] flex justify-center items-center"
                >
                  <p className="font-bold text-[20px] text-white">
                    {project.name}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Work;

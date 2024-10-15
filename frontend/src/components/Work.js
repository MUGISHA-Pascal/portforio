import React, { useState } from "react";
import { BsCollectionFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { IoMdEye } from "react-icons/io";
import { FaCode } from "react-icons/fa6";

const Work = ({ id }) => {
  const [projectIndex, setProjectIndex] = useState(true);
  const projects = [
    {
      name: "FaceConnect",
      description: "nodejs project using react js and tailwind css",
    },
    {
      name: "Connectify",
      description: "nodejs chat project using react js and tailwind css",
    },
    {
      name: "Mentlife",
      description: "nodejs health project using react js and tailwind css",
    },
    {
      name: "FaceConnect",
      description: "nodejs project using react js and tailwind css",
    },
    {
      name: "Connectify",
      description: "nodejs chat project using react js and tailwind css",
    },
    {
      name: "Mentlife",
      description: "nodejs health project using react js and tailwind css",
    },
  ];
  return (
    <section
      id={id}
      className="bg-[#D9D9D9] flex flex-col justify-center items-center pb-[300px] w-full max-sm:pb-[30px] max-sm:w-full"
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
      <div className="grid grid-cols-3 gap-[20px] p-2 max-sm:hidden">
        {projects.map((project, index) => (
          <div key={index}>
            <div className="w-[320px] h-[320px] bg-white rounded-[17px] flex flex-col justify-between">
              <div className=""></div>
              {projectIndex === index ? (
                <motion.div
                  className="flex flex-col justify-center items-center"
                  onHoverEnd={() => {
                    setProjectIndex(null);
                  }}
                >
                  <div className="h-[50px] w-full bg-custom-purple flex justify-center items-center z-10">
                    <p className="font-bold text-[23px] text-white">
                      {project.name}
                    </p>
                  </div>
                  <p className="font-bold text-[20px] m-[20px]">
                    {project.description}
                  </p>
                  <div className="flex flex-row space-x-[50px] m-[20px]">
                    <button className="bg-custom-purple font-bold text-white p-2 w-[110px] text-[22px] rounded-[10px] flex flex-row space-x-[8px] justify-center items-center">
                      <p>view</p>
                      <IoMdEye className="font-bold text-white pt-[5px]" />
                    </button>
                    <button className="bg-custom-purple font-bold text-white p-2 w-[110px] text-[22px] rounded-[10px] flex flex-row space-x-[8px] justify-center items-center">
                      <p>code</p>
                      <FaCode className="font-bold text-white pt-[5px]" />
                    </button>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  onHoverStart={() => {
                    setProjectIndex(index);
                  }}
                  className="h-[60px] w-full bg-custom-purple rounded-bl-[17px] rounded-br-[17px] flex justify-center items-center"
                >
                  <p className="font-bold text-[23px] text-white">
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

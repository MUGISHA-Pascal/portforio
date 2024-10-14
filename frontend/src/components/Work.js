import React, { useState } from "react";
import { BsCollectionFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { IoMdEye } from "react-icons/io";
import { FaCode } from "react-icons/fa6";

const Work = () => {
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
    <section className="bg-[#D9D9D9] flex flex-col justify-center items-center pb-[300px] w-full">
      <motion.div className="bg-custom-purple h-[5px] shadow-custom rounded-br-md rounded-bl-md w-[400px]"></motion.div>
      <div className="flex flex-row space-x-[20px] items-center mt-[14px] justify-center">
        <BsCollectionFill className="h-[36px] w-[42px] text-custom-purple pt-[5px]" />
        <span className="text-custom-purple font-bold text-[34px]">
          Projects
        </span>
      </div>
      <div className="grid grid-cols-3 gap-[20px] p-2">
        {projects.map((project, index) => (
          <div>
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
      {/* <div className="flex flex-row space-x-[20px] mt-[70px]">
				<div className="flex flex-col space-y-[20px]">
					<div className="w-[420px] h-[320px] bg-white rounded-[17px] flex flex-col justify-between">
						<div className=""></div>
						{boxExist ? (
							<motion.div
								onHoverStart={() => {
									setBoxExist(false);
								}}
								className="h-[60px] w-full bg-custom-purple rounded-bl-[17px] rounded-br-[17px] flex justify-center items-center"
							>
								<p className="font-bold text-[23px] text-white">FaceConnect</p>
							</motion.div>
						) : (
							<motion.div
								onHoverEnd={() => {
									setBoxExist(true);
								}}
								className="flex flex-col justify-center items-center"
							>
								<div className="h-[50px] w-full bg-custom-purple flex justify-center items-center z-10">
									<p className="font-bold text-[23px] text-white">
										FaceConnect
									</p>
								</div>
								<p className="font-bold text-[20px] m-[20px]">
									php project using react js and tailwind css
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
						)}
					</div>
				</div>
				<div className="flex flex-col space-y-[20px]"></div>
				<div className="flex flex-col space-y-[20px]"></div>
			</div> */}
    </section>
  );
};

export default Work;

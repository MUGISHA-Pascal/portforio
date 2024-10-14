import React, { useState } from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/pascalProfile.jpg";
import { FaCode } from "react-icons/fa6";
import { TiThMenu } from "react-icons/ti";

const Home = () => {
  const [navExist, setNavExist] = useState(true);
  const navVariants = {
    hover: {
      borderBottomColor: "white",
      borderBottomWidth: "3px",
    },
    hidden: {
      borderBottomColor: "#290B68",
      borderBottomWidth: "3px",
    },
  };
  const navVariants2 = {
    hover2: {
      borderBottomColor: "white",
      borderBottomWidth: "3px",
    },
    hidden2: {
      borderBottomColor: "#290B68",
      borderBottomWidth: "3px",
    },
  };
  const menuToggle = () => {
    const displayDiv = document.getElementById("displayDiv");
    if (displayDiv.classList.contains("hidden")) {
      displayDiv.classList.remove("hidden");
      displayDiv.classList.add("flex");
    } else {
      displayDiv.classList.add("hidden");
    }
  };

  return (
    <div>
      <header className="flex justify-center max-sm:w-full max-sm:mx-0">
        {navExist ? (
          <>
            <motion.div
              className="bg-custom-purple fixed h-2 shadow-custom rounded-br-md max-sm:hidden rounded-bl-md w-1/2 z-30"
              whileHover={{
                scale: 1,
              }}
              onHoverStart={() => {
                setNavExist(false);
              }}
              transition={{
                type: "spring",
                damping: 20,
                stiffness: 300,
                duration: 0.5,
                delay: 0.1,
              }}
            ></motion.div>
            <motion.div className="  hidden max-sm:flex max-sm:flex-row max-sm:w-full max-sm:justify-between">
              <FaCode className="font-bold text-custom-purple mx-[20px] my-[10px] w-[30px] h-[30px]" />
              <div>
                <TiThMenu
                  className="font-bold text-custom-purple mx-[20px] my-[10px] w-[30px] h-[30px]"
                  onClick={menuToggle}
                />
                <div
                  id="displayDiv"
                  className="hidden text-[10px] flex-col rounded-[5px] space-y-[10px] items-center justify-center h-[200px] w-[100px] right-0 absolute bg-custom-purple text-white"
                >
                  <motion.a
                    variants={navVariants2}
                    whileHover="hover2"
                    initial="hidden2"
                  >
                    Home
                  </motion.a>
                  <motion.a
                    variants={navVariants2}
                    whileHover="hover2"
                    initial="hidden2"
                  >
                    About
                  </motion.a>
                  <motion.a
                    variants={navVariants2}
                    whileHover="hover2"
                    initial="hidden2"
                  >
                    Skills
                  </motion.a>
                  <motion.a
                    variants={navVariants2}
                    whileHover="hover2"
                    initial="hidden2"
                  >
                    Experience
                  </motion.a>
                  <motion.a
                    variants={navVariants2}
                    whileHover="hover2"
                    initial="hidden2"
                  >
                    Education
                  </motion.a>
                  <motion.a
                    variants={navVariants2}
                    whileHover="hover2"
                    initial="hidden2"
                  >
                    Projects
                  </motion.a>
                  <motion.a
                    variants={navVariants2}
                    whileHover="hover2"
                    initial="hidden2"
                  >
                    Contact
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </>
        ) : (
          <motion.nav
            whileHover={{
              scale: 1,
            }}
            onHoverEnd={() => {
              setNavExist(true);
            }}
            transition={{
              type: "spring",
              damping: 20,
              stiffness: 300,
              duration: 0.5,
              delay: 0.1,
            }}
            className="fixed flex flex-row space-x-8 justify-center z-30 items-center bg-custom-purple pl-8 pr-8 h-14 text-white font-inter rounded-br-3xl rounded-bl-3xl shadow-custom"
          >
            <FaCode className="font-bold text-white text-2xl" />
            <div className="flex space-x-8">
              <motion.a
                variants={navVariants}
                whileHover="hover"
                initial="hidden"
              >
                Home
              </motion.a>
              <motion.a
                variants={navVariants}
                whileHover="hover"
                initial="hidden"
              >
                About
              </motion.a>
              <motion.a
                variants={navVariants}
                whileHover="hover"
                initial="hidden"
              >
                Skills
              </motion.a>
              <motion.a
                variants={navVariants}
                whileHover="hover"
                initial="hidden"
              >
                Experience
              </motion.a>
              <motion.a
                variants={navVariants}
                whileHover="hover"
                initial="hidden"
              >
                Education
              </motion.a>
              <motion.a
                variants={navVariants}
                whileHover="hover"
                initial="hidden"
              >
                Projects
              </motion.a>
              <motion.a
                variants={navVariants}
                whileHover="hover"
                initial="hidden"
              >
                Contact
              </motion.a>
            </div>
          </motion.nav>
        )}
      </header>
      <section className="flex flex-row pt-[100px] items-center mb-[120px] max-sm:mb-[70px] max-sm:pt-[50px]">
        <img
          src={profileImg}
          alt="profile picture"
          className="w-[200px] h-[200px] rounded-full object-cover ml-[100px] max-sm:ml-[30px] max-sm:w-[130px] max-sm:h-[130px]"
        />
        <div className="flex flex-row max-sm:ml-[20px]  ml-[100px] items-center justify-center">
          <div className="bg-custom-purple h-[150px] max-sm:h-[100px] max-sm:w-[8px] rounded-full w-[5px]"></div>
          <div className="pl-[30px] pt-[17px] max-sm:pl-[10px]">
            <h1 className="font-bold text-[40px] text-left max-sm:text-[17px]">
              MUGISHA <span className="text-custom-purple">Pascal</span>
            </h1>
            <img
              src="https://readme-typing-svg.herokuapp.com?font=Inter&weight=700&size=40&pause=1000&color=000000&width=435&height=100&lines=Backend+developer;Frontend+developer;Mobile+developer"
              alt="Typing SVG"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

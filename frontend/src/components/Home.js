import React, { useState } from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/pascalProfile.jpg";

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

  return (
    <div>
      <header className="flex justify-center">
        {navExist ? (
          <motion.div
            className="bg-custom-purple fixed h-2 shadow-custom rounded-br-md rounded-bl-md w-1/2"
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
            className="fixed flex flex-row space-x-8 justify-center items-center bg-custom-purple pl-8 pr-8 h-14 text-white font-inter rounded-br-3xl rounded-bl-3xl shadow-custom"
          >
            <div className="font-bold text-2xl">&lt;/&gt;</div>
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
      <section className="flex flex-row pt-[100px] items-center mb-[200px]">
        <img
          src={profileImg}
          alt="profile picture"
          className="w-[200px] h-[200px] rounded-full object-cover ml-[100px]"
        />
        <div className="flex flex-row  ml-[100px]">
          <div className="bg-custom-purple h-[150px] rounded-full w-[5px]"></div>
          <div className="">
            <h1 className="font-bold text-[40px]">
              MUGISHA <span className="text-custom-purple">Pascal</span>
            </h1>
            <img
              className="pl-[120px]"
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

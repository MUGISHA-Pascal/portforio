import React, { useState } from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/pascalProfile.jpg";
import { FaCode } from "react-icons/fa6";
import ParticleBackground from "./ParticleBackground";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-scroll";

const Home = ({ id }) => {
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
    <div className="w-full">
      <header className="flex justify-center max-md:w-full max-md:mx-0">
        {navExist ? (
          <>
            <motion.div
              className="bg-custom-purple fixed h-2 shadow-custom rounded-br-md max-md:hidden rounded-bl-md w-1/2 z-50"
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
            <motion.div className="  hidden max-md:flex max-md:flex-row max-md:w-full max-md:justify-between">
              <FaCode className="font-bold text-custom-purple mx-[20px] my-[10px] w-[30px] h-[30px]" />
              <div>
                <TiThMenu
                  className="font-bold text-custom-purple mx-[20px] my-[10px] w-[30px] h-[30px]"
                  onClick={menuToggle}
                />
                <div
                  id="displayDiv"
                  className="hidden text-[10px] flex-col rounded-[10px] space-y-[10px] items-center justify-center z-10 h-[200px] w-[170px] right-[7px] absolute bg-custom-purple text-white"
                >
                  <Link
                    variants={navVariants2}
                    whileHover="hover2"
                    smooth={true}
                    duration={500}
                    className="hover:cursor-pointer"
                    to="home"
                    initial="hidden2"
                    spy={true}
                    offset={50}
                  >
                    <p>Home</p>
                  </Link>
                  <Link
                    smooth={true}
                    duration={500}
                    spy={true}
                    className="hover:cursor-pointer"
                    offset={50}
                    to="about"
                    variants={navVariants2}
                    whileHover="hover2"
                    initial="hidden2"
                  >
                    About
                  </Link>
                  <Link
                    smooth={true}
                    className="hover:cursor-pointer"
                    duration={500}
                    spy={true}
                    offset={50}
                    variants={navVariants2}
                    whileHover="hover2"
                    initial="hidden2"
                    to="skills"
                  >
                    Skills
                  </Link>
                  <Link
                    smooth={true}
                    className="hover:cursor-pointer"
                    spy={true}
                    offset={50}
                    duration={500}
                    variants={navVariants2}
                    whileHover="hover2"
                    initial="hidden2"
                    to="experience"
                  >
                    Experience
                  </Link>
                  <Link
                    smooth={true}
                    duration={500}
                    className="hover:cursor-pointer"
                    spy={true}
                    offset={50}
                    to="education"
                    variants={navVariants2}
                    whileHover="hover2"
                    initial="hidden2"
                  >
                    Education
                  </Link>
                  <Link
                    smooth={true}
                    spy={true}
                    offset={50}
                    className="hover:cursor-pointer"
                    duration={500}
                    to="projects"
                    variants={navVariants2}
                    whileHover="hover2"
                    initial="hidden2"
                  >
                    Projects
                  </Link>
                  <Link
                    smooth={true}
                    duration={500}
                    spy={true}
                    className="hover:cursor-pointer"
                    offset={50}
                    to="contact"
                    variants={navVariants2}
                    whileHover="hover2"
                    initial="hidden2"
                  >
                    Contact
                  </Link>
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
              <Link
                variants={navVariants}
                whileHover="hover"
                className="hover:cursor-pointer"
                initial="hidden"
                to="home"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Home
              </Link>
              <Link
                variants={navVariants}
                whileHover="hover"
                className="hover:cursor-pointer"
                initial="hidden"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="about"
              >
                About
              </Link>
              <Link
                variants={navVariants}
                whileHover="hover"
                className="hover:cursor-pointer"
                initial="hidden"
                to="skills"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Skills
              </Link>
              <Link
                variants={navVariants}
                whileHover="hover"
                initial="hidden"
                className="hover:cursor-pointer"
                to="experience"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Experience
              </Link>
              <Link
                variants={navVariants}
                whileHover="hover"
                initial="hidden"
                className="hover:cursor-pointer"
                to="education"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Education
              </Link>
              <Link
                variants={navVariants}
                whileHover="hover"
                className="hover:cursor-pointer"
                to="projects"
                initial="hidden"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
              >
                Projects
              </Link>
              <Link
                variants={navVariants}
                whileHover="hover"
                className="hover:cursor-pointer"
                initial="hidden"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                to="contact"
              >
                Contact
              </Link>
            </div>
          </motion.nav>
        )}
      </header>
      <section
        id={id}
        className="flex relative md:ml-[270px] flex-row pt-[100px] w-full items-center mb-[120px] max-md:mb-[70px] max-md:pt-[50px]"
      >
        <ParticleBackground />
        <img
          src={profileImg}
          alt="profile picture"
          className="w-[200px] h-[200px] rounded-full object-cover max-md:ml-[30px] max-md:w-[130px] max-md:h-[130px]"
        />
        <div className="flex flex-row max-md:ml-[20px]  ml-[100px] items-center justify-center">
          <div className="bg-custom-purple h-[150px] max-md:h-[100px] max-md:w-[8px] rounded-full w-[5px]"></div>
          <div className="pl-[30px] pt-[17px] max-md:pl-[10px]">
            <h1 className="font-bold text-[40px] text-left max-md:text-[17px]">
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

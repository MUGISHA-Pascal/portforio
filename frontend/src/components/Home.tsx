import React, { useState } from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/pascalProfile.jpg";
import { FaCode } from "react-icons/fa6";
import ParticleBackground from "./ParticleBackground";
import { TiThMenu } from "react-icons/ti";
import { Link } from "react-scroll";
import { Element } from "react-scroll";

const Home = ({ id }: { id: string }) => {
  const [navExist, setNavExist] = useState(true);
  const menuToggle = () => {
    const displayDiv = document.getElementById("displayDiv");
    if (displayDiv?.classList.contains("hidden")) {
      displayDiv.classList.remove("hidden");
      displayDiv.classList.add("flex");
    } else {
      displayDiv?.classList.add("hidden");
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
                    smooth={true}
                    duration={500}
                    className="hover:cursor-pointer"
                    to="home"
                    spy={true}
                    offset={-10}
                  >
                    <p>Home</p>
                  </Link>
                  <Link
                    smooth={true}
                    duration={500}
                    spy={true}
                    className="hover:cursor-pointer"
                    offset={-10}
                    to="about"
                  >
                    About
                  </Link>
                  <Link
                    smooth={true}
                    className="hover:cursor-pointer"
                    duration={500}
                    spy={true}
                    offset={-10}
                    to="skills"
                  >
                    Skills
                  </Link>
                  <Link
                    smooth={true}
                    className="hover:cursor-pointer"
                    spy={true}
                    offset={-10}
                    duration={500}
                    to="experience"
                  >
                    Experience
                  </Link>
                  <Link
                    smooth={true}
                    duration={500}
                    className="hover:cursor-pointer"
                    spy={true}
                    offset={-10}
                    to="education"
                  >
                    Education
                  </Link>
                  <Link
                    smooth={true}
                    spy={true}
                    offset={-60}
                    className="hover:cursor-pointer"
                    duration={500}
                    to="projects"
                  >
                    Projects
                  </Link>
                  <Link
                    smooth={true}
                    duration={500}
                    spy={true}
                    className="hover:cursor-pointer"
                    offset={-10}
                    to="contact"
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
            className="fixed flex flex-row space-x-8 top-[10px] justify-center z-30 items-center bg-custom-purple p-4 h-[50px] text-white font-inter rounded-full shadow-custom"
          >
            <FaCode className="font-bold text-white text-2xl" />
            <div className="flex space-x-8 text-[14px]">
              <Link
                className="hover:cursor-pointer"
                to="home"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Home
              </Link>
              <Link
                className="hover:cursor-pointer"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                to="about"
              >
                About
              </Link>
              <Link
                className="hover:cursor-pointer"
                to="skills"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Skills
              </Link>
              <Link
                className="hover:cursor-pointer"
                to="experience"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Experience
              </Link>
              <Link
                className="hover:cursor-pointer"
                to="education"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Education
              </Link>
              <Link
                className="hover:cursor-pointer"
                to="projects"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
              >
                Projects
              </Link>
              <Link
                className="hover:cursor-pointer"
                spy={true}
                smooth={true}
                offset={-60}
                duration={500}
                to="contact"
              >
                Contact
              </Link>
            </div>
          </motion.nav>
        )}
      </header>
      <Element
        name={id}
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
      </Element>
    </div>
  );
};

export default Home;

import React from "react";
import { motion } from "framer-motion";

const Home = () => {
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
        <nav className="flex flex-row space-x-8 justify-center items-center bg-custom-purple pl-8 pr-8 h-14 text-white font-inter rounded-br-3xl rounded-bl-3xl shadow-custom">
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
        </nav>
      </header>
    </div>
  );
};

export default Home;

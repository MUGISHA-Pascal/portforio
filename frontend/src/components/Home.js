import React from "react";

const Home = () => {
  return (
    <div>
      <header className="flex justify-center">
        <nav className="flex flex-row space-x-8 justify-center items-center bg-custom-purple pl-8 pr-8 h-14 text-white font-inter rounded-br-3xl rounded-bl-3xl">
          <div className="font-bold text-2xl">&lt;/&gt;</div>
          <div className="flex space-x-8">
            <a>Home</a>
            <a>About</a>
            <a>Skills</a>
            <a>Experience</a>
            <a>Education</a>
            <a>Projects</a>
            <a>Contact</a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Home;

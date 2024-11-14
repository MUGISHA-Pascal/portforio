import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";
import { MdOutlineKeyboardDoubleArrowUp } from "react-icons/md";
import { animateScroll as scroll } from "react-scroll";
function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoaded(true);
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);
  if (!isLoaded) {
    return <Spinner />;
  }
  const scrolltoTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuad",
    });
  };

  return (
    <div className="App overflow-x-hidden">
      <div className="font-inter relative flex flex-col items-center justify-center">
        <div
          className="bg-custom-purple hover:cursor-pointer fixed max-md:right-[20px] max-md:bottom-[20px] bottom-[40px] rounded-full p-[10px] z-30 right-[40px]"
          onClick={scrolltoTop}
        >
          <MdOutlineKeyboardDoubleArrowUp className="text-white" />
        </div>
        <Router>
          <Home id="home" />
          <About id="about" />
          <Skills id="skills" />
          <Experience id="experience" />
          <Education id="education" />
          <Work id="projects" />
          <Contact id="contact" />
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;

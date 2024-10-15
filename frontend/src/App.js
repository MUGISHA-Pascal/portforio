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
function App() {
  return (
    <div className="App overflow-x-hidden">
      <div className="font-inter relative flex flex-col items-center justify-center">
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

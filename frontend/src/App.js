import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App overflow-x-hidden">
      <div className="font-inter relative flex flex-col items-center justify-center">
        <Home />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Work />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;

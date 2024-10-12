import "./App.css";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
}

export default App;

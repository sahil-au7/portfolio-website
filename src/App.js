import "./App.css";
import Particles from "react-tsparticles";
import NavBar from "./UI/Navbar";
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import About from "./Components/About/About";
import optionsParticleJs from "./Utilities/particles.json";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Particles id="tsparticles" options={optionsParticleJs} />
      <Home />
      {/* <Projects /> */}
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;

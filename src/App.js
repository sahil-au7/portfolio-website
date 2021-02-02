import "./App.css";
import Particles from "react-tsparticles";
import Header from "./UI/Navbar";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import About from "./Components/About";
import optionsParticleJs from "./Utilities/particles.json";

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Particles id="tsparticles" options={optionsParticleJs} /> */}
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </div>
  );
}

export default App;

import "./App.css";
import About from "./Components/About";
import Calendar from "./Components/Calendar";
import Contact from "./Components/Contact";
import Github from "./Components/Github";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Home />
        <About />
        <Skills />
        <Github />
        <Calendar />
        <Projects />
        <Contact />
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Display from "./components/Display";

function App() {
  const [activeProject, setActiveProject] = useState("");

  return (
    <div className="bg-black h-screen">
      <div className="flex flex-row-reverse border ">
        <Display project={activeProject} />
      </div>
      <div className="flex flex-col items-start">
        <div className="w-1/4">
          <Home />
        </div>
        <div className="w-1/4">
          <Projects setActiveProject={setActiveProject} />{" "}
        </div>
        <div className="w-1/4">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default App;

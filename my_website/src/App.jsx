import { useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import DisplayData from "./components/DisplayData";

function App() {
  const [activeProject, setActiveProject] = useState("");
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-gray-900 h-screen grid grid-cols-4 gap-4 p-4">
      <div className="col-span-1 space-y-4">
        <Home setActiveProject={setActiveProject} setSelected={setSelected} />                {/**could i make the items bigger. they seem to not take up enough space */}
        <Projects
          setActiveProject={setActiveProject}
          selected={selected}
          setSelected={setSelected}
        />
        <Skills />    
      </div>
      <div className="col-span-3 ">
        <DisplayData activeProject={activeProject} />
      </div>
    </div>
  );
}

export default App;

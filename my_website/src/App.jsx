import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="bg-black h-screen flex flex-col items-start">
      <div className="w-1/4">
        <Home />
      </div>
      <div className="w-1/4">
        <Projects />
      </div>
      <div className="w-1/4">
        <Skills />
      </div>
    </div>
  );
}

export default App;
    

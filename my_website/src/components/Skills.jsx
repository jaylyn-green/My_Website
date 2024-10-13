import {
  HTML,
  JAVA,
  JS,
  PYTHON,
  GIT,
  DB,
  CSS,
  NODEJS,
  REACT,
  BASH,
} from "../../utils/icons";

const Skills = () => {
  return (
    <div className="text-green-200 mx-auto ml-7 pt-3 h-72">
      <p className="text-3xl">Skills & Tools</p>
      <div className="border border-green-200 text-white text-xl pl-1 h-72 overflow-y-auto custom-scroll">
        <ul>
          <li>{HTML} Html</li>
          <li>{CSS} CSS</li>
          <li>{JS} JavaScript</li>
          <li>{JAVA} Java</li>
          <li>{PYTHON} Python</li>
          <li>{NODEJS} Node.js</li>
          <li>{DB} MySQL</li>
          <li>{DB} MongoDB</li>
          <li>{BASH} Bash</li>
          <li>{GIT} Git</li>
          <li>{REACT} React</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;

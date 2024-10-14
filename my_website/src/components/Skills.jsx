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
  StackOf,
  Github,
} from "../../utils/icons";

const Skills = () => {
  return (
    <div className="text-purple-200 mx-auto ml-7 pt-3 h-72">
      <p className="text-3xl">Skills & Tools</p>
      <div className="border border-pruple-300 text-white text-xl pl-1 h-72 overflow-y-auto custom-scroll">
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
          <li>{Github} Github</li>
          <li>{REACT} React</li>
          <li>{GIT} Git operations</li>
          <li>{StackOf} StackOverflow</li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;

const Projects = ({ setActiveProject, selected, setSelected }) => {
  const handleClick = (project) => {
    setSelected(project);
    setActiveProject(project);
  };

  return (
    <div className="mx-auto ml-7 text-green-200 pt-3">
      <p className="text-3xl">Projects</p>
      <div className="border border-green-200 text-white text-2xl p-2 h-72">
        <ul>
          <li
            className="cursor-pointer"
            style={{
              backgroundColor:
                selected === "FitnessTracker"
                  ? "hsla(120, 100%, 75%, 0.5)"
                  : "",
            }}
            onClick={() => handleClick("FitnessTracker")}
          >
            FitnessTracker
          </li>
          <li
            className="cursor-pointer"
            style={{
              backgroundColor:
                selected === "CityUpdate" ? "hsla(120, 100%, 75%, 0.5)" : "",
            }}
            onClick={() => handleClick("CityUpdate")}
          >
            CityUpdate
          </li>

          <li
            className="cursor-pointer"
            style={{
              backgroundColor:
                selected === "ChatApp" ? "hsla(120, 100%, 75%, 0.5)" : "",
            }}
            onClick={() => handleClick("ChatApp")}
          >
            ChatApp
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;

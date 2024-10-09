const Projects = ({ setActiveProject }) => {
  // Receive setActiveProject prop
  return (
    <div className="mx-auto ml-7 text-green-200 pt-3">
      <p className="text-3xl">Projects</p>
      <div className="border border-green-200 text-white text-2xl p-2">
        <ul>
          <li onClick={() => setActiveProject("Fitness Tracker")}>
            FitnessTracker
          </li>
          <li onClick={() => setActiveProject("CityUpdate")}>
            CityUpdate
          </li>
          <li onClick={() => setActiveProject("ChatApp")}>
            ChatApp
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;

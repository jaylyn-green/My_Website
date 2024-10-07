const Projects = () => {
  return (
    <div className="mx-auto ml-5 text-green-200 pt-3">
      <p className="text-3xl">Projects</p>
      <div className="border border-green-200 text-white text-2xl p-2">
        <ul>
            <li>Fitness Tracker</li>        {/**need to implement links for each list entry */}
            <li>CityUpdate</li>             {/**display clicked link in a div in the center of the viewport */}
            <li>ChatApp</li>
        </ul>
      </div>
    </div>
  );
};

export default Projects;

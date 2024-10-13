import { projectData } from "../../utils/projectData";

const DisplayData = ({ activeProject }) => {
  const projectDetails = projectData[activeProject] || {};

  return (
    <div className="border h-4/5 mx-5 mt-12 px-4 py-4 text-white text-2xl overflow-y-auto custom-scroll">
      {activeProject ? (
        <div>
          <h2 className="text-3xl mb-3">{activeProject}</h2>
          <p className="mx-7">
            {projectDetails.description} Here's the{" "}
            <a className="text-green-400" href={projectDetails.link}>
              Github
            </a>{" "}
            for the code.
          </p>
          <div className="my-9 grid place-items-center">
            {projectDetails.images &&
              projectDetails.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={activeProject}
                  className="w-4/5"
                />
              ))}
            <div className="flex space-x-4 mt-3">
              {projectDetails.icons &&
                projectDetails.icons.map((icon, index) => (
                  <span key={index}>{icon}</span>
                ))}
            </div>
          </div>
        </div>
      ) : (
        <p>
          I am Jaylyn Green, an aspiring web developer. I graduated from Georgia
          Southwestern University with a bachelor's in IT. I have built several
          projects showcasing my work and if you would like to check them out,
          take look at the projects tab. You can also view my repositories in this{" "}
          <a className="text-green-400" href="https://github.com/jaylyn-green">
            GitHub
          </a>{" "}
          link.
          <br />
          <br />
          Here is a link to my{" "}
          <a className="text-orange-500" href="">
            {" "}
            {/**resume.pdf link here */}
            resume
          </a>{" "}
          and{" "}
          <a
            className="text-purple-400"
            href="https://www.linkedin.com/in/jaylyn-green-0b4086242/"
          >
            LinkedIn.
          </a>{" "}
        </p>
      )}
    </div>
  );
};

export default DisplayData;

import { projectData } from "../../utils/projectData";

const DisplayData = ({ activeProject }) => {
  const projectDetails = projectData[activeProject] || {};

  return (
    <div className="border h-4/5 mx-5 mt-12 px-4 py-4 text-white text-2xl overflow-y-auto">
        {activeProject ? (
          <div>
            <h2 className="text-3xl mb-3">{activeProject}</h2>
            <p>{projectDetails.description}</p>
            <div className="mt-4 grid place-items-center">
              {projectDetails.images &&
                projectDetails.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={activeProject}
                    className="w-4/5"
                  />
                ))}
            </div>
          </div>
        ) : (
          <p>
            I am Jaylyn Green, an aspiring web developer. I graduated from
            Georgia Southwestern University with a bachelor's in IT. I have
            built several projects showcasing my work and if you would like to
            check them out, look at the projects tab. You can view the code for
            them in this{" "}
            <a
              className="text-green-400"
              href="https://github.com/jaylyn-green"
            >
              GitHub
            </a>{" "}
            link.
            <br />
            <br />
            Here is a link to my{" "}
            <a className="text-orange-500" href="">
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

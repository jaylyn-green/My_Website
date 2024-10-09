const Display = ({ project }) => {
  return (
    <div>
      <p className="text-white">
        {project ? project : "Select a project to view details"}
      </p>
    </div>
  );
};

export default Display;

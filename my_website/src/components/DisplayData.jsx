const DisplayData = ({ project }) => {
  return (
    <div className="border h-4/5 mx-5 px-4 py-4 ">
      <p className="text-white text-2xl">
        {project ? project : "I am Jaylyn Green, an aspiring web developer. "}
      </p>
    </div>
  );
};

export default DisplayData;

const Home = ({ setSelected, setActiveProject }) => {
  const handleClick = () => {
    setActiveProject("");
    setSelected(null);
  };
  return (
    <div
      className="text-amber-400 ml-7 pt-3 mx-auto cursor-pointer"
      onClick={() => handleClick()}
    >
      <p className="text-3xl">Home</p>
      <div className="text-white border border-amber-400 p-2 ">
        <p id="home-text">
          Hello, I am Jaylyn Green. I have a passion for web development!
        </p>
      </div>
    </div>
  );
};

export default Home;

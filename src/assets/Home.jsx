import React from "react";

const handleClick = () => {
  console.log("Hello, rephi");
};

const handleClickAgain = (name, e) => {
  console.log("hello" + name, e.target);
};
const Home = () => {
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>CLick me</button>
      <button onClick={(e) => handleClickAgain("rephi", e)}>CLick me</button>
    </div>
  );
};

export default Home;

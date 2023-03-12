import React from "react";
import classes from "./Home.module.scss";
const Home = (props) => {
  return (
    <div className={classes.container}>
      {/* <img src="./logo.png"></img> */}
      <h1>WELCOME TO APIHUB</h1>
      <h2>A hub of various API to generate jokes, facts and many more! </h2>
      <button onClick={props.onToggle}>Get Started!</button>
    </div>
  );
};

export default Home;

import React from "react";
import Navbar from "/comps/Navbar.js";

//this is my projects component with all the porjects i have pushed to heroku.
const projects = () => {
  return (
    <div>
      <Navbar />
      <h1 className="heading1">
        <u>My Projects</u>
      </h1>
      <h3>Project 1 - </h3>
      <a href="https://sharp-minsky-c66994.netlify.app/" className="anchor">
        My Shoe Store.
      </a>

      <h3>Project 2 - </h3>
      <a href="https://quizzical-golick-2ef529.netlify.app/" className="anchor">
        My E-commerce Store.
      </a>

      <h3>Project 3 - </h3>
      <a
        href="https://delanodiblasio.github.io/Delano_Di_Blasio_Resume/"
        className="anchor"
      >
        My First Resume.
      </a>

      <h3>Project 4 - </h3>
      <a
        href="https://sleepy-anchorage-40246.herokuapp.com/"
        className="anchor"
      >
        My Memory Game.
      </a>

      <style jsx>{`
        .anchor {
          justify-content: center;
          display: flex;
          text-align: center;
          font-size: 20px;
        }
        h3 {
          text-align: center;
          font-size: 30px;
        }
      `}</style>
    </div>
  );
};

export default projects;

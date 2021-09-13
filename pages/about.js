import React from "react";
import Navbar from "/comps/Navbar.js";

//this is my about page used to display everything about me, i used jsx styling aswell//
const about = () => {
  return (
    <div>
      <Navbar />
      <h1 className="heading1">
        <u>About Me</u>
      </h1>
      <p>
        <ul>
          <li>
            {" "}
            I am a passionate, hardworking and knowledgeable individual with an
            array of experience which provide administrative and technical
            skills in office as well as external settings.
          </li>{" "}
          <li>
            Moreover, I am accustomed to addressing the changing needs of an
            office and supporting colleagues and superiors with excellent
            assistance skills.
          </li>{" "}
          <li>
            I bring forth high quality organizational skills and self-motivated
            drive in order to be able to achieve excellence.
          </li>{" "}
          <li>
            I love to explore and have a very creative gene which is why I am
            enjoying web development because I can get creative with websites.
            <li>
              I am extremely passionate about soccer and I am a chelsea fanatic.
              <li>
                I love gyming and keeping active, mental and physical health is
                so important for productivity.
              </li>
            </li>{" "}
            <li>
              I am accustomed to addressing the changing needs of an office and
              supporting colleagues and superiors with excellent assistance
              skills.
            </li>
            <li>
              {" "}
              I bring forth high quality organizational skills and
              self-motivated drive in order to be able to achieve excellence.
            </li>{" "}
            I do enjoy streaming on twitch when I have a chance to aswell.
          </li>
        </ul>
      </p>
      <img src="/static/picture of me.jpg" className="image2" />

      <style jsx>
        {`
          .image2 {
            width: 500px;
            height: 50%;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
        `}
      </style>
    </div>
  );
};

export default about;

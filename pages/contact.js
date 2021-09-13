import React from "react";
import Navbar from "/comps/Navbar.js";

//this is my contacts page//
const contact = () => {
  return (
    <div>
      <Navbar />
      <h1 className="heading1">
        <u>Contact Me</u>
      </h1>
      <ul>
        <li>
          <h3 className="heading3">Telephone Number - 061 430 3162</h3>
        </li>
        <li>
          <h3 className="heading3">
            Email Address -{" "}
            <a href="delanodib@gmail.com">delanodib@gmail.com</a>
          </h3>
        </li>
      </ul>
      <h1 className="heading1">
        <u>Social Media</u>
      </h1>
      <h3 className="heading2">
        <img src="/static/instagram logo.png" /> Instagram -
        <a href="https://www.instagram.com/delano_di_blasio/?hl=en">
          {" "}
          Click here{" "}
        </a>
      </h3>
      <h3 className="heading2">
        {" "}
        <img src="/static/facebook_logos_PNG19753.png" />
        FaceBoook -
        <a href="https://www.facebook.com/delano.diblasio/">Click Here</a>
      </h3>
      <h3 className="heading2">
        <img src="/static/twitter logo.png" />
        Twitter -<a href="https://twitter.com/its_ShAdOwZz_">Click Here</a>
      </h3>
      <h3 className="heading2">
        <img src="/static/linkedin logo.png" />
        LinkedIn -
        <a href="https://www.linkedin.com/in/delano-di-blasio-8755b6191/">
          Click Here
        </a>
      </h3>

      <style jsx>
        {`
          .heading2 {
            text-align: center;
            font-size: 30px;
          }
          img {
            width: 40px;
          }
        `}
      </style>
    </div>
  );
};

export default contact;

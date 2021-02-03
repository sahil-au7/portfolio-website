import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about__details">
        <img
          src="https://media-exp1.licdn.com/dms/image/C4E03AQFFRFB5jPFVuw/profile-displayphoto-shrink_800_800/0/1606064976695?e=1617840000&v=beta&t=D2SUPvzht0IAj4kOn_iaJeCpMuXRdL5YzrM0H4at1Vs"
          alt="image"
        />
        <div className="about__detailsBio">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            illum, iste eum, enim mollitia velit eaque sed explicabo id
            accusantium fugiat sit aliquam dolore a tempore eos libero natus
            cum!
          </p>{" "}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
            eaque odit delectus ipsa labore? Maxime, odio, mollitia fugit earum
            laboriosam omnis harum facilis ipsam unde, vitae molestias optio
            aliquam consequatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  const [show, handelShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handelShow(true);
      } else handelShow(false);
    });
    // return () => {
    //   window.removeEventListener("scroll");
    // };
  });

  return (
    <div className={`navbar ${show && "navbar__black"}`}>
      <div>
        <img
          className="navbar__logo"
          src="https://www.freelogodesign.org/file/app/client/thumb/b06da3a7-7016-4989-8b25-e2d13f899cbd_200x200.png?1612287747738"
          alt="Logo"
        />
      </div>
      <div className="navbar_links">
        <h3>
          <Link activeClass="active" to="home" spy={true} smooth={true}>
            HOME
          </Link>
        </h3>
        <h3>
          {" "}
          <Link to="projects" spy={true} smooth={true}>
            PROJECTS
          </Link>
        </h3>
        <h3>
          <Link activeClass="active" to="skills" spy={true} smooth={true}>
            SKILLS
          </Link>
        </h3>
        <h3>
          <Link to="about" spy={true} smooth={true}>
            ABOUT
          </Link>
        </h3>
        <h3>
          <Link to="contact" spy={true} smooth={true}>
            CONTACT
          </Link>
        </h3>
      </div>
    </div>
  );
};

export default Navbar;

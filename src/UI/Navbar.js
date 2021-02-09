import React, { useEffect, useState } from "react";
import "./Navbar.css";
import Button from "@material-ui/core/Button";
import GetAppIcon from "@material-ui/icons/GetApp";
import { Link } from "react-scroll";
import LinearProgress from "@material-ui/core/LinearProgress";

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
          <Link activeClass="active" to="projects" spy={true} smooth={true}>
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
        <a
          className="navbar__resume"
          href="../public/Sahil__Resume.pdf"
          download
        >
          <Button
            className="navbar__resumeButton"
            variant="contained"
            color="default"
          >
            <GetAppIcon />
            <strong> Resume</strong>
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

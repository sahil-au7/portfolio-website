import React, { useEffect, useState } from "react";
import "./Navbar.css";

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
      {/* <img
        className="navbar__logo"
        src="https://www.freelogodesign.org/file/app/client/thumb/d807a936-a725-4287-a6f9-6c6498a2ef0a_200x200.png?1612286746528"
        alt="Netflix Logo"
      /> */}
      <div className="navbar_title">
        <h1>Sahil Rao</h1>
      </div>
      <div className="navbar_links">
        <h3>Home</h3>
        <h3>Projects</h3>
        <h3>Intro</h3>
      </div>
    </div>
  );
};

export default Navbar;

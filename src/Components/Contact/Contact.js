import React from "react";
import "./Contact.css";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact__link">
        <h1>Follow ME</h1>
        <div className="contact__socialMedia">
          <a
            className="contact__SocialMediaHandles"
            href="https://www.linkedin.com/in/sahil-y-356416b9/"
          >
            <LinkedInIcon className="contact__linkLogo hvr-grow" />
          </a>
          <a href="https://github.com/sahil-au7">
            <GitHubIcon className="contact__linkLogo hvr-grow" />
          </a>
          <a href="https://www.instagram.com/rao._.sahil/">
            <InstagramIcon className="contact__linkLogo hvr-grow" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=100005904060717">
            <FacebookIcon className="contact__linkLogo hvr-grow" />
          </a>
          <a href="https://github.com/sahil-au7/image-Compressor">
            <TwitterIcon className="contact__linkLogo hvr-grow" />
          </a>
        </div>
      </div>
      <div className="contact__form">
        <p>contact form</p>
      </div>
      <div className="footer">
        <h1>@ 2021 SAHIL RAO. ALL RIGHTS RESERVED</h1>
      </div>
    </div>
  );
};

export default Contact;

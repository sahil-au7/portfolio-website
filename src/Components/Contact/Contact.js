import React from "react";
import "./Contact.css";
import SocialMediaHandles from "./SocialMediaHandles";

const Contact = () => {
  return (
    <div className="contact">
      <SocialMediaHandles />
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

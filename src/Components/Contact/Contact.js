import React from "react";
import "./Contact.css";
import SocialMediaHandles from "./SocialMediaHandles";
import Map from "./Map";
import "leaflet/dist/leaflet.css";

const Contact = () => {
  return (
    <div className="contact">
      <SocialMediaHandles />
      <div className="contact__form">
        <form
          id="contact-form"
          // onSubmit={this.handleSubmit.bind(this)}
          method="POST"
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <Map />
      </div>
      <div className="footer">
        <h1>@ 2021 SAHIL RAO. ALL RIGHTS RESERVED</h1>
      </div>
    </div>
  );
};

export default Contact;

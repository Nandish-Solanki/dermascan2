import React from "react";
// import { Element } from "./Element";
import uploadj from "../photos/contact.jpeg";
import "./contactus.css";

const ContactScreen= () => {
  return (
    <div className="desktop-contact">
      <div className="div-contact">
      <div className="overlap-group-contact">
          <div className="group-contact">
            <a className="text-wrapper-2-contact" href="/home">HOME</a>
            <div className="overlap-group-2-contact">
              <a className="text-wrapper-3-contact" href="/about">ABOUT US</a>
              <a className="text-wrapper-4-contact" href="/contact">CONTACT US</a>
            </div>
          </div>
          <div className="overlap-2-contact">
            <div className="rectangle-7-contact"></div>
            
            <a className="text-wrapper-hi-contact" href="/photoscreen1">SCAN NOW</a>
          </div>
        </div>
        <div className="overlap-3-contact">
          <div className="text-wrapper-5-contact">CONTACT US</div>
          <div className="text-contact">Whether you have a question, a suggestion, or just want to share your thoughts, our virtual doors are always open.
Don't hesitate to send us a message using the form below. We promise to respond as quickly as possible because your voice matters to us.</div>
          <div className="rectangle-2-contact"></div>
          <div className="text-wrapper-6-contact">Email-id</div>
          <div className="text-wrapper-7-contact">Describe your message</div>
          <input type="text" className="img-contact" placeholder="        Enter your e-mail id"></input>
          <textarea name="explain" className="group-2-contact" id="explain" cols="30" rows="10" placeholder="     Enter your message for us!"></textarea>
          <img className="contact-image-contact" src={uploadj} />
          <div className="rectangle-3-contact"></div>
          <p className="MADE-WITH-TEAM-contact">
            <span className="span-contact">MADE WITH </span>
            <span className="text-wrapper-8-contact">❤ </span>
            <span className="span-contact">TEAM NEURAL NEXUS</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ContactScreen;

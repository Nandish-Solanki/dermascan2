import React from "react";
// import { Element } from "./Element";
import "./contactus.css";

const ContactScreen= () => {
  return (
    <div className="desktop-contact">
      <div className="div-contact">
      <div className="overlap-group-contact">
          <div className="group-contact">
            <a className="text-wrapper-2-contact" href="">HOME</a>
            <div className="overlap-group-2-contact">
              <a className="text-wrapper-3-contact" href="">ABOUT US</a>
              <a className="text-wrapper-4-contact" href="">CONTACT US</a>
            </div>
          </div>
          <div className="overlap-2-contact">
            <div className="rectangle-7-contact"></div>
            
            <a className="text-wrapper-hi-contact" href="/NexusUi-main/mainpage.html">SCAN NOW</a>
          </div>
        </div>
        <div className="overlap-3-contact">
          <img className="element-contact" src="img/2742876-1-1.svg" />
          <div className="text-wrapper-5-contact">CONTACT US</div>
          <div className="text-contact">Whether you have a question, a suggestion, or just want to share your thoughts, our virtual doors are always open.
Don't hesitate to send us a message using the form below. We promise to respond as quickly as possible because your voice matters to us.</div>
          <div className="rectangle-2-contact"></div>
          <div className="text-wrapper-6-contact">Email-id</div>
          <div className="text-wrapper-7-contact">Describe your message</div>
          <img className="img-contact" src="img/group-7.png" />
          <img className="group-2-contact" src="img/group-8.png" />
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

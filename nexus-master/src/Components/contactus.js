import React from "react";
// import { Element } from "./Element";
import "./contactus.css";

const ContactScreen= () => {
  return (
    <div className="desktop">
      <div className="div">
      <div className="overlap-group">
          <div className="group">
            <a className="text-wrapper-2" href="">HOME</a>
            <div className="overlap-group-2">
              <a className="text-wrapper-3" href="">ABOUT US</a>
              <a className="text-wrapper-4" href="">CONTACT US</a>
            </div>
          </div>
          <div className="overlap-2">
            <div className="rectangle-7"></div>
            
            <a className="text-wrapper-hi" href="/NexusUi-main/mainpage.html">SCAN NOW</a>
          </div>
        </div>
        <div className="overlap-3">
          <img className="element" src="img/2742876-1-1.svg" />
          <div className="text-wrapper-5">CONTACT US</div>
          <div className="text">Whether you have a question, a suggestion, or just want to share your thoughts, our virtual doors are always open.
Don't hesitate to send us a message using the form below. We promise to respond as quickly as possible because your voice matters to us.</div>
          <div className="rectangle-2"></div>
          <div className="text-wrapper-6">Email-id</div>
          <div className="text-wrapper-7">Describe your message</div>
          <img className="img" src="img/group-7.png" />
          <img className="group-2" src="img/group-8.png" />
          <div className="rectangle-3"></div>
          <p className="MADE-WITH-TEAM">
            <span className="span">MADE WITH </span>
            <span className="text-wrapper-8">❤ </span>
            <span className="span">TEAM NEURAL NEXUS</span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default ContactScreen;

import React from 'react';
import "./home.css";

const Home2 = () => {
    return (
      <div className="desktop">
      <div className="overlap-wrapper">
        <div className="overlap">
          <div className="rectangle"></div>
          <img
            className="element-tiny"
            src="img/16334676-tiny-dermatologists-examining-skin-of-patient-at-hospital-2.svg"
          />
          <div className="div"></div>
          <div className="group">
            <div className="text-wrapper">HOME</div>
            <div className="overlap-group">
              <div className="text-wrapper-2">ABOUT US</div>
              <div className="text-wrapper-3">CONTACT US</div>
            </div>
          </div>
          <div className="rectangle-2"></div>
          <div className="text-wrapper-4">SCAN NOW</div>
          <p className="p">HEALTHY SKIN MADE EASY WITH DERMALYZE</p>
          <p className="text-wrapper-5">
            With Dermalyze, effortlessly upload a picture of your skin condition, and instantly receive a
            diagnosis.Also, find Ayurvedic remedies to help you on your healing journey.
          </p>
          <div className="overlap-group-wrapper">
            <div className="overlap-2">
              <div className="rectangle-3"></div>
              <div className="START-NOW">START NOW &gt;&gt;</div>
            </div>
          </div>
          <div className="rectangle-4"></div>
          <p className="MADE-WITH-TEAM">
            <span className="span">MADE WITH </span>
            <span className="text-wrapper-6">❤ </span>
            <span className="span">TEAM NEURAL NEXUS</span>
          </p>
        </div>
      </div>
    </div>
    );
};

export default Home2;
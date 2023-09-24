import React from 'react';
import "./home.css";

const Home2 = () => {
    return (
      <div className="desktop-home">
      <div className="overlap-wrapper-home">
        <div className="overlap-home">
          <div className="rectangle-home"></div>
          {/* <img
            className="element-tiny"
            src=""
          /> */}
          <div className="div-home"></div>
          <div className="group-home">
          <a className="text-wrapper-2-home" href="/home">HOME</a>
            <div className="overlap-group-home">
            <a className="text-wrapper-3-home" href="/about">ABOUT US</a>
            <a className="text-wrapper-4-home" href="/contact">CONTACT US</a>
            </div>
          </div>
          <div className="rectangle-2-home">
          <a className="text-wrapper-i-home" href="/photoscreen1">SCAN NOW</a>
          </div>
          <p className="p-home">HEALTHY  SKIN  MADE <br></br> 
          EASY  WITH DERMALYZE</p>
          <p className="text-wrapper-5-home">
            With Dermalyze, effortlessly upload a picture of your skin condition, and instantly receive a
            diagnosis.Also, find Ayurvedic remedies to help you on your healing journey.
          </p>
          <div className="overlap-group-wrapper-home">
            <div className="overlap-2-home">
              <div className="rectangle-3-home"></div>
              <a className="START-NOW-home" href="/photoscreen1">START NOW &gt;&gt;</a>
            </div>
          </div>
          <div className="rectangle-4-home"></div>
          <p className="MADE-WITH-TEAM-home">
            <span className="span-home">MADE WITH </span>
            <span className="text-wrapper-6-home">❤ </span>
            <span className="span-home">TEAM NEURAL NEXUS</span>
          </p>
        </div>
      </div>
    </div>
    );
};

export default Home2;


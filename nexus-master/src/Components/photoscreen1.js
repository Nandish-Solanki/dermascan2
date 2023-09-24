import React from "react";
import './photoscreen1.css';
const PhotoScreen1=()=>{
    return(
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
            
            <a className="text-wrapper-5" href="/NexusUi-main/mainpage.html">SCAN NOW</a>
          </div>
          </div>
        <div className="overlap-3">
          <div className="ellipse"></div>
          <img className="smart" src="img/smart-1.png" />
          <img className="upload-image" src="img/icons8-upload-image-48-1-1.png" />
          <div className="rectangle-2"></div>
        </div>
        <p className="p">Scan your skin with ease, let AI find disease</p>
        <div className="MADE-WITH-TEAM-wrapper">
          <p className="MADE-WITH-TEAM">
            <span className="span">MADE WITH </span>
            <span className="text-wrapper-hi">❤ </span>
            <span className="span">TEAM NEURAL NEXUS</span>
          </p>
        </div>
      </div>
    </div>
    )
}
export default PhotoScreen1;
import React, { useRef } from "react";
import './photoscreen1.css';
import upload from "../photos/upload.jpeg";
import uploads from "../photos/scan.jpeg";

const PhotoScreen1 = () => {
  const fileInputRef = useRef(null);

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      console.log("Selected file:", selectedFile);
    }
  };

  return (
    <div className="desktop-pso">
      <div className="div-pso">
        <div className="overlap-group-pso">
          <div className="group-pso">
            <a className="text-wrapper-2-pso" href="/home">HOME</a>
            <div className="overlap-group-2-pso">
              <a className="text-wrapper-3-pso" href="/about">ABOUT US</a>
              <a className="text-wrapper-4-pso" href="/contact">CONTACT US</a>
            </div>
          </div>
          <div className="overlap-2-pso">
            <div className="rectangle-7-pso"></div>
            <a className="text-wrapper-5-pso" href="/photoscreen1">SCAN NOW</a>
          </div>
        </div>
        <div className="overlap-3-pso">
          <div className="ellipse-pso"></div>
          
          <img className="smart-pso" src={uploads} />
        
          <a className="upload-image-pso" href="/photoscreen1"onClick={handleFileInputClick} target="_blank">
          <img className="upload-image-psom" src={upload} /></a>
          <div className="rectangle-2-pso"></div>
        </div>
        <p className="p">Scan your skin with ease, let AI find disease</p>
        <div className="MADE-WITH-TEAM-wrapper-pso">
          <p className="MADE-WITH-TEAM-pso">
            <span className="span-pso">MADE WITH </span>
            <span className="text-wrapper-hi-pso">❤ </span>
            <span className="span-pso">TEAM NEURAL NEXUS</span>
          </p>
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileInputChange}
      />
    </div>
  );
};

export default PhotoScreen1;

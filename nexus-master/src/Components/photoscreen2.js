import React, { useRef } from "react";
import './photoscreen2.css';

const PhotoScreen2 = () => {
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
    return(
        <div class="desktop-psi">
      <div class="div-psi">
        <div className="overlap-group-psi">
          <div className="group-psi">
            <a className="text-wrapper-2-psi" href="/home">HOME</a>
            <div className="overlap-group-2-psi">
              <a className="text-wrapper-3-psi" href="/about">ABOUT US</a>
              <a className="text-wrapper-4-psi" href="/contact">CONTACT US</a>
            </div>
          </div>
          <div className="overlap-2-psi">
            <div className="rectangle-7-psi"></div>
            
            <a className="text-wrapper-5-psi" href="/photoscreen1">SCAN NOW</a>
          </div>
        </div>
        <div class="overlap-3-psi">
          <div class="group-2-psi">
            <div class="ellipse-psi"></div>
            <img class="smart-psi" src="img/smart-1.png" />
            <a className="upload-image-psi" href="/photoscreen2"onClick={handleFileInputClick} >
          <img className="upload-image-psi" src="img/icons8-upload-image-48-1-1.png" /></a>
          </div>
          <div class="rectangle-2-psi"></div>
        </div>
        <div class="rectangle-3-psi"></div>
        <div class="rectangle-4-psi"></div>
        <div class="rectangle-5-psi"></div>
        <div class="overlap-4-psi">
          <div class="rectangle-6-psi"></div>
          <div class="text-wrapper-hi-psi">Download Report</div>
        </div>
        <div class="MADE-WITH-TEAM-wrapper-psi">
          <p class="MADE-WITH-TEAM-psi">
            <span class="span-psi">MADE WITH </span>
            <span class="text-wrapper-6-psi">❤ </span>
            <span class="span-psi">TEAM NEURAL NEXUS</span>
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
    )
}
export default PhotoScreen2;
// AboutMe.js
import React from "react";
import "../styles/AboutMe.css"; // Include the CSS file for styling
import CVFile from "../assets/Anandh Kumar CV.pdf"; // Import the CV PDF file

const AboutMe = () => {
  const handleDownloadClick = () => {
    // Create a temporary anchor element to trigger the download
    const link = document.createElement("a");
    link.href = CVFile;
    link.download = "AnandhKumarCV.pdf";
    link.target = "_blank"; // Open in a new tab (optional)
    link.click();
  };

  return (
    <div className="about-me">
      <h2>Hello, I Am Anandh Kumar</h2>
      <p>
        I am a self-motivated graduate with a passion for Java Programming. With
        more than four years of experience in the Information Technology
        industry, I have been recognized as an award-winning best performer in
        programming. I have worked on more than four Real-time Applications.
      </p>
      <div className="about-details-card">
        <div className="about-details">
          <div className="about-detail">
            <strong>Name:</strong> Anandh Kumar
          </div>
          <div className="about-detail">
            <strong>Age:</strong> 32
          </div>
          <div className="about-detail">
            <strong>Address:</strong> Palani, Tamilnadu
          </div>
          <div className="about-detail">
            <strong>Phone Number:</strong> +91 6379268069
          </div>
          <div className="about-detail">
            <strong>Email:</strong> accetanandhmca@gmail.com
          </div>
        </div>
        <div className="cv-button">
          <button onClick={handleDownloadClick}>Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

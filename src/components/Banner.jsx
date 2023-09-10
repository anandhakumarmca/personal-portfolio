import React from 'react';
import '../styles/Banner.css';

function Banner() {
  return (
    <header className="banner">
      <div className="banner-content">
        <div className="banner-text">
          <h1>Welcome!</h1>
          <h1> I am Java Developer |</h1>
          <p>I am a Java SpringBoot developer with 2 years of experience, learning the MERN stack.</p>
        </div>
        <div className="banner-image">
          <img src='/src/assets/images/Anandh Kumar Photo.jpg' alt="Anandh" />
        </div>
      </div>
    </header>
  );
}

export default Banner;

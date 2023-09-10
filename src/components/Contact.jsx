// Contact.js
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Import social media icons from React Icons
import "../styles/Contact.css"; // Include the CSS file for styling

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <div className="social-links">
        <a
          href="https://www.facebook.com/anandhkumarmca"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://twitter.com/coolguyAnandh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/anandhkumargandhi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/anandh-kumar-b0087782"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Contact;

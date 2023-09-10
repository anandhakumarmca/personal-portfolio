// Footer.js
import React from 'react';
import '../styles/Footer.css'; // Include the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Anandh Kumar Design</p>
    </footer>
  );
};

export default Footer;

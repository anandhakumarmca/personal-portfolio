import React from "react";
import "../styles/Navbar.css";

function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: "smooth",
      });
    } else {
      console.error(`Section with ID ${sectionId} not found.`);
    }
  };

  return (
    <nav className="navbar fixed-navbar">
      <div className="container">
        <div className="logo">
          <a href="/">Anandh Kumar</a>
        </div>
        <div className="nav-buttons">
          <button onClick={() => scrollToSection("Banner")}>Home</button>
          <button onClick={() => scrollToSection("Skills")}>Skills</button>
          <button onClick={() => scrollToSection("MyProjects")}>
            MyProjects
          </button>
          <button onClick={() => scrollToSection("AboutMe")}>AboutMe</button>
          <button onClick={() => scrollToSection("Contact")}>Contact</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

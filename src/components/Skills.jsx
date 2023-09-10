import React from "react";
import { FaHtml5, FaCss3, FaReact  } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { SiJavascript, SiMongodb, SiSpringboot } from "react-icons/si";
import { IoLogoNodejs  } from "react-icons/io";
import "../styles/Skills.css";

// Define an array of skills
const skillsData = [
  { name: "Java", icon: <DiJava className="icon" /> },
  { name: "SpringBoot", icon: <SiSpringboot className="icon" /> },
  { name: "HTML5", icon: <FaHtml5 className="icon" /> },
  { name: "CSS3", icon: <FaCss3 className="icon" /> },
  { name: "JavaScript", icon: <SiJavascript className="icon" /> },
  { name: "Reactjs", icon: <FaReact className="icon" /> },
  { name: "Nodejs", icon: <IoLogoNodejs className="icon" /> },
  { name: "MongoDB", icon: <SiMongodb className="icon" /> },
];

function Skills() {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skillsData.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill.icon}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;

import React from "react";
import "../styles/MyProjects.css"; // Include the CSS file for styling

const ProjectCard = ({ imageSrc, title, description, live }) => {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <img src={imageSrc} alt={title} className="project-image" />
      <p>{description}</p>
      <button
        className="view-live-button"
        onClick={() => window.open(live, "_blank")}
      >
        View Live
      </button>
    </div>
  );
};

const projects = [
  {
    title: "Calculator",
    imageSrc: "/src/assets/images/calculator.png", // Provide the correct path or URL
    description: "simple Javascript shopping cart Application",
    live: "https://snazzy-hummingbird-f2c5d3.netlify.app", // Provide the correct live URL
  },
  {
    title: "Shopping Cart",
    imageSrc: "/src/assets/images/shopping-cart.png", // Provide the correct path or URL
    description: "simple React shopping cart Application",
    live: "https://react-shopping-cart-sample.netlify.app", // Provide the correct live URL
  },
  {
    title: "Library Management",
    imageSrc: "/src/assets/images/library-management.png", // Provide the correct path or URL
    description: "simple React Library Management Application",
    live: "https://react-librarymanagement-formik-validation-task.netlify.app/", // Provide the correct live URL
  },
];

const MyProjects = () => {
  return (
    <div className="my-projects">
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageSrc={project.imageSrc} // Pass the correct image source
            description={project.description}
            live={project.live} // Pass the correct live URL
          />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;

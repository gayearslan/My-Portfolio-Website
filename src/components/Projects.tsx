import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio built with React and TailwindCSS.",
    imageUrl: "/images/portfolio.png",
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Yağacak Mı?",
    description: "A modern weather website using React, TypeScript, and TailwindCSS that fetches real-time data from an API.",
    imageUrl: "/images/yagacakmi.png",
    demoLink: "https://velvety-torte-8b5da5.netlify.app/",
    codeLink: "",
  },
  {
    title: "",
    description: "",
    imageUrl: "/images/comingsoon.png",
    demoLink: "",
    codeLink: "",
  },
];

const Projects: React.FC = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 mt-32 ">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

export default Projects;

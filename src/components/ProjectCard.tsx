// ProjectCard.tsx
import React from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  demoLink?: string;
  codeLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, demoLink, codeLink }) => {
  return (
    <div className="bg-yellow-50 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
      <img src={imageUrl} alt={title} className="w-full h-auto object-cover"/>
      <div className="p-4">
        <h3 className="text-xl text-amber-950 font-semibold mb-2">{title}</h3>
        <p className="text-amber-800 mb-4">{description}</p>
        <div className="flex gap-2">
          {demoLink && <a href={demoLink} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-yellow-500 text-amber-950 rounded hover:bg-yellow-600 transition">View Demo</a>}
          {codeLink && <a href={codeLink} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-amber-950 text-white rounded hover:bg-amber-900 transition">Source Code</a>}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

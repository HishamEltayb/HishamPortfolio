import React from 'react';
import { Sun, Home, Cpu } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: "Solar Energy Projects",
      description: "Managed over 100 Solar projects from procurement to commissioning.",
      icon: <Sun size={24} className="text-yellow-500" />
    },
    {
      title: "Smart Home Automation",
      description: "Implemented ELV systems for smart home automation, enhancing energy efficiency and user comfort.",
      icon: <Home size={24} className="text-green-500" />
    },
    {
      title: "InnovateX Hackathon Project",
      description: "Developed an innovative solution for the Ministry of Interior UAE and 42 Abu Dhabi hackathon, securing 2nd place.",
      icon: <Cpu size={24} className="text-blue-500" />
    }
  ];

  return (
    <section id="projects" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              {project.icon}
              <h3 className="text-xl font-semibold ml-2">{project.title}</h3>
            </div>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
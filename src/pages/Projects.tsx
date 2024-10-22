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
    <section className="mb-12 animate-fade-in bg-cover bg-center py-12" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'}}>
      <div className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-blue-500 pb-2 text-blue-600 dark:text-blue-400">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                {project.icon}
                <h3 className="text-xl font-semibold ml-2 text-gray-800 dark:text-gray-200">{project.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
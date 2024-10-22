import React from 'react';
import { Wrench, Code, Database, Cpu } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Software",
      icon: <Code size={24} className="text-blue-500" />,
      skills: ["PVsyst", "AutoCAD 2D", "AnyDesk", "Matlab", "Windows", "Linux", "Kali"]
    },
    {
      title: "Tools",
      icon: <Wrench size={24} className="text-green-500" />,
      skills: ["Bill of Quantities (BOQ)", "MS (Word, Excel, PowerPoint)", "Engineering Design"]
    },
    {
      title: "Technologies",
      icon: <Cpu size={24} className="text-purple-500" />,
      skills: ["Renewable Energy", "Automation"]
    },
    {
      title: "Other",
      icon: <Database size={24} className="text-red-500" />,
      skills: ["Sales Techniques", "Business valuation"]
    }
  ];

  return (
    <section className="mb-12 animate-fade-in bg-cover bg-center py-12" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'}}>
      <div className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-blue-500 pb-2 text-blue-600 dark:text-blue-400">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-semibold ml-2 text-gray-800 dark:text-gray-200">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
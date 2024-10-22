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
    <section id="skills" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              {category.icon}
              <h3 className="text-xl font-semibold ml-2">{category.title}</h3>
            </div>
            <ul className="list-disc list-inside">
              {category.skills.map((skill, skillIndex) => (
                <li key={skillIndex} className="text-gray-600">{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
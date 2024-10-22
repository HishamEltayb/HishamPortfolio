import React from 'react';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      company: "Renesol Co.Ltd",
      position: "ShareHolder & Renewable Energy Engineer",
      period: "Mar 2022 – Aug 2023",
      responsibilities: [
        "Participate in strategic decision-making processes, providing financial oversight to drive the company's renewable energy initiatives.",
        "Utilize technical expertise to design and optimize renewable energy systems while overseeing project implementation from procurement to commissioning.",
        "Assess and manage risks associated with renewable energy projects, conducting technical analysis and troubleshooting to ensure optimal system performance."
      ]
    },
    {
      company: "Sunergy Co.Ltd",
      position: "Founder & Sales Engineer",
      period: "Mar 2020 – Feb 2022",
      responsibilities: [
        "Provide visionary leadership, setting the strategic direction for the company's growth, while actively driving business development initiatives to identify new opportunities and partnerships.",
        "Utilize product knowledge and technical expertise to effectively demonstrate the value of the company's offerings to potential clients.",
        "Build and maintain strong client relationships by understanding their needs and providing tailored solutions, contributing to revenue generation and overall sales performance."
      ]
    },
    {
      company: "Smart Home Company",
      position: "ELV Project Engineer",
      period: "Aug 2019 – Feb 2020",
      responsibilities: [
        "Work inspection. Prepare reports for upper management regarding status of projects.",
        "Set deadlines, assign responsibilities, monitor and summarize progress of projects.",
        "Work directly with clients to ensure deliverables fall within the applicable scope and budget."
      ]
    }
  ];

  return (
    <section className="mb-12 animate-fade-in bg-cover bg-center py-12" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'}}>
      <div className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-blue-500 pb-2 text-blue-600 dark:text-blue-400">Work Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <Briefcase size={24} className="text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{exp.company}</h3>
              </div>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{exp.position}</p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.period}</p>
              <ul className="space-y-2">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="flex items-start">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2 mt-2"></span>
                    <span className="text-gray-600 dark:text-gray-300">{resp}</span>
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

export default Experience;
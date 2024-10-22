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
    <section id="experience" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              <Briefcase size={24} className="text-blue-500 mr-2" />
              <h3 className="text-xl font-semibold">{exp.company}</h3>
            </div>
            <p className="text-lg font-medium text-gray-700">{exp.position}</p>
            <p className="text-gray-600 mb-4">{exp.period}</p>
            <ul className="list-disc list-inside text-gray-600">
              {exp.responsibilities.map((resp, respIndex) => (
                <li key={respIndex}>{resp}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
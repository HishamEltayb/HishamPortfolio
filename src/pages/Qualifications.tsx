import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Qualifications: React.FC = () => {
  const qualifications = [
    {
      institution: "42 Abu Dhabi",
      degree: "Diploma in Software Development",
      period: "Oct 2023 - ongoing",
      icon: <GraduationCap size={24} className="text-blue-500" />
    },
    {
      institution: "University of Michigan",
      degree: "Online Course Certificates",
      courses: ["Python for Every Body", "Using Python to Access Web Data", "Python Data Structures"],
      period: "Completed in 2019",
      icon: <Award size={24} className="text-blue-500" />
    },
    {
      institution: "Sudan University of Science & Technology",
      degree: "Bachelor of Engineering, Major in Electrical, Minor in Power",
      period: "Completed in 2017",
      icon: <GraduationCap size={24} className="text-blue-500" />
    }
  ];

  return (
    <section className="mb-12 animate-fade-in bg-cover bg-center py-12" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'}}>
      <div className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-blue-500 pb-2 text-blue-600 dark:text-blue-400">Qualifications</h2>
        <div className="space-y-6">
          {qualifications.map((qual, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                {qual.icon}
                <h3 className="text-xl font-semibold ml-2 text-gray-800 dark:text-gray-200">{qual.institution}</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{qual.degree}</p>
              {qual.courses && (
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 ml-4 mt-2">
                  {qual.courses.map((course, courseIndex) => (
                    <li key={courseIndex}>{course}</li>
                  ))}
                </ul>
              )}
              <p className="text-gray-500 dark:text-gray-400 mt-2">{qual.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
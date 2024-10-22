import React from 'react';
import { Award, Zap } from 'lucide-react';

const Achievements: React.FC = () => {
  const achievements = [
    {
      title: "2nd Place in InnovateX Hackathon",
      description: "Won 2nd place in the InnovateX hackathon organized by the Ministry of Interior UAE and 42 Abu Dhabi in 2024.",
      icon: <Award size={24} className="text-yellow-500" />
    },
    {
      title: "Solar Project Management",
      description: "Successfully managed over 100 Solar projects from procurement to commissioning between 2020 and 2023.",
      icon: <Zap size={24} className="text-green-500" />
    }
  ];

  return (
    <section className="mb-12 animate-fade-in bg-cover bg-center py-12" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1496247749665-49cf5b1022e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'}}>
      <div className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-blue-500 pb-2 text-blue-600 dark:text-blue-400">Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 shadow-lg rounded-lg p-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                {achievement.icon}
                <h3 className="text-xl font-semibold ml-2 text-gray-800 dark:text-gray-200">{achievement.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
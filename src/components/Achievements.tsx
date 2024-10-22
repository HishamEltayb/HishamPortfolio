import React from 'react';
import { Award, Zap } from 'lucide-react';

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Achievements</h2>
      <div className="space-y-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Award size={24} className="text-yellow-500 mr-2" />
            <h3 className="text-xl font-semibold">2nd Place in InnovateX Hackathon</h3>
          </div>
          <p className="text-gray-600">Won 2nd place in the InnovateX hackathon organized by the Ministry of Interior UAE and 42 Abu Dhabi in 2024.</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Zap size={24} className="text-green-500 mr-2" />
            <h3 className="text-xl font-semibold">Solar Project Management</h3>
          </div>
          <p className="text-gray-600">Successfully managed over 100 Solar projects from procurement to commissioning between 2020 and 2023.</p>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
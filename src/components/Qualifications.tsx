import React from 'react';
import { GraduationCap, Award } from 'lucide-react';

const Qualifications: React.FC = () => {
  return (
    <section id="qualifications" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Qualifications</h2>
      <div className="space-y-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center mb-4">
            <GraduationCap size={24} className="text-blue-500 mr-2" />
            <h3 className="text-xl font-semibold">42 Abu Dhabi</h3>
          </div>
          <p className="text-gray-600">Diploma in Software Development</p>
          <p className="text-gray-500">Oct 2023 - ongoing</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center mb-4">
            <Award size={24} className="text-blue-500 mr-2" />
            <h3 className="text-xl font-semibold">University of Michigan</h3>
          </div>
          <p className="text-gray-600">Online Course Certificates:</p>
          <ul className="list-disc list-inside text-gray-600 ml-4">
            <li>Python for Every Body</li>
            <li>Using Python to Access Web Data</li>
            <li>Python Data Structures</li>
          </ul>
          <p className="text-gray-500">Completed in 2019</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex items-center mb-4">
            <GraduationCap size={24} className="text-blue-500 mr-2" />
            <h3 className="text-xl font-semibold">Sudan University of Science & Technology</h3>
          </div>
          <p className="text-gray-600">Bachelor of Engineering, Major in Electrical, Minor in Power</p>
          <p className="text-gray-500">Completed in 2017</p>
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
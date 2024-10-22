import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:w-48" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Hisham Ahmed" />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Electrical Engineer</div>
            <p className="mt-2 text-gray-600">
              Committed to fostering innovation, embracing challenges, and collaborating with diverse teams to achieve excellence and drive meaningful results. Seeking opportunities that allow me to contribute to the success of an organization, while continuously learning and adapting in a dynamic and ever-changing work environment. Dedicated to continuous improvement, personal development, and making a difference in the lives of others.
            </p>
            <div className="mt-4">
              <p className="flex items-center text-gray-600 mb-2">
                <Mail size={18} className="mr-2" /> zqhisham@gmail.com
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <Phone size={18} className="mr-2" /> +971 544 0148 85
              </p>
              <p className="flex items-center text-gray-600 mb-2">
                <MapPin size={18} className="mr-2" /> Abu Dhabi, UAE
              </p>
              <p className="flex items-center text-gray-600">
                <Linkedin size={18} className="mr-2" /> 
                <a href="https://linkedin.com/in/hishameltayb" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  linkedin.com/in/hishameltayb
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
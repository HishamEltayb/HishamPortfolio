import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section
      className="mb-12 animate-fade-in bg-cover bg-center py-12"
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
      }}
    >
      <div className="bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 p-8 rounded-lg shadow-xl max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 border-b-2 border-blue-500 pb-2 text-blue-600 dark:text-blue-400">
          About Me
        </h2>
        <div className="md:flex items-center">
          <div className="md:flex-shrink-0 mb-4 md:mb-0 md:mr-6">
            <img
              className="h-48 w-48 object-cover rounded-full shadow-lg"
              src="/155056739.jpeg"
              alt="Hisham Ahmed"
            />
          </div>
          <div>
            <div className="uppercase tracking-wide text-sm text-indigo-600 dark:text-indigo-400 font-semibold mb-2">
              Electrical Engineer & Software Developer
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Committed to fostering innovation, embracing challenges, and
              collaborating with diverse teams to achieve excellence and drive
              meaningful results. Seeking opportunities that allow me to
              contribute to the success of an organization, while continuously
              learning and adapting in a dynamic and ever-changing work
              environment.
            </p>
            <div className="space-y-2">
              <p className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail size={18} className="mr-2 text-blue-500" />{' '}
                zqhisham@gmail.com
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone size={18} className="mr-2 text-blue-500" /> +971 544 0148
                85
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-400">
                <MapPin size={18} className="mr-2 text-blue-500" /> Abu Dhabi,
                UAE
              </p>
              <p className="flex items-center text-gray-600 dark:text-gray-400">
                <Linkedin size={18} className="mr-2 text-blue-500" />
                <a
                  href="https://linkedin.com/in/hishameltayb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
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

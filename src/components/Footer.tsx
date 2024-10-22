import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">Hisham Ahmed</h3>
            <p>Electrical Engineer & Software Developer</p>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/hishameltayb"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/hishameltayb"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://raw.github.com/HishamEltayb/HishamPortfolio/d19490b08015dc3e46212f390d3c5d4a4a579164/Hisham%20Ahmed.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FileText size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 Hisham Ahmed. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

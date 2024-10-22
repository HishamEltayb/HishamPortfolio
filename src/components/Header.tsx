import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className={`${darkMode ? 'bg-gray-900' : 'bg-blue-600'} text-white sticky top-0 z-10 shadow-lg`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition-colors duration-200">Hisham Ahmed</Link>
          <nav className="hidden md:flex space-x-6">
            <Link to="/about" className="hover:text-blue-200 transition-colors duration-200">About</Link>
            <Link to="/qualifications" className="hover:text-blue-200 transition-colors duration-200">Qualifications</Link>
            <Link to="/skills" className="hover:text-blue-200 transition-colors duration-200">Skills</Link>
            <Link to="/experience" className="hover:text-blue-200 transition-colors duration-200">Experience</Link>
            <Link to="/projects" className="hover:text-blue-200 transition-colors duration-200">Projects</Link>
            <Link to="/achievements" className="hover:text-blue-200 transition-colors duration-200">Achievements</Link>
            <Link to="/reflections" className="hover:text-blue-200 transition-colors duration-200">Reflections</Link>
          </nav>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-blue-500 dark:hover:bg-gray-700 transition-colors duration-200 mr-4"
            >
              {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <nav className="md:hidden bg-blue-500 dark:bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 dark:hover:bg-gray-700 transition-colors duration-200">About</Link>
            <Link to="/qualifications" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 dark:hover:bg-gray-700 transition-colors duration-200">Qualifications</Link>
            <Link to="/skills" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 dark:hover:bg-gray-700 transition-colors duration-200">Skills</Link>
            <Link to="/experience" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 dark:hover:bg-gray-700 transition-colors duration-200">Experience</Link>
            <Link to="/projects" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 dark:hover:bg-gray-700 transition-colors duration-200">Projects</Link>
            <Link to="/achievements" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 dark:hover:bg-gray-700 transition-colors duration-200">Achievements</Link>
            <Link to="/reflections" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-600 dark:hover:bg-gray-700 transition-colors duration-200">Reflections</Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
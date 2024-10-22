import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center bg-cover bg-center" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")'}}>
      <div className="bg-white bg-opacity-80 dark:bg-gray-800 dark:bg-opacity-80 p-8 rounded-lg shadow-xl">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-blue-600 dark:text-blue-400">Welcome to My Portfolio</h1>
        <p className="text-xl mb-8 max-w-2xl text-gray-700 dark:text-gray-300">
          I'm Hisham Ahmed, an Electrical Engineer and Software Developer passionate about innovation and technology.
        </p>
        <Link
          to="/about"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full inline-flex items-center transition duration-300 text-lg"
        >
          Explore My Work
          <ArrowRight className="ml-2" size={24} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
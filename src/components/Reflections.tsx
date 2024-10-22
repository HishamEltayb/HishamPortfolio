import React from 'react';
import { BookOpen, Clock, Target, Lightbulb } from 'lucide-react';

const Reflections: React.FC = () => {
  const reflections = [
    {
      title: "Feedback Loop",
      description: "Actively engaging in giving, receiving, and implementing feedback has significantly improved my communication skills and project outcomes.",
      icon: <BookOpen size={24} className="text-blue-500" />
    },
    {
      title: "Time Management",
      description: "Implementing effective time management techniques has allowed me to balance multiple projects and responsibilities efficiently.",
      icon: <Clock size={24} className="text-green-500" />
    },
    {
      title: "Learning from Failure",
      description: "Embracing failures as learning opportunities has been crucial in my personal and professional growth, leading to more innovative problem-solving approaches.",
      icon: <Target size={24} className="text-red-500" />
    },
    {
      title: "Action Planning",
      description: "Developing and following through with action plans has greatly enhanced my ability to achieve both short-term and long-term goals in my career.",
      icon: <Lightbulb size={24} className="text-yellow-500" />
    }
  ];

  return (
    <section id="reflections" className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Reflections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {reflections.map((reflection, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center mb-4">
              {reflection.icon}
              <h3 className="text-xl font-semibold ml-2">{reflection.title}</h3>
            </div>
            <p className="text-gray-600">{reflection.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reflections;
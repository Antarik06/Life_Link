import React from 'react';
import { Droplets, BookOpen, Stethoscope, Utensils } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      icon: Droplets,
      title: "Clean Water Initiative",
      description: "Providing access to clean, safe drinking water through well construction and water purification systems in remote communities.",
      impact: "25,000+ people served",
      color: "bg-blue-500"
    },
    {
      icon: BookOpen,
      title: "Education Empowerment",
      description: "Building schools, training teachers, and providing educational resources to ensure every child has access to quality education.",
      impact: "15 schools built",
      color: "bg-green-500"
    },
    {
      icon: Stethoscope,
      title: "Healthcare Access",
      description: "Mobile clinics, medical supplies, and healthcare training programs bringing essential medical care to underserved areas.",
      impact: "50,000+ patients treated",
      color: "bg-purple-500"
    },
    {
      icon: Utensils,
      title: "Nutrition Programs",
      description: "Fighting hunger through food distribution, agricultural training, and sustainable farming initiatives.",
      impact: "100,000+ meals provided",
      color: "bg-orange-500"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-red-600">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We focus on four key areas that create the foundation for thriving communities: 
            clean water, education, healthcare, and nutrition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              <div className="p-8">
                <div className={`${program.color} w-16 h-16 rounded-lg flex items-center justify-center mb-6`}>
                  <program.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="text-sm font-semibold text-red-600 uppercase tracking-wide">Impact</div>
                  <div className="text-lg font-bold text-gray-900">{program.impact}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#donate" 
            className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Support Our Programs
          </a>
        </div>
      </div>
    </section>
  );
};

export default Programs;
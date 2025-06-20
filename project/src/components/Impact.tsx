import React from 'react';
import { TrendingUp, Users, MapPin, Calendar } from 'lucide-react';

const Impact = () => {
  const stats = [
    {
      icon: Users,
      number: "150,000+",
      label: "Lives Transformed",
      description: "People directly impacted by our programs"
    },
    {
      icon: MapPin,
      number: "75",
      label: "Communities Served",
      description: "Active projects across multiple continents"
    },
    {
      icon: TrendingUp,
      number: "95%",
      label: "Success Rate",
      description: "Of our programs meet or exceed goals"
    },
    {
      icon: Calendar,
      number: "12",
      label: "Years Active",
      description: "Building sustainable change since 2012"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-red-500">Impact</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Numbers tell our story, but behind each statistic is a life changed, 
            a community empowered, and hope restored.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-red-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-500 transition-colors duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-xl font-semibold text-red-400 mb-2">{stat.label}</div>
              <div className="text-gray-400 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="bg-red-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Your contribution, no matter the size, creates ripples of positive change 
            that extend far beyond what you can imagine.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#donate" 
              className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Donate Now
            </a>
            <a 
              href="#contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
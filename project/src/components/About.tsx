import React from 'react';
import { Heart, Users, Globe, Target, Award, Shield } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-[#fef2f2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-red-600">LifeLink</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We are India's leading blood donation platform, connecting donors with those in need 
            and making blood donation accessible, safe, and efficient for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              LifeLink exists to bridge the critical gap between blood donors and recipients. 
              We leverage technology to create a seamless ecosystem where every drop of blood 
              donated reaches those who need it most, when they need it most.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through our platform, we've revolutionized blood donation by making it more 
              accessible, transparent, and efficient. We work closely with hospitals, blood banks, 
              and communities to ensure no life is lost due to blood shortage.
            </p>
          </div>
          <div 
            className="rounded-lg shadow-lg h-96 bg-cover bg-center"
            style={{
              backgroundImage: 'url("https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop")'
            }}
          ></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="text-center group">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
              <Heart className="h-8 w-8 text-red-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Life-Saving Impact</h4>
            <p className="text-gray-600">Every donation through our platform has the potential to save up to 3 lives.</p>
          </div>

          <div className="text-center group">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
              <Users className="h-8 w-8 text-red-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Community Network</h4>
            <p className="text-gray-600">Building a strong network of donors, hospitals, and volunteers across India.</p>
          </div>

          <div className="text-center group">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
              <Globe className="h-8 w-8 text-red-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Nationwide Reach</h4>
            <p className="text-gray-600">Connecting donors and recipients across all major cities and towns in India.</p>
          </div>

          <div className="text-center group">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
              <Target className="h-8 w-8 text-red-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Precision Matching</h4>
            <p className="text-gray-600">Advanced algorithms ensure perfect blood type compatibility and location matching.</p>
          </div>

          <div className="text-center group">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
              <Award className="h-8 w-8 text-red-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Quality Assurance</h4>
            <p className="text-gray-600">Partnering only with certified blood banks and medical facilities for safety.</p>
          </div>

          <div className="text-center group">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Privacy & Security</h4>
            <p className="text-gray-600">Your personal information is protected with bank-level security measures.</p>
          </div>
        </div>

        <div className="bg-red-600 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Life-Saving Mission
          </h3>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Whether you're a donor, recipient, or organization, you can be part of our mission 
            to ensure no life is lost due to blood shortage.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#find-center" 
              className="bg-white text-red-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              Become a Donor
            </a>
            <a 
              href="#organize-camp" 
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              Organize a Camp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
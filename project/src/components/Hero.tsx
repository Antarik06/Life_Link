import React from 'react';
import { Heart, ArrowRight, Droplets } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-red-900/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="max-w-4xl">
          <div className="flex items-center mb-6">
            <Heart className="h-12 w-12 text-red-500 fill-red-500 mr-4" />
            <h1 className="text-5xl md:text-7xl font-bold">LifeLink</h1>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-red-100">
            Every Drop Counts, Every Donor Matters
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200 leading-relaxed">
            Join our mission to save lives through blood donation. Connect with donation centers, 
            find compatible donors, and be part of a community that makes a difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#find-center" 
              className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <Droplets className="mr-2 h-5 w-5" />
              Donate Blood
            </a>
            
            <a 
              href="#request-blood" 
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Request Blood
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400">50K+</div>
              <div className="text-sm text-gray-300 mt-1">Lives Saved</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400">200+</div>
              <div className="text-sm text-gray-300 mt-1">Partner Hospitals</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-3xl font-bold text-red-400">25K+</div>
              <div className="text-sm text-gray-300 mt-1">Active Donors</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-8 w-8 text-red-500 fill-red-500" />
              <span className="text-2xl font-bold">LifeLink</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              India's leading blood donation platform connecting donors with those in need. 
              Every drop counts, every donor matters in our mission to save lives.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="#" className="bg-red-600 p-2 rounded-lg text-white hover:bg-red-700 transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-lg text-white hover:bg-red-700 transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-lg text-white hover:bg-red-700 transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-lg text-white hover:bg-red-700 transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                Emergency: 1800-BLOOD-HELP
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                support@lifelink.org
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors duration-200">Home</a></li>
              <li><a href="#compatibility" className="text-gray-300 hover:text-white transition-colors duration-200">Blood Types</a></li>
              <li><a href="#find-center" className="text-gray-300 hover:text-white transition-colors duration-200">Find Centers</a></li>
              <li><a href="#request-blood" className="text-gray-300 hover:text-white transition-colors duration-200">Request Blood</a></li>
              <li><a href="#organize-camp" className="text-gray-300 hover:text-white transition-colors duration-200">Organize Camp</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors duration-200">About Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Blood Donation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Emergency Requests</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Donor Registration</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Camp Organization</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Hospital Partnerships</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Mobile App</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 LifeLink Foundation. All rights reserved. | Reg. No: 12345/2020
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
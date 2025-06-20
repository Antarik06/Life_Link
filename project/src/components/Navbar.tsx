import React, { useState } from 'react';
import { Heart, Menu, X, User, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarProps {
  isSignedIn: boolean;
  onSignInClick: () => void;
  onSignOut: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isSignedIn, onSignInClick, onSignOut }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-red-600 fill-red-600" />
            <span className="text-2xl font-bold text-gray-900">LifeLink</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Home
              </a>
              <a href="#compatibility" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Blood Types
              </a>
              <a href="#find-center" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Find Centers
              </a>
              <a href="#request-blood" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Request Blood
              </a>
              <a href="#organize-camp" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                Organize Camp
              </a>
              <a href="#about" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200">
                About
              </a>
              
              {isSignedIn ? (
                <div className="flex items-center space-x-4">
                  <Link to="/dashboard" className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    Dashboard
                  </Link>
                  <button
                    onClick={onSignOut}
                    className="text-gray-700 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center"
                  >
                    <LogOut className="h-4 w-4 mr-1" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={onSignInClick}
                  className="bg-red-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-red-700 transition-colors duration-200"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-900 hover:text-red-600 focus:outline-none focus:text-red-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#home" className="text-gray-900 hover:text-red-600 block px-3 py-2 text-base font-medium">
                Home
              </a>
              <a href="#compatibility" className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium">
                Blood Types
              </a>
              <a href="#find-center" className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium">
                Find Centers
              </a>
              <a href="#request-blood" className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium">
                Request Blood
              </a>
              <a href="#organize-camp" className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium">
                Organize Camp
              </a>
              <a href="#about" className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium">
                About
              </a>
              
              {isSignedIn ? (
                <div className="space-y-1">
                  <Link to="/dashboard" className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium">
                    Dashboard
                  </Link>
                  <button
                    onClick={onSignOut}
                    className="text-gray-700 hover:text-red-600 block px-3 py-2 text-base font-medium w-full text-left"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={onSignInClick}
                  className="bg-red-600 text-white block px-3 py-2 text-base font-medium rounded-md mx-3 mt-4 text-center hover:bg-red-700"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
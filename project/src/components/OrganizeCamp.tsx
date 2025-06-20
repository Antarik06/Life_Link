import React, { useState } from 'react';
import { Calendar, Users, MapPin, Phone, Mail, Building } from 'lucide-react';

const OrganizeCamp = () => {
  const [organizationType, setOrganizationType] = useState('college');

  return (
    <section id="organize-camp" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Organize a <span className="text-red-600">Blood Camp</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Want to organize a blood donation camp at your college, office, or community? 
            We'll help you coordinate with authorities and make it a success.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">Organization Type *</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${organizationType === 'college' ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}>
                  <input 
                    type="radio" 
                    name="organizationType" 
                    value="college" 
                    checked={organizationType === 'college'}
                    onChange={(e) => setOrganizationType(e.target.value)}
                    className="sr-only"
                  />
                  <div className="text-center">
                    <Building className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-800">College/University</div>
                  </div>
                </label>

                <label className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${organizationType === 'office' ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}>
                  <input 
                    type="radio" 
                    name="organizationType" 
                    value="office" 
                    checked={organizationType === 'office'}
                    onChange={(e) => setOrganizationType(e.target.value)}
                    className="sr-only"
                  />
                  <div className="text-center">
                    <Building className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-800">Corporate Office</div>
                  </div>
                </label>

                <label className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${organizationType === 'community' ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}>
                  <input 
                    type="radio" 
                    name="organizationType" 
                    value="community" 
                    checked={organizationType === 'community'}
                    onChange={(e) => setOrganizationType(e.target.value)}
                    className="sr-only"
                  />
                  <div className="text-center">
                    <Users className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-800">Community/NGO</div>
                  </div>
                </label>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Organization Name *</label>
                <input 
                  type="text" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter organization name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Person *</label>
                <input 
                  type="text" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Your full name"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input 
                  type="email" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                <input 
                  type="tel" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Complete Address *</label>
              <textarea 
                rows={3}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Full address where the camp will be organized"
                required
              ></textarea>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Preferred Date *</label>
                <input 
                  type="date" 
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Expected Participants</label>
                <select className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent">
                  <option value="">Select range</option>
                  <option value="25-50">25-50 people</option>
                  <option value="50-100">50-100 people</option>
                  <option value="100-200">100-200 people</option>
                  <option value="200+">200+ people</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Requirements</label>
              <textarea 
                rows={4}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Any specific requirements, facilities available, or additional information..."
              ></textarea>
            </div>

            <div className="bg-green-50 rounded-lg p-6">
              <h4 className="font-semibold text-green-800 mb-3">What we provide:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-green-700">
                <div>• Medical team and equipment</div>
                <div>• Registration and screening setup</div>
                <div>• Refreshments for donors</div>
                <div>• Certificates and appreciation</div>
                <div>• Promotional materials</div>
                <div>• Coordination with blood banks</div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Next Steps:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• We'll contact you within 24 hours to discuss details</li>
                <li>• Our team will visit your location for assessment</li>
                <li>• We'll coordinate with local blood banks and medical authorities</li>
                <li>• Complete setup and execution support provided</li>
              </ul>
            </div>

            <button 
              type="submit"
              className="w-full bg-red-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center justify-center"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Submit Camp Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default OrganizeCamp;
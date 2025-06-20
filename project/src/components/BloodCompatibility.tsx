import React, { useState } from 'react';
import { Droplets, ArrowRight, Info } from 'lucide-react';

const BloodCompatibility = () => {
  const [selectedBloodType, setSelectedBloodType] = useState('O+');

  const bloodTypes = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];

  const compatibilityData = {
    'A+': { canDonateTo: ['A+', 'AB+'], canReceiveFrom: ['A+', 'A-', 'O+', 'O-'] },
    'A-': { canDonateTo: ['A+', 'A-', 'AB+', 'AB-'], canReceiveFrom: ['A-', 'O-'] },
    'B+': { canDonateTo: ['B+', 'AB+'], canReceiveFrom: ['B+', 'B-', 'O+', 'O-'] },
    'B-': { canDonateTo: ['B+', 'B-', 'AB+', 'AB-'], canReceiveFrom: ['B-', 'O-'] },
    'AB+': { canDonateTo: ['AB+'], canReceiveFrom: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] },
    'AB-': { canDonateTo: ['AB+', 'AB-'], canReceiveFrom: ['A-', 'B-', 'AB-', 'O-'] },
    'O+': { canDonateTo: ['A+', 'B+', 'AB+', 'O+'], canReceiveFrom: ['O+', 'O-'] },
    'O-': { canDonateTo: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'], canReceiveFrom: ['O-'] }
  };

  const facts = [
    "O- is the universal donor - can donate to all blood types",
    "AB+ is the universal recipient - can receive from all blood types",
    "Only 7% of the population has O- blood type",
    "Blood donation takes only 10-15 minutes",
    "One donation can save up to 3 lives",
    "You can donate blood every 56 days"
  ];

  return (
    <section id="compatibility" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Blood Type <span className="text-red-600">Compatibility</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Understanding blood type compatibility is crucial for safe transfusions. 
            Learn who you can donate to and receive from.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Blood Type Selector */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Select Your Blood Type</h3>
            <div className="grid grid-cols-4 gap-3 mb-8">
              {bloodTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedBloodType(type)}
                  className={`p-4 rounded-lg text-center font-bold text-lg transition-all duration-200 ${
                    selectedBloodType === type
                      ? 'bg-red-600 text-white shadow-lg transform scale-105'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>

            <div className="space-y-6">
              <div className="bg-green-50 rounded-lg p-6">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2" />
                  Can Donate To:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {compatibilityData[selectedBloodType].canDonateTo.map((type) => (
                    <span key={type} className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {type}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center">
                  <ArrowRight className="h-5 w-5 mr-2 transform rotate-180" />
                  Can Receive From:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {compatibilityData[selectedBloodType].canReceiveFrom.map((type) => (
                    <span key={type} className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {type}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Blood Donation Facts */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Info className="h-6 w-6 text-red-600 mr-2" />
              Did You Know?
            </h3>
            <div className="space-y-4">
              {facts.map((fact, index) => (
                <div key={index} className="flex items-start">
                  <Droplets className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{fact}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-red-50 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">Eligibility Requirements:</h4>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Age: 18-65 years</li>
                <li>• Weight: Minimum 50kg</li>
                <li>• Hemoglobin: 12.5g/dL or higher</li>
                <li>• Good general health</li>
                <li>• No recent illness or medication</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BloodCompatibility;
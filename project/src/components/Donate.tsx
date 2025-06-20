import React, { useState } from 'react';
import { Heart, CreditCard, Shield, Gift } from 'lucide-react';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');

  const presetAmounts = [25, 50, 100, 250, 500, 1000];

  return (
    <section id="donate" className="py-20 bg-gradient-to-br from-red-50 to-red-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Make a <span className="text-red-600">Donation</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Your generosity powers our mission. Choose an amount that feels right for you, 
            knowing that every dollar makes a meaningful impact.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Donation Form */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Impact</h3>
              
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-4">Select Amount</label>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {presetAmounts.map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                      className={`p-3 rounded-lg text-center font-semibold transition-all duration-200 ${
                        selectedAmount === amount && !customAmount
                          ? 'bg-red-600 text-white shadow-lg'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                
                <div className="relative">
                  <input
                    type="number"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(0);
                    }}
                    className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
                  <span className="absolute left-4 top-4 text-gray-500 pointer-events-none">$</span>
                </div>
              </div>

              <button className="w-full bg-red-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center justify-center">
                <CreditCard className="mr-2 h-5 w-5" />
                Donate ${customAmount || selectedAmount}
              </button>

              <div className="flex items-center justify-center mt-4 text-sm text-gray-500">
                <Shield className="h-4 w-4 mr-2" />
                Secure SSL encrypted payment
              </div>
            </div>

            {/* Impact Information */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Impact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Gift className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">$25 Impact</h4>
                    <p className="text-gray-600">Provides clean water for one family for a month</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Gift className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">$50 Impact</h4>
                    <p className="text-gray-600">Funds school supplies for 5 children for a semester</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-lg mr-4">
                    <Gift className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">$100 Impact</h4>
                    <p className="text-gray-600">Supports medical care for 10 community members</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-orange-100 p-3 rounded-lg mr-4">
                    <Gift className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">$250 Impact</h4>
                    <p className="text-gray-600">Provides nutritious meals for 50 families</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-red-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <Heart className="h-5 w-5 text-red-600 mr-2 fill-red-600" />
                  <span className="font-semibold text-red-800">100% Impact Promise</span>
                </div>
                <p className="text-sm text-red-700">
                  Every dollar you donate goes directly to our programs. 
                  Administrative costs are covered by separate funding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;
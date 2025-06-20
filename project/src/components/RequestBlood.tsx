import React, { useState } from 'react';
import { AlertCircle, Clock, MapPin, Phone, User } from 'lucide-react';

const RequestBlood = () => {
  const [urgency, setUrgency] = useState('normal');
  const [formData, setFormData] = useState({
  name: '',
  phone: '',
  bloodType: '',
  units: '',
  hospital: '',
  urgency: 'normal',
  additionalInfo: ''
  });
  const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/blood-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('✅ Blood request submitted successfully!');
        setFormData({
          name: '',
          phone: '',
          bloodType: '',
          units: '',
          hospital: '',
          urgency: 'normal',
          additionalInfo: ''
        });
        setUrgency('normal');
      } else {
        alert('❌ Failed to submit blood request.');
      }
    } catch (error) {
      alert('❌ Error: ' + error.message);
    }
  };


  return (
    <section id="request-blood" className="py-20 bg-red-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Request <span className="text-red-600">Blood</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            In urgent need of blood? Fill out this form and we'll connect you with 
            compatible donors and nearby blood banks immediately.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Patient Name *</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Enter patient's full name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Number *</label>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Blood Type Required *</label>
                <select className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent" name="bloodType" value={formData.bloodType} onChange={handleChange}
                required>
                  <option value="">Select Blood Type</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Units Required *</label>
                <input 
                  type="number" 
                  name="units"
                  value={formData.units}
                  onChange={handleChange}
                  min="1" 
                  max="10"
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  placeholder="Number of units"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Hospital/Location *</label>
              <input 
                type="text" 
                name="hospital"
                value={formData.hospital}
                onChange={handleChange}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Hospital name and address"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-4">Urgency Level *</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <label className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${urgency === 'normal' ? 'border-green-500 bg-green-50' : 'border-gray-300'}`}>
                  <input 
                    type="radio" 
                    name="urgency" 
                    value="normal" 
                    checked={urgency === 'normal'}
                    onChange={(e) => {
                      setUrgency(e.target.value);
                      setFormData({ ...formData, urgency: e.target.value });
                    }}
                    className="sr-only"
                  />
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="font-semibold text-green-800">Normal</div>
                    <div className="text-sm text-green-600">Within 24-48 hours</div>
                  </div>
                </label>

                <label className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${urgency === 'urgent' ? 'border-yellow-500 bg-yellow-50' : 'border-gray-300'}`}>
                  <input 
                    type="radio" 
                    name="urgency" 
                    value="urgent" 
                    checked={urgency === 'urgent'}
                    onChange={(e) => {
                      setUrgency(e.target.value);
                      setFormData({ ...formData, urgency: e.target.value });
                    }}
                    className="sr-only"
                  />
                  <div className="text-center">
                    <AlertCircle className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                    <div className="font-semibold text-yellow-800">Urgent</div>
                    <div className="text-sm text-yellow-600">Within 6-12 hours</div>
                  </div>
                </label>

                <label className={`p-4 border-2 rounded-lg cursor-pointer transition-all duration-200 ${urgency === 'critical' ? 'border-red-500 bg-red-50' : 'border-gray-300'}`}>
                  <input 
                    type="radio" 
                    name="urgency" 
                    value="critical" 
                    checked={urgency === 'critical'}
                    onChange={(e) => {
                      setUrgency(e.target.value);
                      setFormData({ ...formData, urgency: e.target.value });
                    }}
                    className="sr-only"
                  />
                  <div className="text-center">
                    <AlertCircle className="h-8 w-8 text-red-600 mx-auto mb-2 animate-pulse" />
                    <div className="font-semibold text-red-800">Critical</div>
                    <div className="text-sm text-red-600">Immediate (0-2 hours)</div>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Additional Information</label>
              <textarea 
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={4}
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                placeholder="Any additional details about the medical condition, doctor's contact, or special requirements..."
              ></textarea>
            </div>

            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">What happens next?</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• We'll immediately notify compatible donors in your area</li>
                <li>• Our team will contact nearby blood banks to check availability</li>
                <li>• You'll receive updates via SMS and phone calls</li>
                <li>• Emergency requests are prioritized and processed within minutes</li>
              </ul>
            </div>

            <button 
              type="submit"
              className="w-full bg-red-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors duration-300 flex items-center justify-center"
            >
              <AlertCircle className="mr-2 h-5 w-5" />
              Submit Blood Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default RequestBlood;
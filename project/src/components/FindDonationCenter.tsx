import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Star } from 'lucide-react';

const FindDonationCenter: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('NewTown');
  const [searchTerm, setSearchTerm] = useState('');
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [selectedCenter, setSelectedCenter] = useState<any>(null);
  const [showPhoneModal, setShowPhoneModal] = useState(false);

  const cities = ['NewTown', 'SectorV', 'Bidhannagar', 'Dum Dum', 'Sodpur', 'Barrackpore', 'Belghoria', 'Rajarhat'];

  const donationCenters: Record<string, any[]> = {
    NewTown: [
      {
        name: "Tata Memorial Hospital Blood Bank",
        address: "Dr. E Borges Road, NewTown - 400012",
        phone: "+91 22 2417 7000",
        hours: "24/7",
        rating: 4.8,
        distance: "2.3 km",
        bloodTypes: ["A+", "B+", "O+", "AB+", "O-"]
      },
      {
        name: "KEM Hospital Blood Bank",
        address: "Acharya Donde Marg, NewTown - 400012",
        phone: "+91 22 2413 6051",
        hours: "8:00 AM - 8:00 PM",
        rating: 4.6,
        distance: "3.1 km",
        bloodTypes: ["A+", "B+", "O+", "AB-", "A-"]
      },
      {
        name: "Lilavati Hospital Blood Bank",
        address: "A-791, NewTown - 400050",
        phone: "+91 22 2640 2323",
        hours: "24/7",
        rating: 4.7,
        distance: "5.2 km",
        bloodTypes: ["O+", "B+", "AB+", "O-", "B-"]
      }
    ],
    SectorV: [
      {
        name: "AIIMS Blood Bank",
        address: "Ansari Nagar,SectorV - 110029",
        phone: "+91 11 2658 8500",
        hours: "24/7",
        rating: 4.9,
        distance: "1.8 km",
        bloodTypes: ["A+", "B+", "O+", "AB+", "O-", "A-"]
      },
      {
        name: "Safdarjung Hospital Blood Bank",
        address: "Ansari Nagar West,SectorV - 110029",
        phone: "+91 11 2673 0000",
        hours: "24/7",
        rating: 4.5,
        distance: "2.7 km",
        bloodTypes: ["O+", "B+", "A+", "AB-"]
      }
    ],
    Bidhannagar: [
      {
        name: "Manipal Hospital Blood Bank",
        address: "98, Rustum Bagh, Airport Road, Bidhannagar - 560017",
        phone: "+91 80 2502 4444",
        hours: "24/7",
        rating: 4.7,
        distance: "3.5 km",
        bloodTypes: ["A+", "B+", "O+", "AB+", "O-"]
      }
    ]
  };

  const currentCenters = donationCenters[selectedCity] || [];
  const filteredCenters = currentCenters.filter(center =>
    center.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    center.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <section id="find-center" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Find Donation <span className="text-red-600">Centers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Locate nearby blood banks and donation centers. Find the most convenient 
              location to make your life-saving donation.
            </p>
          </div>

          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            >
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Search by hospital name or area..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCenters.map((center, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900 leading-tight">{center.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-gray-600 ml-1">{center.rating}</span>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-600 text-sm">{center.address}</p>
                    </div>

                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-red-600 mr-2" />
                      <p className="text-gray-600 text-sm">{center.phone}</p>
                    </div>

                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-red-600 mr-2" />
                      <p className="text-gray-600 text-sm">{center.hours}</p>
                    </div>

                    <div className="flex items-center">
                      <Navigation className="h-5 w-5 text-red-600 mr-2" />
                      <p className="text-gray-600 text-sm">{center.distance} away</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Available Blood Types:</h4>
                    <div className="flex flex-wrap gap-2">
                      {center.bloodTypes.map((type) => (
                        <span key={type} className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setSelectedCenter(center);
                        setShowRequestModal(true);
                      }}
                      className="flex-1 bg-red-600 text-white py-2 px-4 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors duration-200"
                    >
                      Donate Now
                    </button>

                    <button
                      onClick={() => {
                        setSelectedCenter(center);
                        setShowPhoneModal(true);
                      }}
                      className="flex-1 border border-red-600 text-red-600 py-2 px-4 rounded-lg text-sm font-semibold hover:bg-red-50 transition-colors duration-200"
                    >
                      Call Now
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {filteredCenters.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No donation centers found matching your search.</p>
            </div>
          )}
        </div>
      </section>

      {showRequestModal && selectedCenter && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
            <h3 className="text-lg font-bold mb-4">Donate Blood to {selectedCenter.name}</h3>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const formData = {
                  name: e.currentTarget.name.value,
                  bloodType: e.currentTarget.bloodType.value,
                  center: selectedCenter.name,
                  phone: e.currentTarget.phone.value,
                };

                try {
                  const res = await fetch('http://localhost:5000/api/donations', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData),
                  });

                  const data = await res.json();
                  alert(data.message || "Request submitted!");
                  setShowRequestModal(false);
                } catch (err) {
                  console.error(err);
                  alert("Submission failed");
                }
              }}
            >
              <input name="name" placeholder="Your Name" className="w-full mb-3 p-2 border rounded" required />
              <input name="bloodType" placeholder="Blood Type (e.g., A+)" className="w-full mb-3 p-2 border rounded" required />
              <input name="phone" placeholder="Phone Number" className="w-full mb-3 p-2 border rounded" required />
              <div className="flex justify-end">
                <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Submit</button>
                <button type="button" className="ml-3 text-gray-600" onClick={() => setShowRequestModal(false)}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showPhoneModal && selectedCenter && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h3 className="text-lg font-bold mb-2">Call {selectedCenter.name}</h3>
            <p className="text-gray-800 text-xl mb-4">{selectedCenter.phone}</p>
            <button onClick={() => setShowPhoneModal(false)} className="bg-gray-200 px-4 py-2 rounded">Close</button>
          </div>
        </div>
      )}
    </>
  );
};

export default FindDonationCenter;

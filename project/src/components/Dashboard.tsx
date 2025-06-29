import React, { useState, useEffect } from 'react';
import { User, Droplets, Calendar, MapPin, Bell, Settings, Award, Heart } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUserProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) return;

      try {
        const res = await fetch('http://localhost:5000/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (!res.ok) {
          throw new Error(data.message || 'Failed to fetch user');
        }

        setUserProfile(data);
      } catch (err) {
        console.error('Error:', err.message);
      }
    };

    fetchUserProfile();
  }, []);

  const upcomingRequests = [
  { 
    id: 1, 
    bloodType: "O+", 
    location: "Fortis Hospital, Andheri", 
    urgency: "Critical", 
    distance: "2.3 km",
    requestedBy: "Emergency Department"
  },
  { 
    id: 2, 
    bloodType: "O+", 
    location: "Hinduja Hospital, Mahim", 
    urgency: "Urgent", 
    distance: "4.1 km",
    requestedBy: "Dr. Sharma"
  }
];



    if (!userProfile) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600 text-lg">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Profile</h1>
          <p className="text-gray-600 mt-2">Welcome back, {userProfile.name}!</p>
        </div>

        {/* Stats Cards */}
        

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Tab Navigation */}
            <div className="bg-white rounded-lg shadow-md mb-6">
              <div className="border-b border-gray-200">
                <nav className="flex space-x-8 px-6">
                  <button
                    onClick={() => setActiveTab('profile')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'profile'
                        ? 'border-red-500 text-red-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Profile
                  </button>
                  
                  
                </nav>
              </div>

              <div className="p-6">
                {activeTab === 'profile' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          value={userProfile.name}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          readOnly
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Blood Type</label>
                        <input
                          type="text"
                          value={userProfile.bloodType}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                          readOnly
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          value={userProfile.email}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                          type="tel"
                          value={userProfile.phone}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                        <input
                          type="number"
                          value={userProfile.weight}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                      
                    </div>
                    
                  </div>
                )}

                {activeTab === 'history' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Donation History</h3>
                    <div className="space-y-4">
                      {donationHistory.map((donation, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-semibold text-gray-900">{donation.location}</p>
                              <p className="text-sm text-gray-600">{donation.date}</p>
                            </div>
                            <div className="text-right">
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                                {donation.status}
                              </span>
                              <p className="text-sm text-gray-600 mt-1">{donation.units} unit(s)</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 'settings' && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-semibold text-gray-900">Notification Settings</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Emergency Requests</p>
                          <p className="text-sm text-gray-600">Receive notifications for critical blood requests</p>
                        </div>
                        <input type="checkbox" defaultChecked className="rounded border-gray-300 text-red-600 focus:ring-red-500" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Donation Reminders</p>
                          <p className="text-sm text-gray-600">Get reminded when you're eligible to donate again</p>
                        </div>
                        <input type="checkbox" defaultChecked className="rounded border-gray-300 text-red-600 focus:ring-red-500" />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-gray-900">Camp Notifications</p>
                          <p className="text-sm text-gray-600">Be notified about nearby blood donation camps</p>
                        </div>
                        <input type="checkbox" className="rounded border-gray-300 text-red-600 focus:ring-red-500" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Upcoming Requests */}
            

            {/* Quick Actions */}
                
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
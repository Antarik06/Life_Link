import React, { useState } from 'react';
import { User, Droplets, Calendar, MapPin, Bell, Settings, Award, Heart, Phone, Mail } from 'lucide-react';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');

  const userProfile = {
    name: "John Doe",
    email: "john.doe@email.com",
    phone: "+91 98765 43210",
    bloodType: "O+",
    weight: "70",
    dateOfBirth: "1990-05-15",
    lastDonation: "2024-01-15",
    totalDonations: 8,
    location: "Mumbai, Maharashtra"
  };

  const donationHistory = [
    { date: "2024-01-15", location: "Tata Memorial Hospital", units: 1, status: "Completed" },
    { date: "2023-10-20", location: "KEM Hospital", units: 1, status: "Completed" },
    { date: "2023-07-12", location: "Lilavati Hospital", units: 1, status: "Completed" },
    { date: "2023-04-08", location: "Blood Bank Drive", units: 1, status: "Completed" }
  ];

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

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back, {userProfile.name}!</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Droplets className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Donations</p>
                <p className="text-2xl font-bold text-gray-900">{userProfile.totalDonations}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Heart className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Lives Saved</p>
                <p className="text-2xl font-bold text-gray-900">{userProfile.totalDonations * 3}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Calendar className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Last Donation</p>
                <p className="text-lg font-bold text-gray-900">Jan 15, 2024</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-red-600" />
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Status</p>
                <p className="text-lg font-bold text-green-600">Available</p>
              </div>
            </div>
          </div>
        </div>

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
                  <button
                    onClick={() => setActiveTab('history')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'history'
                        ? 'border-red-500 text-red-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Donation History
                  </button>
                  <button
                    onClick={() => setActiveTab('settings')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === 'settings'
                        ? 'border-red-500 text-red-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700'
                    }`}
                  >
                    Settings
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
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                        <input
                          type="text"
                          value={userProfile.location}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        />
                      </div>
                    </div>
                    <button className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
                      Update Profile
                    </button>
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
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Bell className="h-5 w-5 text-red-600 mr-2" />
                Blood Requests Near You
              </h3>
              <div className="space-y-4">
                {upcomingRequests.map((request) => (
                  <div key={request.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {request.bloodType}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        request.urgency === 'Critical' 
                          ? 'bg-red-100 text-red-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {request.urgency}
                      </span>
                    </div>
                    <p className="font-medium text-gray-900 text-sm">{request.location}</p>
                    <p className="text-xs text-gray-600">{request.distance} • {request.requestedBy}</p>
                    <button className="w-full mt-3 bg-red-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-red-700 transition-colors duration-200">
                      Respond to Request
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center">
                  <Droplets className="h-4 w-4 mr-2" />
                  Schedule Donation
                </button>
                <button className="w-full border border-red-600 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors duration-200 flex items-center justify-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Find Centers
                </button>
                <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  View Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
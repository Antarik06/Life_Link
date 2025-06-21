import React, { useEffect, useState } from 'react';

const AdminDashboard = () => {
  const [bloodRequests, setBloodRequests] = useState([]);
  const [donationRequests, setDonationRequests] = useState([]);
  const [bloodCamps, setBloodCamps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bloodRes, donationRes, campRes] = await Promise.all([
          fetch('http://localhost:5000/api/blood-requests'),
          fetch('http://localhost:5000/api/donations'),
          fetch('http://localhost:5000/api/blood-camps'),
        ]);

        const [bloodData, donationData, campData] = await Promise.all([
          bloodRes.json(),
          donationRes.json(),
          campRes.json(),
        ]);

        setBloodRequests(bloodData);
        setDonationRequests(donationData);
        setBloodCamps(campData);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-8 pt-20">
      <h2 className="text-3xl font-bold mb-6 text-red-600">🩸 Admin Dashboard</h2>

      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className="grid gap-10">
          {/* Blood Requests Section */}
          <section>
            <h3 className="text-xl font-semibold mb-2">🏥 Hospital Blood Requests</h3>
            {bloodRequests.length === 0 ? (
              <p className="text-gray-500">No blood requests available.</p>
            ) : (
              <ul className="space-y-2">
                {bloodRequests.map((req, index) => (
                  <li key={index} className="border p-4 rounded shadow">
                    <p><strong>Name:</strong> {req.name}</p>
                    <p><strong>Hospital:</strong> {req.hospital}</p>
                    <p><strong>Blood Type:</strong> {req.bloodType}</p>
                    <p><strong>Phone:</strong> {req.phone}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Donation Requests Section */}
          <section>
            <h3 className="text-xl font-semibold mb-2">🏬 Center Donation Requests</h3>
            {donationRequests.length === 0 ? (
              <p className="text-gray-500">No donation requests available.</p>
            ) : (
              <ul className="space-y-2">
                {donationRequests.map((don, index) => (
                  <li key={index} className="border p-4 rounded shadow">
                    <p><strong>Name:</strong> {don.name}</p>
                    <p><strong>Center:</strong> {don.center}</p>
                    <p><strong>Blood Type:</strong> {don.bloodType}</p>
                    <p><strong>Phone:</strong> {don.phone}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Blood Camps Section */}
          <section>
            <h3 className="text-xl font-semibold mb-2">📅 Organized Blood Camps</h3>
            {bloodCamps.length === 0 ? (
              <p className="text-gray-500">No blood camps organized yet.</p>
            ) : (
              <ul className="space-y-2">
                {bloodCamps.map((camp, index) => (
                  <li key={index} className="border p-4 rounded shadow">
                    <p><strong>Organizer:</strong> {camp.organizerName}</p>
                    <p><strong>Location:</strong> {camp.location}</p>
                    <p><strong>Date:</strong> {new Date(camp.date).toLocaleDateString()}</p>
                    <p><strong>Contact:</strong> {camp.contact}</p>
                  </li>
                ))}
              </ul>
            )}
          </section>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;

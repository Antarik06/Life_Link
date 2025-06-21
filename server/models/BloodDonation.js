const mongoose = require('mongoose');

const bloodDonationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bloodType: { type: String, required: true },
  phone: { type: String, required: true },
  center: { type: String, required: true },
  donatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('BloodDonation', bloodDonationSchema);

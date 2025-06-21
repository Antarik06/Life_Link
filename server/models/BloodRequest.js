const mongoose = require('mongoose');

const bloodRequestSchema = new mongoose.Schema({
  name: String,
  phone: String,
  bloodType: String,
  location: String,
  reason: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('BloodRequest', bloodRequestSchema);

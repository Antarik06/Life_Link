const mongoose = require('mongoose');

const BloodRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  bloodType: {
    type: String,
    required: true
  },
  units: {
    type: Number,
    required: true
  },
  hospital: {
    type: String,
    required: true
  },
  urgency: {
    type: String,
    enum: ['normal', 'urgent', 'critical'],
    required: true
  },
  additionalInfo: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('BloodRequest', BloodRequestSchema);

// models/NGO.js
const mongoose = require('mongoose');

const ngoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  description: String,
  contactEmail: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('NGO', ngoSchema);

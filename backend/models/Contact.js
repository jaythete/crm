const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    email: { type: String, lowercase: true, trim: true },
    status: { type: String, enum: ['Lead', 'Client'], default: 'Lead' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Contact', contactSchema);

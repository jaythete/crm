const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    address: { type: String, trim: true },
    price: { type: Number, default: 0 },
    status: { type: String, enum: ['Available', 'Sold', 'Rented'], default: 'Available' },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Property', propertySchema);

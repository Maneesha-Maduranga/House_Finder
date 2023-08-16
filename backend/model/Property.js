const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    landsize: {
      type: Number,
      required: true,
    },
    units: {
      type: String,
      enum: ['perches', 'acres'],
      required: true,
    },
    houseSize: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    negotiable: {
      type: Boolean,
      default: false,
      required: true,
    },
    images: [{ type: String, default: '' }],
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: true,
    },
  },
  { timestamps: { createdAt: 'created_at' } }
);
const Property = mongoose.model('Property', PropertySchema);

module.exports = {
  Property,
};

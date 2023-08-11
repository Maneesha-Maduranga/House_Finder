const mongoose = require('mongoose');

const TokenSchema = new mongoose.Schema({
  refreshToken: {
    type: String,
    required: true,
  },
  isValid: {
    type: Boolean,
    required: true,
    default: true,
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: 'User',
    required: true,
  },
});
const Token = mongoose.model('Token', TokenSchema);

module.exports = {
  Token,
};

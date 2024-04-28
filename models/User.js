const mongoose = require('mongoose');
const { validateEmail, validatePassword } = require('../utils/validation.js');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 3, maxlength: 50 },
  email: { type: String, required: true, unique: true, index: true, validate: validateEmail },
  password: { type: String, required: true, minlength: 8, validate: validatePassword },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', userSchema);

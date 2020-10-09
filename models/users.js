const mongoose = require('mongoose');

const newUser = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model('User', newUser);

module.exports = User;

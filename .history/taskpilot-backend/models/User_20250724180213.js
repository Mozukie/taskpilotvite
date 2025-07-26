const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  full_name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true, // prevents duplicate emails
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  employee_id: {
    type: String,
    required: false, // only visible to authorized users
    select: false // by default, won't be sent in query results unless explicitly requested
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'manager'], // for permission control
    default: 'user'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('User', userSchema);

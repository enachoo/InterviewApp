const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // schimbat din 'bcrypt'

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: String // 'employer' or 'candidate'
});

userSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);

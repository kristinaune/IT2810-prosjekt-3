/**
 * TODO: Make Schema for users
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Defines the UserModel with a Schema
 */
const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
});

// Exports User as a mongoose model
module.exports = User = mongoose.model('User', UserSchema);

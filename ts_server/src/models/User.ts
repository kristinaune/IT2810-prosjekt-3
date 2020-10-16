import mongoose from 'mongoose';
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
  movieList: {
    type: [String],
    required: true,
  },
});

// Exports User as a mongoose model
export default mongoose.model('User', UserSchema);

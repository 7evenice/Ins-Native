import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {type: String},
    name: {type: String},
    image: {type: String},
    about: {type: String},
    email: {type: String},
  },
  {collection: 'users'},
);

export default mongoose.model('UserModel', userSchema);

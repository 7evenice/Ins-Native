import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
  {
    id: String,
    user: String,
    username: String,
    message: String,
    image: String,
  },
  {collection: 'messages'},
);

export default mongoose.model('MessageModel', messageSchema);

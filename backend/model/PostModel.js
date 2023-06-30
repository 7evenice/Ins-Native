import mongoose from 'mongoose';

const postSchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    postName: String,
    image: String,
    postImage: String,
    like: Number,
    comment: String,
    explanation: String,
    time: Number,
    timeStory: Number,
    islike: Boolean,
  },
  {collection: 'posts'},
);

export default mongoose.model('PostModel', postSchema);

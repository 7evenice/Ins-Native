import mongoose from 'mongoose';

const reelSchema = new mongoose.Schema(
  {
    video: String,
    image: String,
    user: String,
    explanation: String,
    likes: Number,
    comment: String,
    isLike: Boolean,
    follow: Boolean,
  },
  {collection: 'reels'},
);

export default mongoose.model('ReelModel', reelSchema);

import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema(
  {
    id: String,
    image: String,
    comment: String,
    user: String,
  },
  {collection: 'comments'},
);

export default mongoose.model('CommentModel', commentSchema);

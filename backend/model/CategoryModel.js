import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    id: String,
    name: String,
    isCircle: String,
  },
  {collection: 'categorys'},
);

export default mongoose.model('CategoryModel', categorySchema);

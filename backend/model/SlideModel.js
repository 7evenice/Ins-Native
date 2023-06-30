import mongoose from 'mongoose';

const SearchSchema = new mongoose.Schema(
  {
    id: String,
    image: String,
    title: String,
    description: String,
  },
);

export default mongoose.model('SearchModel', SearchSchema);

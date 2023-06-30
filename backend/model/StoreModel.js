import mongoose from 'mongoose';

const StoreSchema = new mongoose.Schema(
  {
    id: String,
    image: String,
  },
  {collection: 'stores'},
);

export default mongoose.model('StoreModel', StoreSchema);

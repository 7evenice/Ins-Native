import mongoose from 'mongoose';

const SettingSchema = new mongoose.Schema(
  {
    id: String,
    icon: String,
    name: String,
  },
  // {collection: 'settings'},
);

export default mongoose.model('SettingModel', SettingSchema);

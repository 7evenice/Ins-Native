import mongoose from 'mongoose';

const notificationSchema = new mongoose.Schema(
  {
    id: String,
    user: String,
    message: String,
    image: String,
    follow: Boolean,
  },
  // {collection: 'notifications'},
);

export default mongoose.model('NotificationModel', notificationSchema);

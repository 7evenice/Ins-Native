import dotenv from 'dotenv';
import mongoose from 'mongoose';
import logger from './config/logger.js';
import app from './app.js';

dotenv.config();

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 3003;

// Exit on error
mongoose.connection.on('error', err => {
  logger.error(`MongoDB connection error: ${err}`);
  process.exit(1);
});

// Mongoose logs in development environment
if (process.env.NODE_ENV !== 'production') {
  mongoose.set('debug', true);
}

let server;
mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    logger.info('Connected to MongoDB');
    server = app.listen(PORT, () => {
      logger.info(`Listening to port ${PORT}`);
    });
  });

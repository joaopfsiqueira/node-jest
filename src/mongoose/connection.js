import mongoose from 'mongoose';

const mongoUrl = `${process.env.MONGO_URI}`;
const db = {
  async connect() {
    await mongoose.connect(mongoUrl, { useNewUrlParser: true }, (e) => {
      if (e) {
        return e.message;
      }
    });

    mongoose.connection.on('connected', () => {
      console.log(`mongoose connection open at: ${process.env.MONGO_URI}`);
    });

    mongoose.connection.on('error', (e) => {
      console.log(`mongoose connection error`);
      process.exit(1);
    });

    mongoose.connection.on('disconnected', (e) => {
      console.log(`mongoose connection disconnected`);
      process.exit(1);
    });
  },
};

export default db;

import mongoose from 'mongoose';

const mongoUrl = process.env.MONGO_URI;
const connection = {
  connect: () => {
    mongoose
      .connect(mongoUrl, { useNewUrlParser: true })
      .catch((error) => console.log(error));

    const db = mongoose.connection;

    db.once('open', () => {
      console.log(`mongoose connection open at: ${process.env.MONGO_URI}`);
    });
    db.on('error', console.error.bind(console, 'connection error:'), (e) => {
      process.exit(1);
    });
    db.on('disconnected', (e) => {
      console.log(`mongoose connection disconnected`);
      process.exit(1);
    });
  },
};

export default connection;

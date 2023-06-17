import express from 'express';
import dotenv from 'dotenv';
import connection from '../mongoose/connection.js';
import userRouter from '../routes/user.routes.js';

const app = express();

dotenv.config();
connection.connect(); // connect to database

app.use(express.json());
app.use('/api/users', userRouter);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});

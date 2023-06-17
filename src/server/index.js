import express from 'express';
import * as dotenv from 'dotenv';
import connection from '../mongoose/connection.js';
import userRouter from '../routes/user.routes.js';

const app = express();
const port = 3000;

dotenv.config();
connection.connect(); // connect to database

app.use(express.json());
app.use('/api/users', userRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

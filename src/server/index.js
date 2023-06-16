import express from 'express';
import * as dotenv from 'dotenv';
import connection from '../mongoose/connection.js';

dotenv.config();
connection.connect(); // connect to database

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

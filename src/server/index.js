import express from 'express';
import * as dotenv from 'dotenv';
import * as bodyParser from 'body-parser';
import connection from '../mongoose/connection.js';

const app = express();
const port = 3000;

dotenv.config();
connection.connect(); // connect to database

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

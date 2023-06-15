import express from('express');
import * as dotenv from 'dotenv';
import db from '../mongoose/connection'

dotenv.config();
db.connect()

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

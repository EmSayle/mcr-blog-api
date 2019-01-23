const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const { auth, users, posts } = require('./routes');

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/auth', auth);
app.use('/users', users);
app.use('/posts', posts);

mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true }, () => {
  console.log(process.env.DATABASE_CONN);
  app.listen(3000);
});

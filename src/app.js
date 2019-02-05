const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {
  auth, users, posts,
} = require('./routes');


dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use('/auth', auth);

app.use('/users', users);
// console.log(1, 'user created');

app.use('/posts', posts);

module.exports = app;

const express = require('express');
const cors = require('cors');
const {
  auth, users, posts,
} = require('./routes');

const app = express();

app.use(express.json());

app.use(cors());

app.use('/auth', auth);

app.use('/users', users);
// console.log(1, 'user created');

app.use('/posts', posts);

module.exports = app;

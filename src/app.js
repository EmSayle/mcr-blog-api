const express = require('express');
const app = express();
const cors = require('cors');
const user = require('./controllers/user');

app.use(express.json());
app.use(cors());
app.post('/users', user.create);

module.exports = app;

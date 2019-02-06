const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config();

mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true }, () => {
  console.log(process.env.DATABASE_CONN);
  app.listen(3000);
});

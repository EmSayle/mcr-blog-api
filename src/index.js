const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_CONN, { useNewUrlParser: true }, () => {
  console.log(process.env.DATABASE_CONN);
  app.listen(PORT);
});

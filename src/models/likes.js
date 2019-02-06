const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
  like: {
    type: Number,
    default: 0,
  },
});

const Like = mongoose.model('like', likeSchema);

module.exports = Like;

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  category: {
    type: String,
  },
  title: {
    type: String,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  likes: {
    type: Number,
    default: 0,
  },
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;

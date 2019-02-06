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
  datePosted: {
    type: Number,
  },
  user: {
    type: String,
  },
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;

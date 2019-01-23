const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  category: {
    type: Array,
    required: [true, 'category is required'],
  },
  title: {
    type: String,
    required: [true, 'title is required'],
  },
  image: {
    type: String,
  },
  Description: {
    type: String,
  },
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;

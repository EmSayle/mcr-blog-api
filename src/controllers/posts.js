const Post = require('../models/posts');
const moment = require('moment');

exports.addPost = (req, res) => {
  const post = new Post({
    category: req.body.category,
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    datePosted: moment().utc().valueOf(),
    user: req.body.user,
  });

  console.log(req.body);

  post.save().then(() => {
    res.status(201).json(post);
  })
    .catch(error => {
      if (error.name === 'ValidationError') {
        const titleError = error.errors.title ? error.errors.title.message : null;
        const descriptionError = error.errors.description ? error.errors.description.message : null;
        const categoryError = error.errors.category ? error.errors.category.message : null;
        const imageError = error.errors.image ? error.errors.image.message : null;
        const datePostedError = error.errors.datePosted ? error.errors.datePosted.message : null;
        res.status(400).json({
          errors: {
            title: titleError,
            description: descriptionError,
            category: categoryError,
            image: imageError,
            datePosted: datePostedError,
          },
        });
      } else {
        res.status(400).json(error);
      }
    });
};

exports.getPosts = (req, res) => {
  Post.find({}, (err, posts) => {
    res.status(200).send(posts);
  });
};

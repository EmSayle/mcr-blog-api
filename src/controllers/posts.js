const Post = require('../models/user');

exports.addPost = (req, res) => {
  const post = new Post({
    category: req.body.category,
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    user: req.authorizer._id,
  });

  post.save().then(() => {
    res.status(201).json(post);
  })
    .catch(error => {
      if (error.name === 'ValidationError') {
        const titleError = error.errors.title ? error.errors.title.message : null;
        const descriptionError = error.errors.description ? error.errors.description.message : null;
        res.status(400).json({
          errors: {
            title: titleError,
            description: descriptionError,
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

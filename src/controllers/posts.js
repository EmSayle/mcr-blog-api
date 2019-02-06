const Post = require('../models/posts');

exports.addPost = (req, res) => {
  const post = new Post({
    category: req.body.category,
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    // like: req.body.like,
  });

  post.save().then(() => {
    res.status(201).json(post);
  })
    .catch(error => {
      if (error.name === 'ValidationError') {
        const titleError = error.errors.title ? error.errors.title.message : null;
        const descriptionError = error.errors.description ? error.errors.description.message : null;
        const categoryError = error.errors.category ? error.errors.category.message : null;
        const imageError = error.errors.image ? error.errors.image.message : null;
        // const likeError = error.errors.like ? error.errors.like.message : null;
        res.status(400).json({
          errors: {
            title: titleError,
            description: descriptionError,
            category: categoryError,
            image: imageError,
            // like: likeError,
          },
        });
      } else {
        res.status(400).json(error);
      }
    });
    console.log(post);
};

exports.getPosts = (req, res) => {
  Post.find({}, (err, posts) => {
    res.status(200).send(posts);
  });
};

exports.findById = (req, res) => {
  Post.findById(req.params.id, (err, post) => {

    if (err || post === null) {
      res.status(404).json({ error: 'The post does not exist.' });
    } else {
      res.status(200).json(post);
    }
  });
};

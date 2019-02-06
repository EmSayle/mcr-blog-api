const Post = require('../models/posts');
// const Like = require('../models/likes');

exports.addLike = (req, res) => {
  Post.findById(req.params.id, (err, post) => {
    if (err) {
      return res.status(500).json('cannot add like');
    }

    post.set('likes', post.likes + 1);

    post.save((createErr, addedLike) => {
      if (createErr) {
        res.json('Could not save like');
      }

      res.status(201).json(addedLike);
    });
    // console.log('IN LIKE CONTROLLER', like);
  });
};

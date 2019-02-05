const express = require('express');
const postController = require('../controllers/posts');
const likeController = require('../controllers/likes');
// const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', postController.addPost); 
router.get('/', postController.getPosts);
router.get('/:id', postController.findById);
router.patch('/:id/likes', likeController.addLike);

module.exports = router;

const express = require('express');
const postController = require('../controllers/posts');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/', postController.addPost);
router.get('/', postController.getPosts);

module.exports = router;

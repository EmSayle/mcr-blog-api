const express = require('express');
const likeController = require('../controllers/likes');

const router = express.Router();

router.patch('/', likeController.addLike);
// router.get('/', likeController.addLike);

module.exports = router;

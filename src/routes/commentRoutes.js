const express = require('express');
const router = express.Router();
const c = require('../controllers/commentController');

router.get('/post/:postId', c.getCommentsByPost);
router.post('/', c.createComment);

module.exports = router;
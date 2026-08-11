const express = require('express');
const router = express.Router();
const c = require('../controllers/postController');

router.get('/', c.getPosts);
router.get('/author/:authorId', c.getPostsByAuthor);
router.get('/:id', c.getPostById);
router.post('/', c.createPost);
router.put('/:id', c.updatePost);
router.delete('/:id', c.deletePost);

module.exports = router;
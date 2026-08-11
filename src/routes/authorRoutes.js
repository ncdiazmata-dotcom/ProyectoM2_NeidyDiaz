const express = require('express');
const router = express.Router();
const c = require('../controllers/authorController');

router.get('/', c.getAuthors);
router.get('/:id', c.getAuthorById);
router.post('/', c.createAuthor);
router.put('/:id', c.updateAuthor);
router.delete('/:id', c.deleteAuthor);

module.exports = router;
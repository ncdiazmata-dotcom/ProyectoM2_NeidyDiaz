const commentService = require('../services/commentService');

exports.getCommentsByPost = async (req, res, next) => {
  try {
    const comments = await commentService.getByPostId(req.params.postId);
    res.status(200).json(comments);
  } catch (error) {
    next(error);
  }
};

exports.createComment = async (req, res, next) => {
  try {
    const { post_id, author_id, content } = req.body;
    if (!post_id || !author_id || !content) {
      return res.status(400).json({ message: 'post_id, author_id y content son requeridos' });
    }
    const newComment = await commentService.create({ post_id, author_id, content });
    res.status(201).json(newComment);
  } catch (error) {
    if (error.code === '23503') return res.status(400).json({ message: 'El post_id o author_id no existe' });
    next(error);
  }
};
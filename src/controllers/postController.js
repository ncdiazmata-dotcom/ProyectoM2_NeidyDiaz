const postService = require('../services/postService');

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await postService.getAll();
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const post = await postService.getById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post no encontrado' });
    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};

exports.getPostsByAuthor = async (req, res, next) => {
  try {
    const posts = await postService.getByAuthorId(req.params.authorId);
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const { author_id, title, content, published } = req.body;
    if (!author_id || !title || !content) {
      return res.status(400).json({ message: 'Campos requeridos: title, content y author_id' });
    }

    const newPost = await postService.create({ author_id, title, content, published });
    res.status(201).json(newPost);
  } catch (err) {
    if (err.code === '23503') {
      return res.status(400).json({ message: 'El author_id especificado no existe' });
    }
    next(err);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const updatedPost = await postService.update(req.params.id, req.body);
    if (!updatedPost) return res.status(404).json({ message: 'Post no encontrado' });
    res.status(200).json(updatedPost);
  } catch (err) {
    next(err);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const deletedPost = await postService.delete(req.params.id);
    if (!deletedPost) return res.status(404).json({ message: 'Post no encontrado' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
const postService = require('../services/postService');

exports.getPosts = async (req, res, next) => {
  try {
    const posts = await postService.getAll();
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    const post = await postService.getById(req.params.id);
    if (!post) return res.status(404).json({ message: 'Post no encontrado' });
    res.status(200).json(post);
  } catch (error) {
    next(error);
  }
};

exports.getPostsByAuthor = async (req, res, next) => {
  try {
    const posts = await postService.getByAuthorId(req.params.authorId);
    res.status(200).json(posts);
  } catch (error) {
    next(error);
  }
};

exports.createPost = async (req, res, next) => {
  try {
    const { author_id, title, content, published } = req.body;
    if (!author_id || !title || !content) {
      return res.status(400).json({ message: 'author_id, title y content son obligatorios' });
    }
    const newPost = await postService.create({ author_id, title, content, published });
    res.status(201).json(newPost);
  } catch (error) {
    if (error.code === '23503') return res.status(400).json({ message: 'El author_id especificado no existe' });
    next(error);
  }
};

exports.updatePost = async (req, res, next) => {
  try {
    const updatedPost = await postService.update(req.params.id, req.body);
    if (!updatedPost) return res.status(404).json({ message: 'Post no encontrado' });
    res.status(200).json(updatedPost);
  } catch (error) {
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    const deletedPost = await postService.delete(req.params.id);
    if (!deletedPost) return res.status(404).json({ message: 'Post no encontrado' });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
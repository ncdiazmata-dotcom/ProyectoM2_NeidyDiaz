const authorService = require('../services/authorService');

exports.getAuthors = async (req, res, next) => {
  try {
    const authors = await authorService.getAll();
    res.status(200).json(authors);
  } catch (err) {
    next(err);
  }
};

exports.getAuthorById = async (req, res, next) => {
  try {
    const author = await authorService.getById(req.params.id);
    if (!author) return res.status(404).json({ message: 'Autor no encontrado' });
    res.status(200).json(author);
  } catch (err) {
    next(err);
  }
};

exports.createAuthor = async (req, res, next) => {
  try {
    const { name, email, bio } = req.body;
    if (!name || !name.trim()) {
      return res.status(400).json({ message: 'El campo "name" es obligatorio' });
    }
    if (!email || !email.trim()) {
      return res.status(400).json({ message: 'El campo "email" es obligatorio' });
    }

    const newAuthor = await authorService.create({ name, email, bio });
    res.status(201).json({
      message: 'author created',
      author: newAuthor
    });
  } catch (err) {
    if (err.code === '23505') {
      return res.status(400).json({ message: 'El email ya está registrado' });
    }
    next(err);
  }
};

exports.updateAuthor = async (req, res, next) => {
  try {
    const updatedAuthor = await authorService.update(req.params.id, req.body);
    if (!updatedAuthor) return res.status(404).json({ message: 'Autor no encontrado' });
    res.status(200).json(updatedAuthor);
  } catch (err) {
    next(err);
  }
};

exports.deleteAuthor = async (req, res, next) => {
  try {
    const deletedAuthor = await authorService.delete(req.params.id);
    if (!deletedAuthor) return res.status(404).json({ message: 'Autor no encontrado' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
const db = require('../config/db');

exports.getAll = async () => {
  const res = await db.query('SELECT * FROM posts ORDER BY created_at DESC');
  return res.rows;
};

exports.getById = async (id) => {
  const res = await db.query('SELECT * FROM posts WHERE id = $1', [id]);
  return res.rows[0];
};

exports.getByAuthorId = async (authorId) => {
  const res = await db.query(
    `SELECT p.*, a.name AS author_name, a.email AS author_email 
     FROM posts p 
     JOIN authors a ON p.author_id = a.id 
     WHERE p.author_id = $1 
     ORDER BY p.created_at DESC`,
    [authorId]
  );
  return res.rows;
};

exports.create = async ({ author_id, title, content, published }) => {
  const res = await db.query(
    'INSERT INTO posts (author_id, title, content, published) VALUES ($1, $2, $3, $4) RETURNING *',
    [author_id, title, content, published ?? false]
  );
  return res.rows[0];
};

exports.update = async (id, { title, content, published }) => {
  const res = await db.query(
    `UPDATE posts 
     SET title = COALESCE($1, title), 
         content = COALESCE($2, content), 
         published = COALESCE($3, published) 
     WHERE id = $4 RETURNING *`,
    [title, content, published, id]
  );
  return res.rows[0];
};

exports.delete = async (id) => {
  const res = await db.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
  return res.rows[0];
};
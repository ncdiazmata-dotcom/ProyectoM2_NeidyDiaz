const db = require('../config/db');

exports.getAll = async () => {
  const res = await db.query('SELECT * FROM authors ORDER BY id ASC');
  return res.rows;
};

exports.getById = async (id) => {
  const res = await db.query('SELECT * FROM authors WHERE id = $1', [id]);
  return res.rows[0];
};

exports.create = async ({ name, email, bio }) => {
  const res = await db.query(
    'INSERT INTO authors (name, email, bio) VALUES ($1, $2, $3) RETURNING *',
    [name, email, bio || null]
  );
  return res.rows[0];
};

exports.update = async (id, { name, email, bio }) => {
  const res = await db.query(
    `UPDATE authors 
     SET name = COALESCE($1, name), 
         email = COALESCE($2, email), 
         bio = COALESCE($3, bio) 
     WHERE id = $4 RETURNING *`,
    [name, email, bio, id]
  );
  return res.rows[0];
};

exports.delete = async (id) => {
  const res = await db.query('DELETE FROM authors WHERE id = $1 RETURNING *', [id]);
  return res.rows[0];
};
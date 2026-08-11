const test = require('node:test');
const assert = require('node:assert');

test('Validación de estructura de datos de un autor', () => {
  const authorInput = {
    name: 'Neidy Diaz',
    email: 'neidy@example.com',
    bio: 'Desarrolladora Web'
  };

  assert.strictEqual(typeof authorInput.name, 'string');
  assert.strictEqual(typeof authorInput.email, 'string');
  assert.ok(authorInput.email.includes('@'), 'El email debe incluir @');
});
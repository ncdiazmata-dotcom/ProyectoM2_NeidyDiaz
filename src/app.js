const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./docs/swagger.json');

const authorRoutes = require('./routes/authorRoutes');
const postRoutes = require('./routes/postRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

// Documentación Swagger / OpenAPI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Rutas
app.use('/authors', authorRoutes);
app.use('/posts', postRoutes);

// Middleware de Errores
app.use(errorHandler);

module.exports = app;
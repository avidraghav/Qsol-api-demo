const express = require('express');
const app = express();
const productRoutes = require('./api/routes/datesheets');

app.use('/datesheets', productRoutes);

module.exports = app;
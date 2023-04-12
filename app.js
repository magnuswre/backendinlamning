const express = require('express');
const app = express();

require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/products', require('./controllers/productsController'))

module.exports = app;
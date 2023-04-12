const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false}))

app.use('/api/products', require('./controllers/productsController'))
app.use('/api/customers', require('./controllers/customersController'))

module.exports = app;
const router = require('express').Router()
const { createNewOrder, getOrders } = require('../models/orderModel')
const { verifyToken } = require('../authentication/auth')


router.post('/addOrder', verifyToken, createNewOrder)

router.get('/myOrders', verifyToken, getOrders)

module.exports = router
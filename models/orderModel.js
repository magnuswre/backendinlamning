const mongoose = require('mongoose')
const Order = require('../schemas/orderSchema')

// CREATE

exports.createNewOrder = async (req, res) => {
    const { orderRows } = req.body

    if(!orderRows) {
        return res.status(400).json({
            message: "you need to enter all the fields"
        })
    }
    try {
        const data = await Order.create({
            orderRows,
            userId: req.userId
        })
      res.status(201).json({ userId: data.userId })
    } catch (err) {
        return res.status(500).json({
            message: "something wnt wrong whwn createing the order",
            err: err.message,
        })
    }
}


// GET ALL orders for logged in user

exports.getOrders = async (req, res) => {
    const orders = await Order.find({ userId: req.userId })
    res.status(200).json(orders)
}

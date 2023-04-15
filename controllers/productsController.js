const router = require('express').Router();
const productModel = require('../models/productModel')

// controllers

router.post('/', productModel.addProduct)
router.get('/', productModel.getProducts)
router.get('/:id', productModel.getOneProduct)
router.put('/:id', productModel.changeProduct)

router.delete('/:id', productModel.deleteProduct)

module.exports = router;
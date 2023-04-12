const router = require('express').Router();
const { addCustomer, login, deleteCustomer, updateCustomer } = require('../models/customerModel') // js 9 2:55 login
const { verifyToken } = require('../authentication/auth') // js 9 3:16:30

// controllers

router.post('/add', addCustomer)
router.post('/login', login) // js 9 2:55 login

router.delete('/:id', verifyToken, deleteCustomer) // JS 9 3:05

router.put('/:id', updateCustomer)

// router.get('/', productModel.getProducts)
// router.get('/:id', productModel.getOneProduct)
// router.put('/:id', productModel.changeProduct)

// router.delete('/:id', productModel.deleteProduct)

module.exports = router;
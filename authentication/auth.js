const jwt = require('jsonwebtoken') // JS 9 2:25 
require('dotenv').config()

const secretKey = process.env.SECRET_KEY

exports.generateToken = (customer) => {
    return jwt.sign({ _id: customer._id }, secretKey, { expiresIn: '1d'})  //JS 9 2:28
} 

exports.verifyToken = (req, res, next) => {
    try {
      const token = req.headers.authorization.split(' ')[1] // js 9 2:31
    //   req.userData = jwt.verify(token, secretKey)   // js 9 2:33 (saves the whole object)
    req.userId = jwt.verifyToken(token, secretKey)._id // js 9 2:35
    next() 
    } catch {
      return res.status(401).json({ // js 9 2:37
        message: 'Access denied' 
      })
    }
}
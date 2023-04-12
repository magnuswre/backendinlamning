const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    name:              { type: String, required: true },
    description:       { type: String, required: true },
    price:             { type: String, required: true },
    imageURL:          { type: String, required: true }
},{ timestamps: true})

module.exports = mongoose.model('Product', productSchema)


const mongoose = require('mongoose')
const { Schema } = mongoose


const customerSchema = new Schema({
    email:             { type: String, lowercase: true, required: true },  // lowercase true js 9 1:58
    passwordHash:      { type: String, required: true}
},{ timestamps: true})

module.exports = mongoose.model('Customer', customerSchema)
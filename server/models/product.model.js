const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
  name: String,
  inStock: Number
})

module.exports = mongoose.model('Product', productSchema)

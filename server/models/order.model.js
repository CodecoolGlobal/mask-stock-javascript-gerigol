const mongoose = require('mongoose');

const { Schema } = mongoose

const orderSchema = new Schema({
  orderAmount: Number,
  price: Number,
  partner: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Order', orderSchema)
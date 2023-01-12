const mongoose = require('mongoose');

const { Schema } = mongoose

const orderSchema = new Schema({
  item: String,
  orderAmount: Number,
  price: {
    price: Number,
    currency: String
  },
  partner: { type: Schema.Types.ObjectId, ref: 'User' }
})

module.exports = mongoose.model('Order', orderSchema)
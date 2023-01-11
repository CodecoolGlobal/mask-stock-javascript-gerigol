const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  vendor_id: String, // hospital id
  partner_id: Number, // user id ?
  block_id: Number,
  bank_account_id: Number,
  type: String,
  fulfillment_date: String,
  due_date: String,
  payment_method: String,
  language: String,
  currency: String,
  conversion_rate: Number,
  electronic: Boolean,
  paid: Boolean,
  items: [
    {
      product_id: Number,
      quantity: Number,
      comment: String
    },
    {
      name: String,
      unit_price: Number,
      unit_price_type: String,
      quantity: Number,
      unit: String,
      vat: String,
      comment: String,
      entitlement: String
    }
  ],
  comment: String,
  settings: {
    mediated_service: Boolean,
    without_financial_fulfillment: Boolean,
    online_payment: String,
    round: String,
    no_send_onlineszamla_by_user: Boolean,
    order_number: String,
    place_id: Number,
    instant_payment: Boolean,
    selected_type: String
  },
  advance_invoice: [
    Number
  ],
  discount: {
    type: String,
    value: Number
  },
  instant_payment: Boolean
})

module.exports = mongoose.model('Order', orderSchema)
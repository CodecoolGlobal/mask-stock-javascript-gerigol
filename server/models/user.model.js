const mongoose = require('mongoose');

const { Schema } = mongoose

const userSchema = new Schema({
  name: String,
  age: Number,
  hospital: { type: Schema.Types.ObjectId, ref: 'Hospital' }
});

module.exports = mongoose.model('User', userSchema);
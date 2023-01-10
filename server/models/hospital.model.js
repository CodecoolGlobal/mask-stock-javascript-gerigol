const mongoose = require('mongoose');

const { Schema } = mongoose;

const hospitalSchema = new Schema({
  name: String,
  location: {
    country: String,
    city: String
  }

});

module.exports = mongoose.model('Hospital', hospitalSchema);
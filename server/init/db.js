const mongoose = require('mongoose')
const hospitalModel = require("../models/hospital.model");
const hospitals = require('../hospitalsData.json');
const userModel = require("../models/user.model");
const products = require('../models/product.model')
//const orderModel = require("../models/order.model");

mongoose.connect('mongodb://127.0.0.1/mask-stock')
  .then(() => {
    console.log('db Connected');
    populateDB(hospitalModel, hospitals)
    populateProducts()
  })

async function populateDB(model, inputArray) {
  await model.deleteMany({});
  await model.create(...inputArray);
  const data = await model.find({});
  console.log(data)
  generateUsersToHospitals(data)
}

const generateUsersToHospitals = (hospitals) => {
  const users = hospitals.map((hospital, index) => {
    return {
      name: `User ${index + 1}`,
      age: Math.floor(Math.random() * 50) + 18,
      hospital: hospital._id
    }
  });
  userModel.insertMany(users);
}

async function populateProducts() {
  await products.deleteMany({})
  await products.create({
    name: `Mask`,
    inStock: 10000
  })
}



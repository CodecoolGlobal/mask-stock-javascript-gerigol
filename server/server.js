const mongoose = require("mongoose");
const hospitalModel = require("./models/hospital.model");
const hospitals = require('./hospitalsData.json');
const userModel = require("./models/user.model");
const express = require('express');
const orderModel = require("./models/order.model");

const app = express();

connectToDB('mongodb://localhost/mask-stock');
populateDB(hospitalModel, hospitals)

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello')
})

app.post('/api/order', async (req, res) => {
  const order = await orderModel.create(req.body);
  res.json(order)
})





async function populateDB(model, inputArray) {
  await model.deleteMany();
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

async function connectToDB(url) {
  try {
    const db = await mongoose.connect(url);
    console.log(`Connected to: ${db.connection.name}`);
  } catch (error) {
    console.log(error)
  }
};

const mongoose = require("mongoose");
const hospitalModel = require("./models/hospital.model");
const hospitals = require('./hospitalsData.json');
const userModel = require("./models/user.model");
const express = require('express');

const app = express();

connectToDB('mongodb://localhost/mask-stock');
populateDB(hospitalModel, hospitals)

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello')
})







async function populateDB(model, inputArray) {
  await model.deleteMany();
  await model.create(...inputArray);
  const data = await model.find({});
  console.log(data)
}

async function connectToDB(url) {
  try {
    const db = await mongoose.connect(url);
    console.log(`Connected to: ${db.connection.name}`);
  } catch (error) {
    console.log(error)
  }
};

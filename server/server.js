const mongoose = require("mongoose");
const hospitalModel = require("./models/hospital.model");
const hospitals = require('./hospitalsData.json');
const userModel = require("./models/user.model");
const express = require('express');
const orderModel = require("./models/order.model");
const products = require('./models/product.model')
const port = 8080
const app = express();

connectToDB('mongodb://127.0.0.1:27017/mask-stock');

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello')
})

app.post('/api/order', async (req, res) => {
  const order = await orderModel.create(req.body);
  await products.findOneAndUpdate({ name: 'Mask' }, { $inc: { inStock: -Number(req.body.orderAmount) } })
  res.json(order)
})

app.get('/api/products', async (req, res) => {
  const pr = await products.find({})
  res.json(pr)
})

async function connectToDB(url) {
  try {
    const db = await mongoose.connect(url);
    console.log(`Connected to: ${db.connection.name}`);
    app.listen(port, () => console.log(`Example app listening on port ${port}!`))
  } catch (error) {
    console.log(error)
  }
};

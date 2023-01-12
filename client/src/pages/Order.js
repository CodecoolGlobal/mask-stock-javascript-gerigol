import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Order = () => {
  const priceOfOneMask = 100;
  const [orderAmount, setOrderAmount] = useState(1);
  const [users, setUsers] = useState(null);
  const [selectedUserID, setSelectedUserID] = useState(
    users ? users[0]._id : ""
  );
  const [price, setPrice] = useState(priceOfOneMask);
  const navigate = useNavigate();
  const [products, setProducts] = useState(null);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch("api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleChange = (value) => {
    if (isNaN(value)) return; // Review question: How to handle delete input value won't give error
    if (value > products[0].inStock) return;
    setOrderAmount(value);
    setPrice(value * priceOfOneMask);
  };

  const showMessageTag = (boolean, message) => {
    setMessage(message)
    setShowMessage(boolean);
    setTimeout(() => setShowMessage(false), 1500);
  }

  const HandlePlaceOrder = async (e) => {
    e.preventDefault();
    if (orderAmount < 1 || orderAmount > products[0].inStock) return showMessageTag(true, 'Invalid Order!')
    const selectedUser = users.filter(user => user._id === selectedUserID)[0]
    await fetch('/api/order', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        item: "Mask",
        orderAmount: orderAmount,
        price: {
          price,
          currency: "HUF",
        },

        partner: selectedUser._id
      })
    })
    setOrderAmount(1)
    setPrice(priceOfOneMask)
    setShowMessage(true, 'Order sent! We  redirect you to the homepage')
    setTimeout(() => navigate("/"), 2000)
  }

  const fetchUsers = async () => {
    const res = await fetch("/api/users");
    const fetchedUsers = await res.json();
    setUsers(fetchedUsers);
    setSelectedUserID(fetchedUsers[0]._id);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ fontSize: "30px" }}>
      <div>
        <Link to={"/"}>
          <Button variant="contained">Back</Button>
        </Link>
      </div>
      <div
        style={{
          padding: "25px",

          display: "flex",
          alignItems: "baseline",
          justifyContent: "space-evenly",
        }}
      >
        <form>
          <label htmlFor="masks">Order amount: </label>
          <input
            type="number"
            name="masks"
            onChange={(e) => handleChange(Number(e.target.value))}
            value={parseInt(orderAmount).toString()}
            min={1}
            max={products ? products[0].inStock : 100}
            style={{ fontSize: "25px" }}
          />
        </form>
        <p>Price per piece: {priceOfOneMask} HUF</p>
        <h3>Total: {price} HUF</h3>
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <label htmlFor="select"> Select a User: </label>
        <select
          value={selectedUserID}
          onChange={(e) => setSelectedUserID(e.target.value)}
          style={{ fontSize: "25px" }}
        >
          {users &&
            users.map((user) => (
              <option value={user._id} key={user._id}>
                {user.name}
              </option>
            ))}
        </select>
        <Button style={{ marginTop: "45px" }} variant="contained" onClick={(e) => HandlePlaceOrder(e)}>Place order</Button>
      </div>
      {showMessage && <p>{message}</p>}
    </div>
  );
};

export default Order;

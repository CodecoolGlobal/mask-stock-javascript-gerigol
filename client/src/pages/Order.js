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

  const HandlePlaceOrder = async (e) => {
    e.preventDefault();
    if (orderAmount < 1) return;
    if (orderAmount > products[0].inStock) return;
    const selectedUser = users.filter((user) => user._id === selectedUserID)[0];
    await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        item: "Mask",
        orderAmount: orderAmount,
        price: {
          price,
          currency: "HUF",
        },
        partner: selectedUser._id,
      }),
    });
    setOrderAmount(1);
    setPrice(priceOfOneMask);
    navigate("/");
  };

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
    <div>
      <Link to={'/'}><button>Back</button></Link>
      <form>
        <label htmlFor="masks">Order amount: </label>
        <input
          type="number"
          name="masks"
          onChange={(e) => handleChange(Number(e.target.value))}
          value={parseInt(orderAmount).toString()}
          min={1}
          max={products ? products[0].inStock : 100}
        />
        <button onClick={(e) => HandlePlaceOrder(e)}>Place order</button>
      </form>
      <p>Price per piece: {priceOfOneMask} HUF</p>
      <h3>Total: {price} HUF</h3>
      <label htmlFor="select"> Select a User: </label>
      <select
        value={selectedUserID}
        onChange={(e) => setSelectedUserID(e.target.value)}
      >
        {users &&
          users.map((user) => (
            <option value={user._id} key={user._id}>
              {user.name}
            </option>
          ))}
      </select>
    </div>
  );
};

export default Order;

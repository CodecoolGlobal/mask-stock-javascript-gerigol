import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Order = () => {

  const [orderAmount, setOrderAmount] = useState(1);
  const [users, setUsers] = useState(null);
  const [selectedUserID, setSelectedUserID] = useState('Select a user: ');
  const navigate = useNavigate();
  const handleChange = (value) => {
    setOrderAmount(value)
  }

  const HandlePlaceOrder = async (e) => {
    e.preventDefault();
    const selectedUser = users.filter(user => user._id === selectedUserID)[0]
    await fetch('/api/order', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        orderAmount: orderAmount,
        price: 100,
        partner: selectedUser._id
      })
    })
    setOrderAmount(1)
    navigate("/")
  }

  const fetchUsers = async () => {

    const res = await fetch('/api/users');
    const fetchedUsers = await res.json();
    setUsers(fetchedUsers)
  }

  useEffect(() => {
    fetchUsers()
  }, [])



  return (
    <div>

      <form >
        <label htmlFor="masks">Order amount: </label>
        <input type="number" name="masks" onChange={(e) => handleChange(e.target.value)} value={parseInt(orderAmount)}
          min={1} max={10} />
        <button
          onClick={(e) => HandlePlaceOrder(e)}
        >Place order</button>
      </form>
      <label htmlFor="select"> Select a User: </label>
      <select value={selectedUserID} onChange={(e) => setSelectedUserID(e.target.value)}>
        {users && users.map(user => <option value={user._id} key={user._id}>{user.name}</option>)}
      </select>
    </div>
  )
}

export default Order
import React, { useEffect, useState } from 'react'


const Order = () => {
  const [orderNumber, setOrderNumber] = useState(1);
  const [users, setUsers] = useState(null);
  const handleChange = (value) => {
    setOrderNumber(value)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  async function fetchUsers() {
    const res = await fetch('/api/users');
    const fetchedUsers = await res.json();
    setUsers(fetchedUsers)
  }

  return (
    <div>

      <form >
        <label htmlFor="masks">Mask order number: </label>
        <input type="number" name="masks" onChange={(e) => handleChange(e.target.value)} value={parseInt(orderNumber)}
          min={1} max={10} />
        <button >Place order</button>
      </form>
      <label htmlFor="select"> Select a User: </label>
      <select>
        {users && users.map(user => <option value={user._id} key={user._id}>{user.name}</option>)}
      </select>
    </div>
  )
}

export default Order
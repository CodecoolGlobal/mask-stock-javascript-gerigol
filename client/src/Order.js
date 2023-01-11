import React, { useState } from 'react'


const Order = () => {
  const [orderNumber, setOrderNumber] = useState(1);
  const handleChange = (value) => {
    value > 0 && setOrderNumber(value)
  }

  return (
    <div>
      <form >
        <label htmlFor="masks">Mask order number: </label>
        <input type="number" name="masks" onChange={(e) => handleChange(e.target.value)} value={orderNumber} />
        <button >Place order</button>
        <p>{orderNumber}</p>
      </form>
    </div>
  )
}

export default Order
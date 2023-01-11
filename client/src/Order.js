import React, { useState } from 'react'


const Order = () => {

  return (
    <div>
      <form >
        <label htmlFor="masks">Mask order number: </label>
        <input type="number" name="masks" />
        <button >Place order</button>
      </form>
    </div>
  )
}

export default Order
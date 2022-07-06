import React from 'react'
import { useStateValue } from './StateProvider'
import './Subtotal.css'
function Subtotal() {
  const [{cart},dispatch]=useStateValue();

  const calculateCartCost=()=>{
    let cost=0;
    for(let i=0;i<cart.length;i++){
      cost+=cart[i].price;
    }
    return cost;
  }

  return (
    <div className='subtotal'>
      <p>Subtotal ({cart.length} items) : <strong>₹ {calculateCartCost()}</strong> </p>
      <button>Proceed to Checkout</button>

    </div>
  )
}

export default Subtotal
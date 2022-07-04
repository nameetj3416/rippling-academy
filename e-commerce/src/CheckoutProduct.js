import React, { useState } from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,title,image,rating,description,price}) {
    const [{cart},dispatch]=useStateValue();
    const addToCart=()=>{
        dispatch({
            type:'ADD_TO_CART',
            item:{
                id:id,
                title:title,
                image:image,
                rating:rating,
                price:price,
                description:description
            }
        })
    }
    const removeFromCart=()=>{
        dispatch({
            type:'REMOVE_FROM_CART',
            id:id
        });
    };


  return (
    <div className='checkoutProduct'>
        <img src={image} className='checkoutProduct_image'/>
        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>
            <p className='checkoutProduct__description'>{description}</p>
            <p className='checkoutProduct__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='checkoutProduct__rating'>
                <p>{rating} ⭐ </p>
            </div>
            <div className='checkoutProduct__counter'>
                <button onClick={addToCart} className='checkoutProduct__increment'>+</button>
                <p className='checkoutProduct__increment'>{cart.length}</p>
                <button onClick={removeFromCart} className='checkoutProduct__decrement'>-</button>
            </div>

        </div>
    </div>
  )
}

export default CheckoutProduct
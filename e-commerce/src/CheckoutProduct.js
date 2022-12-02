import React, { useState } from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,title,image,rating,description,price}) {
    const [{cart},dispatch]=useStateValue();
    const productFrequency=(product_id)=>{
        let count=0;
        for(let i=0;i<cart.length;i++){
            if(cart[i].id===product_id){
                count++;
            }
        }
        return count;
    }
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
        <img src={image} className='checkoutProduct__image'/>
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
                <p className='checkoutProduct__count'>{productFrequency(id)}</p>
                <button onClick={removeFromCart} className='checkoutProduct__decrement'>-</button>
            </div>

        </div>
    </div>
  )
}

export default CheckoutProduct
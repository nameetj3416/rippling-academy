import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id,title,image,price,description}) {
    const [{cart},dispatch]=useStateValue();
    const addToCart=()=>{
        dispatch({
            type:'ADD_TO_CART',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                description:description,
                rating:Math.floor(Math.random() * 5 + 1)
            }
        })
    }
  return (
    <div className='product'>
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                <p>{Math.floor(Math.random() * 5 + 1)} ⭐ </p>
            </div>
        </div>
        <img src={image} alt=""></img>
        <button onClick={addToCart}>Add to Cart</button>
    </div>
  )
}

export default Product
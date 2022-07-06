import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
function Checkout() {
    const [{cart},dispatch]=useStateValue();
    let uniqueIDs=new Set();
    let uniqueCart=[];
    for(let i=0;i<cart.length;i++){
        if(!uniqueIDs.has(cart[i].id)){
            uniqueCart.push(cart[i]);
            uniqueIDs.add(cart[i].id);
        }
    }
    console.log(cart.length,uniqueCart.length);
    return (
        <div className='checkout'>
            {cart.length===0 ? (
                <div className='checkout__optionOne'>
                    <img src='https://polytronofficial.com/assets/images/empty-cart.png' alt="empty_bag"></img>
                    <p className='checkout__lineOne'>Hey, it feels so light!</p>
                    <p className='checkout__lineTwo'>There's nothing in your bag. Let's add some items.</p>
                </div>
            ):(
                <div className='checkout__optionTwo'>
                    
                    <div className='checkout__left'>
                        <h2 className='checkout__title'>Your Shopping Cart</h2>
                        <hr/>
                        <div className='checkout__products'></div>
                        {uniqueCart.map(item=>(
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                rating={item.rating}
                                description={item.description}
                                price={item.price}
                            />
                        ))}  
                    </div>
                    <div className='checkout__right'>
                        <Subtotal/>   
                    </div>
                </div>
            )}
        </div>
    )
}

export default Checkout
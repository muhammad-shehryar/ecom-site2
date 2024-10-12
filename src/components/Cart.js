import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { increaseQuantity,decreaseQuantity,removeFromCart } from '../features/cart/cartSlice'

const Cart = () => {



    const cartItems = useSelector((state)=>state.cart.items)
    const dispatch = useDispatch()

    const handleIncrease = (id)=>{
        dispatch(increaseQuantity(id))
    }

    const handleDecrease =(id)=>{
        dispatch(decreaseQuantity(id))
    }
    const handleRemove=(id)=>{
        dispatch(removeFromCart(id))
    }

  return (
    <div>
        <h2>You Cart</h2>
        {cartItems.length === 0? (
            <p>Your Cart is empty</p>
        ):(
            cartItems.map(item=>(
                <div>
                        <img src={item.image}/>
                        <h3>{item.price}</h3>
                        <p>quantity:{item.quantity}</p>
                        <button onClick={handleIncrease(item.id)}>+</button>
                        <button onClick={handleDecrease(item.id)}>-</button>
                        <button onClick={handleRemove(item.id)}>Remove</button>

                </div>
                
            ))
        )}
    </div>
  )
}

export default Cart
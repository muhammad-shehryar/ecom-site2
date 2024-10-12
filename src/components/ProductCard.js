import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'



const ProductCard = ({product}) => {
    const dispatch= useDispatch()

    const handleAddToCart=()=>{
        dispatch(addToCart(product))
    }
    return (
    <div>
        <img src={product.image}/>
        <h3>{product.title}</h3>
        <p>product.price</p>
        <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  )
}

export default ProductCard
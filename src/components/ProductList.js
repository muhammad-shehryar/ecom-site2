import React,{useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { getProducts } from '../features/products/productSlice'
import ProductCard from './ProductCard'

const ProductList = () => {

    const dispatch = useDispatch()
    const products = useSelector((state)=>state.products.items)
    const status = useSelector((state)=>state.products.status)
    const [searchTerm,setSearchTerm]=useState("");

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    const filterProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    if(status === "loading") return <p>Loading</p>
    if(status === "failed") return <p>Failed to fetch products</p>
    
  return (
    <div>
        <input
        type='text'
        placeholder='Search Products'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
        {filterProducts.map((product)=>{
            <ProductCard key={product.id} product={product}/>
        })}
    </div>
  )
}

export default ProductList
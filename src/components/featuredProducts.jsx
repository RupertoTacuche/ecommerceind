import React from 'react'
import { PRODUCTS } from './products'

const featuredProducts = () => {
  return <>
<div className="card">
  {PRODUCTS.map(product =>(
    <img src ={product.image} alt=""/>
  ))}

</div>
  </>;
}

export default featuredProducts
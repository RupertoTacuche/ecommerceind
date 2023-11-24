import React from 'react'
import { PRODUCTS } from './products'

const featuredProducts = () => {
  return <>
<div className="row">
  {PRODUCTS.slice(2,6).map(product =>(
    <div className="col-4">
      <div key={product.id}>
        <div className="card">
          <img src={product.image} alt="" className='card-img-top img-fluid'/>
          <div className="card-details">
            <span>{product.brand}</span>
            <h2>{product.name}</h2>
            <div className="card-footer">
              <p>{product.status}</p>
              <p>{product.rate}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  ))}
  
</div>
  </>;
}

export default featuredProducts
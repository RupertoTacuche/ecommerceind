import React from 'react'
import { PRODUCTS } from './products'

const featuredProducts = () => {
  return <>
<div className="row mt-4">
  {PRODUCTS.slice(2,6).map(product =>(
    <div className="col-3">
      <div key={product.id}>
        <div className="card h-100 m-auto p-3">
          <img src={product.image} alt="" className='card-img-top img-fluid m-auto p-5'/>
          <div className="card-details">
            <div className="tittle">
                <span>{product.brand}</span>
                <h4>{product.name}</h4>
            </div>
            <div className="card-footer text-center">
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
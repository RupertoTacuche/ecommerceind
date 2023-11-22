import React from 'react'
import { Link} from 'react-router-dom'

const home = () => {
  return <>
    <section className='banner'>
      <div className="container-xxl ">
        <div className="row">
          <div className="banner-details p-5 d-flex flex-column align-items-start justify-content-center">
            <span className='shadow-lg p-3 text-white'>Trade in offer!</span>
            <h1>Super Value Deals</h1>
            <h2>On all products</h2>
            <p>Save more with TiendaIndux</p>
            <Link className='button-link mb-3'>Shop now</Link>
          </div>
        </div>
      </div>
    </section>
    </>;
  
}

export default home
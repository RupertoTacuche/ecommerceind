import React from 'react'
import { Link} from 'react-router-dom'
import Hero from '../components/hero'
import FeaturedProducts from '../components/featuredProducts'

const home = () => {
  return <>
    <section className='banner'>
      <div className="container-xxl ">
        <div className="row">
          <div className="banner-details p-8 d-flex flex-column align-items-start justify-content-center">
            <span className='shadow-lg p-3 text-white'>Trade in offer!</span>
            <h1>Super Value Deals</h1>
            <h2>On all products</h2>
            <p className='p-1 m-0'>Save more with TiendaIndux</p>
            <Link className='button-link mb-3'>Shop now</Link>
          </div>
        </div>
      </div>
    </section>

    <Hero />

    <section className="featured-products p-5">
      <div className="container-xxl">
        <div className="row">
          <div className="text-center">
            <h1>Our Featured Products</h1>
            <p>All Weather Modern Designs</p>
          </div>
          <FeaturedProducts />
        </div>
      </div>
    </section>

    <Hero />
    </>;
  
}

export default home

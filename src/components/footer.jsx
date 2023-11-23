import React from 'react'
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { Link} from 'react-router-dom'
import google from '../assets/images/pay/play.jpg'
import app from '../assets/images/pay/app.jpg'
import pay from '../assets/images/pay/pay.png'

const footer = () => {
  return <>
  <footer className='footer p-5'>
    <div className="container-xxl">
      <div className="row" >
        <div className="col-4 d-flex flex-column ">
          <h3 className='mb-5'>Contact us</h3>
          <div className="footer-details">
            <p className='mb-3'><b>Address:</b> Xoconautla 300, col del Valle</p>
            <p className='mb-3'><b>Phone: </b><a href="tel:+2457865438" >Call us +2457865438</a></p>
            <p className='mb-3'><b>Hours open: </b>From 8 a.m To 6 p.m</p>
            <p className='mb-5'><b>Follow the developer: </b>Mr Victor Murcio</p>
            <p className='mb-3'><b>Follow us</b></p>
            <div className="col-4 social-icons mb-3 d-flex justify-content-around">
              <Link><AiFillTwitterCircle className='fs-4' /> </Link>
              <Link><BsFacebook className='fs-4' /> </Link>
              <Link><BsInstagram className='fs-4' /> </Link>
              <Link><BsLinkedin className='fs-4' /> </Link>
            </div>
          </div>

        </div>
          <div className="col-2">
            <h3 className="mb-4">About</h3>
            <div className="footer-details d-flex flex-column">
              <Link className="mb-3">
                About Us
              </Link>
              <Link className="mb-3">
                Delivery
              </Link>
              <Link className="mb-3">
                Privacy Policy
              </Link>
              <Link className="mb-3">
                Tax Policy
              </Link>
              <Link className="mb-3">
                Fee Policy
              </Link>
              <Link className="mb-3">
                Terms & Conditions
              </Link>
            </div>
          </div>
          <div className="col-2">
            <h3 className="mb-4">Account</h3>
            <div className="footer-details d-flex flex-column">
              <Link className="mb-3">
                Profile
              </Link>
              <Link className="mb-3">
                View Cart
              </Link>
              <Link className="mb-3">
                Help
              </Link>
              <Link className="mb-3">
                Payments
              </Link>
              <Link className="mb-3">
                My Wishlist
              </Link>
              <Link className="mb-3">
                Coupons
              </Link>
            </div>
          </div>
          <div className="col-4">
            <h3 className="mb-3">Install App</h3>
            <div className="footer-details">
              <p>Available on Google Play Services & App Store</p>
              <div className='pay'>
              <Link>
              <img src={google} alt="" className='img-fluid p-4 my-3'/>
              </Link>
              <Link>
              <img src={app} alt="" className='img-fluid p-4 my-3'/>
              </Link>
              </div>
              <p className='mb-3' >Payment Methods </p>
              <Link className='pay' >
              <img src={pay} alt="" className='img-fluid p-3 '/>
              </Link>
            </div>
          </div>
      </div>
      <hr />
      <div className="row d-flex justify-content-between">
        <div className="col-3">
          <p>&copy; Develop by Murcio's Labs 2023</p>
        </div>
        <div className="col-3 d-flex justify-content-around">
          <Link className='text-black'>Privacy Policy</Link>
          <Link className='text-black'>Terms of Use</Link>
          <Link className='text-black'>Contact Me</Link>
        </div>
      </div>
    </div>
  </footer> 
  </>;
}

export default footer

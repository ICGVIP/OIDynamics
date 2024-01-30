
import React from 'react'
import { Link } from 'react-router-dom'
import classes from '../styles/Navbar.module.css'
function Footer() {
  return (
    <div className='container-fluid mt-5 py-5' style={{backgroundColor:'rgb(12,20,45)'}}> 
        <div className='row d-flex flex-column align-items-center'>
            <div className='col-12 d-flex justify-content-center' style={{color:'rgb(44,119,246)', fontWeight:'bold', fontSize:'1.5em'}}>
                OI Dynamics
            </div>
            <div className='col-12 px-3 col-md-6 col-xxl-4 align-self-center d-flex justify-content-between my-5'  style={{color:'white', fontWeight:'bold', fontSize:'1em'}}>
              <span style={{cursor:'pointer'}}>Works</span>
              <span style={{cursor:'pointer'}}>Services</span>
              <Link to='/support' style={{textDecoration:'none', color:'white'}}>
                Contact Us
              </Link>
            </div>
            
            <div className='col-12 px-3 col-md-6 col-xxl-4 align-self-center d-flex justify-content-between my-2'  style={{color:'white', fontWeight:'bold', fontSize:'1em'}}>
              <a className={`d-flex justify-content-center align-items-center ${classes.footer}`} href='https://www.instagram.com/oi_dynamics/' target='_blank'>
                <i className="fa-brands fa-instagram text-white"></i>
              </a>
              <a className={`d-flex justify-content-center align-items-center ${classes.footer}`} href='https://www.facebook.com/profile.php?id=61556284371313' target='_blank'>
                <i className="fa-brands fa-facebook-f text-white"></i>
              </a>
              <a className={`d-flex justify-content-center align-items-center ${classes.footer}`} href='https://www.linkedin.com/company/oi-dynamics' target='_blank'>
                <i className="fa-brands fa-linkedin-in  text-white"></i>
              </a>
              <a className={`d-flex justify-content-center align-items-center ${classes.footer}`} href='https://twitter.com/OiDynamics_' target='_blank'>
                <i class="fa-brands fa-x-twitter text-white"></i>
              </a>
              <a className={`d-flex justify-content-center align-items-center ${classes.footer}`} href='https://www.youtube.com/@OIDynamics' target='_blank'>
                <i className="fa-brands fa-youtube text-white"></i>
              </a>
            </div>

            <div className='col-12 px-3 col-md-5 col-xxl-4 align-self-center d-flex justify-content-between mt-5 mb-3'>
              <a style={{color:'rgb(93, 99, 115)', fontSize:'1em', textDecoration:'none'}} href='' target='_blank'>Terms &amp; Conditions</a>
              <a style={{color:'rgb(93, 99, 115)', fontSize:'1em', textDecoration:'none'}} href='' target='_blank'>Privacy Policy</a>
            </div>

        </div>
    </div>
  )
}

export default Footer